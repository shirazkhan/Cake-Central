import client from "../../apollo-client"; // Adjust this path if needed
import { gql } from "@apollo/client";
import { XMLBuilder } from "fast-xml-parser";

// Function to clean text (removes emojis & fixes XML special characters)
function cleanText(str) {
  if (!str) return "";
  return str
    .replace(/[^\x00-\x7F]/g, "") // Removes emojis & non-ASCII characters
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function cleanId(shopifyId) {
    if (!shopifyId) return "";
    const match = shopifyId.match(/(\d+)$/); // Extracts the numeric part at the end
    return match ? match[1] : ""; // Returns only the variant ID
  }

export default async function handler(req, res) {
  try {
    let allEntries = [];
    let hasNextPage = true;
    let endCursor = null;

    while (hasNextPage) {
      // Fetch products with pagination
      const { data } = await client.query({
        query: gql`
          query {
            products(first: 250, after: ${endCursor ? `"${endCursor}"` : null}) {
              edges {
                node {
                  id
                  title
                  handle
                  variants(first: 250) {
                    edges {
                      node {
                        id
                        priceV2 {
                          amount
                          currencyCode
                        }
                        availableForSale
                      }
                    }
                  }
                }
              }
              pageInfo {
                hasNextPage
                endCursor
              }
            }
          }
        `,
      });

      // Build local inventory entries for each variant
      const entries = data.products.edges.flatMap(({ node: product }) =>
        product.variants.edges.map(({ node: variant }) => ({
            "g:id": cleanId(cleanText(variant.id)),
            "g:store_code": "home-based",
            "g:quantity": "1",
            "g:availability": variant.availableForSale ? "in_stock" : "out_of_stock",
            "g:price": `${variant.priceV2.amount} ${variant.priceV2.currencyCode}`,
            "g:sale_price": `${variant.priceV2.amount} ${variant.priceV2.currencyCode}`,
            "g:pickup_method": "buy",  // ✅ FIXED: "pickup_in_store" → "store_pickup"
            "g:pickup_sla": "next_day",  // ✅ FIXED: "P2D" → "2_day"
            "g:store_code": "15209260741894551027"
        }))
        );

      allEntries.push(...entries);
      hasNextPage = data.products.pageInfo.hasNextPage;
      endCursor = data.products.pageInfo.endCursor;
    }

    // Build the XML structure for the local inventory feed
    const xmlData = {
      "?xml": {
        "@_version": "1.0",
        "@_encoding": "UTF-8"
      },
      feed: {
        "@_xmlns": "http://www.w3.org/2005/Atom",
        "@_xmlns:g": "http://base.google.com/ns/1.0",
        entry: allEntries
      }
    };

    const builder = new XMLBuilder({ format: true, ignoreAttributes: false });
    const xmlFeed = builder.build(xmlData);

    // Return the XML feed
    res.setHeader("Content-Type", "application/xml; charset=utf-8");
    res.status(200).send(xmlFeed);
  } catch (error) {
    console.error("Error generating local inventory feed:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

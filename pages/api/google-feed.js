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
    let allProducts = [];
    let hasNextPage = true;
    let endCursor = null;

    while (hasNextPage) {
      // Fetch products with the proper pagination cursor
      const { data } = await client.query({
        query: gql`
          query {
            products(first: 250, after: ${endCursor ? `"${endCursor}"` : null}) {
              edges {
                node {
                  id
                  title
                  description
                  handle
                  metafields(identifiers: {key: "primary_collection", namespace: "custom"}) {
                    reference {
                      ... on Collection {
                        handle
                      }
                    }
                  }
                  variants(first: 250) {
                    edges {
                      node {
                        id
                        title
                        priceV2 {
                          amount
                          currencyCode
                        }
                        availableForSale
                        selectedOptions {
                          name
                          value
                        }
                        image {
                          url
                        }
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

      // Append the products from this page to the full list
      allProducts = [
        ...allProducts,
        ...data.products.edges.flatMap(({ node }) =>
          node.variants.edges.map(({ node: variant }) => ({
            "g:id": cleanId(cleanText(variant.id)),
            "g:title": cleanText(`${node.title} - ${variant.selectedOptions.map(opt => opt.value).join(", ")}`),
            "g:description": cleanText(node.description),
            "g:link": `https://www.cakecentral.co.uk/shop/${node.metafields[0]?.reference?.handle}/${node.handle}`,
            "g:image_link": variant.image?.url || "",
            "g:price": variant.availableForSale ? `${(variant.priceV2.amount * 1.2).toFixed(2)} ${variant.priceV2.currencyCode}` : "",
            "g:sale_price": `${variant.priceV2.amount} ${variant.priceV2.currencyCode}`,
            "g:availability": variant.availableForSale ? "in_stock" : "out_of_stock",
            "g:condition": "new",
            "g:google_product_category": "181",
            "g:product_type": "Cakes & Pastries > Custom Cakes",
            "g:brand": "Cake Central",
            "g:identifier_exists": "false",
            "g:mpn": cleanText(`CAKE-${node.title.replace(/ /g, "-").toUpperCase()}-${variant.title.replace(/ /g, "-").toUpperCase()}`),
            "g:material": cleanText("Buttercream, Flour, Chocolate, Sugar, Eggs"),
            "g:shipping": {
              "g:country": "GB",
              "g:service": "Standard",
              "g:price": "0.00 GBP",
            }
          }))
        ),
      ];

      // Check if there is another page
      hasNextPage = data.products.pageInfo.hasNextPage;
      endCursor = data.products.pageInfo.endCursor; // Set the cursor for the next page
    }

    // Correct XML structure for Google Merchant Center
    const xmlData = {
      "?xml": {
        "@_version": "1.0",
        "@_encoding": "UTF-8",
      },
      rss: {
        "@_version": "2.0",
        "@_xmlns:g": "http://base.google.com/ns/1.0",
        channel: {
          title: "Cake Central",
          link: "https://www.cakecentral.co.uk",
          description: "Delicious cakes and treats",
          item: allProducts,
        },
      },
    };

    // Convert JSON to XML format
    const builder = new XMLBuilder({ format: true, ignoreAttributes: false });
    const xmlFeed = builder.build(xmlData);

    // Return XML response
    res.setHeader("Content-Type", "application/xml; charset=utf-8");
    res.status(200).send(xmlFeed);
  } catch (error) {
    console.error("Error generating XML feed:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

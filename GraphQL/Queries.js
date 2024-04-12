import { gql } from '@apollo/client';

export const GET_SHOP_TITLE = {
  query: gql`
    query {
      shop {
        name
      }
    }
  `
};

export const GET_PRODUCT_BY_HANDLE = handle => {
  return {
    query: gql`
      query {
        productByHandle(handle: "${handle}") {
          id
          title
          descriptionHtml
          description
          productType
          images(first: 10) {
            edges {
              node {
                id
                src
                altText
              }
            }
          }
          priceRange {
            minVariantPrice {
              amount
            }
          }
          variants(first: 20) {
            edges {
              node {
                id
                title
                image {
                  src
                  id
                }
                sku
              }
            }
          }
        }
      }
    `
  }
};

export const GET_RECOMMENDED_PRODUCTS_BY_ID = handle => (
  {
    query: gql`
    {
      productRecommendations(
        productId: "${handle}"
      ) {
        id
        priceRange {
          minVariantPrice {
            amount
          }
        }
        title
        handle
        productType
        images(first: 1) {
          edges {
            node {
              id
              src
              altText
            }
          }
        }
      }
    }
    `
  }
)

export const GET_SLUGS_BY_COLLECTION_HANDLE = handle => (
  {
    query: gql`
      {
        collectionByHandle(handle: ${handle}) {
          products(first: 10) {
            edges {
              node {
                title
                productType
                handle
              }
            }
          }
        }
      }
    `
  }
)

export const GET_PRODUCTS_BY_COLLECTION_HANDLE = handle =>  {
  return { query: gql`
  query {
    collectionByHandle(handle: "${handle}") {
      title
      products(first: 10) {
        nodes {
          title
          id
          images(first: 10) {
            nodes {
              id
              src
            }
          }
          handle
          productType
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
        }
      }
    }
  }
  ` }
};

export const GET_CART = id =>  {
  return { query: gql`
  query {
    cart(id: "${id}") {
      lines(first: 100) {
        edges {
          node {
            id
            quantity
            merchandise {
              ... on ProductVariant {
                id
                sku
                price
                title
                image {
                  id
                  src
                }
                product {
                  id
                  handle
                  title
                  priceRange {
                    minVariantPrice {
                      amount
                    }
                  }
                  productType
                }
              }
            }
          }
        }
      }
      estimatedCost {
        subtotalAmount {
          amount
        }
        totalAmount {
          amount
        }
      }
      id
    }
  }
 `}
};
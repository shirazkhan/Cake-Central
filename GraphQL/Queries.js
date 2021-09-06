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
        }
      }
    `
  }
};

export const GET_SLUGS_BY_COLLECTION_HANDLE = handle => (
  {
    query: gql`
      {
        collectionByHandle(handle: "latest-stuff") {
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
    shop {
      collectionByHandle(handle: "${handle}") {
        title
        products(first: 10) {
          edges {
            node {
              id
              title
              handle
              productType
              priceRange {
                minVariantPrice {
                  amount
                }
              }
              images(first: 1) {
                edges {
                  node {
                    id
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  ` }
};
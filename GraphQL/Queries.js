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

export const GET_PRODUCTS = {
  query: gql`
    query {
      shop {
        products(first: 10) {
          edges {
            node {
              id
              title
              images(first: 10) {
                edges {
                  node {
                    src
                    height
                    width
                  }
                }
              }
            }
          }
        }
      }
    }    
  `
};

export const GET_LATEST_PRODUCTS = {
  query: gql`
  query {
    shop {
      collectionByHandle(handle: "latest-stuff") {
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
              images(first: 10) {
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
  `
};
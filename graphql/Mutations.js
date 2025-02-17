import { gql } from '@apollo/client';

export const CREATE_CART = (id, customMessage, date) => ({
  mutation: gql`
  mutation {
    cartCreate(
      input: {
        lines: {
          merchandiseId: "${id}"
          ${customMessage || date ? `attributes: [
            ${customMessage ? `{ key: "Details", value: "${customMessage}" },` : ""}
            ${date ? `{ key: "Date", value: "${date}" }` : ""}
          ]` : ''}
        }
      }
    ) {
      cart {
        id
        lines(first: 100) {
          edges {
            node {
              id
              quantity
              attributes {
                key
                value
              }
              estimatedCost {
                totalAmount {
                  amount
                }
              }
              merchandise {
                ... on ProductVariant {
                  id
                  sku
                  title
                  product {
                    id
                    title
                    handle
                    productType
                    metafield(key: "primary_collection", namespace: "custom") {
                      value
                    }
                  }
                  image {
                    src
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
      }
    }
  }
  `
});

export const CART_LINES_ADD = (cartId, variantId, customMessage, date) => ({
  mutation: gql`
  mutation {
    cartLinesAdd(
      cartId: "${cartId}"
      lines: {
        merchandiseId: "${variantId}"
        ${customMessage || date ? `attributes: [
          ${customMessage ? `{ key: "Details", value: "${customMessage}" },` : ""}
          ${date ? `{ key: "Delivery / Collection Date", value: "${date}" }` : ""}
        ]` : ''}
      }
    ) {
      cart {
        id
        lines(first: 100) {
          edges {
            node {
              id
              quantity
              attributes {
                key
                value
              }
              estimatedCost {
                totalAmount {
                  amount
                }
              }
              merchandise {
                ... on ProductVariant {
                  id
                  sku
                  title
                  product {
                    id
                    title
                    handle
                    productType
                    metafield(key: "primary_collection", namespace: "custom") {
                      value
                    }
                  }
                  image {
                    src
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
      }
    }
  }
  `
});



export const CART_LINES_UPDATE = (cartId, lineId, quantity) => ({
  mutation: gql`
  mutation {
    cartLinesUpdate(
      cartId: "${cartId}"
      lines: {id: "${lineId}", quantity: ${quantity}}
    ) {
      cart {
        id
        lines(first: 10) {
          edges {
            node {
              id
              quantity
              estimatedCost {
                totalAmount {
                  amount
                }
              }
              merchandise {
                ... on ProductVariant {
                  id
                  sku
                  title
                  product {
                    id
                    title
                    handle
                    productType
                  }
                  image {
                    src
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
      }
    }
  }
  `
})

export const CART_LINES_REMOVE = (cartId, lineId) => ({
  mutation: gql`
  mutation {
    cartLinesRemove(
      cartId: "${cartId}"
      lineIds: "${lineId}"
    ) {
      cart {
        id
        lines(first: 10) {
          edges {
            node {
              id
              quantity
              estimatedCost {
                totalAmount {
                  amount
                }
              }
              merchandise {
                ... on ProductVariant {
                  id
                  sku
                  title
                  product {
                    id
                    title
                    handle
                    productType
                  }
                  image {
                    src
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
      }
    }
  }
  `
})
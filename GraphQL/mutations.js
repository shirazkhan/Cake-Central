import { gql } from '@apollo/client';

export const CREATE_CART = id => ({
  mutation: gql`
  mutation {
    cartCreate(
      input: {lines: {merchandiseId: "${id}"}}
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

export const CART_LINES_ADD = (cartId, variantId) => ({
  mutation: gql`
  mutation {
    cartLinesAdd(
      cartId: "${cartId}"
      lines: {merchandiseId: "${variantId}"}
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
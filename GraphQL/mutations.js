import { gql } from '@apollo/client';

// export const CREATE_CART = id => ({
//   mutation: gql`
//     {
//         cartCreate(input: {lines: {merchandiseId: ""}}) {
//           cart {
//             id
//           }
//         }
//       }
//   `
// });

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
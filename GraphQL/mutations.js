import { gql } from '@apollo/client';

// export const CREATE_CART = id => ({
//   query: gql`
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
  query: gql`
    mutation {
      cartCreate(input: {lines: {merchandiseId: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDU3MjE3NDQ2NzI2OA=="}}) {
        cart {
          id
        }
      }
    }
  `
})

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
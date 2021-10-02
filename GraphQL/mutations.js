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
      cartCreate(input: {lines: {merchandiseId: "${id}"}}) {
        cart {
          id
        }
      }
    }
  `
})
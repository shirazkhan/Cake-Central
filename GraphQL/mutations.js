import { gql } from '@apollo/client';

export const CREATE_CART = {
  mutation: gql`
    mutation {
        cartCreate(input: {lines: {merchandiseId: ""}}) {
          cart {
            id
          }
        }
      }
  `
};
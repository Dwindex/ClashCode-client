import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation CreateUser($input: RegisterUserInput!) {
    createUser(input: $input) {
      id
      token
      user {
        id
        username
        email
        firstname
        lastname
        kyc
        image
        rating
        address
        summary
        dob
        gender
        isactive
      }
    }
  }
`;

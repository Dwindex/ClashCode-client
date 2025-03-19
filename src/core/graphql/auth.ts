import { gql } from "@apollo/client";

export const LOGIN_QUERY = gql`
  query LoginUser($input: LoginUserInput!) {
    loginUser(input: $input) {
      token
      user {
        userID
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

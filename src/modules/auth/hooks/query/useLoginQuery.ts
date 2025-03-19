import { useLazyQuery, gql } from "@apollo/client";
import { LoginUserInput } from "../../types/mutation";
import { AUTH_TOKEN_KEY } from "@/constants/auth";

const LOGIN = gql`
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

export const useLoginQuery = () => {
  const [login, { data, loading, error }] = useLazyQuery(LOGIN);

  const _login = async (input: LoginUserInput) => {
    try {
      const response = await login({ variables: { input } });
      if (!response.data) {
        throw new Error('No data returned from mutation');
      }
      if (response?.data?.loginUser?.token) {
        localStorage.setItem(AUTH_TOKEN_KEY, response?.data?.loginUser?.token)
      }
      return response.data;
    } catch (e) {
      console.error("Login error:", e);
      throw e;
    }
  };

  return {
    login: _login,
    data,
    loading,
    error,
  };
};

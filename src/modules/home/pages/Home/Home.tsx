import ParticipantCard from "@/components/shared/ParticipantCard/ParticipantCard";
import { gql, useQuery } from "@apollo/client";
import React from "react";

const LoginUser = gql`
  query LoginUser($input: LoginUserInput!) {
    loginUser(input: $input) {
      id
      token
    }
  }
`;

const Home = () => {
  const { data, loading, error, refetch } = useQuery(LoginUser, {
    variables: {
      input: {
        email: "shemanth.kgp@gmail.com",
        password: "123456",
      },
    },
    fetchPolicy: "cache-and-network",
  });

  console.warn(data, loading, error, refetch);

  return (
    // <div>Home</div>
    <ParticipantCard />
  );
};

export default Home;

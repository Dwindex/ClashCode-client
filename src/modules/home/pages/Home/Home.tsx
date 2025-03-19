import useCustomWebsocket from "@/core/hooks/websocket/useWebsocket";
import { gql } from "@apollo/client";
import React, { useEffect } from "react";

const LoginUser = gql`
  query LoginUser($input: LoginUserInput!) {
    loginUser(input: $input) {
      id
      token
    }
  }
`;

const Home = () => {
  // const { data, loading, error, refetch } = useQuery(LoginUser, {
  //   variables: {
  //     input: {
  //       email: "shemanth.kgp@gmail.com",
  //       password: "123456",
  //     },
  //   },
  //   fetchPolicy: "cache-and-network",
  // });

  const { sendMessage, readyState, LastMessages, joinChannel } = useCustomWebsocket();

  useEffect(() => {
    joinChannel("test");
  }, [joinChannel, readyState]);

  useEffect(() => {
    console.warn(LastMessages);
  }, [LastMessages]);

  return (
    <div>Home</div>
    // <ParticipantCard />
  );
};

export default Home;

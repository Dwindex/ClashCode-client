import { gql, useQuery } from '@apollo/client'

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
                email: 'shemanth.kgp@gmail.com',
                password: '123456',
            }
        },
        fetchPolicy: 'cache-and-network',
    });

    console.warn(data, loading, error, refetch);

    return (
       <>
         <div>Home</div>

       </>
    )
}

export default Home
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://clashcode-backendv2-production.up.railway.app/api', 
  }),
  cache: new InMemoryCache(),
});

export default apolloClient;

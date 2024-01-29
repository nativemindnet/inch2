import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3', // Укажите здесь нужный URL Subgraph
  }),
  cache: new InMemoryCache(),
});

export default client;
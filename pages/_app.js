import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

import '../styles/globals.css'
import Layout from "../components/layout";

const client = new ApolloClient({
    uri: 'http://practice.codebootcamp.co.kr/graphql',
    cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
  return (
      <ApolloProvider client={client}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
      </ApolloProvider>
  )
}

export default MyApp;

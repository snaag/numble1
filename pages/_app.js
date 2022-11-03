import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

import Layout from "components/layout";
import 'styles/style.css'
import 'styles/reset.css'

const client = new ApolloClient({
    uri: 'https://practice.codebootcamp.co.kr/graphql',
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

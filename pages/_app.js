import '../styles/globals.css'
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apolloClient";
import '../styles.css';

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <div class="h-screen bg-pink-50">
        <Component {...pageProps} />
      </div>
    </ApolloProvider>
  );
}

export default MyApp

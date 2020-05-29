import App from "next/app";
import Head from "next/head";
import { AppProvider } from "@shopify/polaris";
// Install "npm install --save @shopify/app-bridge-react js-cookie" then import provider component
import { Provider } from "@shopify/app-bridge-react";
// Import CSS from Polaris
import "@shopify/polaris/styles.css";
// Import Translations pro to add to Polaris app provider, then restart server to test.
import translations from "@shopify/polaris/locales/en.json";
import Cookies from 'js-cookie';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// import Apollo client and add a constant.
const client = new ApolloClient({
  fetchOptions: {
    credentials: 'include'
  },
});

// Extend the App component
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    // Add Shopify API key, the shopOrigin using js-cookie, and the forceRedirect prop to the AppProvider component. Restart server.
    const config = { apiKey: API_KEY, shopOrigin: Cookies.get("shopOrigin"), forceRedirect: true };
    return (
      <React.Fragment>
        <Head>
          <title>Sample App</title>
          <meta charSet="utf-8" />
        </Head>
        {/* Provider component from App Bridge React */}
        <Provider config={config}>
          
          {/* Add app provider component from Polaris. This enables sharing global settings throughout the hierarchy of the application. */}
          <AppProvider i18n={translations}>
            
            {/* Import the Apollo Provider component from react-apollo and wrap it around the Component in your wrapper: */}
            <ApolloProvider client={client}>
            <Component {...pageProps} />
            </ApolloProvider>

          </AppProvider>

        </Provider>
        
      </React.Fragment>
    );
  }
}

export default MyApp;

import React from "react";
import "../styles/custom.scss";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../src/theme";
import GlobalStateProvider from "../store/globalStateProvider";
import { appWithTranslation } from "next-i18next";
import Layout from "../components/Layout";
function MyApp({ Component, pageProps }) {
  let count = 0;
  return (
    <GlobalStateProvider>
      <React.Fragment>
        <Head>
          <title>Joel Vargas Portfolio</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>

        <Layout>
          <Component {...pageProps} />
        </Layout>
      </React.Fragment>
    </GlobalStateProvider>
  );
}

export default appWithTranslation(MyApp);

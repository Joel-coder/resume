import React from "react";
import "../styles/custom.scss";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../src/theme";
import GlobalStateProvider from "../store/globalStateProvider";
import { appWithTranslation } from "next-i18next";
import Layout from "../components/Layout";
function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <GlobalStateProvider>
      <React.Fragment>
        <Head>
          <title>EXAMPLE TITLE</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
          {/* scripts go here */}
        </Head>

        <Layout>
          <Component {...pageProps} />
        </Layout>
      </React.Fragment>
    </GlobalStateProvider>
  );
}

export default appWithTranslation(MyApp);

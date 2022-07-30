/** @format */

import "../styles/globals.css";
import Layout from "../components/layout";
import "../styles/about.css"


export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

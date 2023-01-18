/** @format */

import "../styles/globals.css";
import Layout from "../components/Layout";
import "../styles/about.css";
import "../styles/main.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

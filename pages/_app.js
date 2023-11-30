import Head from "next/head";

import Layout from "@/layout/layout";
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>TwitchInfoPrac</title>
      <meta name="description" content="TwitchInfoPrac" />
      <meta lang="ko" />
    </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

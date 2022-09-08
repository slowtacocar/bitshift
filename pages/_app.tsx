import "../styles/globals.scss";
import Head from "next/head";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>bitshift</title>
        <link
          rel="icon"
          href="/bitshift-white-transparent-vector.svg"
          type="image/svg+xml"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

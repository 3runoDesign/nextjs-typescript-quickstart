import '../styles/globals.css';

import { NextPage } from 'next';
import { AppProps } from 'next/app';
import Head from 'next/head';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Egito&lsquo;s fotografia :: Contratos</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
};

export default MyApp;

import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';

import theme from 'styles/theme';

class MyDocument extends Document {
  // @ts-ignore
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="google-site-verification" content={process.env.GOOGLE_SITE_VERIFICATION} />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

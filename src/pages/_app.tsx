import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/montserrat/900.css';
import '@fontsource/open-sans/400.css';
import theme from 'styles/theme';

import 'styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;

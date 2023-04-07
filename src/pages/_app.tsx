import type { AppProps } from 'next/app';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { css, Global } from '@emotion/react';
import { DefaultSeo } from 'next-seo';
import { QueryClient, QueryClientProvider, useIsFetching } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Analytics } from '@vercel/analytics/react';

import theme from '@/styles/theme';
import '@/styles/globals.scss';

import SEO from 'next-seo.config';

const GlobalStyle = () => {
  const isFetching = useIsFetching();

  return (
    <>
      <CSSReset />
      <Global
        styles={css`
          html {
            min-width: 360px;
            scroll-behavior: smooth;
          }

          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            ${isFetching && { opacity: 0.7 }}
          }
        `}
      />{' '}
    </>
  );
};

const queryClient = new QueryClient();

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <DefaultSeo {...SEO} />
        <GlobalStyle />
        <Component {...pageProps} />
        <Analytics />
      </ChakraProvider>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
};

export default App;

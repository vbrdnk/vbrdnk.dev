'use client';

import React from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider, useIsFetching } from 'react-query';
import theme from '@/styles/theme';
import { Analytics } from '@vercel/analytics/react';
import { ReactQueryDevtools } from 'react-query/devtools';
import { css, Global } from '@emotion/react';

const queryClient = new QueryClient();

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

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <GlobalStyle />
        {children}
        <Analytics />
      </ChakraProvider>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
}

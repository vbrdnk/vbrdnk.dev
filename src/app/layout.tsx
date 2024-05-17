import React from 'react';
import { ColorModeScript, Flex } from '@chakra-ui/react';

import Header from './Header';
import Footer from './Footer';
import { Providers } from './providers/Providers';

import theme from '@/styles/theme';
import '@/styles/globals.scss';
import { fonts } from './fonts';

export const metadata = {
  title: 'Page – Vladyslav Burdeniuk',
  description: 'Thoughts on the programming, tech, music, and my personal life.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fonts.plexSans.variable} ${fonts.montserrat.variable}`}>
      <body>
        {/* Layout UI */}
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Providers>
          <main>
            <Flex direction="row" justifyContent="space-around">
              <Flex direction="column" p={8} maxW="40rem" w="100%" alignSelf="center">
                <Header />
                <Flex as="main" direction="column">
                  {children}
                </Flex>
                <Footer />
              </Flex>
            </Flex>
          </main>
        </Providers>
      </body>
    </html>
  );
}

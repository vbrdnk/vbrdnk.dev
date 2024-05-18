import React from 'react';
import { ColorModeScript, Flex } from '@chakra-ui/react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Providers } from './providers/Providers';

import theme from '@/styles/theme';
import '@/styles/globals.scss';
import { fonts } from './fonts';

const title = '{code•aligned}';
const description = 'Personal blog by Vladyslav Burdeniuk. I express myself with words and code.';

export const metadata = {
  title,
  description,
  // canonical: 'https://vbrdnk.dev',
  // author: 'Vladyslav Burdeniuk',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://vbrdnk.dev',
    title,
    description,
  },
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

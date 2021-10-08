import React from 'react';
import { Flex } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

type LayoutProps = {
  type?: string;
  title?: string;
  description?: string;
};

const Layout: React.FC<LayoutProps> = ({ children, type, title, description }) => {
  return (
    <Flex direction="column" p={8} maxW="40rem" w="100%" alignSelf="center">
      <NextSeo title={title} description={description} openGraph={{ type }} />
      <Header />
      <Flex as="main" direction="column">
        {children}
      </Flex>
      <Footer />
    </Flex>
  );
};

export default Layout;

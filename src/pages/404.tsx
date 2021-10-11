import type { NextPage } from 'next';
import { Heading } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/layout';

import Layout from '@/components/Layout';

import styles from '@/styles/404.module.scss';

const NotFound: NextPage = () => {
  return (
    <Layout title="Oops! Page not found.">
      <Flex className={styles.notFound} display="column">
        <Heading as="h3">Oops! Page not found.</Heading>
        <Heading as="h1">
          <span>4</span>
          <span>0</span>
          <span>4</span>
        </Heading>
        <Heading as="h2">We&apos;re sorry, but the page you requested was not found.</Heading>
      </Flex>
    </Layout>
  );
};

export default NotFound;

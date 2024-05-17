import type { NextPage } from 'next';
import Link from 'next/link';
import { Heading } from '@chakra-ui/react';
import { Flex, Text } from '@chakra-ui/react';

import Layout from '../app/Layout';

const NotFound: NextPage = () => {
  return (
    <Layout title="404 | Page not found.">
      <Flex display="column">
        <Heading as="h3" mb={12}>Oops! I didn&apos;t code that page.</Heading>
        <Text>It seems you&apos;ve found something that used to exist, or you spelled something wrong. Double check that URL or go back <Link href='/' passHref>home</Link>.</Text>
      </Flex>
    </Layout>
  );
};

export default NotFound;

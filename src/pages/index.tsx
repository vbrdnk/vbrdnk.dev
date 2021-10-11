import type { NextPage } from 'next';
import Link from 'next/link';
import { Heading, Text, Box, Link as ChakraLink } from '@chakra-ui/react';

import Layout from '@/components/Layout';
import TopTracks from '@/components/TopTracks';
import GithubRepos from '../components/GithubRepos/index';

const Home: NextPage = () => {
  return (
    <Layout home>
      <Box mb={12}>
        <Heading mb={4}>Blog</Heading>
        <Text mb={4}>I write mostly about web development and tech careers.</Text>
        <Link href="/blog" passHref>
          <ChakraLink>Read all posts &rarr;</ChakraLink>
        </Link>
      </Box>

      <Box mb={12}>
        <GithubRepos />
      </Box>

      <Box mb={12}>
        <TopTracks />
      </Box>
    </Layout>
  );
};

export default Home;

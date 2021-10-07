import type { NextPage } from 'next';
import Link from 'next/link';
import { Heading, Text, Box } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import Layout from 'components/Layout';
import TopTracks from 'components/TopTracks';

const Home: NextPage = () => {
  return (
    <Layout home>
      <Box mb={12}>
        <Heading mb={4}>Blog</Heading>
        <Text mb={4}>I write mostly about web development and tech careers.</Text>
        <Link href="/blog">
          <a>
            Read all posts <ArrowForwardIcon />{' '}
          </a>
        </Link>
      </Box>

      <TopTracks />
    </Layout>
  );
};

export default Home;

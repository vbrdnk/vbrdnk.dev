import type { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Heading, Text, Flex, Box } from '@chakra-ui/react';
import avatarPic from '../../public/static/images/avatar.jpg';

import { PlaylistOfTheWeek } from './PlaylistOfTheWeek';

const Home: NextPage = () => {
  return (
    <>
      <Flex as="aside" mb={12}>
        <Box className="avatar">
          <Image src={avatarPic} alt="Vladyslav Burdeniuk" placeholder="blur" fill />
        </Box>
        <Box>
          <Text fontWeight="bold" fontSize="1.2rem">
            Vladyslav Burdeniuk 🇺🇦
          </Text>
          <Text maxW="400px">
            I am a creator and developer who currently works as a Senior Web Engineer at{' '}
            <b>Spotify</b>. This is my personal blog, where I express myself through both words and
            code.
          </Text>
        </Box>
      </Flex>
      <Box mb={12}>
        <Heading mb={4}>Blog</Heading>
        <Text mb={4}>I write mostly about web development and tech careers.</Text>
        <Link className="link" href="/blog" passHref>
          Read all posts &rarr;
        </Link>
      </Box>
      <Box mb={12}>
        <Heading mb={4}>Work playlist</Heading>
        <PlaylistOfTheWeek />
      </Box>
    </>
  );
};

export default Home;

import type { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Heading, Text, Flex, Box, Link as ChakraLink } from '@chakra-ui/react';
import Layout from '@/components/Layout';
import avatarPic from 'public/static/images/avatar.jpg';

const Home: NextPage = () => {
  return (
    <Layout>
      <Flex as='aside' mb={12}>
        <Box className='avatar'>
          <Image src={avatarPic} alt='Vladyslav Burdeniuk' layout='fill' />
        </Box>
        <Box>
          <Text fontWeight='bold' fontSize='1.2rem'>
            Vladyslav Burdeniuk 🇺🇦
          </Text>
          <Text maxW='400px'>
            Creator and developer currently working as the Senior Software Engineer at{' '}
            <strong>Allset</strong>. This is my personal blog where I express myself with words and
            code.
          </Text>
        </Box>
      </Flex>
      <Box mb={12}>
        <Heading mb={4}>Blog</Heading>
        <Text mb={4}>I write mostly about web development and tech careers.</Text>
        <Link href='/blog' passHref>
          <ChakraLink>Read all posts &rarr;</ChakraLink>
        </Link>
      </Box>
      <Box>
        <Heading mb={4}>Dashboard</Heading>
        <Text mb={4}>Want to see some interesting data? Check out my dashboard.</Text>
        <Link href='/dashboard' passHref>
          <ChakraLink>Go to dashboard &rarr;</ChakraLink>
        </Link>
      </Box>
    </Layout>
  );
};

export default Home;

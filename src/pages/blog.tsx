import React from 'react';
import type { NextPage, GetStaticProps } from 'next';
import { Heading, Box, Flex } from '@chakra-ui/react';
import { parseISO, compareDesc } from 'date-fns';

import Layout from '@/components/Layout';
import ArticleCard from '@/components/ArticleCard';
import { getAllFilesFrontMatter } from '@/lib/mdx';
import { FileType, Post } from '@/lib/types';

type BlogProps = {
  posts: Post[];
};

const Blog: NextPage<BlogProps> = ({ posts }) => {
  return (
    <Layout
      title="Blog – Vladyslav Burdeniuk"
      description="Thoughts on the programming, tech, music, and my personal life."
    >
      <Flex display="column">
        <Heading as="h3" mb={4}>
          All Posts
        </Heading>
        {posts
          .sort((a, b) => compareDesc(parseISO(a.createdAt), parseISO(b.createdAt)))
          .map(post => (
            <Box mb={10} key={post.title}>
              <ArticleCard {...post} />
            </Box>
          ))}
      </Flex>
    </Layout>
  );
};

export default Blog;

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllFilesFrontMatter(FileType.Blog);

  return { props: { posts } };
};

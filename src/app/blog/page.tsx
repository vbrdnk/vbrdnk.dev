import { Box, Flex, Heading } from '@chakra-ui/react';
import { compareDesc, parseISO } from 'date-fns';
import React from 'react';

import { getAllFilesFrontMatter } from '@/lib/mdx';
import { FileType } from '@/lib/types';

import ArticleCard from './ArticleCard';

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <>
      <Flex display="column">
        <Heading as="h3" mb={4}>
          all posts
        </Heading>
        {posts
          .sort((a, b) => compareDesc(parseISO(a.createdAt), parseISO(b.createdAt)))
          .map(post => (
            <Box mb={10} key={post.title}>
              <ArticleCard {...post} />
            </Box>
          ))}
      </Flex>
    </>
  );
}

async function getAllPosts() {
  return getAllFilesFrontMatter(FileType.Blog);
}

import React from 'react';
import type { NextPage } from 'next';
import { Heading, Box } from '@chakra-ui/react';
import { parseISO, compareDesc } from 'date-fns';

import Layout from 'components/Layout';
import ArticleCard from 'components/ArticleCard';
import { FileType, getAllFilesFrontMatter, Post } from 'lib/mdx';

type BlogProps = {
  posts: Post[];
};

const Blog: NextPage<BlogProps> = ({ posts }) => {
  return (
    <Layout
      title="Blog – Vladyslav Burdeniuk"
      description="Thoughts on the programming, tech, music, and my personal life."
    >
      <div>
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
      </div>
    </Layout>
  );
};

export default Blog;

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter(FileType.Blog);

  return { props: { posts } };
}

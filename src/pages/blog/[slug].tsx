import React, { useMemo } from 'react';

import type { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import { getMDXComponent } from 'mdx-bundler/client';
import { Heading, Flex } from '@chakra-ui/react';

import { ArticleBreadcrumbs } from '@/components/ArticleBreadcrumbs';
import { getFiles, getFileBySlug } from '@/lib/mdx';
import { FileType, FrontMatterResponse } from '@/lib/types';
import components from '../../app/MDXComponents';
import Layout from '../../app/Layout';
import ReadingTime from '../../app/ReadingTime';

type BlogPostPageProps = FrontMatterResponse;

const BlogPost: NextPage<BlogPostPageProps> = ({ code, frontMatter }) => {
  const Component = useMemo(() => getMDXComponent(code), [code]);
  const {
    title: blogPostTitle,
    readingTime: { text: blogPostReadingTime },
  } = frontMatter;

  return (
    <Layout
      title={`${frontMatter.title} - Vladyslav Burdeniuk`}
      description={frontMatter.description}
      type='article'
    >
      <ArticleBreadcrumbs title={blogPostTitle} />
      <Flex as='article' display='column' mb={10}>
        <Heading mb={4}>{blogPostTitle}</Heading>
        <ReadingTime time={blogPostReadingTime} />

        <Component
          components={
            {
              ...components,
            } as any
          }
        />
      </Flex>
    </Layout>
  );
};

export default BlogPost;

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getFiles(FileType.Blog);

  return {
    paths: posts.map(p => ({
      params: {
        slug: p.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params!.slug as string;
  const post = await getFileBySlug(FileType.Blog, slug);

  return { props: { ...post } };
};

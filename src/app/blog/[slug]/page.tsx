import React from 'react';

import type { Metadata } from 'next';
import { Heading, Flex } from '@chakra-ui/react';

import { ArticleBreadcrumbs } from '@/components/ArticleBreadcrumbs';
import { getFiles, getFileBySlug } from '@/lib/mdx';
import { FileType } from '@/lib/types';
import ReadingTime from './ReadingTime';
import { BlogPostContent } from './BlogPostContent';

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = params;
  const { frontMatter } = await getPost(slug);

  return {
    title: frontMatter.title,
    description: frontMatter.description,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params;
  const { code, frontMatter } = await getPost(slug);
  const {
    title: blogPostTitle,
    readingTime: { text: blogPostReadingTime },
  } = frontMatter;

  return (
    <>
      <ArticleBreadcrumbs title={blogPostTitle} />
      <Flex as="article" display="column" mb={10}>
        <Heading mb={4}>{blogPostTitle}</Heading>
        <ReadingTime time={blogPostReadingTime} />

        <BlogPostContent code={code} />
      </Flex>
    </>
  );
}

export async function generateStaticParams() {
  const posts = await getFiles(FileType.Blog);

  return posts.map(post => ({
    slug: post.replace(/\.mdx/, ''),
  }));
}

async function getPost(slug: string) {
  return getFileBySlug(FileType.Blog, slug);
}

import React from 'react';

import { getMDXComponent } from 'mdx-bundler/client';
import { Heading, Flex } from '@chakra-ui/react';

import { ArticleBreadcrumbs } from '@/components/ArticleBreadcrumbs';
import { getFiles, getFileBySlug } from '@/lib/mdx';
import { FileType } from '@/lib/types';
import components from '../../MDXComponents';
import ReadingTime from '../../ReadingTime';

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params;
  const { code, frontMatter } = await getPost(slug);
  const Component = getMDXComponent(code);
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

        <Component
          components={
            {
              ...components,
            } as any
          }
        />
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

import React, { useMemo } from 'react';
import type { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { getMDXComponent } from 'mdx-bundler/client';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Heading, Flex } from '@chakra-ui/react';

import components from '@/components/MDXComponents';
import Layout from '@/components/Layout';
import ReadingTime from '@/components/ReadingTime';
import { getFiles, getFileBySlug } from '@/lib/mdx';
import { FileType, FrontMatterResponse } from '@/lib/types';

type BlogPageProps = FrontMatterResponse;

const Blog: NextPage<BlogPageProps> = ({ code, frontMatter }) => {
  const Component = useMemo(() => getMDXComponent(code), [code]);
  const {
    title: blogPostTitle,
    readingTime: { text: blogPostReadingTime },
  } = frontMatter;

  return (
    <Layout
      title={`${frontMatter.title} - Vladyslav Burdeniuk`}
      description={frontMatter.description}
    >
      <Breadcrumb mb={12}>
        <BreadcrumbItem color="pink.500">
          <Link href="/">&#123;code•aligned&#125;</Link>
        </BreadcrumbItem>
        <BreadcrumbItem color="pink.500">
          <Link href="/blog">Blog</Link>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink>{blogPostTitle}</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Flex as="article" display="column">
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

export default Blog;

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

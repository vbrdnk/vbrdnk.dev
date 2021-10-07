import React, { useMemo } from 'react';
import type { NextPage } from 'next';
import { getMDXComponent } from 'mdx-bundler/client';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Link,
  Text,
  Flex,
} from '@chakra-ui/react';
import { TimeIcon } from '@chakra-ui/icons';

import components from 'components/MDXComponents';
import Layout from 'components/Layout';
import { getFiles, getFileBySlug, FileType } from 'lib/mdx';

// @ts-ignore
const Blog: NextPage = ({ code, frontMatter }) => {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <Layout
      title={`${frontMatter.title} - Vladyslav Burdeniuk`}
      description={frontMatter.description}
    >
      <Breadcrumb mb={12}>
        <BreadcrumbItem>
          <Link href="/">
            <a>&#123;code•aligned&#125;</a>
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink>{frontMatter.title}</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <article>
        <Heading mb={4}>{frontMatter.title}</Heading>
        <Flex align="center" mb={4}>
          <TimeIcon mr={2} />
          <Text as="i">{frontMatter.readingTime.text}</Text>
        </Flex>

        <Component
          components={
            {
              ...components,
            } as any
          }
        />
      </article>
    </Layout>
  );
};

export default Blog;

export async function getStaticPaths() {
  const posts = await getFiles(FileType.Blog);

  return {
    paths: posts.map(p => ({
      params: {
        slug: p.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  };
}

// @ts-ignore
export async function getStaticProps({ params }) {
  const post = await getFileBySlug(FileType.Blog, params.slug);

  return { props: { ...post } };
}

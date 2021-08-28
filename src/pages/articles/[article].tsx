import React from 'react';
import Link from 'next/link';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

import Layout from 'components/Layout';
import { getAllArticleSlugs, getArticleData } from 'lib/articles';
import { IArticle } from 'common/types/contentful';

interface ArticleProps {
  article: IArticle;
}

const Article: NextPage<ArticleProps> = ({ article }) => {
  return (
    <Layout title={article.fields.title} description={article.fields.description}>
      <Breadcrumb className="app-header">
        <BreadcrumbItem>
          <Link href="/">
            <a>&#123;code•aligned&#125;</a>
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>{article.fields.title}</BreadcrumbItem>
      </Breadcrumb>

      <article>
        <h1>{article.fields.title}</h1>
        <div>{documentToReactComponents(article.fields.content)}</div>
      </article>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllArticleSlugs();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params!.article;

  const article = await getArticleData(slug);

  return {
    props: {
      article,
    },
  };
};

export default Article;

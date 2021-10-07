import React from 'react';
import Link from 'next/link';
import { Heading, Text } from '@chakra-ui/react';

import Date from 'components/Date';

type ArticleProps = {
  title: string;
  description?: string;
  slug: string;
  createdAt: string;
};

const ArticleCard: React.FC<ArticleProps> = ({ title, description, slug, createdAt }) => {
  return (
    <>
      <article>
        <header>
          <Heading size="xl" mb={2}>
            <Link href={`/blog/${slug}`}>
              <a>{title}</a>
            </Link>
          </Heading>

          <Date date={createdAt} />
        </header>
        {description && <Text mt={4}>{description}</Text>}
      </article>
    </>
  );
};

export default ArticleCard;

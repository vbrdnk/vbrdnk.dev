import React from 'react';
import Link from 'next/link';
import { Heading, Text, Flex } from '@chakra-ui/react';

import { Post } from '@/lib/types';
import Date from './Date';

export type ArticleProps = Post;

const ArticleCard = ({ title, description, slug, createdAt }: ArticleProps): JSX.Element => {
  return (
    <Flex as='article' direction='column' data-testid={slug}>
      <Flex as='header' direction='column'>
        <Heading mb={2}>
          <Link href={`/blog/${slug}`} className='link' passHref>
            {title}
          </Link>
        </Heading>

        <Date date={createdAt} />
      </Flex>
      {description && <Text mt={4}>{description}</Text>}
    </Flex>
  );
};

export default ArticleCard;

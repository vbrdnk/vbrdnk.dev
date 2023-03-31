import React from 'react';
import Link from 'next/link';
import { Heading, Text, Flex } from '@chakra-ui/react';

import Date from './Date';

type ArticleProps = {
  title: string;
  description?: string;
  slug: string;
  createdAt: string;
};

const ArticleCard = ({ title, description, slug, createdAt }: ArticleProps): JSX.Element => {
  return (
    <Flex as='article' direction='column'>
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

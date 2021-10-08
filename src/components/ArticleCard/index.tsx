import React from 'react';
import Link from 'next/link';
import { Heading, Text, Flex, Link as ChakraLink } from '@chakra-ui/react';

import Date from '@/components/Date';

type ArticleProps = {
  title: string;
  description?: string;
  slug: string;
  createdAt: string;
};

const ArticleCard: React.FC<ArticleProps> = ({ title, description, slug, createdAt }) => {
  return (
    <Flex as="article" direction="column">
      <Flex as="header" direction="column">
        <Heading mb={2}>
          <Link href={`/blog/${slug}`} passHref>
            <ChakraLink>{title}</ChakraLink>
          </Link>
        </Heading>

        <Date date={createdAt} />
      </Flex>
      {description && <Text mt={4}>{description}</Text>}
    </Flex>
  );
};

export default ArticleCard;

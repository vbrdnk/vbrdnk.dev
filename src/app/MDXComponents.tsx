'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Code, Heading, ListItem, OrderedList } from '@chakra-ui/react';

const CustomLink = (props: any): JSX.Element => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props}>{props.children}</a>
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const MDXComponents = {
  Image,
  a: CustomLink,
  code: Code,
  Heading,
  OrderedList,
  ListItem,
};

export default MDXComponents;

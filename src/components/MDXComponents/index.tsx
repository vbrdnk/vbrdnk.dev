import Link from 'next/link';
import Image from 'next/image';
import { Code, Heading } from '@chakra-ui/react';

const CustomLink: React.FC = (props: any) => {
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
};

export default MDXComponents;

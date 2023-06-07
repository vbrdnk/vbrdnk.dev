import React from 'react';

import Link from 'next/link';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';

type ArticleBreadcrumbsProps = {
  /**
   * Current article title
   */
  title: string;
}
export const ArticleBreadcrumbs = ({ title }: ArticleBreadcrumbsProps): JSX.Element => {
  const router = useRouter();
  const paths = router.asPath.split('/').filter(path => path !== '').slice(0, -1);
  return (
    <Breadcrumb mb={12}>
      <BreadcrumbItem color='pink.500'>
        <BreadcrumbLink as={Link} href='/'>&#123;code•aligned&#125;</BreadcrumbLink>
      </BreadcrumbItem>
      {paths.map((path, idx) =>
        <BreadcrumbItem color='pink.500' key={`${path}-${idx}`}>
          <BreadcrumbLink as={Link} href={`/${path}`}>{path}
          </BreadcrumbLink>
        </BreadcrumbItem>)
      }
      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink>
          <Text noOfLines={1}>
            {title}
          </Text>
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};
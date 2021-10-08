import React from 'react';
import Link from 'next/link';
import { Stack, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const Nav: React.FC = () => {
  const router = useRouter();
  return (
    <Stack direction="row" spacing={1} align="center" as="nav">
      <Button variant="ghost" isActive={router.asPath === '/'}>
        <Link href="/">Home</Link>
      </Button>
      <Button variant="ghost" isActive={router.asPath === '/dashboard'}>
        <Link href="/dashboard">Dashboard</Link>
      </Button>
      <Button variant="ghost" isActive={router.asPath === '/blog'}>
        <Link href="/blog">Blog</Link>
      </Button>
    </Stack>
  );
};

export default Nav;

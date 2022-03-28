import React from 'react';
import { Stack } from '@chakra-ui/react';

import NavItem from '@/components/NavItem';

const Nav: React.FC = () => {
  return (
    <Stack direction="row" spacing={1} align="center" as="nav">
      <NavItem href="/" text="Home" />
      <NavItem href="/dashboard" text="Dashboard" />
      <NavItem href="/blog" text="Blog" />
    </Stack>
  );
};

export default Nav;

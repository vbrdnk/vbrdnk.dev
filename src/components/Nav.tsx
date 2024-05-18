import React from 'react';
import { Stack } from '@chakra-ui/react';

import NavItem from './NavItem';

const Nav = (): JSX.Element => {
  return (
    <Stack direction="row" spacing={1} align="center" as="nav">
      <NavItem href="/" text="home" />
      <NavItem href="/blog" text="blog" />
    </Stack>
  );
};

export default Nav;

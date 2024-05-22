import { Stack } from '@chakra-ui/react';
import React from 'react';

import { NavigationItem } from './NavItem';

export const Navigation = (): JSX.Element => {
  return (
    <Stack direction="row" spacing={1} align="center" as="nav">
      <NavigationItem href="/" text="home" />
      <NavigationItem href="/blog" text="blog" />
    </Stack>
  );
};

import { Flex } from '@chakra-ui/react';
import React from 'react';

import { ColorModeToggle } from '@/components/Toggle/ColorModeToggle';

import { Navigation } from './Nav';

export const Header = (): JSX.Element => {
  return (
    <Flex as="header" justifyContent="space-between" alignItems="center" mb={8}>
      <Navigation />
      <ColorModeToggle />
    </Flex>
  );
};

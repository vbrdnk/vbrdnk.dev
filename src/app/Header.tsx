import React from 'react';
import { Flex } from '@chakra-ui/react';

import { ColorModeToggle } from '@/components/Toggle/ColorModeToggle';
import Nav from './Nav';

const Header = (): JSX.Element => {
  return (
    <Flex as='header' justifyContent='space-between' alignItems='center' mb={8}>
      <Nav />
      <ColorModeToggle />
    </Flex>
  );
};

export default Header;

import React from 'react';
import { IconButton, Flex } from '@chakra-ui/react';

import ColorModeToggle from '@/components/Toggle';
import Nav from '@/components/Nav';

const Header: React.FC = () => {
  return (
    <Flex as="header" justifyContent="space-between" alignItems="center" mb={8}>
      <Nav />
      <IconButton aria-label="Toggle Color Mode" icon={<ColorModeToggle />} />
    </Flex>
  );
};

export default Header;

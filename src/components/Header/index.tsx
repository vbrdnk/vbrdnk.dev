import React from 'react';
import { Heading, IconButton, Flex } from '@chakra-ui/react';
import ColorModeToggle from '@/components/Toggle';

const Header: React.FC = () => {
  return (
    <Flex as="header" justifyContent="space-between" mb={12} alignItems="center">
      <Heading size="xl">&#123;code•aligned&#125;</Heading>
      <IconButton aria-label="Toggle Color Mode" icon={<ColorModeToggle />} />
    </Flex>
  );
};

export default Header;

import { Divider, VStack } from '@chakra-ui/react';
import React from 'react';

import { SocialLinks } from './SocialLinks';

export const Footer = (): JSX.Element => {
  return (
    <VStack as="footer" align="flex-start" spacing={6}>
      <Divider />
      <SocialLinks />
    </VStack>
  );
};

import React from 'react';
import { VStack, Divider } from '@chakra-ui/react';

import SocialLinks from './SocialLinks';

const Footer = (): JSX.Element => {
  return (
    <VStack as="footer" align="flex-start" spacing={6}>
      <Divider />
      <SocialLinks />
    </VStack>
  );
};

export default Footer;

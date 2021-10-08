import React from 'react';
import { VStack, Divider } from '@chakra-ui/react';

import SocialLinks from '@/components/SocialLinks/SocialLinks';
import NowPlaying from '@/components/NowPlaying';

const Footer: React.FC = () => {
  return (
    <VStack as="footer" align="flex-start" spacing={6} mt={8}>
      <Divider />
      <NowPlaying />
      <SocialLinks />
    </VStack>
  );
};

export default Footer;

import React from 'react';
import { VStack, Divider } from '@chakra-ui/react';

import SocialLinks from './SocialLinks';
import NowPlaying from '@/components/NowPlaying';

const Footer = (): JSX.Element => {
  return (
    <VStack as='footer' align='flex-start' spacing={6}>
      <Divider />
      <NowPlaying />
      <SocialLinks />
    </VStack>
  );
};

export default Footer;

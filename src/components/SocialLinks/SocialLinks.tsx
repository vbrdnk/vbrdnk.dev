import React from 'react';
import { HStack, Link } from '@chakra-ui/layout';

const SocialLinks: React.FC = () => {
  return (
    <HStack>
      <Link
        isExternal
        href="https://stackoverflow.com/users/7106331/vbrdnk?tab=profile"
        rel="noreferrer"
      >
        stackoverflow
      </Link>
      <Link isExternal href="https://github.com/vbrdnk" rel="noreferrer">
        github
      </Link>
      <Link isExternal href="https://www.linkedin.com/in/vladyslav-burdeniuk/" rel="noreferrer">
        linkedin
      </Link>
    </HStack>
  );
};

export default SocialLinks;

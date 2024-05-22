import { HStack, Link } from '@chakra-ui/react';
import React from 'react';

export const SocialLinks = (): JSX.Element => {
  return (
    <HStack>
      <Link
        isExternal
        className="link"
        href="https://stackoverflow.com/users/7106331/vbrdnk?tab=profile"
        rel="noreferrer"
      >
        stackoverflow
      </Link>
      <Link isExternal className="link" href="https://github.com/vbrdnk" rel="noreferrer">
        github
      </Link>
      <Link
        isExternal
        className="link"
        href="https://www.linkedin.com/in/vladyslav-burdeniuk/"
        rel="noreferrer"
      >
        linkedin
      </Link>
      <Link isExternal className="link" href="https://twitter.com/vbrdnk/" rel="noreferrer">
        twitter
      </Link>
    </HStack>
  );
};

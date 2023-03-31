import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button } from '@chakra-ui/react';

type NavItemProps = {
  href: string;
  text: string;
};

const NavItem = ({ href, text }: NavItemProps): JSX.Element => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <Button variant='ghost' isActive={isActive}>
      <Link href={href} passHref>
        {text}
      </Link>
    </Button>
  );
};

export default NavItem;

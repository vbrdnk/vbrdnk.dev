import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button } from '@chakra-ui/react';

type NavItemProps = {
  href: string;
  text: string;
};

const NavItem: React.FC<NavItemProps> = ({ href, text }) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <Link href={href} passHref>
      <Button variant='ghost' isActive={isActive}>
        {text}
      </Button>
    </Link>
  );
};

export default NavItem;

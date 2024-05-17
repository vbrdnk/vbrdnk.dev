'use client';

import React from 'react';
import { Button } from '@chakra-ui/react';
import { Link } from '@chakra-ui/next-js';
import { usePathname } from 'next/navigation';

type NavItemProps = {
  href: string;
  text: string;
};

const NavItem = ({ href, text }: NavItemProps): JSX.Element => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href}>
      <Button variant="ghost" isActive={isActive}>
        {text}
      </Button>
    </Link>
  );
};

export default NavItem;

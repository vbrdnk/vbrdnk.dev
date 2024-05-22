'use client';

import { usePathname } from 'next/navigation';

import { Link } from '@chakra-ui/next-js';
import { Button } from '@chakra-ui/react';
import React from 'react';

type NavigationItemProps = {
  href: string;
  text: string;
};

export const NavigationItem = ({ href, text }: NavigationItemProps): JSX.Element => {
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

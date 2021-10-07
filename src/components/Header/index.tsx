import React from 'react';
import { Heading, IconButton } from '@chakra-ui/react';
import ColorModeToggle from 'components/Toggle';

import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Heading size="xl">&#123;code•aligned&#125;</Heading>
      <IconButton aria-label="Toggle Color Mode" icon={<ColorModeToggle />} />
    </header>
  );
};

export default Header;

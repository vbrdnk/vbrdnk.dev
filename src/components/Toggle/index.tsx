import React from 'react';
import { useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

import styles from './ColorModeToggle.module.scss';

const ColorModeToggle: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const Icon = colorMode === 'light' ? MoonIcon : SunIcon;
  return <Icon onClick={toggleColorMode} className={styles.toggle} data-testid='color-theme-toggle' />;
};

export default ColorModeToggle;

import React from 'react';
import { IconButton, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

import styles from './ColorModeToggle.module.scss';

export const ColorModeToggle = (): JSX.Element => {
  const { colorMode, toggleColorMode } = useColorMode();
  const Icon = colorMode === 'light' ? MoonIcon : SunIcon;

  return (
    <IconButton
      aria-label='Toggle Color Mode'
      data-testid='color-mode-toggle'
      onClick={toggleColorMode}
      icon={<Icon className={styles.toggle} data-testid='color-mode-toggle-icon' />}
    />
  );
};
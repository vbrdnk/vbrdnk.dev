import { extendTheme, theme as ChakraTheme } from '@chakra-ui/react';

const theme = extendTheme({
  initialColorMode: 'dark',
  useSystemColorMode: true,
  styles: {
    global: {
      '.chakra-link': {
        color: '#d23669 !important',
      },
      a: {
        fontWeight: 700,
      },
    },
  },
  fonts: {
    ...ChakraTheme.fonts,
    heading: 'Montserrat',
    body: `IBM Plex Sans,-apple-system,BlinkMacSystemFont`,
  },
  fontWeight: {
    normal: 400,
    medium: 600,
    bold: 700,
  },
  colors: {
    pink: {
      500: '#d23669',
    },
  },
});

export default theme;

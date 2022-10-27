import { extendTheme, theme as ChakraTheme } from '@chakra-ui/react';

const theme = extendTheme({
  initialColorMode: 'dark',
  useSystemColorMode: true,
  styles: {
    global: {
      a: {
        fontWeight: 700,
        textDecoration: 'none !important'
      },
      p: {
        lineHeight: 2,
      },
      blockquote: {
        fontStyle: 'oblique',
        fontWeight: 700,
      },
    },
  },
  textStyles: {
    base: {
      lineHeight: 2,
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

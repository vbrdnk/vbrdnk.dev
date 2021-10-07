import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  initialColorMode: 'dark',
  useSystemColorMode: true,
  styles: {
    global: {
      '.chakra-container': {
        maxWidth: '40rem !important',
      },
      a: {
        fontFamily: 'Montserrat',
        fontWeight: 900,
      },
    },
  },
  fonts: {
    heading: 'Montserrat',
    body: 'Open Sans',
  },
});

export default theme;

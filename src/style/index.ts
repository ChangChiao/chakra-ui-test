import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react';

import Button from './components/button';
import colors from './colors';
import global from './global';

const theme = extendTheme(
  {
    colors,
    global,
    components: {
      Button,
    },
    config: {
      initialColorMode: 'dark',
      useSystemColorMode: false,
    },
  },
  withDefaultColorScheme({ colorScheme: 'primary' }),
);

export default theme;

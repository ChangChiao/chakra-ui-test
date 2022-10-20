import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

import Button from "./components/button";
import colors from "./colors";
import global from "./global";

const theme = extendTheme(
  {
    colors,
    global,
    components: {
      Button,
    },
    config: {
      initialColorMode: "dark",
      useSystemColorMode: false,
    },
    breakpoints: {
      sm: "320px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
  },
  withDefaultColorScheme({ colorScheme: "primary" })
);

export default theme;

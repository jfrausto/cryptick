import { extendTheme } from "@chakra-ui/react";

// main theme entry point

// * Global style overrides
import styles from "./styles";
// * Foundational style overrides
// import brand colors
import breakpoints from "./foundations/breakpoints";
// * Component style overrides
// import component!

// configure the portfolio to start in dark mode
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};
const overrides: Object = {
  config,
  styles,
  // Other foundational style overrides go here
  breakpoints,
  // components: {
  //   Button,
  //   // Other components go here
  // },
}

const theme = extendTheme(overrides);
export default theme;

// import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
// import createCache from "@emotion/cache";
// import { prefixer } from "stylis";
// import rtlPlugin from "stylis-plugin-rtl";
import { ReactNode } from "react";

import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";
import { theme } from "../theme/Theme";

// Create rtl cache
// const cacheRtl = createCache({
//   key: "muirtl",
//   stylisPlugins: [prefixer, rtlPlugin],
// });

type Props = {
  children: ReactNode;
};
function ThemeContextProvider(props: Props) {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}
export default ThemeContextProvider;

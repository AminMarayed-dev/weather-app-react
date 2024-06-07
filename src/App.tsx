import { RouterProvider } from "react-router-dom";
import ThemeContextProvider from "./context/ThemeContextProvider";
import { router } from "./router/router";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <ThemeContextProvider>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeContextProvider>
  );
}

export default App;

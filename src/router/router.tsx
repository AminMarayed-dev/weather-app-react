import { createBrowserRouter } from "react-router-dom";
import Register from "../pages/register/Register";
import Home from "../components/pages/home/Home";
import ErrorPage from "../pages/error/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "register",
    element: <Register />,
    errorElement: <ErrorPage />,
  },
]);

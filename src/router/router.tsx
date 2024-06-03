import { createBrowserRouter } from "react-router-dom";
import Register from "../pages/register/Register";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<div>سلام به همه</div>
    },
    {
        path:'/register',
        element:<Register/>
    }
])
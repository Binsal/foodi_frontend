import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  import Main from "../layout/Main";
import Home from "../pages/home/home";
import Menu from "../pages/shop/Menu";
import Signup from "../components/Signup";
import UpdateProfile from "../pages/dashboard/UpdateProfile";
import CartPage from "../pages/shop/CartPage";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
       {
        path:'/',
        element:<Home/>
       },
       {
        path:"/menu",
        element:<Menu/>
       },
       {
        path:"/update-profile",
        element:<UpdateProfile/>
       },
       {
        path:"/cart-page",
        element:<CartPage/>
       }
      ]
    },
    {
      path: "/signup",
      element: <Signup/>,
    },
  ]);

export default router;
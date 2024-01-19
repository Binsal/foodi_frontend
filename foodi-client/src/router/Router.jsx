import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  import Main from "../layout/Main";
import Home from "../pages/home/home";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
       {
        path:'/',
        element:<Home/>
       }
      ]
    },
  ]);

export default router;
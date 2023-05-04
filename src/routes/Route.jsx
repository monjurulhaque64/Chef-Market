import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../Layouts/Main";
import SingIn from "../pages/shere/SingIn/SingIn";
import SingUp from "../pages/shere/SingUp/SingUp";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/singin',
          element: <SingIn></SingIn>
        },
        {
          path:'/singup',
          element: <SingUp></SingUp>
        }
      ]
    }
  ])

  export default router;
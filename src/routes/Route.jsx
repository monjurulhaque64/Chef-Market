import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../Layouts/Main";
import SingIn from "../pages/shere/SingIn/SingIn";
import SingUp from "../pages/shere/SingUp/SingUp";
import Chef from "../pages/Home/Chef/Chef";
import ChefPage from "../pages/ChefPage/ChefPage";
import ChefLayout from "../Layouts/ChefLayout";



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
    },
    {
      path: 'chef',
      element: <ChefLayout></ChefLayout>,
      children: [
        {
          path: ':id',
          element: <ChefPage></ChefPage>,

        }
      ]
    }
  ])

  export default router;
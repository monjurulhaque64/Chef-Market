import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../Layouts/Main";
import SingIn from "../pages/shere/SingIn/SingIn";
import SingUp from "../pages/shere/SingUp/SingUp";
import Chef from "../pages/Home/Chef/Chef";
import ChefPage from "../pages/ChefPage/ChefPage";
import ChefLayout from "../Layouts/ChefLayout";
import NotFoundPage from "../pages/shere/NotFoundPage/NotFoundPage";
import PriveteRoute from "./PriveteRoute";
import Blog from "../pages/Blog/Blog";



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
      element: <PriveteRoute><ChefLayout></ChefLayout></PriveteRoute>,
      children: [
        {
          path: ':id',
          element: <ChefPage></ChefPage>,

        },
        
      ]
    },
    {
      path: '*',
      element: <NotFoundPage></NotFoundPage>
    },
    {
      path: '/blog',
      element: <PriveteRoute><Blog></Blog></PriveteRoute>
    }
  ])

  export default router;
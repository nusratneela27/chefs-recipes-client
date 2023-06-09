import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Banner from "../pages/Home/Banner/Banner";
import ChefsCard from "../pages/Home/ChefsCard/ChefsCard";
import Blog from "../pages/Blog/Blog";
import Recipes from "../pages/Recipes/Recipes";
import Error from "../pages/Error/Error";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Banner></Banner>
            },
            {
                path: '/',
                element: <ChefsCard></ChefsCard>
            },
            {
                path: '/chefs/:id',
                element: <PrivateRoute><Recipes></Recipes></PrivateRoute>,
                loader: ({ params }) => fetch(`https://chefs-recipe-server-nusratneela27.vercel.app/chefs/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default router;
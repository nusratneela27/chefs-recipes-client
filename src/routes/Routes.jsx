import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Banner from "../pages/Home/Banner/Banner";
import ChefsCard from "../pages/Home/ChefsCard/ChefsCard";
import Blog from "../pages/Blog/Blog";
import Recipes from "../pages/Recipes/Recipes";
import Error from "../pages/Error/Error";

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
                element: <Recipes></Recipes>,
                loader: ({ params }) => fetch(`http://localhost:5000/chefs/${params.id}`)
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            }
        ]
    }
])

export default router;
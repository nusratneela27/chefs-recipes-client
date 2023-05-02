import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Banner from "../pages/Home/Banner/Banner";
import ChefsCard from "../pages/Home/ChefsCard/ChefsCard";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Banner></Banner>
            },
            {
                path: '/',
                element: <ChefsCard></ChefsCard>
            }
        ]
    }
])

export default router;
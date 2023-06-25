import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
    {
        path: '/rajib-sadhu-portfolio',
        element: <Main />,
        errorElement: '',
        children: [
            {
                path: '/rajib-sadhu-portfolio',
                element:<Home/>
            }
        ]
    }
])
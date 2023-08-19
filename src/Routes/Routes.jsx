import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: '',
        children: [
            {
                path: '/',
                element:<Home/>
            },
            
        ]
    }
])
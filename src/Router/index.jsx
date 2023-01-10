import { createBrowserRouter } from "react-router-dom";

import LayoutPrivate from "../Layaout/LayoutPrivate";
import LayoutRoot from "../Layaout/Layoutroot";
import Dashboard from "../Page/Dashboard";
import Home from "../Page/Home";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <LayoutRoot />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path:"/dashboard",
                element: <LayoutPrivate />,
                children: [
                    {
                        index: true,
                        element: <Dashboard />,
                    },
                ]
            },
        ]
    }
])
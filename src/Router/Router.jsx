import { createBrowserRouter } from "react-router-dom";
import Main from "../component/Pages/Main/Main";
import Home from "../component/Pages/Home/Home/Home";
import Login from "../component/Login/Login";
import Register from "../component/Registration/Register";
import Biography from "../component/Pages/Biography/Biography";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/biography',
                element: <Biography />
            }
        ]
    },
]);
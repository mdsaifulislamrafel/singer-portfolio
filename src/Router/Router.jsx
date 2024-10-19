import { createBrowserRouter } from "react-router-dom";
import Main from "../component/Pages/Main/Main";
import Home from "../component/Pages/Home/Home/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    },
]);
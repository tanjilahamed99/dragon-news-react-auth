import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../pages/Home/Home";
import Career from "../pages/Career/Career";
import About from "../pages/About/About";
import Details from "../pages/Detail/Details";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";

const route = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/career',
                element: <Career></Career>
            },
            {
                path: '/detail/:detailId',
                element: <Details></Details>,
                loader: () => fetch('../news.json')
            },
        ]
    }
])

export default route
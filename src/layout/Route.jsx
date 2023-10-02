import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";

const route = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        
    }
])

export default route
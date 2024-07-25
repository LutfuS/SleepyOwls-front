import {createBrowserRouter} from "react-router-dom";
import { App } from "../../../../App";
import { AuthForm } from "../Pages/Auth/authLoginForm";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/",
        element: <AuthForm/>
    },
]);
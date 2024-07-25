import {createBrowserRouter} from "react-router-dom";
import { AuthForm } from "../Pages/Auth/AuthCreateLoginForm";
import { Consent } from "../Pages/PageConsentement";
import { Layoutp } from "../Pages/Layout";
import { AuthFormLogin } from "../Pages/Auth/authLoginForm";
import { Paccueil } from "../Pages/PageAccueil";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layoutp />,
      children: [
        {
          path: "/",
          element: <Paccueil />,
        },
        {
          path: "/AuthForm",
          element: <AuthForm />,
        },
        {
            path: "/AuthFormLogin",
            element: <AuthFormLogin />,
          },
        {
          path: "/Consent",
          element: <Consent />,
        },
        {
            path: "/PageAccueil",
            element: <Paccueil />,
          },
       
        
      ],
    },
  ]);

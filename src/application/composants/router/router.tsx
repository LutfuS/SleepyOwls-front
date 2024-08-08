import {createBrowserRouter} from "react-router-dom";
import { AuthForm } from "../Pages/Auth/AuthCreateLoginForm";
import { Consent } from "../Pages/PageConsentement";
import { Layoutp } from "../Pages/Layout";
import { AuthFormLogin } from "../Pages/Auth/AuthLoginForm";
import { Paccueil } from "../Pages/PageAccueil";
import { Horloge } from "../Pages/TimerAlarm";
import { GraphStatistique } from "../Pages/PageStatistique";


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
          {
            path: "/TimerAlarm",
            element: <Horloge />,
          },
          {
            path: "/PageStatistique",
            element: <GraphStatistique/>
          }
       
       
        
      ],
    },
  ]);

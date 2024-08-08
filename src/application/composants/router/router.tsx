import {createBrowserRouter} from "react-router-dom";
import { AuthForm } from "../Pages/Auth/AuthCreateLoginForm";
import { Consent } from "../Pages/PageConsentement";
import { Layoutp } from "../Pages/Layout";
import { AuthFormLogin } from "../Pages/Auth/AuthLoginForm";
import { Paccueil } from "../Pages/PageAccueil";
import { Horloge } from "../Pages/TimerAlarm";
import { GraphStatistique } from "../Pages/PageStatistique";
import { Settings } from "../Pages/PageSettings";
import { Journal } from "../Pages/PageJournal";


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
            path: "/PageSommeil",
            element: <Horloge />,
          },
          {
            path: "/PageStatistique",
            element: <GraphStatistique/>
          },
          {
            path: "/PageSettings",
            element: <Settings/>
          },
          {
            path: "/PageJournal",
            element: <Journal/>
          }

       
       
        
      ],
    },
  ]);

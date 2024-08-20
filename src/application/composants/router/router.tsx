import {createBrowserRouter} from "react-router-dom";
import { AuthForm } from "../Pages/Auth/AuthCreateLoginForm";
import { Consent } from "../Pages/PageConsentement";
import { Layoutp } from "../Pages/Layout";
import { AuthConnexionForm } from "../Pages/Auth/AuthConnexionForm";
import { Paccueil } from "../Pages/PageAccueil";
import { Horloge } from "../Pages/TimerAlarm";
import { GraphStatistique } from "../Pages/PageStatistique";
import { Settings } from "../Pages/PageSettings";
import { Journal } from "../Pages/PageJournal";
import { Notif } from "../Pages/Parametre_notifications";
import { Compte } from "../Pages/Parametre_compte";
import { Doc } from "../Pages/Parametre_documentations";
import { Rappel } from "../Pages/Parametre_Rappel";
import { Conseil } from "../Pages/Parametre_conseil";


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
            element: <AuthConnexionForm />,
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
          },
          {
            path: "/Parametre_notifications",
            element: <Notif/>
          },
          {
            path: "/Parametre_compte",
            element: <Compte/>
          },
          {
            path: "/Parametre_documentations",
            element: <Doc/>
          },
          {
            path: "/Parametre_Rappel",
            element: <Rappel/>
          },
          {
            path: "/Parametre_conseil",
            element: <Conseil/>
          },
          
          


       
       
        
      ],
    },
  ]);

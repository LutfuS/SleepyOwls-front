import { NavLink, Outlet } from "react-router-dom";
import React from "react";

export const Layoutp: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div className="">
        <Outlet />
      </div>

      <div className="bg-blue-500 p-4 shadow-md flex justify-around items-center text-white space-x-4">
        <NavLink to="/" className="hover:text-gray-200">
          Home
        </NavLink>
        <NavLink to="/AuthForm" className="hover:text-gray-200">
          Créer
        </NavLink>
        <NavLink to="/AuthFormLogin" className="hover:text-gray-200">
          Se connecter
        </NavLink>
        {/* <NavLink to="/Consent" className="hover:text-gray-200">
          Consentement
        </NavLink> */}
        {/* <NavLink to="/PageAccueil" className="hover:text-gray-200">
          Sommeil
        </NavLink> */}
        <NavLink to="/TimerAlarm" className="hover:text-gray-200">
          Horloge
        </NavLink>
        <NavLink to="/PageStatistique" className="hover:text-gray-200">
         Statistiques
        </NavLink>
      </div>
    </div>
  );
};

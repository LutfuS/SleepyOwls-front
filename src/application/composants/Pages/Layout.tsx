import { NavLink, Outlet } from "react-router-dom";
import React from "react";
import logoStat from '../assets/Chart Bar.png';
import logoAccueil from '../assets/Crescent Moon.png';
import logoJournal from '../assets/Moleskine.png';
import logoSettings from '../assets/Settings.png';
import logoHome from '../assets/Vector.png';

export const Layoutp: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between relative font-roboto">
      <div className="flex-grow">
        <Outlet />
      </div>

      <div className="bg-[#083344] p-4 shadow-md flex justify-around items-center text-white">
        <NavLink to="/" className="hover:text-gray-200 flex flex-col items-center">
          <img src={logoHome} alt="Home Icon" className="w-6 h-6 mb-1" />
          <span className="text-xs sm:text-sm">Home</span>
        </NavLink>

        <NavLink to="/PageSommeil" className="hover:text-gray-200 flex flex-col items-center">
          <img src={logoAccueil} alt="Sommeil Icon" className="w-6 h-6 mb-1" />
          <span className="text-xs sm:text-sm">Sommeil</span>
        </NavLink>

        <NavLink to="/PageJournal" className="hover:text-gray-200 flex flex-col items-center">
          <img src={logoJournal} alt="Journal Icon" className="w-6 h-6 mb-1" />
          <span className="text-xs sm:text-sm">Journal</span>
        </NavLink>

        <NavLink to="/PageStatistique" className="hover:text-gray-200 flex flex-col items-center">
          <img src={logoStat} alt="Statistiques Icon" className="w-6 h-6 mb-1" />
          <span className="text-xs sm:text-sm">Statistiques</span>
        </NavLink>

        <NavLink to="/PageSettings" className="hover:text-gray-200 flex flex-col items-center">
          <img src={logoSettings} alt="Paramètres Icon" className="w-6 h-6 mb-1" />
          <span className="text-xs sm:text-sm">Paramètres</span>
        </NavLink>

        
      </div>
    </div>
  );
};

import { NavLink, Outlet } from "react-router-dom";

export const Settings = () => {
  return (
    <>
      <div className="bg-[#091928] min-h-screen flex flex-col justify-between text-white p-4 md:p-8">
        <div className="items-start">
          <Outlet />
        </div>

        <h1 className="text-left text-2xl md:text-3xl font-semibold mb-6">Paramètres</h1>

        <div className="flex flex-col items-start mb-10">
          <img src={""} alt="" className="mb-3 w-8 h-8 md:w-10 md:h-10" />
          <h2 className="text-left text-xl md:text-2xl font-medium mb-2">Personnel</h2>
          <NavLink to="/Parametre_compte" className="hover:text-gray-200 text-base md:text-lg mt-1">
            Compte
          </NavLink>
          <NavLink to="/PageConsentement" className="hover:text-gray-200 text-base md:text-lg mt-2">
            Consentement et confidentialité
          </NavLink>
        </div>

        <div className="flex flex-col items-start mb-10">
          <img src={""} alt="" className="mb-3 w-8 h-8 md:w-10 md:h-10" />
          <h2 className="text-left text-xl md:text-2xl font-medium mb-2">Alarme</h2>
          <NavLink to="/Parametre_Vibration" className="hover:text-gray-200 text-base md:text-lg mt-1">
            Vibration
          </NavLink>
          <NavLink to="/" className="hover:text-gray-200 text-base md:text-lg mt-2">
            Détection du mouvement
          </NavLink>
        </div>

        <div className="flex flex-col items-start mb-10">
          <img src={""} alt="" className="mb-3 w-8 h-8 md:w-10 md:h-10" />
          <h2 className="text-left text-xl md:text-2xl font-medium mb-2">Notifications et rappels</h2>
          <NavLink to="/Parametre_Rappel" className="hover:text-gray-200 text-base md:text-lg mt-1">
            Rappel pour le coucher
          </NavLink>
          <NavLink to="/Parametre_notifications" className="hover:text-gray-200 text-base md:text-lg mt-2">
            Préférences de notifications
          </NavLink>
        </div>

        <div className="flex flex-col items-start mb-10">
          <NavLink to="/Parametre_documentations" className="hover:text-gray-200 text-base md:text-lg mt-1">
            <img src={""} alt="" className="mb-3 w-8 h-8 md:w-10 md:h-10" />
            <h2 className="text-left text-xl md:text-2xl font-medium mb-2">Documentations</h2>
          </NavLink>
        </div>

        <div className="flex flex-col items-start mb-10">
          <NavLink to="/Parametre_conseil" className="hover:text-gray-200 text-base md:text-lg mt-1">
            <img src={""} alt="" className="mb-3 w-8 h-8 md:w-10 md:h-10" />
            <h2 className="text-left text-xl md:text-2xl font-medium mb-2">Conseil</h2>
          </NavLink>
        </div>
      </div>
    </>
  );
};

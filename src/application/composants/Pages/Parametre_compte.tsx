import { logout } from "../router/AuthRouter";
import { useNavigate } from "react-router-dom";

export const Compte = () => {
const navigate = useNavigate()
const Logout = ()=> {
  logout()
  navigate('/')
}



  return (
    <div className="bg-[#091928] min-h-screen flex flex-col items-center text-white p-4 md:p-8">

      <div className="w-full max-w-3xl text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-semibold mb-6">Compte</h1>
    
        
        
        <button onClick={Logout}>Déconnexion</button>
        
      </div>

      
      <div className="w-full max-w-3xl border-t border-gray-600 my-8" />

      
      <div className="w-full max-w-3xl text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">À propos</h2>
        <p className="text-base md:text-lg">
          Vous pouvez gérer les paramètres de votre compte, tels que les informations de connexion et votre mot de passe.
        </p>
      </div>
    </div>
  );
};
  
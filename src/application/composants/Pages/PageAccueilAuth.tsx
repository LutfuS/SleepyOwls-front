import { NavLink } from 'react-router-dom';
import logo from '../assets/Logo.png';
import fond from '../assets/fond.jpg';

<link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet"></link>

export const PaccueilAuth = () => {
    return (
        <>
      
            <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${fond})` }}>
               
                <div className="absolute top-0 right-0 flex space-x-4 p-4 text-white z-10">
                    <NavLink to="/AuthForm" className="hover:text-gray-200">
                        Créer
                    </NavLink>
                    <NavLink to="/AuthFormLogin" className="hover:text-gray-200">
                        Se connecter
                    </NavLink>
                </div>

                
                <div className="absolute top-0 left-0 p-4 z-10">
                    <img src={logo} alt="logo" className="w-16 h-auto" />
                </div>

                <div className="flex items-center justify-center h-full">
                    <h1 className="font-pacifico text-4xl text-white">SleepyOwls</h1>
                </div>
               
            </div>
        </>
    );
};

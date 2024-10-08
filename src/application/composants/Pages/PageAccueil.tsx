
import logo from '../assets/Logo.png';
import fond from '../assets/fond.jpg';
import { TutoList } from '../../tutoapp/components/TutoListe';
<link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet"></link>

export const Paccueil = () => {
    return (
        <>
      
            <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${fond})` }}>
               
            

                
                <div className="absolute top-0 left-0 p-4 z-10">
                    <img src={logo} alt="logo" className="w-16 h-auto" />
                </div>

            
                <div className="flex items-center justify-center h-full">
                    <h1 className="font-pacifico text-4xl text-white">SleepyOwls</h1>
                </div>
                <TutoList/>
            </div>
        </>
    );
};

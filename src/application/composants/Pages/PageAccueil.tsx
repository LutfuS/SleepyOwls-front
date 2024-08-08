import logo from '../assets/Logo.png';
import fond from '../assets/fond.jpg';

export const Paccueil = () => {
    return (
        <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${fond})` }}>
            <div className="absolute top-0 left-0 p-4">
                <img src={logo} alt="logo" className="w-16 h-auto" />
            </div>
            <div className="flex items-center justify-center h-full">
                <h1 className="text-white text-4xl">SleepyOwls</h1>
            </div>
        </div>
    );
}

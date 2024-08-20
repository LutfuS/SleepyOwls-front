export const Vibration = () => {
    return (
      <div className="bg-[#091928] min-h-screen flex flex-col items-center text-white font-roboto">
        {/* Titre principal en haut, centré */}
        <div className="w-full flex justify-center mt-4">
          <h1 className="text-4xl font-bold mb-8 text-center">
            Vibration
          </h1>
        </div>
  
        {/* Contenu principal */}
        <div className="flex flex-col items-center w-full p-4">
          <div className="space-y-4 mb-8">
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="Vib1" className="form-checkbox text-[#1D9BF0]" />
              <label htmlFor="Vib1" className="text-lg">Secondaire</label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="Vib2" className="form-checkbox text-[#1D9BF0]" />
              <label htmlFor="Vib2" className="text-lg">Jamais</label>
            </div>
          </div>
  
          {/* Ligne de séparation */}
          <div className="w-3/4 border-t border-gray-600 my-8" />
  
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-4">
              À propos
            </h2>
            <p className="text-lg opacity-75">
              Vous pouvez gérer le mode de vibration que vous voulez, l'activer ou non.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  
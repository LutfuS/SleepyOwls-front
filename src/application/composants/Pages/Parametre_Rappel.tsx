export const Rappel = () => {
    return (
      <div className="bg-[#091928] min-h-screen flex flex-col items-center text-white p-4 md:p-8">
       
        <div className="w-full text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold">Rappel pour le coucher</h1>
        </div>
  
     
        <div className="flex flex-col items-center w-full">
          <div className="flex items-center space-x-2 mb-6">
            <input type="checkbox" id="Rap1" className="form-checkbox text-[#1D9BF0]" />
            <label htmlFor="Rap1" className="text-lg md:text-xl">
              Rappel toutes les 5 minutes
            </label>
          </div>
          
          <div className="flex items-center space-x-2 mb-6">
            <input type="checkbox" id="Rap2" className="form-checkbox text-[#1D9BF0]" />
            <label htmlFor="Rap2" className="text-lg md:text-xl">
              Rappel toutes les 10 minutes
            </label>
          </div>
  
          <div className="flex items-center space-x-2 mb-6">
            <input type="checkbox" id="Rap3" className="form-checkbox text-[#1D9BF0]" />
            <label htmlFor="Rap3" className="text-lg md:text-xl">
              Rappel toutes les 15 minutes
            </label>
          </div>
        </div>
  
       
        <div className="w-3/4 border-t border-gray-600 my-8" />
  
       
        <div className="w-full text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">À propos</h2>
          <p className="text-base md:text-lg">
            Cette option permet d'activer un rappel qui se déclenchera selon l'intervalle choisi.
          </p>
        </div>
      </div>
    );
  };
  
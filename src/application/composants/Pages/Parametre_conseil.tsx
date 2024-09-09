export const Conseil = () => {
    return (
      <div className="bg-[#091928] min-h-screen flex flex-col items-center text-white p-4 md:p-8">
        
        <div className="w-full max-w-3xl text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-semibold mb-6">Activer les conseils</h1>
          <div className="flex items-center justify-center space-x-4">
            <input
              type="checkbox"
              id="C1"
              className="form-checkbox text-blue-400 h-6 w-6"
            />
            <label htmlFor="C1" className="text-lg md:text-xl">
              Activer les conseils
            </label>
          </div>
        </div>
  
       
        <div className="w-full max-w-3xl border-t border-gray-600 my-8" />
  
        <div className="w-full max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">À propos</h2>
          <p className="text-base md:text-lg">
            Ici, vous trouverez l'option pour activer les conseils lors du lancement de l'application, pouvant améliorer la qualité de votre sommeil.
          </p>
        </div>
      </div>
    );
  };
  
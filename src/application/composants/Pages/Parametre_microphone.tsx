

export const Microphone = () => {
  return (
    <div className="bg-[#091928] min-h-screen flex flex-col items-center text-white p-4 md:p-8">
      {/* Titre principal */}
      <div className="w-full text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">Microphone</h1>
      </div>

      {/* Options de détection microphone */}
      <div className="flex flex-col items-center w-full">
        <div className="flex items-center space-x-2 mb-6">
          <input type="checkbox" id="S1" className="form-checkbox text-[#1D9BF0]" />
          <label htmlFor="S1" className="text-lg md:text-xl">Activer le microphone</label>
        </div>

        {/* Ligne de séparation */}
        <div className="w-3/4 border-t border-gray-600 my-8" />

        {/* Section À propos */}
        <div className="w-full text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">À propos</h2>
          <p className="text-base md:text-lg">
            Cette option permet au microphone de votre appareil d'enregistrer les sons durant votre sommeil, cela nous permettra de les analyser et que vous puissiez consulter le résumé de vos sons.
          </p>
        </div>
      </div>
    </div>
  );
};

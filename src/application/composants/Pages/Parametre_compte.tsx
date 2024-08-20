export const Compte = () => {
    return (
      <div className="bg-[#091928] min-h-screen flex flex-col items-center text-white p-4 md:p-8">
        {/* Section Titre Compte */}
        <div className="w-full max-w-3xl text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-semibold mb-6">Compte</h1>
          {/* Commentaires sur les boutons */}
          {/* <button onClick={}>Effacez vos données</button> */}
          {/* <button onClick={}>Effacez vos données et votre compte</button> */}
          {/* <button onClick={}>Déconnexion</button> */}
          {/* <button onClick={}>Changez votre mot de passe</button> */}
        </div>
  
        {/* Ligne séparatrice */}
        <div className="w-full max-w-3xl border-t border-gray-600 my-8" />
  
        {/* Section À propos */}
        <div className="w-full max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">À propos</h2>
          <p className="text-base md:text-lg">
            Vous pouvez gérer les paramètres de votre compte, tels que les informations de connexion et votre mot de passe.
          </p>
        </div>
      </div>
    );
  };
  
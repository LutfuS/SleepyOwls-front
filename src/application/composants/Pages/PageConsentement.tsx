import React from 'react';

export const Consent: React.FC = () => {
  return (
    <div className="bg-[#091928] text-white min-h-screen flex flex-col items-center p-6 md:p-8">
      {/* Section Titre */}
      <div className="w-full max-w-3xl text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-semibold mb-6">
          Consentement pour la collecte et le traitement des données de sommeil
        </h1>
      </div>
      
      {/* Contenu principal */}
      <div className="w-full max-w-3xl text-center mb-8">
        <p className="text-base md:text-lg mb-6">
          Nous utilisons les données de nos utilisateurs comme données de santé et nous classifions ces données de santé afin de vous offrir un suivi totalement personnalisé et adapté à vos besoins.
        </p>
        <p className="text-base md:text-lg mb-6">
          Votre confidentialité est importante pour nous afin de vous assurer que l'utilisation de notre application se déroule en toute sécurité.
        </p>
        <p className="text-base md:text-lg mb-6">
          Pour plus d'informations sur la manière dont nous utilisons vos données et vos droits, consultez notre politique de confidentialité et nos conditions d'utilisation.
        </p>
      </div>
      
      {/* Ligne séparatrice */}
      <div className="w-full max-w-3xl border-t border-gray-600 my-8" />
    </div>
  );
};

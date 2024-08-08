import React from 'react';

export const Consent: React.FC = () => {
  return (
    <div className="p-6">
      <div className="text-lg font-semibold mb-4">
        Consentement pour la collecte et le traitement des données de sommeil
      </div>
      <div className="mb-4">
        <p>
          Nous utilisons les données de nos utilisateurs comme données de santé et nous classifions ces données de santé afin de vous offrir un suivi totalement personnalisé et adapté à vos besoins.
        </p>
      </div>
      <div className="mb-4">
        <p>
          Votre confidentialité est importante pour nous afin de vous assurer que l'utilisation de notre application se déroule en toute sécurité.
        </p>
      </div>
      <div className="mb-4">
        <p>
          Pour plus d'informations sur la manière dont nous utilisons vos données et vos droits, consultez notre politique de confidentialité et nos conditions d'utilisation.
        </p>
      </div>
      
     
      
    </div>
  );
};
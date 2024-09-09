import React, { useState } from 'react';
import { addOneUser } from '../../router/AuthRouter';
import { useNavigate } from 'react-router-dom';

export const AuthForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>(''); 
  const [Cpassword, setCPassword] = useState<string>(''); 
  const navigate = useNavigate()
  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addOneUser(email, password)
    navigate("/")
  };

  return (
    
    <div 
      className="flex items-center justify-center min-h-screen bg-[#091928]" 
    >
      <div className="bg-gray-100 bg-opacity-90 p-8 rounded-lg shadow-lg max-w-md w-full md:w-1/3">
       
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <div className=''>
              <h1>BIENVENUE</h1>
            </div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) =>setEmail(e.currentTarget.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Mot de passe:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            
          </div>
          <div>
            <label htmlFor="Cpassword" className="block text-sm font-medium text-gray-700">Confirmer le mot de passe:</label>
            <input
              type="Cpassword"
              id="Cpassword"
              value={Cpassword}
              onChange={(e) => setCPassword(e.currentTarget.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            
          </div>
          <div className="flex items-center mb-4">
        <input type="checkbox" className="mr-4" id="consent-donnée1" />
        <label htmlFor="consent-donnée1" className="text-sm">
          Autorisez-vous «SleepyOwls» à stocker vos données de santé sur nos serveurs sécurisés.
        </label>
      </div>
     

      <div className="flex items-center">
        <input type="checkbox" className="mr-4" id="consent-donnée2" />
        <label htmlFor="consent-donnée2" className="text-sm">
          Autorisez-vous «SleepyOwls» à traiter vos données de santé pour améliorer la fonctionnalité de l’application.
        </label>
      </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
           Créer
          </button>
         
        </form>
      </div>
    </div>
  );
};



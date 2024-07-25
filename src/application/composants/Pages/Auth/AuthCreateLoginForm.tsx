import React, { useState } from 'react';

export const AuthForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>(''); 
  const [Cpassword, setCPassword] = useState<string>(''); 

  const handleChange = (setter: React.Dispatch<React.SetStateAction<string>>) => 
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setter(e.target.value);
    };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

  };

  return (
    
    <div 
      className="flex items-center justify-center min-h-screen bg-[#091928]" // Couleur de fond
    >
      <div className="bg-gray-100 bg-opacity-90 p-8 rounded-lg shadow-lg max-w-md w-full md:w-1/3">
       
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <div className='bg-red-500'>
              <h1>BIENVENUE</h1>
            </div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={handleChange(setEmail)}
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
              onChange={handleChange(setPassword)}
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
              onChange={handleChange(setCPassword)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
           Créer
          </button>
        </form>
      </div>
    </div>
  );
};



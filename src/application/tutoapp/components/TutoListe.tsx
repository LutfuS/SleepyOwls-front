import { useState, useEffect } from 'react';
import { tuto } from './TutoData';

export const TutoList = () => {
  const [Tuto, setTuto] = useState({ texte: '', image: '' });
  const [affichage, setAffichage] = useState(true); 

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * tuto.length);
    setTuto(tuto[randomIndex]);
  }, []);

  const handleCheckboxChange = (event: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
    setAffichage(event.target.checked); 
  };

  return (
    <div className='flex flex-col min-h-screen text-white'>
    
      <div className='flex-grow flex items-center justify-center p-4'>
        {affichage && (
          <div className='text-center max-w-lg'>
            <img
              src={Tuto.image}
              alt={Tuto.texte}
              className='w-full max-w-md h-auto rounded-lg shadow-lg mb-6 mx-auto'
            />
            <h1 className='text-2xl font-semibold font-roboto leading-snug mb-4'>
              {Tuto.texte}
            </h1>
          </div>
        )}
      </div>
      
      
      <div className='p-4'>
        <label className='block text-lg text-center'>
          <input
            type='checkbox'
            checked={affichage}
            onChange={handleCheckboxChange}
            className='mr-2 leading-tight'
          />
          <span>Afficher</span>
        </label>
      </div>
    </div>
  );
};

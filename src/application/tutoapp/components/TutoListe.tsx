import { useState, useEffect } from 'react';
import { tuto } from './TutoData';

export const TutoList = () => {
  const [currentTuto, setCurrentTuto] = useState({ texte: '', image: '' });

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * tuto.length);
    setCurrentTuto(tuto[randomIndex]);
  }, []);

  return (
    <div className='bg-[#091928] text-white min-h-screen flex items-center justify-center p-4'>
      <div className='text-center max-w-lg mx-auto'>
        <img
          src={currentTuto.image}
          alt={currentTuto.texte}
          className='w-full max-w-md h-auto rounded-lg shadow-lg mb-6 mx-auto'
        />
        <h1 className='text-2xl font-semibold font-roboto leading-snug mb-4'>
          {currentTuto.texte}
        </h1>
        
      </div>
    </div>
  );
};

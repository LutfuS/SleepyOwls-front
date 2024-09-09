import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

export const Microphone = () => {

  const [isChecked, setIsChecked] = useState(false);
  
  
  const handleCheckboxChange = () => {
  const checked = !isChecked;
  setIsChecked(checked);
  
  
  if (checked) {
    toast.success("L'enregistrement du microphone est activé");
  } else {
    toast.info("L'enregistrement du microphone est desactivé");
  }
  };
  
  return (
    <div className="bg-[#091928] min-h-screen flex flex-col items-center text-white p-4 md:p-8">
    <div className="w-full text-center mb-8">
    <h1 className="text-3xl md:text-4xl font-bold">Microphone</h1>
  </div>
  <div className="">
    <label>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
     Microphone
    </label>
    
  
    
    <ToastContainer />
   

  </div>
  <div className="w-2/4 border-t border-gray-600 my-8" />
  <div className="w-full text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">À propos</h2>
          <p className="text-base md:text-lg">
            Cette option permet au microphone de votre appareil d'enregistrer les sons durant votre sommeil, cela nous permettra de les analyser et que vous puissiez consulter le résumé de vos sons.
          </p>
        </div>
  </div>
  );
  };
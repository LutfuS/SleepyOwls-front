import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Vibration = () => {
  const [checkbox, setIsCheckbox] = useState(false);

  const handleCheckboxChange = () => {
    const checked = !checkbox; 
    setIsCheckbox(checked);

    toast.dismiss(); 

    if (checked) {
      toast.success("Le mode secondaire a été activé!");
    } else {
      toast.info("Le mode secondaire a été désactivé.");
    }
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={checkbox}
          onChange={handleCheckboxChange}
        />
        Secondaire
      </label>

      <ToastContainer limit={3} autoClose={3000} />
    </div>
  );
};

export const Vibration1 = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckbox = () => {
    const checked = !isChecked; 
    setIsChecked(checked);

    toast.dismiss(); 

    if (checked) {
      toast.success("Vibration activée!");
    } else {
      toast.info("Vibration désactivée.");
    }
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckbox}
        />
        Vibration
      </label>

      <ToastContainer limit={3} autoClose={3000} />
    </div>
  );
};

export const ParamVibration = () => {
  return (
    <div className="min-h-screen bg-[#091928] flex flex-col items-center text-white">
      <div className="flex flex-col items-center w-full">
        <div className="max-h-screen flex flex-col items-center text-white p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8">Vibration</h1>
          <Vibration />
          <Vibration1 />
          <div className="w-3/4 border-t border-gray-600 my-8" />
          <div className="w-full text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">À propos</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl">
              Cette option permet de paramétrer l'option de vibration.
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

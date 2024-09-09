import { useState, useEffect, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Rappel5 = () => {
  const [isChecked, setIsChecked] = useState(false);
  const intervalRef = useRef<number | null>(null)

  const handleCheckbox = () => {
    const checked = !isChecked;
    setIsChecked(checked);

    toast.dismiss(); 

    if (checked) {
      toast.success("Rappel activée toutes les 5 minutes!");
      rappelInterval(); 
    } else {
      toast.info("Rappel désactivée.");
      stopRappelInterval(); 
    }
  };

  const rappelInterval = () => {
    if (intervalRef.current) return; 

 
    intervalRef.current = setInterval(() => {
      toast.success("Rappel activé toutes les 5 minutes!");
    }, 300000); 
  };

  const stopRappelInterval = () => {
   
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null; 
    }
  };


  useEffect(() => {
    return () => stopRappelInterval();
  }, []);

  return (
    <div>
      <label>
        <input type="checkbox" checked={isChecked} onChange={handleCheckbox} />
        Rappel toutes les 5 minutes
      </label>

      <ToastContainer limit={3} autoClose={1000} />
    </div>
  );
};


export const Rappel10 = () => {
  const [isChecked, setIsChecked] = useState(false);
  const intervalRef = useRef<number | null>(null)

  const handleCheckbox = () => {
    const checked = !isChecked;
    setIsChecked(checked);

    toast.dismiss(); 

    if (checked) {
      toast.success("Rappel activée toutes les 5 minutes!");
      rappelInterval(); 
    } else {
      toast.info("Rappel désactivée.");
      stopRappelInterval(); 
    }
  };

  const rappelInterval = () => {
    if (intervalRef.current) return; 

 
    intervalRef.current = setInterval(() => {
      toast.success("Rappel activé toutes les 5 minutes!");
    }, 600000); 
  };

  const stopRappelInterval = () => {
   
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null; 
    }
  };


  useEffect(() => {
    return () => stopRappelInterval();
  }, []);

  return (
    <div>
      <label>
        <input type="checkbox" checked={isChecked} onChange={handleCheckbox} />
        Rappel toutes les 10 minutes
      </label>

      <ToastContainer limit={3} autoClose={1000} />
    </div>
  );
};


export const Rappel15 = () => {
  const [isChecked, setIsChecked] = useState(false);
  const intervalRef = useRef<number | null>(null)

  const handleCheckbox = () => {
    const checked = !isChecked;
    setIsChecked(checked);

    toast.dismiss(); 

    if (checked) {
      toast.success("Rappel activée toutes les 10 minutes!");
      rappelInterval(); 
    } else {
      toast.info("Rappel désactivée.");
      stopRappelInterval(); 
    }
  };

  const rappelInterval = () => {
    if (intervalRef.current) return; 

 
    intervalRef.current = setInterval(() => {
      toast.success("Rappel activé toutes les 15 minutes!");
    }, 900000); 
  };

  const stopRappelInterval = () => {
   
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null; 
    }
  };


  useEffect(() => {
    return () => stopRappelInterval();
  }, []);

  return (
    <div>
      <label>
        <input type="checkbox" checked={isChecked} onChange={handleCheckbox} />
        Rappel toutes les 15 minutes
      </label>

      <ToastContainer limit={3} autoClose={1000} />
    </div>
  );
};



export const Rappel = () => {

  return(
    <div>
     <div className="min-h-screen bg-[#091928] flex flex-col items-center text-white">
      <div className="flex flex-col items-center w-full">
        <div className="max-h-screen flex flex-col items-center text-white p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8">Rappel</h1>
          <div className="mb-8">
            <div className="mb-4">
          <Rappel5 />
          </div>
          <div className="mb-4">
          <Rappel10/>
          </div>
          <div className="mb-4">
          <Rappel15/>
          </div>
          </div>
          <div className="w-3/4 border-t border-gray-600 my-8" />
          <div className="w-full text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">À propos</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl">
              Cette option permet de configurer l'interval entre les rappels.
            </p>
          </div>
          
        </div>
      </div>
    </div>
    </div>
  )
}
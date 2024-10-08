import { useState } from "react";
import { toast , ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const NotificationS = () => {

const [isChecked, setIsChecked] = useState(false);


const handleCheckboxChange = () => {
const checked = !isChecked;
setIsChecked(checked);


if (checked) {
  toast.success("L'envoie de sms a été activé");
} else {
  toast.info("L'envoie de sms a été désSactivé");
}
};

return (
<div className="">
  <label>
    <input
      type="checkbox"
      checked={isChecked}
      onChange={handleCheckboxChange}
    />
   Sms
  </label>
  

  
  <ToastContainer />
</div>
);
};



export const Sms = () => {

const [isChecked, setIsChecked] = useState(false);

const handleCheckboxChange = () => {
const checked = !isChecked;
setIsChecked(checked);


if (checked) {
  toast.success("L'envoie d'email a été activé!");
} else {
  toast.info("L'envoie d'email a été désactivé!");
}
};

return (
<div className="">
  <label>
    <input
      type="checkbox"
      checked={isChecked}
      onChange={handleCheckboxChange}
    />
   Email
  </label>
  

  
  <ToastContainer />
</div>
);
};


export const ParamNotif = () => {
  return (
    <div className="min-h-screen bg-[#091928] flex flex-col items-center text-white">
      <div className="flex flex-col items-center w-full">
        <div className="max-h-screen flex flex-col items-center text-white p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8">Notification</h1>
          <div className="mb-4">
          <NotificationS />
          </div>
          <Sms />

        
          
         <div className="w-3/4 border-t border-gray-600 my-8" />

          <div className="w-full text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">À propos</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl">
              Cette option permet de paramétrer vos notifications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

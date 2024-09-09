import { useState, useEffect } from "react";
import { PopUp1 } from "../../../PopUP/PopUp1";


export const Horloge = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [alarmTime, setAlarmTime] = useState({ hours: 0, minutes: 0 });
  const [alarmSet, setAlarmSet] = useState(false);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

 
  useEffect(() => {
    if (
      alarmSet &&
      currentTime.getHours() === alarmTime.hours &&
      currentTime.getMinutes() === alarmTime.minutes &&
      currentTime.getSeconds() === 0
    ) {
      alert("Wakey Wakey! Time's up!");
      setAlarmSet(false);
    }
  }, [currentTime, alarmSet, alarmTime]);


  const handleSetAlarm = () => {
    setAlarmSet(true);
  };

  const handleResetAlarm = () => {
    setAlarmSet(false);
    setAlarmTime({ hours: 0, minutes: 0 });
  };

  
  const padNumber = (num: number) => {
    return num < 10 ? `0${num}` : `${num}`;
  };

  return (
    <div className="bg-[#091928] flex flex-col items-center justify-center min-h-screen text-white relative">
      
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-6xl font-mono text-white">
        {`${padNumber(currentTime.getHours())}:${padNumber(currentTime.getMinutes())}:${padNumber(currentTime.getSeconds())}`}
      </div>
      <PopUp1/>
     
     
      
      <div className="bg-gray-800 p-8 rounded-lg flex flex-col items-center shadow-lg">
        <div className="mt-4">
          <h2 className="text-center text-2xl font-semibold mb-4">Réglage de l'alarme</h2>
          
          <div className="flex items-center mb-4">
          
            <select
              className="bg-gray-700 text-white p-2 m-2 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={alarmTime.hours}
              onChange={(e) => setAlarmTime({ ...alarmTime, hours: parseInt(e.target.value) })}
            >
              {Array.from({ length: 24 }, (_, i) => (
                <option key={i} value={i}>
                  {padNumber(i)}
                </option>
              ))}
            </select>
            
            <select
              className="bg-gray-700 text-white p-2 m-2 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={alarmTime.minutes}
              onChange={(e) => setAlarmTime({ ...alarmTime, minutes: parseInt(e.target.value) })}
            >
              {Array.from({ length: 12 }, (_, i) => (
                <option key={i} value={i * 5}>
                  {padNumber(i * 5)}
                </option>
              ))}
            </select>
          </div>
          
      
          {alarmSet && (
            <div className="mt-4 text-xl font-medium">
              L'alarme est réglée pour {padNumber(alarmTime.hours)}:{padNumber(alarmTime.minutes)}
            </div>
          )}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105"
          onClick={handleSetAlarm}
        >
          Lancer
        </button>
        <button
          className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105"
          onClick={handleResetAlarm}
        >
          Annuler
        </button>
      </div>
    </div>
  );
};

import  { useState, useEffect } from "react";

export const  Horloge =()=> {
  // State variables
  const [currentTime, setCurrentTime] = useState(new Date());
  const [alarmTime, setAlarmTime] = useState({ hours: 0, minutes: 0 });
  const [alarmSet, setAlarmSet] = useState(false);

  // Modifier le temps réel toute les secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Pour voir si c'est l'heure de reveil
  useEffect(() => {
    if (
      alarmSet &&
      currentTime.getHours() === alarmTime.hours &&
      currentTime.getMinutes() === alarmTime.minutes &&
      currentTime.getSeconds() === 0
    ) {
      alert("Wakey Wakey its time for schoo! Time's up!");
      setAlarmSet(false);
    }
  }, [currentTime, alarmSet, alarmTime]);

  // Lancer l'alarme
  const handleSetAlarm = () => {
    setAlarmSet(true);
  };

  // Reset l'alarme
  const handleResetAlarm = () => {
    setAlarmSet(false);
    setAlarmTime({ hours: 0, minutes: 0 });
  };

  // Convert le nombre en 2 chiffres
  const padNumber = (num: number) => {
    return num < 10 ? `0${num}` : `${num}`;
  };

  return (
    <div className="bg-[#091928] flex flex-col items-center justify-center min-h-screen  to-gray-900 text-white">
      {/* Montre le temps réel*/}
      <div className="text-6xl font-mono mb-8">
        {`${padNumber(currentTime.getHours())}:${padNumber(currentTime.getMinutes())}:${padNumber(currentTime.getSeconds())}`}
      </div>
      <div className="mt-4">
        <h2 className="text-center text-2xl">Régler l'alarme</h2>
        <div className="flex items-center mt-2">
          {/* liste déroulante heures */}
          <select
            className="bg-gray-700 text-white p-2 m-2 rounded"
            value={alarmTime.hours}
            onChange={(e) => setAlarmTime({ ...alarmTime, hours: parseInt(e.target.value) })}
          >
            {Array.from({ length: 24 }, (_, i) => (
              <option key={i} value={i}>
                {padNumber(i)}
              </option>
            ))}
          </select>
          {/* liste déroulante minutes */}
          <select
            className="bg-gray-700 text-white p-2 m-2 rounded"
            value={alarmTime.minutes}
            onChange={(e) => setAlarmTime({ ...alarmTime, minutes: parseInt(e.target.value) })}
          >
            {Array.from({ length: 12 }, (_, i) => (
              <option key={i} value={i * 5}>
                {padNumber(i * 5)}
              </option>
            ))}
          </select>
          {/* Button pour lancer l'alarme */}
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
            onClick={handleSetAlarm}
          >
          Lancer
          </button>
          {/* Button pour reset l'alarme*/}
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-2"
            onClick={handleResetAlarm}
          >
           Annuler
          </button>
        </div>
      </div>
      {/* Montre l'alarme */}
      {alarmSet && (
        <div className="mt-4 text-xl">
          L'alarme est lancer pour {padNumber(alarmTime.hours)}:{padNumber(alarmTime.minutes)}
        </div>
      )}
    </div>
  );
}



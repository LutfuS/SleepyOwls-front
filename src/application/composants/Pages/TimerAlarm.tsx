import { useState, useEffect } from "react";



export const Horloge = () => {
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
    <div className="bg-[#091928] flex flex-col items-center justify-center min-h-screen text-white relative">
      {/* Montre le temps réel et l'alarme */}
      <div className="bg-gray-800 p-8 rounded-lg flex flex-col items-center">
      <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="29" height="29" fill="url(#pattern0_96_716)"/>
<defs>
<pattern id="pattern0_96_716" patternContentUnits="objectBoundingBox" width="1" height="1">
<use href="#image0_96_716" transform="scale(0.00195312)"/>
</pattern>
<image id="image0_96_716" width="512" height="512" href="data:image/png;base64,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R0lNUD0iaHR0cDovL3d3dy5naW1wLm9yZy94bXAvIgogICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgIHhtcE1NOkRvY3VtZW50SUQ9ImdpbXA6ZG9jaWQ6Z2ltcDo0NmNiYjgxMi1jYmEzLTQ3Y2YtODU0ZC1lNjc2YTE3NmRhMmIiCiAgIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6YWZkYWU3OTEtYzU1OC00ZDYxLWJhNGItMzk0NDRhYjY0ZTUzIgogICB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6OWE3YjY3MWEtNTgxMC00NGE5LWJhOTUtYzRjM2QxY2E4MWIzIgogICBkYzpGb3JtYXQ9ImltYWdlL3BuZyIKICAgR0lNUDpBUEk9IjIuMCIKICAgR0lNUDpQbGF0Zm9ybT0iV2luZG93cyIKICAgR0lNUDpUaW1lU3RhbXA9IjE2NTI2MzkxNzk3MjQ2MjYiCiAgIEdJTVA6VmVyc2lvbj0iMi4xMC4zMCIKICAgdGlmZjpPcmllbnRhdGlvbj0iMSIKICAgeG1wOkNyZWF0b3JUb29sPSJHSU1QIDIuMTAiPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJzYXZlZCIKICAgICAgc3RFdnQ6Y2hhbmdlZD0iLyIKICAgICAgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoxOWQ3NzMyNC0zMTVjLTQwY2EtODAwYS1mMzYyZTdjMzc1YTkiCiAgICAgIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkdpbXAgMi4xMCAoV2luZG93cykiCiAgICAgIHN0RXZ0OndoZW49IjIwMjItMDUtMTZUMDI6MjY6MTkiLz4KICAgIDwvcmRmOlNlcT4KICAgPC94bXBNTTpIaXN0b3J5PgogIDwvcmRmOkRlc2NyaXB0aW9uPgogPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAg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"/>
</defs>
</svg>



        {/* Image centrée en haut du rectangle */}

        <div className="text-6xl font-mono mb-8">
          {`${padNumber(currentTime.getHours())}:${padNumber(currentTime.getMinutes())}:${padNumber(currentTime.getSeconds())}`}
        </div>
        <div className="mt-4">
          <h2 className="text-center text-2xl">Régler l'alarme</h2>
          <div className="flex items-center mt-2">
            {/* Liste déroulante heures */}
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
            {/* Liste déroulante minutes */}
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
          </div>
          {/* Montre l'alarme */}
          {alarmSet && (
            <div className="mt-4 text-xl">
              L'alarme est lancée pour {padNumber(alarmTime.hours)}:{padNumber(alarmTime.minutes)}
            </div>
          )}
        </div>
      </div>
      {/* Button pour lancer l'alarme */}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8 absolute bottom-8 left-1/2 transform -translate-x-1/2"
        onClick={handleSetAlarm}
      >
        Lancer
      </button>
      {/* Button pour reset l'alarme */}
      <button
        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-8 ml-2"
        onClick={handleResetAlarm}
      >
        Annuler
      </button>
    </div>
  );
};

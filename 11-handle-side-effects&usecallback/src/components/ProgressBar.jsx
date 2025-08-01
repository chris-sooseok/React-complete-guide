import { useState, useEffect} from 'react';

export default function ProgressBar({timer}) {
  // * this displays progressbar during the same duration of DeleteConfirmation
  const [remainingTime, setRemainingTime] = useState(timer);
  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);


  return <progress value={remainingTime} max={timer}></progress>;
}

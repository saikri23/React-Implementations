import { useEffect, useRef, useState } from "react";

const StopWatch = () => {
  const [time, setTime] = useState({ hr: 0, min: 0, sec: 0 });
  const id = useRef();
  useEffect(() => {
    return () => clearInterval(id.current);
  }, []);
  const handleStart = () => {
    if (id.current) clearInterval(id.current);
    id.current = setInterval(() => {
      //   setTime((pTime) => pTime + 1);
      setTime((pvs) => {
        if (pvs.sec === 100) {
          return { ...pvs, min: pvs.min + 1, sec: 0 };
        }
        if (pvs.min === 60) {
          return { ...pvs, hr: pvs.hr + 1, min: 0, sec: 0 };
        }
        return { ...pvs, sec: pvs.sec + 1 };
      });
    }, 10);
  };

  const handlePause = () => {
    if (id.current) {
      clearInterval(id.current);
      id.current = null;
    } else {
      handleStart();
    }
  };

  const handleReset = () => {
    setTime(0);
    clearInterval(id.current);
  };
  return (
    <div>
      <h1>Stop Watch</h1>
      <h1>
        {time.hr.toLocaleString("en-US", {
          minimumIntegerDigits: 2,
        })}
        :
        {time.min.toLocaleString("en-US", {
          minimumIntegerDigits: 2,
        })}
        :
        {time.sec.toLocaleString("en-US", {
          minimumIntegerDigits: 2,
        })}
      </h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default StopWatch;

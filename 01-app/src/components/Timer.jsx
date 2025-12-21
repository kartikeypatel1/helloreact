import React, { useEffect, useState } from 'react';

const Timer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    console.log("Timer component mounted or time updated");
    const interval = setInterval(() => {

      setTime(prevTime => prevTime + 1);
    }, 1000);

    // cleanup function
    console.log("removed interval");
    return () => clearInterval(interval);
    
  }, [time]);

  return (
    <div>
      <h1>Stopwatch</h1>
      <p>Current time is {time}</p>
    </div>
  );
};

export default Timer;

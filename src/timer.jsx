// src/Timer.js
import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setSeconds(0);
  };

  return (
    <div>
      <h1>Timer</h1>
      <div>{seconds}s</div>
      <button onClick={toggleTimer}>
        {isActive ? 'Pause' : 'Start'}
      </button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Timer;

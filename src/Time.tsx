import React, { useState, useEffect } from "react";
import "./Time.css";
import TimeBlock from "./TimeBlock";

const Time: React.FC<any> = ({hours}) => {
  const [seconds, setSeconds] = useState(59);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 0) {
          return 59;
        }
        return prevSeconds - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="Time">
      <div className="time-container">
        <TimeBlock stringProp="Days" numberProp={undefined} />
        <TimeBlock stringProp="Hours" numberProp={hours} />
        <TimeBlock stringProp="Minutes" numberProp={26} />
        <TimeBlock stringProp="Seconds" numberProp={seconds} />
      </div>
    </div>
  );
}

export default Time;
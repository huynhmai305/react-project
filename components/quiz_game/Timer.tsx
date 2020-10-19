import React, { useEffect, useState } from "react";
import { TimerProps } from "../../models/quizModel";

const Timer = (props: TimerProps) => {
  const [seconds, setSeconds] = useState(0);

  const tick = () => {
    if (seconds === props.duration) {
      props.timeoutFn();
    } else {
      setSeconds(seconds + 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(interval);
    };
  });

  return <span>Time left: {props.duration - seconds}</span>;
};

export default Timer;

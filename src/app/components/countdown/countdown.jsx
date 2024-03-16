import React, { useState, useEffect } from 'react';
import styles from "@/app/components/hero/page.module.scss"

function Countdown() {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-04-20") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div>
      <div id={styles.countDownContainer}>
        <div id={styles.countContainer}>
          <span>{timeLeft.days}</span>
          <span id={styles.countDate}>Days</span>
        </div>
        <div id={styles.countContainer}>
          <span>{timeLeft.hours}</span>
          <span id={styles.countDate}>Hours</span>
        </div>
        <div id={styles.countContainer}>
          <span>{timeLeft.minutes}</span>
          <span id={styles.countDate}>Minutes</span>
        </div>
        <div id={styles.countContainer}>
          <span>{timeLeft.seconds}</span>
          <span id={styles.countDate}>Seconds</span>
        </div>
      </div>
    </div>
  );
}

export default Countdown;

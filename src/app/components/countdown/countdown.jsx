'use client'

import React, { useState, useEffect } from 'react';
import styles from "@/app/components/heroes/Homepage/page.module.scss"

function Countdown() {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-09-07") - +new Date();
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
      <div className='flex gap-4 font-semibold' id={styles.countDownContainer}>
        <div className='flex flex-col' id={styles.countContainer}>
          <span className='select-none'>{timeLeft.days}</span>
          <span id={styles.countDate} className='select-none'>Days</span>
        </div>
        <div className='flex flex-col' id={styles.countContainer}>
          <span className='select-none'>{timeLeft.hours}</span>
          <span id={styles.countDate} className='select-none'>Hours</span>
        </div>
        <div className='flex flex-col' id={styles.countContainer}>
          <span className='select-none'>{timeLeft.minutes}</span>
          <span id={styles.countDate} className='select-none'>Minutes</span>
        </div>
        <div className='flex flex-col' id={styles.countContainer}>
          <span className='select-none'>{timeLeft.seconds}</span>
          <span id={styles.countDate} className='select-none'>Seconds</span>
        </div>
      </div>
    </div>
  );
}

export default Countdown;

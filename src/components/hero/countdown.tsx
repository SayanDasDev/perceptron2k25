"use client"

import useFonts from '@/hooks/use-fonts';
import { useEffect, useState } from 'react';

const Countdown = () => {

  const { sub } = useFonts()

  interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }

  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date('2025-01-10') - +new Date();
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
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
    <div className={`${sub.className} text-gray-50 flex justify-around px-4 items-center`}>
      <div className="flex flex-col text-center text-xs">
        <p className="text-2xl">{timeLeft.days || '0'}</p>
        <p>Days</p>
      </div>
      <div className="flex flex-col text-center text-xs">
        <p className="text-2xl">{timeLeft.hours || '0'}</p>
        <p>Hours</p>
      </div>
      <div className="flex flex-col text-center text-xs">
        <p className="text-2xl">{timeLeft.minutes || '0'}</p>
        <p>Minutes</p>
      </div>
      <div className="flex flex-col text-center text-xs">
        <p className="text-2xl">{timeLeft.seconds || '0'}</p>
        <p>Seconds</p>
      </div>
    </div>
  )
}

export default Countdown

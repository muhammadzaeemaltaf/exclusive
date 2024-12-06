"use client";

import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2024-12-31T23:59:59");
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex space-x-2 text-start">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="flex items-end md:items-center group">
          <div>
            <div className="text-[8px] md:text-xs text-gray-800">
              {unit.charAt(0).toUpperCase() + unit.slice(1)}
            </div>
            <div className="text-xl md:text-4xl font-bold">
              {String(value).padStart(2, "0")}
            </div>
          </div>
          <span className="font-extralight text-red-500 text-lg md:text-3xl ml-2 group-last:hidden">:</span>
        </div>
      ))}
    </div>
  );
};

const CircleCountdownTimer = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2024-12-31T23:59:59");
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <div className="flex gap-2">
      {timeUnits.map(({ value, label }) => (
        <div key={label} className="flex flex-col items-center justify-center">
          <div className="flex flex-col h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-white text-black">
            <span className="md:text-xl font-bold">
              {value.toString().padStart(2, "0")}
            </span>
          <span className="text-xs font-medium text-black">{label}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export { CountdownTimer, CircleCountdownTimer };

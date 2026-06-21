"use client";

import React, { useEffect, useState } from "react";

const CountdownTimer = ({ departureDateTime }) => {
  const calculateTimeLeft = () => {
    const departureTime = new Date(departureDateTime).getTime();
    const now = new Date().getTime();
    const difference = departureTime - now;

    if (difference <= 0) {
      return {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
        isExpired: true,
      };
    }

    return {
      days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
      hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
      minutes: String(Math.floor((difference / (1000 * 60)) % 60)).padStart(2, "0"),
      seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
      isExpired: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [departureDateTime]);

  return (
    <div className=" rounded-2xl bg-blue-50 ">
      <h3 className="font-semibold text-blue-700 text-2xl">Departure In</h3>

      <div className="mt-4 grid grid-cols-4 gap-3 text-center">
       

         <div className="rounded-xl bg-white p-3">
                  <p className="text-2xl font-bold text-blue-600">{timeLeft.days}</p>
                  <p className="text-xs text-gray-500">Days</p>
                </div>

        <div className="rounded-xl bg-white p-3">
          <p className="text-2xl font-bold text-blue-600">{timeLeft.hours}</p>
          <p className="text-xs text-gray-500">Hours</p>
        </div>

        <div className="rounded-xl bg-white p-3">
          <p className="text-2xl font-bold text-blue-600">{timeLeft.minutes}</p>
          <p className="text-xs text-gray-500">Min</p>
        </div>

    

         <div className="rounded-xl bg-white p-3">
                  <p className="text-2xl font-bold text-blue-600">{timeLeft.seconds}</p>
                  <p className="text-xs text-gray-500">Days</p>
                </div>
      </div>

      {timeLeft.isExpired && (
        <p className="mt-4 text-sm font-medium text-red-500">
          Departure time has already passed.
        </p>
      )}
    </div>
  );
};

export default CountdownTimer;



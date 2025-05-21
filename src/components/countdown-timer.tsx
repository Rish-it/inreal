"use client";

import { useEffect, useState } from "react";
import { calculateTimeLeft } from "@/lib/utils";

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="flex items-center justify-center space-x-1 md:space-x-2 lg:space-x-3">
      <div className="flex flex-col items-center">
        <div className="countdown-box">{timeLeft.days}</div>
        <div className="text-xs mt-1 text-gray-700 font-medium">DAYS</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="countdown-box">{timeLeft.hours}</div>
        <div className="text-xs mt-1 text-gray-700 font-medium">HOURS</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="countdown-box">{timeLeft.minutes}</div>
        <div className="text-xs mt-1 text-gray-700 font-medium">MINUTES</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="countdown-box">{timeLeft.seconds}</div>
        <div className="text-xs mt-1 text-gray-700 font-medium">SECONDS</div>
      </div>
    </div>
  );
}

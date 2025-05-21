import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatTimeValue(value: number): string {
  return value.toString().padStart(2, '0');
}

export function calculateTimeLeft(): { days: string; hours: string; minutes: string; seconds: string } {
  // Set the date to May 31, 2025 as the end date for the masterclass registration
  const difference = +new Date("2025-05-31T23:59:59") - +new Date();

  let timeLeft = {
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00"
  };

  if (difference > 0) {
    timeLeft = {
      days: formatTimeValue(Math.floor(difference / (1000 * 60 * 60 * 24))),
      hours: formatTimeValue(Math.floor((difference / (1000 * 60 * 60)) % 24)),
      minutes: formatTimeValue(Math.floor((difference / 1000 / 60) % 60)),
      seconds: formatTimeValue(Math.floor((difference / 1000) % 60))
    };
  }

  return timeLeft;
}

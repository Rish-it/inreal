"use client";

import Image from "next/image";

export function RainbowDecoration({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute w-full h-2 bottom-0 left-0 ${className} overflow-hidden`}>
      <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 rounded-full"></div>
    </div>
  );
}

"use client";

import Link from "next/link";

interface ReserveButtonProps {
  className?: string;
}

export function ReserveButton({ className = "" }: ReserveButtonProps) {
  return (
    <Link
      href="#registration"
      className={`yellow-button px-6 py-2 font-bold text-base inline-block ${className}`}
      scroll={true}
    >
      RESERVE YOUR SPOT - RS.499
    </Link>
  );
}

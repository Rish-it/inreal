"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="py-4 px-5 flex items-center justify-between z-50 relative shadow-md">
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden z-0">
      </div>
      
      <div className="flex items-center relative z-10">
        <Link href="/">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-[#f74671] flex items-center justify-center">
              <span className="text-white text-center font-bold">IN</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-[#f74671]">
                INREAL
              </span>
              <span className="text-xs -mt-1 text-gray-600">Early Reading Masterclass</span>
            </div>
          </div>
        </Link>
      </div>

      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex items-center relative z-10"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-8 relative z-10">
        <Link href="#about" className="font-medium hover:text-[#f74671] transition-colors">
          About
        </Link>
        <Link href="#contact" className="font-medium hover:text-[#f74671] transition-colors">
          Contact
        </Link>
        <Link
          href="#registration"
          className="yellow-button hover:-translate-y-1 hover:shadow-lg transition-all"
        >
          Register Now
        </Link>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-lg py-5 px-5 md:hidden z-50">
          <div className="flex flex-col space-y-4">
            <Link
              href="#about"
              className="font-medium hover:text-[#f74671] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="#contact"
              className="font-medium hover:text-[#f74671] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="#registration"
              className="yellow-button inline-block text-center"
              onClick={() => setIsOpen(false)}
            >
              Register Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

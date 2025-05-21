"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { RainbowDecoration } from "./rainbow-decoration";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white py-8 px-5 relative">
      <div className="container mx-auto max-w-7xl pt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">
              The #1 Family-Centred Ed-Tech<br />
              Provider in India
            </h3>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">ABOUT US</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-700 hover:underline">Who We Are</Link></li>
              <li><Link href="#" className="text-gray-700 hover:underline">FAB Masterclass</Link></li>
              <li><Link href="#" className="text-gray-700 hover:underline">Testimonials</Link></li>
              <li><Link href="#" className="text-gray-700 hover:underline">Refund Policy</Link></li>
              <li><Link href="#" className="text-gray-700 hover:underline">FAQS</Link></li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">CONTACT US</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-[#f74671]" />
                <a href="mailto:info@inreal.com" className="text-gray-700 hover:underline">
                  info@inreal.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-[#f74671]" />
                <a href="tel:+91-7045013337" className="text-gray-700 hover:underline">
                  +91-7045013337
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-[#f74671]" />
                <span className="text-gray-700">
                  Test Assignment
                </span>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-300" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>Copyright © {currentYear} INREAL</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <span>All Rights Reserved</span>
            <span>|</span>
            <Link href="/terms" className="hover:text-[#f74671]">
              Terms & Conditions
            </Link>
            <span>|</span>
            <Link href="/privacy" className="hover:text-[#f74671]">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

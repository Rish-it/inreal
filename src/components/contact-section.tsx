"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

export function ContactSection() {
  return (
    <section id="contact" className="py-16 px-5 pattern-bg-2 relative">
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 inline-block relative">
            Contact Us
          </h2>
          <div className="w-full h-1 bg-[#f74671] mt-2 max-w-xs mx-auto"></div>
          <p className="text-xl text-gray-600 mt-4">Have questions? We're here to help!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-xl shadow-xl border-2 border-[#f74671] relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <Image src="/pattern-1.png" alt="Pattern" fill className="object-cover" />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-8 text-[#f74671] flex items-center">
                <span className="inline-block w-10 h-10 rounded-full bg-[#f74671] text-white flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                  </svg>
                </span>
                Get in Touch
              </h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Mail size={24} className="text-[#f74671]" />
                  <div>
                    <p className="font-medium text-lg">Email Us</p>
                    <a href="mailto:info@inreal.com" className="text-gray-600 hover:text-[#f74671] transition-colors">
                      info@inreal.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Phone size={24} className="text-[#f74671]" />
                  <div>
                    <p className="font-medium text-lg">Call Us</p>
                    <a href="tel:+91-7045013337" className="text-gray-600 hover:text-[#f74671] transition-colors">
                      +91-7045013337
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin size={24} className="text-[#f74671] mt-1" />
                  <div>
                    <p className="font-medium text-lg">Visit Us</p>
                    <address className="text-gray-600 not-italic">
                      INREAL<br />
                      Test Assignment
                    </address>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-xl border-2 border-[#f74671] relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <Image src="/pattern-3.png" alt="Pattern" fill className="object-cover" />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-8 text-[#f74671] flex items-center">
                <span className="inline-block w-10 h-10 rounded-full bg-[#f74671] text-white flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                  </svg>
                </span>
                Frequently Asked Questions
              </h3>

              <div className="space-y-6">
                <div className="border-b border-gray-100 pb-4">
                  <h4 className="font-bold text-lg">Who is this masterclass for?</h4>
                  <p className="text-gray-700 mt-2">
                    The masterclass is designed for parents with children between 2-7 years old who want to teach their child to read.
                  </p>
                </div>

                <div className="border-b border-gray-100 pb-4">
                  <h4 className="font-bold text-lg">How long is the masterclass?</h4>
                  <p className="text-gray-700 mt-2">
                    The masterclass is 90 minutes long, from 6:00 PM to 7:30 PM on May 13th and 14th, 2025.
                  </p>
                </div>

                <div className="border-b border-gray-100 pb-4">
                  <h4 className="font-bold text-lg">What will I learn?</h4>
                  <p className="text-gray-700 mt-2">
                    You'll learn proven, science-backed techniques to teach your child to read in just 15 minutes per day, regardless of your teaching experience.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-lg">Is there a guarantee?</h4>
                  <p className="text-gray-700 mt-2">
                    Yes! If you attend the full masterclass and don't find it valuable, we offer a 100% money-back guarantee.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

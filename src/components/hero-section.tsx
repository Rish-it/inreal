"use client";

import { ReserveButton } from "./reserve-button";
import Image from "next/image";
import { CountdownTimer } from "./countdown-timer";

export function HeroSection() {
  return (
    <div className="relative">
      {/* Hero Section with Pink Background and Curved Bottom */}
      <section className="bg-[#f74671] relative overflow-hidden">
        {/* Cloud pattern can be added as a background image in your CSS */}
        <div className="container mx-auto px-4 pb-16">
          {/* Main Content Row with Text and Image Side by Side */}
          <div className="flex flex-col lg:flex-row items-center">
            {/* Left Text Column */}
            <div className="w-full lg:w-1/2 text-white pt-12 lg:pt-16 pb-8 lg:pb-16 z-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Join the World's<br />
                Highest-Rated<br />
                Online Masterclass
              </h2>
              <p className="text-xl md:text-2xl font-medium leading-relaxed">
                (for Parents) Learn<br />
                simple, science<br />
                backed techniques to<br />
                teach your child to<br />
                read — in just 15<br />
                minutes a day.
              </p>
            </div>
            
            {/* Right Image Column - Full Height Image */}
            <div className="w-full lg:w-1/2 relative">
              <div className="relative h-[450px] lg:h-[550px] w-full">
                <Image
                  src="/parent.png"
                  alt="Parent teaching child to read"
                  fill
                  className="object-contain object-center"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Curved White Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white rounded-t-[100%] w-full"></div>
      </section>

      {/* Stats Section in White Background */}
      <div className="bg-white">
        <div className="container mx-auto px-4 py-8">
          {/* Stats Box */}
          <div className="border border-gray-200 rounded-xl overflow-hidden mx-auto max-w-lg mb-12">
            <div className="flex justify-around py-6 px-4">
              <div className="text-center border-r border-gray-200 pr-4 w-1/3">
                <div className="text-[#f74671] font-bold text-2xl md:text-3xl">100+</div>
                <div className="text-xs md:text-sm text-gray-700">Cities Around<br />the World</div>
              </div>
              
              <div className="text-center border-r border-gray-200 px-4 w-1/3">
                <div className="text-[#f74671] font-bold text-2xl md:text-3xl">10,000+</div>
                <div className="text-xs md:text-sm text-gray-700">Parents<br />Attended</div>
              </div>
              
              <div className="text-center pl-4 w-1/3">
                <div className="text-[#f74671] font-bold text-2xl md:text-3xl">2000+</div>
                <div className="text-xs md:text-sm text-gray-700">Kids Became<br />Fabreaders</div>
              </div>
            </div>
          </div>

          {/* Date and Time */}
          <div className="text-center mb-6">
            <h2 className="text-lg md:text-xl font-bold text-[#f74671]">
              13TH AND 14TH MAY 2025 6:00 PM - 7:30 PM
            </h2>
          </div>

          {/* Main Message Box */}
          <div className="bg-gray-100 rounded-xl p-4 mx-auto max-w-2xl mb-6 text-center">
            <h2 className="font-bold text-xl md:text-3xl text-black">
              YOUR CHILD CAN START READING<br className="hidden md:block" />
              AT HOME - EVEN BEFORE AGE 3
            </h2>
          </div>

          {/* Reserve Button */}
          <div className="text-center mb-4">
            <ReserveButton />
          </div>
          
          {/* Countdown Timer */}
          <div className="mb-10">
            <CountdownTimer />
          </div>
          
          {/* Rating */}
          <div className="bg-green-500 text-white py-4 text-center rounded-xl mb-12">
            <div className="flex justify-center space-x-1 mb-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <div key={star} className="text-yellow-300 text-2xl">★</div>
              ))}
            </div>
            <div className="flex justify-center items-center">
              <p className="font-bold text-xl mr-2">Excellent 4.7</p>
              <p className="text-sm">out of 5</p>
            </div>
            <p className="text-xs mt-1">Based on 800 reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
}
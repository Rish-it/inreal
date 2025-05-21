"use client";

import Image from "next/image";
import { ReserveButton } from "./reserve-button";

export function AboutSection() {
  return (
    <section id="about" className="py-16 px-5 bg-white relative">
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-1/2 h-full opacity-10">
          <Image src="/pattern-1.png" alt="Background pattern" fill className="object-contain object-left" />
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <Image src="/pattern-2.png" alt="Background pattern" fill className="object-contain object-right" />
        </div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Title */}
        <div className="text-center mb-12 relative">
          <h2 className="text-3xl md:text-4xl font-bold relative inline-block">
            About the Masterclass
          </h2>
          <div className="w-full h-1 bg-[#f74671] mt-2"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/parent.png"
                alt="Parent teaching child to read"
                width={600}
                height={450}
                className="object-cover w-full"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#f74671] to-transparent p-4 pt-10">
                <p className="text-white font-medium text-lg">Transform your child's learning journey</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#f74671]">
              Join the World's Highest-Rated Online Masterclass
            </h2>

            <p className="text-gray-700 text-lg mb-6">
              (For Parents) Learn simple, science-backed techniques to teach your child to read — in just 15 minutes a day.
            </p>

            <div className="space-y-5 mb-8">
              <div className="flex items-start gap-3">
                <div className="min-w-6 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-green-600">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-800 text-lg">Proven method that has helped thousands of children learn to read fluently</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="min-w-6 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-green-600">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                </svg>
                </div>
                <p className="text-gray-800 text-lg">Simple techniques any parent can use, regardless of your teaching experience</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="min-w-6 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-green-600">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-800 text-lg">Science-backed approach that works with how children's brains naturally develop</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="min-w-6 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-green-600">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-800 text-lg">Just 15 minutes a day is all it takes to see remarkable progress</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 items-center mt-8">
              <ReserveButton />
              <p className="text-sm text-gray-500 font-medium">Limited spots available!</p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-[#f74671] p-6 rounded-xl shadow-lg text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <Image src="/pattern-3.png" alt="Pattern" fill className="object-cover" />
            </div>
            <div className="relative z-10">
              <div className="text-4xl font-bold mb-2">100+</div>
              <p className="text-lg">Cities Around<br />the World</p>
            </div>
          </div>

          <div className="bg-[#f74671] p-6 rounded-xl shadow-lg text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <Image src="/pattern-1.png" alt="Pattern" fill className="object-cover" />
            </div>
            <div className="relative z-10">
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <p className="text-lg">Parents<br />Attended</p>
            </div>
          </div>

          <div className="bg-[#f74671] p-6 rounded-xl shadow-lg text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <Image src="/pattern-2.png" alt="Pattern" fill className="object-cover" />
            </div>
            <div className="relative z-10">
              <div className="text-4xl font-bold mb-2">2000+</div>
              <p className="text-lg">Kids Became<br />Fabreaders</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

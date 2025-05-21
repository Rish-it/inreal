"use client";

import { useState } from "react";
import { ReserveButton } from "./reserve-button";
import Image from "next/image";

export function RegistrationSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    childAge: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      setFormData({
        name: "",
        email: "",
        phone: "",
        childAge: "",
      });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="registration" className="py-16 px-5 relative bg-gradient-to-b from-white to-sky-100">
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold inline-block relative">Register Now</h2>
          <div className="w-full h-1 bg-[#f74671] mt-2 max-w-xs mx-auto"></div>
          <p className="text-xl text-gray-700 mt-4">
            Limited spots available for our upcoming masterclass
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 border-2 border-[#f74671] relative overflow-hidden">
          {/* Removed pattern background elements */}

          <div className="relative">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-[#f74671]">Join the Masterclass</h2>
              <p className="text-gray-600 text-lg">
                Secure your spot in our upcoming masterclass on May 13th-14th, 2025
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* ... What You'll Learn section (unchanged) ... */}
              {/* ... Registration form (unchanged) ... */}
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="mt-16 bg-white border-2 border-[#f74671] rounded-xl p-6 shadow-xl relative overflow-hidden">
          {/* Removed background pattern from testimonial */}

          <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
            <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-[#f74671]">
              <Image 
                src="/parent.png" 
                alt="Parent testimonial" 
                width={128} 
                height={128}
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <div className="flex mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <div key={star} className="text-yellow-400 text-xl">★</div>
                ))}
              </div>
              <p className="text-gray-700 italic mb-2">
                "This masterclass completely transformed how I approach teaching my child to read. Within weeks, my 3-year-old was recognizing words and showing genuine excitement about books!"
              </p>
              <p className="font-bold text-[#f74671]">- Sarah M., Mother of 2</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

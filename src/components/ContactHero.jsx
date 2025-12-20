import React from "react";

export default function ContactHero() {
  return (
    <section className="relative w-full h-[50vh] sm:h-[60vh] md:h-[50vh] lg:h-[60vh]">
      
      {/* Background Image */}
      <img
        src="/images/about-bg1.jpg" // use any contact image
        alt="Contact Hero"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2">
          Contact Us
        </h1>

        <p className="text-[#A58120] text-lg sm:text-xl md:text-2xl tracking-wide">
          We’re here to help you start your fitness journey
        </p>

        {/* Breadcrumb (optional, same style family) */}
        <p className="mt-4 text-sm sm:text-base tracking-widest uppercase">
          <span className="text-white">Home</span>
          <span className="text-white mx-2">•</span>
          <span className="text-[#A58120]">Contact</span>
        </p>
      </div>
    </section>
  );
}

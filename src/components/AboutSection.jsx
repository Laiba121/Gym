import React from "react";
import { motion } from "framer-motion";
import SliderSection from "./SliderSection";


export default function HeroFitnessExact() {
  const stats = [
    { label: "Fitness Trainee", value: "251K" },
    { label: "Active Members", value: "251K" },
    { label: "Classes Completed", value: "251K" },
  ];

  return (
    <section
      className="relative h-full overflow-hidden"
      style={{
        background: `radial-gradient(circle at center, #ff4d24 0%, #000000 100%)`,
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 pt-8 lg:pt-40 grid grid-cols-12 xl:gap-10 items-start">
        {/* LEFT CONTENT */}
        <div className="col-span-12 lg:col-span-5 z-20">
          <h1 className="text-white font-extrabold text-center lg:text-left uppercase leading-[1.05]
            text-[30px] sm:text-[40px] md:text-[50px] xl:text-[52px] font-[Platia]">
            We Are Pushing
            The Limit Of Your 
            Core Strength
          </h1>

          <p className="mt-6 text-gray-400 text-center lg:text-left text-[14px] md:text-[16px] leading-[1.8] max-w-full">
            We understand that your lifestyle changes, that’s why we’ve made
            fitness straightforward and stress free. Join today on a no lock-in
            contract membership and start achieving your fitness goals. We value
            flexibility at Jetts, with unlimited 24/7 access.
          </p>

          {/* CTA */}
         <div className="mt-10 flex items-center justify-center gap-4">
  <button
    className="relative px-7 py-4 bg-gray-600 text-white text-sm font-semibold uppercase tracking-wide
               overflow-hidden"
  >
    {/* Left Orange Line */}
    <span className="absolute left-0 top-0 h-full w-[4px] bg-[#ff4d24]" />

    {/* Right Orange Line */}
    <span className="absolute right-0 top-0 h-full w-[4px] bg-[#ff4d24]" />

    {/* Button Text */}
    <span className="relative z-10">Get Started Today +</span>
  </button>
</div>


          
        </div>

      {/* STATS + GUY IMAGE */}
<div className="col-span-12 lg:col-span-7 mt-30 sm:mt-40 md:mt-30 lg:mt-0 relative flex flex-col sm:flex-row">
  {/* Guy Image */}
  <div className="relative sm:absolute -top-20 md:-top-30 xl:left-5 z-20 w-full flex justify-center sm:block">
    <img
      src="/images/about-guy.png"
      alt="Fitness"
      className="h-[600px] sm:h-[680px] md:h-[750px] xl:h-[900px] object-contain"
    />
  </div>

  {/* Stats container aligned right */}
  <div className="flex flex-col gap-6 w-full sm:w-2/3 ml-0 sm:ml-auto sm:mt-0 relative z-10">
    {stats.map((stat, i) => (
      <div
        key={i}
        className="relative bg-[#2a2a2a]/70 backdrop-blur rounded-[20px] px-6 py-10 overflow-hidden flex flex-col items-center sm:items-end gap-2"
      >
        <div className="flex gap-2 xl:gap-4">
          <img
            src="/images/featuredec.png"
            alt={stat.label}
            className="w-10 xl:w-14 h-auto object-contain rounded-full mb-2"
          />
          <span className="text-gray-300 text-xs xl:text-sm tracking-widest uppercase text-center sm:text-right">
            {stat.label}
          </span>
        </div>

        <motion.h3
          className="text-white font-extrabold font-[Platia] text-[40px] xl:text-[60px] 2xl:text-[70px] leading-none text-center sm:text-right"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, delay: i * 0.3 }}
        >
          {stat.value.toLocaleString()} <span className="text-[#ff4d24]">+</span>
        </motion.h3>

        <motion.span
          className="absolute bottom-0 right-0 h-[3px] bg-[#ff4d24]"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, delay: i * 0.3 }}
        />
      </div>
    ))}
  </div>
</div>







        {/* Orange Glow */}
        <div className="absolute bottom-32 right-0 w-[350px] h-[350px] bg-[#ff4d24]/20 blur-[140px]" />
      </div>

{/* SliderSection full-width at the bottom */}
<div className="relative z-20 mt-3 md:mt-12 w-full">
  <SliderSection />
</div>
    </section>
  );
}

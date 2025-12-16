import React from "react";
import { ImCross } from "react-icons/im";

export default function HeroSection() {
  return (
    <section className="relative h-[250px] sm:h-[400px] md:h-[550px] lg:h-screen w-full overflow-hidden bg-[#0a0a0a]">

      {/* Background Image */}
      <img
        src="/images/hero-bg.jpg"
        className="absolute inset-0 w-full h-full object-cover opacity-60 z-0"
      />

      {/* Dark → Orange Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-orange-900/60 to-black opacity-90 z-10"></div>

      {/* X Background Pattern */}
      <div className="absolute inset-0 flex items-center justify-center opacity-40 z-20">
        <div className="w-[180%] h-[180%] rotate-45 bg-orange-700/20"></div>
        <div className="absolute w-[180%] h-[180%] -rotate-45 bg-orange-800/20"></div>
      </div>

      {/* Silhouettes */}
      <img
        src="/images/parti3.png"
        className="absolute left-0 top-0 h-full object-cover opacity-80 z-30"
      />
      <img
        src="/images/parti3.png"
        className="absolute right-0 top-0 h-full object-cover opacity-80 z-30"
      />

  

   {/* Decorative Image Top Left */}
<div className="absolute left-0 top-1/5 z-50 animate-float">
  <img
    src="/images/parti1.png"
    alt="decorative"
    className="w-4 sm:w-5 md:w-8 h-full"
  />
</div>

{/* Decorative Image Bottom Right */}
<div className="absolute bottom-5 right-0 z-50 animate-float">
  <img
    src="/images/parti1.png"
    alt="decorative"
    className="w-4 sm:w-5 md:w-8 h-full"
  />
</div>






<div className="absolute right-20 md:right-40 top-1/6 flex flex-row gap-2 z-50">
  <ImCross className="text-orange-500 md:w-9 md:h-9 animate-pulse-cross" />
  <ImCross className="text-orange-500 md:w-9 md:h-9 animate-pulse-cross" />
</div>

<div className="absolute left-6 md:left-10 bottom-1/3 sm:bottom-1/4 flex flex-row gap-2 z-50">
  <ImCross className="text-orange-500 md:w-8 md:h-8 animate-pulse-cross" />
  <ImCross className="text-orange-500 md:w-8 md:h-8 animate-pulse-cross" />
</div>



{/* TEXT AND FITNESS GUY CONTAINER */}
<div className="relative z-30 flex flex-col justify-center w-full h-full px-6">
  <div className="relative max-w-screen-7xl mx-auto flex flex-row items-end justify-between">

    {/* TEXT LEFT */}
    <div className="flex flex-col text-left font-[Platia] w-full">

      {/* OBTAIN - full width */}
      <h2 className="text-white font-bold tracking-widest drop-shadow-lg w-full max-w-full text-[7vw]">
        OBTAIN
      </h2>

      {/* FITNESS - full width */}
      <h1 className="text-white font-extrabold tracking-[0.05em] leading-none drop-shadow-xl w-full max-w-full text-[18vw]">
        FITNESS
      </h1>

      {/* GOAL - full width */}
      <h3 className="text-white font-bold tracking-wider mt-4 drop-shadow-lg text-right w-full max-w-full text-[8vw]">
        GOAL
      </h3>
    </div>



    {/* FITNESS GUY IMAGE RIGHT */}
    <img
      src="/images/hero-guy.png"
      alt="fitness model"
      className="absolute h-[100%] object-contain ml-6"
    />


  </div>
</div>

    </section>
  );
}

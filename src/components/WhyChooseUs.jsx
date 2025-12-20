import React from "react";
import { FaWarehouse, FaWeight, FaDumbbell } from "react-icons/fa";
import { MdOutlineMonitor } from "react-icons/md";

const WhyChooseUs = () => {
  return (
    <section className="bg-[#0b0b0b] text-white py-15 md:py-24">
      <div className="max-w-full mx-auto">
        {/* Heading */}
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-[Platia] font-extrabold tracking-[0.1em] mb-20">
          WHY CHOOSE US
        </h2>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          
          {/* Left Image with Play Button */}
<div className="relative w-full h-full overflow-hidden group">
  <img
    src="./images/whychoose.jpg"
    alt="Gym"
    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
  />
  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
  
  {/* Animated Circle Play Button */}
  <a 
    href="https://www.tiktok.com/@qrgym0/video/7584207811815542034?_r=1&_t=ZS-9197GaYMHQ7" 
    target="_blank" 
    rel="noopener noreferrer"
    className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 group/btn"
    aria-label="Play video on TikTok"
  >
    <div className="relative w-20 h-20 md:w-24 md:h-24">
      {/* Outer pulsating ring */}
      <div className="absolute inset-0 rounded-full bg-[#A58120]/20 animate-ping"></div>
      
      {/* Middle ring */}
      <div className="absolute inset-2 rounded-full bg-[#A58120]/40 animate-pulse"></div>
      
      {/* Inner circle with play icon */}
      <div className="absolute inset-4 rounded-full bg-[#A58120] flex items-center justify-center transition-all duration-300 group-hover/btn:scale-110 group-hover/btn:bg-[#A58120] group-hover/btn:shadow-lg group-hover/btn:shadow-[#A58120]/50">
        {/* Play icon (triangle) */}
        <div className="w-0 h-0 border-t-[12px] border-b-[12px] border-l-[20px] border-transparent border-l-white ml-1"></div>
      </div>
    </div>
  </a>
</div>

          {/* Right Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 h-full">
            
            {/* Card 1 */}
            <div className="bg-[#A58120] p-10 flex flex-col justify-between">
              <FaWarehouse className="text-4xl mb-6" />
              <h3 className="text-xl font-[Platia] font-extrabold uppercase mb-4">
                22,000 Square Feet Gym
              </h3>
              <p className="text-sm text-white/90">
                Take advantage of our spacious gym equipped with a wide range
                of gym fitness machines so you can achieve the maximum benefits
                from your workouts.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#0f0f0f] p-10 flex flex-col justify-between border border-white/10">
              <MdOutlineMonitor className="text-4xl mb-6 text-white/70" />
              <h3 className="text-xl font-[Platia] font-extrabold uppercase mb-4">
                State of the Art Equipment
              </h3>
              <p className="text-sm text-white/60">
                We are well equipped with the most up-to-date equipment & sound
                systems to enhance your class experience.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#0f0f0f] p-10 flex flex-col justify-between border border-white/10">
              <FaWeight className="text-4xl mb-6 text-white/70" />
              <h3 className="text-xl font-[Platia] font-extrabold uppercase mb-4">
                Programs for Weight Loss
              </h3>
              <p className="text-sm text-white/60">
                Special programs designed with physicians & dieticians for
                effective and safe weight loss.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-[#A58120] p-10 flex flex-col justify-between">
              <FaDumbbell className="text-4xl mb-6" />
              <h3 className="text-xl font-[Platia] font-extrabold uppercase mb-4">
                Modern Training Equipment
              </h3>
              <p className="text-sm text-white/90">
                High-quality equipment designed to deliver maximum performance
                and safety.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

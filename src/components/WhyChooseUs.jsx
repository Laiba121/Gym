import React from "react";
import { FaWarehouse, FaWeight, FaDumbbell } from "react-icons/fa";
import { MdOutlineMonitor } from "react-icons/md";

const WhyChooseUs = () => {
  return (
    <section className="bg-[#0b0b0b] text-white py-15 md:py-24">
      <div className="max-w-full mx-auto">
        {/* Heading */}
        <h2 className="text-center text-[42px] md:text-[70px] font-[Platia] font-extrabold tracking-[0.1em] mb-20">
          WHY CHOOSE US
        </h2>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          
          {/* Left Image */}
          <div className="relative w-full h-full">
            <img
              src="./images/whychoose.jpg"
              alt="Gym"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0" />
          </div>

          {/* Right Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 h-full">
            
            {/* Card 1 */}
            <div className="bg-[#ff4d2d] p-10 flex flex-col justify-between">
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
            <div className="bg-[#ff4d2d] p-10 flex flex-col justify-between">
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

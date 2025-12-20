import React from "react";
import { Link } from "react-router-dom";

import { FaHandshake, FaLightbulb, FaUsers, FaShieldAlt } from "react-icons/fa"; // React Icons
import Newsletter from "./NewsletterSection";

export default function AboutPage() {
  const coreValues = [
    { title: "Commitment", icon: <FaHandshake size={40} className="text-[#A58120]" /> },
    { title: "Integrity", icon: <FaShieldAlt size={40} className="text-[#A58120]" /> },
    { title: "Innovation", icon: <FaLightbulb size={40} className="text-[#A58120]" /> },
    { title: "Community", icon: <FaUsers size={40} className="text-[#A58120]" /> },
  ];

  return (
    <div className="bg-black text-white">

      {/* Hero Section */}
      <section className="relative w-full h-[50vh] sm:h-[60vh] md:h-[50vh] lg:h-[60vh]">
        <img
          src="/images/about-bg1.jpg"
          alt="Gym Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative z-10 flex flex-col justify-center items-center bg-black/50 h-full text-center px-4 sm:px-6 md:px-10">
          <h1 className="text-2xl sm:text-3xl font-[Platia] md:text-4xl lg:text-6xl font-extrabold mb-2">
            Welcome to QRGYM
          </h1>
          <p className="text-[#A58120] text-base sm:text-lg md:text-xl lg:text-2xl mb-6 tracking-wide">
            Your Journey to Fitness Starts Here
          </p>
        <Link
  to="/contact"
  className="hidden lg:flex items-center px-6 py-4 xl:px-7 xl:py-4 rounded-2xl
             bg-[#A58120] text-black font-extrabold tracking-widest cursor-pointer
             relative overflow-hidden group transition-all duration-300
             hover:shadow-lg hover:shadow-[#A58120]/50"
>
  <span className="relative z-10 group-hover:text-white transition-colors duration-500">
    JOIN US
  </span>

  {/* Shimmer animation */}
  <span
    className="absolute inset-0 -translate-x-full bg-gradient-to-r
               from-transparent via-white/40 to-transparent
               group-hover:translate-x-full transition-transform duration-1000"
  />
</Link>

        </div>
      </section>

      {/* ABOUT US – SPLIT LAYOUT */}
<section className="bg-black py-14 sm:py-18 md:py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

      {/* LEFT – TITLE */}
     {/* LEFT – TITLE */}
<div className="text-center lg:text-left">
  <h2 className="text-[#A58120] font-[Platia] text-sm sm:text-base tracking-[0.3em] mb-3">
    ABOUT US
  </h2>

  <h3 className="text-white font-extrabold font-[Platia] text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
    Built for Strength. <br /> Designed for Change.
  </h3>

  <div className="mt-6 w-20 h-[3px] bg-[#A58120] mx-auto lg:mx-0" />
</div>


      {/* RIGHT – CONTENT */}
      <div className="text-white/70 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
        <p className="mb-6">
          Welcome to <span className="text-[#A58120] font-semibold">QR Gym</span>,
          your ultimate destination for fitness, strength, and transformation.
        </p>

        <p className="mb-6">
          Located in the heart of{" "}
          <span className="text-white font-medium">
            Al Refaa, Doha – Qatar
          </span>
          , QR Gym is designed to inspire and empower individuals of all fitness
          levels.
        </p>
        <p>
          Our state-of-the-art facilities, expert trainers, and motivating environment make every workout an opportunity to become stronger — both physically and mentally.

        </p>

        <p>
          At QR Gym, fitness isn’t just about building your body — it’s about
          building confidence, energy, and a lifestyle that pushes you forward.
        </p>
      </div>
    </div>

    {/* STATS */}
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16">
      {[
        { value: "10+", label: "Years Experience" },
        { value: "1K+", label: "Active Members" },
        { value: "20+", label: "Expert Trainers" },
        { value: "24/7", label: "Training Access" },
      ].map((stat, i) => (
        <div
          key={i}
          className="bg-[#111111] rounded-2xl p-6 text-center hover:scale-105 transition"
        >
          <h4 className="text-[#A58120] text-2xl sm:text-3xl md:text-4xl font-extrabold">
            {stat.value}
          </h4>
          <p className="text-white/60 text-xs sm:text-sm uppercase tracking-widest mt-2">
            {stat.label}
          </p>
        </div>
      ))}
    </div>

  </div>
</section>


      {/* Mission & Vision */}
      <section className="bg-black py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          <div className="md:w-1/2">
            <img
              src="/images/mission.jpg"
              alt="Mission"
              className="rounded-2xl shadow-lg object-cover w-full h-[300px] sm:h-[350px] md:h-[400px]"
            />
          </div>
          <div className="md:w-1/2 flex flex-col gap-4 sm:gap-6">
            <h2 className="text-white font-extrabold font-[Platia] text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              Our Mission
            </h2>
            <p className="text-white/70 text-sm sm:text-base md:text-lg lg:text-xl">
             To help every member unlock their full potential through personalized training, expert guidance, and a supportive community that motivates consistency and growth.
We’re on a mission to redefine fitness by creating a space where everyone feels empowered to start — and stay — on their fitness journey.
            </p>
            <h2 className="text-white font-extrabold text-xl font-[Platia] sm:text-2xl md:text-3xl lg:text-4xl mt-4">
              Our Vision
            </h2>
            <p className="text-white/70 text-sm sm:text-base md:text-lg lg:text-xl">
             To become Qatar’s most trusted and inspiring fitness community — where passion meets performance.
We envision a future where fitness becomes a lifestyle, not a task, and where QR Gym sets the standard for quality, innovation, and results.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-[#111111] py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 text-center">
          <h2 className="text-white font-[Platia] font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-5xl mb-10 sm:mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
            {coreValues.map((value, i) => (
              <div
                key={i}
                className="bg-[#222222] rounded-2xl p-6 sm:p-8 flex flex-col items-center gap-4 hover:scale-105 transition-shadow shadow-md hover:shadow-2xl"
              >
                {value.icon}
                <h3 className="text-[#A58120] font-extrabold text-base sm:text-lg md:text-xl">
                  {value.title}
                </h3>
                <p className="text-white/70 text-center text-xs sm:text-sm md:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA Section */}
      <section className="bg-black py-12 sm:py-16 md:py-20">
        <Newsletter />
      </section>

    </div>
  );
}

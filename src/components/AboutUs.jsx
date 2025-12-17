import React from "react";
import { FaHandshake, FaLightbulb, FaUsers, FaShieldAlt } from "react-icons/fa"; // React Icons
import Newsletter from "./NewsletterSection";

export default function AboutPage() {
  const coreValues = [
    { title: "Commitment", icon: <FaHandshake size={40} className="text-[#ff4d2d]" /> },
    { title: "Integrity", icon: <FaShieldAlt size={40} className="text-[#ff4d2d]" /> },
    { title: "Innovation", icon: <FaLightbulb size={40} className="text-[#ff4d2d]" /> },
    { title: "Community", icon: <FaUsers size={40} className="text-[#ff4d2d]" /> },
  ];

  return (
    <div className="bg-black text-white">

      {/* Hero Section */}
      <section className="relative w-full h-[50vh] sm:h-[60vh] md:h-[50vh] lg:h-[60vh]">
        <img
          src="/images/aboutus1.webp"
          alt="Gym Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative z-10 flex flex-col justify-center items-center bg-black/50 h-full text-center px-4 sm:px-6 md:px-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-2">
            Welcome to QRGYM
          </h1>
          <p className="text-[#ff4d2d] text-base sm:text-lg md:text-xl lg:text-2xl mb-6 tracking-wide">
            Your Journey to Fitness Starts Here
          </p>
          <button className="bg-[#ff4d2d] text-black px-6 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4 rounded-2xl font-bold uppercase hover:bg-white transition text-sm sm:text-base md:text-lg">
            Join Now
          </button>
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
            <h2 className="text-white font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              Our Mission
            </h2>
            <p className="text-white/70 text-sm sm:text-base md:text-lg lg:text-xl">
              At QRGYM, our mission is to empower every individual to achieve their
              fitness goals through personalized training, innovative programs, and
              a supportive community. We believe in sustainable wellness, building
              strength, and nurturing health for life.
            </p>
            <h2 className="text-white font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-4">
              Our Vision
            </h2>
            <p className="text-white/70 text-sm sm:text-base md:text-lg lg:text-xl">
              Our vision is to create a fitness haven where everyone feels motivated,
              inspired, and equipped to transform their lives. We aim to redefine
              the gym experience through state-of-the-art facilities, expert trainers,
              and holistic wellness programs.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-[#111111] py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 text-center">
          <h2 className="text-white font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-10 sm:mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
            {coreValues.map((value, i) => (
              <div
                key={i}
                className="bg-[#222222] rounded-2xl p-6 sm:p-8 flex flex-col items-center gap-4 hover:scale-105 transition-shadow shadow-md hover:shadow-2xl"
              >
                {value.icon}
                <h3 className="text-[#ff4d2d] font-extrabold text-base sm:text-lg md:text-xl">
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

import React from "react";
import { motion } from "framer-motion";
import Newsletter from "../components/NewsletterSection";

const services = [
  { title: "FULLY EQUIPPED GYM", image: "/images/gym1.jpg", number: "01" },
  { title: "PERSONAL TRAINING", image: "/images/gym2.jpg", number: "02" },
  { title: "GROUP CLASSES", image: "/images/gym6.jpg", number: "03" },
  { title: "NUTRITION & FITNESS", image: "/images/gym4.jpg", number: "04" },
  { title: "MEN'S & WOMEN'S SECTIONS", image: "/images/gym3.jpg", number: "05" },
  { title: "LOCKER ROOMS & SHOWERS", image: "/images/gym1.jpg", number: "06" },
];

export default function ServicesPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] sm:h-[60vh] md:h-[50vh] lg:h-[60vh]">
        <img
          src="/images/about-bg1.jpg"
          alt="Services Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative z-10 flex flex-col justify-center items-center bg-black/50 h-full text-center px-6">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2">
            Our Services
          </h1>
          <p className="text-[#A58120] text-lg sm:text-xl md:text-2xl tracking-wide">
            Explore what we offer to boost your fitness journey
          </p>
           <p className="mt-4 text-sm sm:text-base tracking-widest uppercase">
          <span className="text-white">Home</span>
          <span className="text-white mx-2">•</span>
          <span className="text-[#A58120]">Services</span>
        </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative h-[300px] sm:h-[320px] md:h-[350px] rounded-2xl overflow-hidden border border-white/10 shadow-md hover:shadow-2xl transition"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0, transition: { delay: index * 0.1, duration: 0.5 } }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-black/40 z-10 rounded-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70 z-20 rounded-2xl"></div>
              <div className="relative z-30 p-6 flex flex-col gap-2">
                <img
                  src="/images/featuredec1.png"
                  alt="decorative slashes"
                  className="w-12 sm:w-14"
                />
                <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-extrabold leading-tight">
                  {service.title}
                </h3>
              </div>
              <span
                className="absolute bottom-2 left-2 text-[60px] sm:text-[80px] md:text-[110px] font-extrabold leading-none z-20 pointer-events-none"
                style={{
                  WebkitTextStroke: "1px rgba(255,255,255,0.15)",
                  color: "transparent",
                }}
              >
                {service.number}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

        {/* Newsletter / CTA Section */}
      <section className="bg-black py-12 sm:py-16 md:py-20">
        <Newsletter />
      </section>
    </div>
  );
}

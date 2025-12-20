import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Custom arrows with orange background
function NextArrow({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 md:right-6 lg:right-8 w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 bg-[#A58120] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition cursor-pointer z-30"
    >
      &#8594;
    </div>
  );
}

function PrevArrow({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 md:left-6 lg:left-8 w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 bg-[#A58120] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition cursor-pointer z-30"
    >
      &#8592;
    </div>
  );
}


const cards = [
  { title: "GROUP\nWORKOUT", image: "/images/feature3.jpg", number: "01" },
  { title: "PERSONAL\nTRAINING", image: "/images/feature2.jpg", number: "02" },
  { title: "MUSCLE\nBUILDING", image: "/images/feature4.jpg", number: "03" },
  { title: "DIGITAL\nCOACHING", image: "/images/feature5.jpg", number: "04" },
  { title: "PERSONAL\nTRAINING", image: "/images/feature6.jpg", number: "05" },
  { title: "WEIGHTLOSS\nPROGRAM", image: "/images/feature1.jpg", number: "06" },
];

export default function ServicesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  // Responsive visible cards
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisibleCards(1);
      else if (window.innerWidth < 1024) setVisibleCards(2);
      else setVisibleCards(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ AUTO SLIDE EFFECT
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, 3000); // ⏱ 3 seconds

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const getVisibleCards = () => {
    const visible = [];
    for (let i = 0; i < visibleCards; i++) {
      visible.push(cards[(currentIndex + i) % cards.length]);
    }
    return visible;
  };

  return (
    <section className="w-full bg-black py-10 relative overflow-visible">
      <div className="max-w-[1600px] mx-auto relative overflow-visible">

        {/* Arrows */}
        <PrevArrow onClick={prevSlide} />
        <NextArrow onClick={nextSlide} />

        {/* Slider */}
        <div className="flex gap-4 md:gap-6 px-8 md:px-15 overflow-hidden">
          {getVisibleCards().map((card, index) => (
            <motion.div
              key={currentIndex + index}
              className="relative flex-1 h-[250px] sm:h-[280px] md:h-[300px] rounded-2xl overflow-hidden border border-white/10"
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute inset-0 p-4 sm:p-6">
                <motion.div
                  className="relative w-full h-full"
                  whileHover={{
                    rotateX: 5,
                    rotateY: 5,
                    transition: { type: "spring", stiffness: 100, damping: 10 },
                  }}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                  />

                  <div className="absolute inset-0 bg-black/40 z-10 rounded-2xl" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70 z-20 rounded-2xl" />

                  <div className="relative z-30 p-4 sm:p-6">
                    <img src="/images/featuredec1.png" className="w-12 sm:w-14 mb-2" />
                    <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-extrabold whitespace-pre-line">
                      {card.title}
                    </h3>
                  </div>

                  <span
                    className="absolute bottom-1 left-2 text-[60px] sm:text-[80px] md:text-[110px] font-extrabold z-20"
                    style={{
                      WebkitTextStroke: "1px rgba(255,255,255,0.15)",
                      color: "transparent",
                    }}
                  >
                    {card.number}
                  </span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

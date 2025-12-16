import React from "react";
import { motion } from "framer-motion";

const cards = [
  { title: "GROUP\nWORKOUT", image: "/images/feature3.jpg", number: "01" },
  { title: "PERSONAL\nTRAINING", image: "/images/feature2.jpg", number: "02" },
  { title: "MUSCLE\nBUILDING", image: "/images/feature1.jpg", number: "03" },
];

export default function ServicesSection() {
  const cardVariants = {
    offscreen: { opacity: 0, y: 50 },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", bounce: 0.2, duration: 0.8 },
    },
  };

  return (
    <section className="w-full bg-black py-10">
      <div className="max-w-[1600px] mx-auto border border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">

          {cards.map((card, index) => (
            <motion.div
              key={index}
              className={`relative h-[300px] overflow-hidden ${index !== cards.length - 1 ? "border-r border-white/10" : ""}`}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 1 }}
              variants={cardVariants}
            >
              {/* PERSPECTIVE CONTAINER */}
              <div
                className="absolute inset-0 p-6 overflow-hidden"
                style={{ perspective: 1000 }}
              >
                <motion.div
                  className="relative w-full h-full"
                  whileHover={{
                    rotateX: 5,
                    rotateY: 5,
                    transition: { type: "spring", stiffness: 100, damping: 10 },
                  }}
                >
                  {/* IMAGE */}
                  <img
                    src={card.image}
                    alt={card.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* OVERLAYS */}
                  <div className="absolute inset-0 bg-black/40 z-10"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70 z-20"></div>

                  {/* CONTENT */}
                  <div className="relative z-30 p-8 flex flex-col gap-1">
                    <img
                      src="/images/featuredec.png"
                      alt="decorative slashes"
                      className="w-14"
                    />
                    <h3 className="text-white text-[34px] font-extrabold leading-tight whitespace-pre-line transition-transform duration-500 group-hover:translate-y-[-5px]">
                      {card.title}
                    </h3>
                  </div>

                  {/* NUMBER */}
                  <motion.span
                    className="absolute bottom-2 left-4 text-[110px] font-extrabold leading-none z-20 pointer-events-none"
                    style={{
                      WebkitTextStroke: "1px rgba(255,255,255,0.15)",
                      color: "transparent",
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: index * 0.2, duration: 1 } }}
                  >
                    {card.number}
                  </motion.span>
                </motion.div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

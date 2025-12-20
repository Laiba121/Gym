import React from "react";
import Slider from "react-slick";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const team = [
  { name: "John Carter", role: "Head Trainer", image: "/images/team1.jpg" },
  { name: "Emily Stone", role: "Fitness Coach", image: "/images/team2.jpg" },
  { name: "David Miller", role: "Strength Expert", image: "/images/team3.jpg" },
  { name: "Sophia Brown", role: "Yoga Instructor", image: "/images/team4.jpg" },
  { name: "Michael Lee", role: "Personal Trainer", image: "/images/team5.jpg" },
  { name: "Laura Kim", role: "Nutritionist", image: "/images/team6.jpg" },
];

export default function TeamSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 4, // default for large screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1536, settings: { slidesToShow: 4 } }, // xl
      { breakpoint: 1280, settings: { slidesToShow: 3 } }, // lg
      { breakpoint: 1024, settings: { slidesToShow: 2 } }, // md
      { breakpoint: 640, settings: { slidesToShow: 1, arrows: false } }, // sm/mobile
    ],
  };

  return (
    <section className="bg-black py-12 sm:py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 relative">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-[#A58120] uppercase tracking-widest text-xs sm:text-sm mb-2">
            Our Trainers
          </p>
          <h2 className="text-white font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-wide">
            Meet The Team
          </h2>
        </div>

        {/* Slider */}
        <Slider {...settings}>
          {team.map((member, i) => (
            <div key={i} className="px-2 sm:px-3">
              <div className="group bg-[#111] rounded-2xl overflow-hidden transition duration-500 hover:scale-[1.03] shadow-lg">

                {/* Image */}
                <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/5] lg:aspect-[3/4]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-end justify-center pb-6 gap-4">
                    {[FaInstagram, FaFacebookF, FaTwitter].map((Icon, idx) => (
                      <div
                        key={idx}
                        className="w-10 h-10 bg-[#A58120] rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition cursor-pointer"
                      >
                        <Icon />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Text */}
                <div className="text-center py-4 sm:py-5 px-3 sm:px-4">
                  <h3 className="text-white font-bold text-base sm:text-lg md:text-xl lg:text-2xl">
                    {member.name}
                  </h3>
                  <p className="text-[#A58120] uppercase tracking-widest text-xs sm:text-sm mt-1 sm:mt-2">
                    {member.role}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

function NextArrow({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 bg-[#A58120] rounded-full flex items-center justify-center text-white cursor-pointer z-30 shadow-lg hover:scale-110 transition"
    >
      →
    </div>
  );
}

function PrevArrow({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 w-8 h-8 sm:w-10 sm:h-10 bg-[#A58120] rounded-full flex items-center justify-center text-white cursor-pointer z-30 shadow-lg hover:scale-110 transition"
    >
      ←
    </div>
  );
}

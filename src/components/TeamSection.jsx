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
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      { breakpoint: 1536, settings: { slidesToShow: 4 } },
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="bg-black py-24 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#ff4d2d] uppercase tracking-widest text-sm sm:text-base mb-3">
            Our Trainers
          </p>
          <h2 className="text-white font-extrabold font-[Platia] text-3xl sm:text-4xl md:text-5xl xl:text-6xl tracking-[0.1em]">
            Meet The Team
          </h2>
        </div>

        {/* Slider */}
        <Slider {...settings} className="relative">
          {team.map((member, i) => (
            <div key={i} className="px-3 sm:px-4">
              <div className="relative group bg-[#111111] rounded-2xl overflow-hidden shadow-[0_5px_15px_rgba(255,120,90,0.4)] transition-transform duration-500 hover:scale-105 hover:shadow-[0_20px_40px_rgba(255,120,90,0.5)]">
                {/* Image */}
                <div className="relative overflow-hidden rounded-t-2xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Social Icons on Hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-baseline-last pb-5 justify-center gap-4">
                    {[FaInstagram, FaFacebookF, FaTwitter].map((Icon, idx) => (
                      <div
                        key={idx}
                        className="w-10 h-10 bg-[#ff4d2d] flex items-center justify-center hover:bg-white hover:text-black transition cursor-pointer rounded-full"
                      >
                        <Icon />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Text */}
                <div className="text-center py-6 px-4">
                  <h3 className="text-white font-extrabold text-lg sm:text-xl md:text-2xl tracking-wide">
                    {member.name}
                  </h3>
                  <p className="text-[#ff4d2d] uppercase tracking-widest text-xs sm:text-sm mt-2">
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

// Custom arrows
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} flex items-center justify-center rounded-full text-white shadow-lg hover:scale-110 transition`}
      style={{
        ...style,
        display: "flex",
        right: window.innerWidth < 640 ? "5px" : "-25px", // responsive position
        width: window.innerWidth < 640 ? "40px" : "50px",   // smaller on mobile
        height: window.innerWidth < 640 ? "40px" : "50px",
        backgroundColor: "rgba(255,77,36,0.85)",
        zIndex: 20,
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} flex items-center justify-center rounded-full text-white shadow-lg hover:scale-110 transition`}
      style={{
        ...style,
        display: "flex",
        left: window.innerWidth < 640 ? "5px" : "-25px", // responsive position
        width: window.innerWidth < 640 ? "40px" : "50px",
        height: window.innerWidth < 640 ? "40px" : "50px",
        backgroundColor: "rgba(255,77,36,0.85)",
        zIndex: 20,
      }}
      onClick={onClick}
    />
  );
}

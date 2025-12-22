import React from "react";
import { Link } from "react-router-dom";
import { scrollToTop } from "../utils/scrollToTop";

import {
  FaFacebookF,
  FaGooglePlusG,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black">
      {/* GRADIENT TOP BORDER */}
      <div className="bg-gradient-to-r from-transparent via-[#A58120] to-transparent pt-[3px] rounded-t-3xl">
        <footer className="bg-[#0a0a0a] text-white rounded-t-3xl overflow-hidden">

          {/* MAIN CONTENT */}
          <div className="max-w-[95%] lg:max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-16 sm:py-20 lg:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr_0.8fr] gap-10 lg:gap-14">

              {/* LEFT */}
              <div className="text-center lg:text-left">
                 < Link to="/">
                <img
                  src="/images/qrlogo.jpg"
                  alt="Fitness Icon"
                  className="w-16 sm:w-30 mb-6 mx-auto lg:mx-0"
                />
                </Link>
                <h2 className="text-[32px] sm:text-[44px] lg:text-[56px] font-extrabold leading-[1.1] tracking-widest">
                  ACHIEVE <br /> WELLBEING
                </h2>
                <p className="mt-4 sm:mt-6 text-[14px] sm:text-[18px] lg:text-[22px] uppercase tracking-[0.2em] text-[#A58120]">
                  Core Strength
                </p>
              </div>

              {/* CENTER */}

              <div className="relative pl-0 lg:pl-10 text-center lg:text-left">
                <span className="hidden lg:block absolute left-0 top-0 h-full bg-white/10" />
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                  < Link to="/">
                  <img
                    src="/images/qrlogo.jpg"
                    alt="QRGYM Logo"
                    className="w-10 h-auto object-contain sm:w-12 sm:h-12"
                  />
                  </Link>
                  <h3 className="text-xl sm:text-2xl text-[#A58120] font-semibold tracking-[0.15em]">
                    GYM
                  </h3>
                </div>
                <p className="text-white/60 text-sm sm:text-base max-w-md mx-auto lg:mx-0 mb-6 sm:mb-8">
                  Welcome to QRGYM! We are here to support and guide you.
                </p>
                <p className="text-[#A58120] uppercase tracking-widest text-xs sm:text-sm mb-1">
                  Call Us Anytime
                </p>
                <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold mb-4 sm:mb-8">
                  66474187
                </p>
                <p className="text-[#A58120] uppercase tracking-widest text-xs sm:text-sm mb-1">
                  Visit Our Location
                </p>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                 First floor, directly opposite the National Museum – Al Riffa area, Doha, Qatar
                </p>
              </div>

              {/* RIGHT */}
              <div className="relative pl-0 lg:pl-10 text-center lg:text-left">
                <span className="hidden lg:block absolute left-0 top-0 h-full w-px bg-white/10" />
                <h4 className="uppercase tracking-[0.2em] font-bold mb-4 text-sm sm:text-base">
                  Quick Links
                </h4>
                <div className="flex justify-center lg:justify-start gap-1 mb-6 sm:mb-8">
                  <span className="w-3 h-[3px] bg-[#A58120]" />
                  <span className="w-3 h-[3px] bg-[#A58120]" />
                  <span className="w-3 h-[3px] bg-[#A58120]" />
                </div>
              <ul className="space-y-3 sm:space-y-4 text-white/60 text-xs sm:text-sm tracking-wide">
  <li>
    <Link
      to="/"
      onClick={scrollToTop}
      className="hover:text-[#A58120] transition uppercase"
    >
      Home
    </Link>
  </li>

  <li>
    <Link
      to="/about"
      onClick={scrollToTop}
      className="hover:text-[#A58120] transition uppercase"
    >
      About Us
    </Link>
  </li>

  <li>
    <Link
      to="/services"
      onClick={scrollToTop}
      className="hover:text-[#A58120] transition uppercase"
    >
      Our Services
    </Link>
  </li>

  <li>
    <Link
      to="/contact"
      onClick={scrollToTop}
      className="hover:text-[#A58120] transition uppercase"
    >
      Contact Us
    </Link>
  </li>
</ul>

              </div>

            </div>
          </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 bg-black">
        <div className="max-w-[95%] lg:max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-6 flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-0 text-center lg:text-left">
          <p className="text-xs sm:text-sm text-white/50">
            © 2023 <span className="text-[#A58120]">QRGYM</span>. All rights
            reserved by <span className="text-[#A58120]">BravisThemes</span>
          </p>
          
          <div className="flex gap-3">
            {[
              { Icon: FaFacebookF, link: "https://www.facebook.com/profile.php?id=61583350382077&sk=about" },
              { Icon: FaGooglePlusG, link: "#" }, // Replace "#" with your Google+ link if available
              { Icon: FaInstagram, link: "https://www.instagram.com/qr_gym/?igsh=MmdyNzlobGtlbWE&utm_source=qr" },
              { Icon: FaTiktok, link: "https://www.tiktok.com/@qrgym0?_r=1&_t=ZS-9197GaYMHQ7" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-11 sm:h-11 bg-[#141414] flex items-center justify-center hover:bg-[#A58120] transition cursor-pointer"
                aria-label={`Visit our ${social.Icon.name} page`}
              >
                <social.Icon className="text-white" />
              </a>
            ))}
          </div>
          
          <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm text-white/50">
            <span className="hover:text-white cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white cursor-pointer">
              Terms & Condition
            </span>
          </div>
        </div>
      </div>
  

        </footer>
      </div>
    </div>
  );
};

export default Footer;

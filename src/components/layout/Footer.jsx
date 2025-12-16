import React from "react";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black">
      {/* GRADIENT TOP BORDER */}
      <div className="bg-gradient-to-r from-transparent via-[#ff4d2d] to-transparent pt-[3px] rounded-t-3xl">
        <footer className="bg-[#0a0a0a] text-white rounded-t-3xl overflow-hidden">

          {/* MAIN CONTENT */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-16 sm:py-20 lg:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr_0.8fr] gap-14 lg:gap-20">

              {/* LEFT */}
              <div className="text-center lg:text-left">
                <img
                  src="/images/logo1.png"
                  alt="Fitness Icon"
                  className="w-16 sm:w-20 mb-6 mx-auto lg:mx-0"
                />

                <h2 className="text-[36px] sm:text-[48px] lg:text-[64px] font-extrabold leading-[1.1] tracking-widest">
                  ACHIEVE <br /> WELLBEING
                </h2>

                <p className="mt-4 sm:mt-6 text-[16px] sm:text-[20px] lg:text-[26px] uppercase tracking-[0.3em] text-[#ff4d2d]">
                  Core Strength
                </p>
              </div>

              {/* CENTER */}
              <div className="relative pl-0 lg:pl-16 text-center lg:text-left">
                <span className="hidden lg:block absolute left-0 top-0 h-full w-px bg-white/10" />

                <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                  <img
                    src="/images/logo.png"
                    alt="QRGYM Logo"
                    className="w-10 h-10 sm:w-12 sm:h-12"
                  />
                  <h3 className="text-xl sm:text-2xl font-extrabold tracking-[0.2em]">
                    QRGYM
                  </h3>
                </div>

                <p className="text-white/60 text-sm sm:text-base max-w-md mx-auto lg:mx-0 mb-8">
                  Welcome to QRGYM! We are here to support and guide you.
                </p>

                <p className="text-[#ff4d2d] uppercase tracking-widest text-xs sm:text-sm mb-2">
                  Call Us Anytime
                </p>
                <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold mb-8">
                  +123&nbsp;45677345
                </p>

                <p className="text-[#ff4d2d] uppercase tracking-widest text-xs sm:text-sm mb-2">
                  Visit Our Location
                </p>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                  17110 116th Ave SE Unit A <br />
                  Renton, WA 98058–5055
                </p>
              </div>

              {/* RIGHT */}
              <div className="relative pl-0 lg:pl-16 text-center lg:text-left">
                <span className="hidden lg:block absolute left-0 top-0 h-full w-px bg-white/10" />

                <h4 className="uppercase tracking-[0.25em] font-bold mb-4 text-sm sm:text-base">
                  Our Services
                </h4>

                <div className="flex justify-center lg:justify-start gap-1 mb-8">
                  <span className="w-3 h-[3px] bg-[#ff4d2d]" />
                  <span className="w-3 h-[3px] bg-[#ff4d2d]" />
                  <span className="w-3 h-[3px] bg-[#ff4d2d]" />
                </div>

                <ul className="space-y-4 text-white/60 text-xs sm:text-sm tracking-wide">
                  <li>PERSONAL TRAINING</li>
                  <li>GROUP WORKOUT</li>
                  <li>MUSCLE BUILDING</li>
                  <li>VIRTUAL GYM TRAINING</li>
                  <li>WEIGHTLOSS TRAINING</li>
                  <li>BODY STRETCHING</li>
                </ul>
              </div>

            </div>
          </div>

          {/* BOTTOM BAR */}
          <div className="border-t border-white/10 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-6 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">

              <p className="text-xs sm:text-sm text-white/50">
                © 2023 <span className="text-[#ff4d2d]">QRGYM</span>. All rights
                reserved by{" "}
                <span className="text-[#ff4d2d]">BravisThemes</span>
              </p>

              <div className="flex gap-3">
                {[FaFacebookF, FaGooglePlusG, FaInstagram, FaPinterestP].map(
                  (Icon, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 sm:w-11 sm:h-11 bg-[#141414] flex items-center justify-center hover:bg-[#ff4d2d] transition cursor-pointer"
                    >
                      <Icon />
                    </div>
                  )
                )}
              </div>

              <div className="flex gap-6 text-xs sm:text-sm text-white/50">
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

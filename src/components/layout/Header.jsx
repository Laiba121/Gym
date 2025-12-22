import React, { useState, useEffect } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT US", path: "/about" },
    { name: "SERVICES", path: "/services" },
    { name: "CONTACT", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full z-60 bg-black ${
        scrolled ? "fixed top-0 shadow-md" : "relative"
      } transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 py-3">
        <div className="flex items-center justify-between">
          {/* LOGO */}
         <div className="flex items-center space-x-4">
  <Link to="/">
    <img
      src="/images/qrlogo.jpg"
      alt="logo"
      className="h-17 w-auto cursor-pointer"
    />
  </Link>
</div>

          {/* DESKTOP MENU - Updated with orange line animation */}
          <nav className="hidden lg:flex items-center text-white text-sm font-semibold">
            {menuItems.map((item) => (
              <Link key={item.name} to={item.path} >
                <div className="px-8 xl:px-12 py-6 border-r border-white/10 hover:text-[#A58120] transition cursor-pointer relative overflow-hidden group">
                  {/* Orange line animation */}
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#A58120] group-hover:w-full transition-all duration-300" />
                  {item.name}
                </div>
              </Link>
            ))}
          </nav>

         {/* DESKTOP CTA - Shimmer effect */}
           <Link to="contact">
<div className="hidden lg:flex items-center px-6 py-4 xl:px-10 xl:py-6 bg-[#A58120] text-black font-extrabold tracking-widest cursor-pointer 
                relative overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-[#A58120]/50">
  <span className="relative z-10 group-hover:text-white transition-colors duration-500">JOIN US TODAY</span>
  
  {/* Shimmer animation */}
  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent 
                   group-hover:translate-x-full transition-transform duration-1000" />
</div>
</Link>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden flex items-center justify-center bg-[#A58120] px-4 py-2 transition"
          >
            {open ? (
              <HiXMark className="text-black text-3xl transition-transform duration-300" />
            ) : (
              <HiBars3 className="text-black text-3xl transition-transform duration-300" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden absolute left-0 w-full z-60 bg-black border-t border-white/10 transition-all duration-300 overflow-hidden ${
          open ? "max-h-[400px] z-100 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col text-white text-sm font-semibold text-center">
          {menuItems.map((item) => (
            <Link key={item.name} to={item.path} onClick={() => setOpen(false)}>
              <div className="px-6 py-5 border-b border-white/10 hover:bg-[#A58120] hover:text-black transition cursor-pointer tracking-widest">
                {item.name}
              </div>
            </Link>
          ))}

 <Link to="/contact">
         <div className="mx-auto w-40 mb-10 py-4 bg-[#A58120] text-black font-extrabold tracking-widest cursor-pointer transition hover:bg-[#A58120]">
            JOIN US TODAY
          </div>
          </Link>
        </nav>
      </div>
    </header>
  );
}
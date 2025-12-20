import React from "react";

export default function ContactFormSection() {
  return (
    <section className="bg-black py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
        
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight tracking-wide">
            FEEL FREE TO ASK <br /> US ANYTHING
          </h2>

          <p className="text-white/70 mt-6 text-base sm:text-lg leading-relaxed max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse interdum nulla eu posuere scelerisque.
            Donec sagittis adipiscing elit.
          </p>
        </div>

        {/* RIGHT FORM */}
        <form className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Name */}
            <input
              type="text"
              placeholder="Your full name"
              className="bg-[#111111] border border-white/10 px-5 py-4 text-white placeholder-white/50 focus:outline-none focus:border-[#ff4d2d] transition"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="E-mail address"
              className="bg-[#111111] border border-white/10 px-5 py-4 text-white placeholder-white/50 focus:outline-none focus:border-[#ff4d2d] transition"
            />
          </div>

          {/* Subject */}
          <input
            type="text"
            placeholder="Subject"
            className="w-full mt-6 bg-[#111111] border border-white/10 px-5 py-4 text-white placeholder-white/50 focus:outline-none focus:border-[#ff4d2d] transition"
          />

          {/* Message */}
          <textarea
            rows="6"
            placeholder="Your message"
            className="w-full mt-6 bg-[#111111] border border-white/10 px-5 py-4 text-white placeholder-white/50 focus:outline-none focus:border-[#ff4d2d] transition resize-none"
          />

         <button
  type="submit"
  className="mt-8 relative bg-[#3a3a3a] text-white font-bold tracking-widest uppercase px-10 py-4 hover:bg-[#ff4d2d] transition-all duration-500 flex items-center gap-3 group overflow-hidden"
>
  <span className="relative z-10">GET STARTED TODAY</span>
  <span className="relative z-10 text-xl">+</span>

  {/* Starting as thin side bars, expanding to fill from sides */}
  <span className="absolute left-0 top-0 h-full w-1 bg-[#ff4d2d] group-hover:w-1/2 transition-all duration-500" />
  <span className="absolute right-0 top-0 h-full w-1 bg-[#ff4d2d] group-hover:w-1/2 transition-all duration-500" />

            {/* Orange side bars */}
            <span className="absolute left-0 top-0 h-full w-1 bg-[#ff4d2d]" />
            <span className="absolute right-0 top-0 h-full w-1 bg-[#ff4d2d]" />
          </button>
        </form>
      </div>
    </section>
  );
}

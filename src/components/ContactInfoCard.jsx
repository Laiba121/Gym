import React from "react";

export default function ContactInfoCard({ title, subtitle, value }) {
  return (
    <div className="border border-white/20 p-8 flex flex-col gap-4 h-full">
      
      {/* Title */}
      <h3 className="text-white font-extrabold tracking-widest flex items-center gap-3 text-lg">
        <span className="text-[#ff4d2d]">///</span>
        {title}
      </h3>

      {/* Subtitle */}
      <p className="text-white/50 uppercase tracking-widest text-xs">
        {subtitle}
      </p>

      {/* Value */}
      <p className="text-white font-bold tracking-wide text-base sm:text-lg break-words">
        {value}
      </p>
    </div>
  );
}

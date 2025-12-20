import React from "react";

const items = [
  "Dead Lift",
  "Pilates",
  "Dumbbell",
  "Plank",
  "Cardio",
  "Bench",
];

export default function SliderSection() {
  return (
    <section className="relative w-full h-[260px] overflow-hidden bg-transparent">

      {/* BACK DARK STRIP */}
      <div className="absolute inset-0 flex justify-center items-center overflow-hidden z-0">
        <div className="relative bg-[#342f2f] w-[150%] rotate-[7deg] py-2 px-12">
          <div className="border-t-3 border-b-3 border-black py-1 px-2 box-border rounded-md overflow-hidden">
            <div className="flex w-max animate-marquee-right">
              {[...items, ...items, ...items].map((item, i) => (
                <StripItem key={i} text={item} dark />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FRONT ORANGE STRIP */}
      <div className="absolute inset-0 flex justify-center items-center overflow-hidden z-10">
        <div className="relative bg-[#A58120] w-[150%] rotate-[-1deg] py-2 px-12">
          <div className="border-t-3 border-b-3 border-black py-1 px-2 box-border rounded-md overflow-hidden">
            <div className="flex w-max animate-marquee-left">
              {[...items, ...items, ...items].map((item, i) => (
                <StripItem key={i} text={item} />
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

function StripItem({ text, dark }) {
  return (
    <div className="flex items-center gap-6 px-4">
      <span
        className={`font-bold uppercase tracking-widest font-[Platia] text-3xl ${
          dark ? "text-gray-400" : "text-black"
        }`}
      >
        {text}
      </span>
      <span
        className={`text-5xl font-black ${
          dark ? "text-[#A58120]" : "text-black"
        }`}
      >
        ✦
      </span>
    </div>
  );
}

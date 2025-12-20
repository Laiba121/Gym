import React from "react";

const hours = [
  { day: "Monday", time: "6am – 2am" },
  { day: "Tuesday", time: "6am – 2am" },
  { day: "Wednesday", time: "6am – 2am" },
  { day: "Thursday", time: "6am – 2am" },
  { day: "Friday", time: "6am – 2am" },
  { day: "Saturday", time: "6am – 2am" },
  { day: "Sunday", time: "Closed", closed: true },
];

export default function OpeningHours() {
  return (
    <div className="bg-black text-white w-full max-w-md mx-auto lg:mx-0 lg:w-[380px] xl:w-[420px] rounded-2xl overflow-hidden shadow-2xl">
      {hours.map((item, i) => (
        <div
          key={i}
          className="flex justify-between items-center px-4 py-3 border-b border-white/10"
        >
          <span className="font-semibold tracking-wide">{item.day}</span>
          <span className={`font-semibold ${item.closed ? "text-[#A58120]" : "text-white"}`}>
            {item.time}
          </span>
        </div>
      ))}
    </div>
  );
}

import React from "react";
import MapSection from "./MapSection";
import OpeningHours from "./OpeningHours";

export default function ContactMapSection() {
  return (
    <section className="relative bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        
        <div className="relative flex flex-col lg:flex-row gap-8">
          
          {/* Map */}
          <div className="flex-1 relative overflow-hidden">
            <MapSection />
          </div>

          {/* Opening Hours */}
          <div className="relative lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 shadow-2xl">
            <OpeningHours />
          </div>

        </div>

      </div>
    </section>
  );
}

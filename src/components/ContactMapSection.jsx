import React from "react";
import MapSection from "./MapSection";
import OpeningHours from "./OpeningHours";

export default function ContactMapSection() {
  return (
    <section className="bg-black py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 relative">

        {/* Map container */}
        <div className="relative w-full overflow-hidden rounded-2xl">

          {/* Map */}
          <MapSection />

          {/* Opening Hours overlay on large screens, left side */}
          <div
            className="
              hidden lg:block
              absolute
              top-1/2 left-8
              -translate-y-1/2
              w-[380px] xl:w-[420px]
              max-w-full
              z-20
              shadow-2xl
            "
          >
            <OpeningHours />
          </div>
        </div>

        {/* Opening Hours below map on < lg screens */}
        <div className="block lg:hidden mt-6 w-full max-w-md mx-auto shadow-2xl">
          <OpeningHours />
        </div>

      </div>
    </section>
  );
}

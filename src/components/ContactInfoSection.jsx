import React from "react";
import ContactInfoCard from "./ContactInfoCard";

export default function ContactInfoSection() {
  return (
    <section className="bg-black py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        
        <div className="grid grid-cols-1 md:grid-cols-3">
          <ContactInfoCard
            title="PHONE NO"
            subtitle="Call us anytime"
            value="+123 66474187"
          />

          <ContactInfoCard
            title="EMAIL ADDRESS"
            subtitle="Send us mail"
            value="QRGYM@EMAIL.COM"
          />

          <ContactInfoCard
            title="ADDRESS"
            subtitle="Visit our gym"
            value="First floor, directly opposite the National Museum – Al Riffa area, Doha, Qatar"
          />
        </div>

      </div>
    </section>
  );
}

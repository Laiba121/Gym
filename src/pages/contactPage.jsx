import React from "react";
import ContactHero from "../components/ContactHero";
import ContactInfo from "../components/ContactInfoSection";
import ContactMap from "../components/ContactMapSection";
import ContactForm from "../components/ContactFormSection";
import Newsletter from "../components/NewsletterSection";

export default function ContactPage() {
  return (
    <main className="bg-black text-white">
      <ContactHero />
      <ContactInfo />
      <ContactMap />
      <ContactForm />
      <Newsletter />
    </main>
  );
}

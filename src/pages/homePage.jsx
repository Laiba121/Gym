import React from "react";
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import AboutSection from "../components/AboutSection";
import WhyChooseUs from "../components/WhyChooseUs";
import TeamSection from "../components/TeamSection";
import BmiCalculator from "../components/BmiCalculator";
import Newsletter from "../components/NewsletterSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <AboutSection />
      <WhyChooseUs />
      <TeamSection />
      <BmiCalculator />
      <Newsletter />
    </>
  );
}

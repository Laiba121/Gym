import React from "react";
import Header from "./components/layout/Header";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import AboutSection from "./components/AboutSection";
import WhyChooseUs from "./components/WhyChooseUs";
import BmiCalculator from "./components/BmiCalculator";
import Newsletter from "./components/NewsletterSection";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <FeatureSection />

      <AboutSection />
       <WhyChooseUs />
        <BmiCalculator />
         <Newsletter />
       <Footer />
    </>
  );
}

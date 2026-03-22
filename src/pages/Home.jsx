import React, { useEffect } from "react";
import StickyHeader from "../components/landing/StickyHeader";
import Hero from "../components/landing/Hero";
import ProblemSection from "../components/landing/ProblemSection";
import SolutionSection from "../components/landing/SolutionSection";
import FeaturesSection from "../components/landing/FeaturesSection";
import UseCasesSection from "../components/landing/UseCasesSection";
import HowItWorks from "../components/landing/HowItWorks";
import About from "../components/landing/About";
import Team from "../components/landing/Team";
import ContactCTA from "../components/landing/ContactCTA";
import Footer from "../components/landing/Footer";

export default function Home() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="min-h-screen bg-[#0E0E10] overflow-x-hidden pt-24 lg:pt-28">
      <StickyHeader />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <UseCasesSection />
      <HowItWorks />
      <About />
      <Team />
      <ContactCTA />
      <Footer />
    </div>
  );
}
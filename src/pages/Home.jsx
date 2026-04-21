import React, { useEffect } from "react";
import StickyHeader from "../components/landing/StickyHeader";
import Hero from "../components/landing/Hero";
import Problem from "../components/landing/Problem";
import Solution from "../components/landing/Solution";
import Features from "../components/landing/Features";
import UseCases from "../components/landing/UseCases";
import HowItWorks from "../components/landing/HowItWorks";
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
      <Problem />
      <Solution />
      <Features />
      <UseCases />
      <HowItWorks />
      <Team />
      <ContactCTA />
      <Footer />
    </div>
  );
}
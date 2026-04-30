import React from "react";
import { Hero } from "./Hero";
import { Specialties } from "./Specialties";
import { ValueProposition } from "./ValueProposition";
import { HowItWorks } from "./HowItWorks";
import { FinalCTA } from "./FinalCTA";

export const TalentHub = () => {
  return (
    <div className="pt-28 pb-32 px-6 max-w-7xl mx-auto min-h-screen font-sans relative overflow-hidden">
      {/* Fondos abstractos globales */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#288B88]/5 blur-[120px] rounded-full -z-10 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#D9C58F]/5 blur-[150px] rounded-full -z-10 pointer-events-none"></div>

      <Hero />
      <Specialties />
      <ValueProposition />
      <HowItWorks />
      <FinalCTA />
    </div>
  );
};

import Guidance from "@/components/jobSeeker/Guidance/Guidance";
import HeroSection from "@/components/jobSeeker/heroSection/HeroSection";
import Icons from "@/components/jobSeeker/icons/Icons";
import Immigration from "@/components/jobSeeker/Immigration/Immigration";
import Team from "@/components/jobSeeker/Team/Team";
import React from "react";

const page = () => {
  return (
    <>
      <HeroSection />
      <Guidance />
      <Immigration />
      <Team />
      <Icons />
    </>
  );
};

export default page;

import React from "react";
import Core from "@/components/Employer/Core";
import EHero from "@/components/Employer/EHero";
import Network from "@/components/Employer/Network";
import Technology from "@/components/Employer/Technology";

const Page = () => {
  return (
    <>
      <EHero />
      <Network />
      <Technology />
      <Core />
    </>
  );
};

export default Page;

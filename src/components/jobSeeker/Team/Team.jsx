import React from "react";
import Img from "./assets/immigration_team.jpg";
import Image from "next/image";

function Team() {
  return (
    <>
      <div className="w-full h-[500px]  max-md:h-full">
        <div className="max-w-6xl flex mx-auto  gap-20 my-[70px] max-md:flex-col">
          <div className="w[3000px]">
            <Image src={Img} alt="" />
          </div>
          <div className="w-[50%] max-md:w-full max-md:p-4">
            <h1 className="font-bold text-[28px] mb-[20px]">
              Dedicated immigration team
            </h1>
            <p className="leading-8">
              Our dedicated immigration team is always a phone call away to
              address questions and concerns. We surround ourselves with
              clientele that understand the complexities of immigration,
              regardless of visa status, and build strong relationships to
              ensure we can obtain all paperwork required. Our top priority at
              Empower is a commitment to our workforce to effectively manage
              these back office processes to allow you to focus on what matters
              - your career.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;

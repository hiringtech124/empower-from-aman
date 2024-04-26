import React from "react";
import "./style.css";
import Image from "next/image";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img from "./assets/don.png";

function HeroSection() {
  return (
    <>
      <div className="hero w-full h-[280px] reative">
        <div className="text-white flex flex-col font-openSans gap-6 justify-center items-center mx-auto my-[131px] w-[1110px] h-[238px] max-md:w-full">
          <h1 className="text-[40px] font-bold font-mono">For Job Seekers</h1>
          <p className="w-[550px] h-[72] text-center text-[16px] mb-[15px] max-md:w-full">
            Empower believes in an employee-centric culture where we provide
            flexibility and hold employee preference in high regard.
          </p>
          <div className="text-center mt-1 wfull">
            <span className="hover:border flex px-[20px] py-[15px] w-auto rounded-full bg-sky-600 hover:bg-transparent duration-100 items-center text-2xl">
              <Image src={img} alt="" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;

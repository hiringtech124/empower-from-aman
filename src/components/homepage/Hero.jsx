import React from "react";
import "./home.scss";
import Image from "next/image";

import img from "./assets/rightarrowhite.png";
const Hero = () => {
  return (
    <>
      <section className="home-hero  h-[80vh] max-md:h-[100vh]">
        <div className="max-w-[68rem] mx-auto h[500px]  mt-[8%]">
          <div className="content w-[50%] flex flex-col justify-start items-start max-lg:w-full">
            <h1 className="ml-[0] mr-[0] my-[30px] px-[15px] py-[0] text-[40px] font-bold leading-[56px] text-[#fff] w-[544px] max-md:pl-4 max-md:w-full">
              Empowering Your Digital Journey
            </h1>
            <p className=" text-[#fff] mb-[10px] px-[15px] py-[0] text-[14px] max-w-[424px] ">
              Building Tomorrow&#39;s Solutions Today. Innovate with confidence
              equipped with Empower’s expertise. We provide technology and
              talent solutions for organizations of all sizes
            </p>
            <div className="button-hero flex  max-md:flex-wrap">
              <button className="one  text-[#fff] font-normal text-[12px] tracking-[1px] inlin-block px-[22px] py-[10px] rounded-[50px] [transition:0.5s] m-[10px] border-[1px] border-[solid] border-[#1d83b3] bg-[#1d83b3] text-center w-[165px]  flex justify-center items-center gap-2 hover:bg-[transparent] hover:border-[#fff]">
                {/* <span></span> */}
                <Image className="align-middle border-none" src={img} alt="" />
                <span>JOBSEEKER</span>
              </button>
              <button className="one  text-[#fff] font-normal text-[12px] tracking-[1px] inlineblock px-[22px] py-[10px] rounded-[50px] [transition:0.5s] m-[10px] border-[1px] border-[solid] border-[#ffffff] text-center w-[165px] flex justify-center items-center gap-2 hover:bg-[#1d83b3] hover:border-[#1d83b3]">
                <Image src={img} alt="" />
                <span>EMPLOYER</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

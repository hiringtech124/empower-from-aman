import React from "react";
import "./style.scss";
import Image from "next/image";
import Link from "next/link";
import img from "./assets/rightarrowhite.png";

const EHero = () => {
  return (
    <>
      <section className="ehome-hero  h-[60vh] max-md:h-[60vh]">
        <div className="max-w-[68rem] mx-auto h[500px]  mt-[12%]">
          <div className="content w-[50%] flex flex-col justify-start items-start  max-md:w-full  max-md:justify-center max-md:items-start">
            <h1 className="ml-[0] mr-[0] my-[30px] px-[15px] py-[0] text-[40px] font-bold leading-[56px] text-[#fff] w-[344px] max-md:pl-4">
              For Business
            </h1>
            <p className=" text-[#fff] mb-[10px] px-[15px] py-[0] text-[14px] max-w-[424px]">
              Why Empower Professionals?
            </p>
            <div className="button-hero flex  max-md:flex-wrap">
              <Link
                href="/"
                className="one  text-[#fff] font-normal text-[12px] tracking-[1px] inlin-block px-[22px] py-[10px] rounded-[50px] [transition:0.5s] m-[10px] border-[1px] border-[solid] border-[#1d83b3] bg-[#1d83b3] text-center w-[165px]  flex justify-center items-center gap-2 hover:bg-[transparent] hover:border-[#fff]"
              >
                <Image className="align-middle border-none" src={img} alt="" />
                <span>JOBSEEKER</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default EHero;

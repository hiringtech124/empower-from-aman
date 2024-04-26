"use client";
import Image from "next/image";
import React from "react";
import "./home.scss";
// import Image from "next/image";

import img from "./assets/rightarrowhite.png";
import imgf from "./assets/jobseeker.jpg";
import imgff from "./assets/employer.jpg";

import { useEffect, useRef } from "react";

// import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollMagic from "scrollmagic";
import { TweenMax } from "gsap";
import { gsap, Power2 } from "gsap";

gsap.registerPlugin(ScrollTrigger);

const Seeker = () => {
  useEffect(() => {
    const controller = new ScrollMagic.Controller();

    const sections = document.querySelectorAll(".servicchomesection");
    sections.forEach((section) => {
      new ScrollMagic.Scene({
        triggerElement: section,
        triggerHook: 1, // Adjust this value to control when the animation starts
        reverse: false,
      })
        .on("enter", () => {
          TweenMax.to(section, 0, { opacity: 1, x: 0, ease: "easeOut" });
        })
        .addTo(controller);
    });
  }, []);

  useEffect(() => {
    const controller = new ScrollMagic.Controller();

    const sections = document.querySelectorAll(".box-one1");
    sections.forEach((section) => {
      new ScrollMagic.Scene({
        triggerElement: section,
        triggerHook: 1, // Adjust this value to control when the animation starts
        reverse: false,
      })
        .on("enter", () => {
          TweenMax.to(section, 0, { opacity: 1, x: 0, ease: "easeOut" });
        })
        .addTo(controller);
    });
  }, []);
  return (
    <>
      <section className="seeker">
        <div className="max-w-6xl mx-auto">
          <dov className="boxes flex gap-10 max-md:flex-wrap max-md:w-full">
            <div
              // ref={leftDivRef}
              className="box-one group mb-[36px] bg-[#efefef] pb-[2px] p max-md:w-full servicchomesection "
            >
              <div className="box-img overflow-hidden">
                <Image
                  src={imgf}
                  alt=""
                  className="group-hover:scale-[1.1] transition-all"
                />
              </div>
              <div className="p-4">
                <h1 className="text-[20px] font-bold">Services</h1>
                <p className="-[20px] py-[0] mb-[20px] text-[#000] minh-[65px] text-[14px]">
                  Services: Product is in our DNA
                </p>
                <div className="button-hero flex max-md:flex-wrap">
                  <button className="one  text-[#fff] font-normal text-[12px] tracking-[1px] inlin-block px-[22px] py-[10px] rounded-[50px] [transition:0.5s] m-[10px] border-[1px] border-[solid] border-[#1d83b3] bg-[#1d83b3] text-center w-[165px]  flex justify-center items-center hover:text-black gap-2 hover:bg-[transparent] hover:border-[#fff]">
                    <Image
                      className="align-middle border-none "
                      src={img}
                      alt=""
                    />
                    <span>JOBSEEKER</span>
                  </button>
                  <button className="one  text-[#000] font-normal text-[12px] tracking-[1px] inlineblock px-[22px] py-[10px] rounded-[50px] [transition:0.5s] m-[10px] border-[0px] border-[solid] border[#ffffff] text-center w-[195px] flex justify-center items-center gap-2 hover:underline hoverborder-[#1d83b3]">
                    <Image
                      src="https://www.empowerprofessionals.com/img/ico_right.svg"
                      width={15}
                      height={15}
                      alt=""
                    />
                    <span>FIND OUT MORE</span>
                  </button>
                </div>
              </div>
            </div>
            <div
              // ref={rightDivRef}
              className="box-one1 group mb-[36px] bg-[#efefef] pb-[2px] max-md:w-full servicchomesection"
            >
              <div className="box-img overflow-hidden">
                <Image
                  src={imgff}
                  alt=""
                  className="group-hover:scale-[1.1] transition-all"
                />
              </div>
              <div className="p-4">
                <h1 className="text-[20px] font-bold">Staff Augmentation</h1>
                <p className="-[20px] py-[0] mb-[20px] text-[#000] minh-[65px] text-[14px]">
                  Staff Augmentation: High Quality at High Volume
                </p>
                <div className="button-hero flex max-md:flex-wrap">
                  <button className="one  text-[#fff] font-normal text-[12px] tracking-[1px] inlin-block px-[22px] py-[10px] rounded-[50px] [transition:0.5s] m-[10px] border-[1px] border-[solid] border-[#1d83b3] bg-[#1d83b3] text-center w-[165px]  flex justify-center items-center gap-2 hover:bg-[transparent]  hover:text-black hover:border-[#fff]">
                    <Image
                      className="align-middle border-none"
                      src={img}
                      alt=""
                    />
                    <span>JOBSEEKER</span>
                  </button>
                  <button className="one  text-[#000] font-normal text-[12px] tracking-[1px] inlineblock px-[22px] py-[10px] rounded-[50px] [transition:0.5s] m-[10px] border-[0px] border-[solid] border[#ffffff] text-center w-[195px] flex justify-center items-center gap-2 hover:underline hoverborder-[#1d83b3] ">
                    <Image
                      src="https://www.empowerprofessionals.com/img/ico_right.svg"
                      width={15}
                      height={15}
                      alt=""
                    />
                    <span>FIND OUT MORE</span>
                  </button>
                </div>
              </div>
            </div>
          </dov>
        </div>
      </section>
    </>
  );
};

export default Seeker;

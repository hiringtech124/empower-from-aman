"use client";
import Image from "next/image";
import React from "react";
import img from "./assets/why_empower.jpg";
import imgg from "./assets/rightarrowhite.png";
import Link from "next/link";
import cr from "./assets/cr.jpg";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollMagic from "scrollmagic";
import { TweenMax } from "gsap";
import { gsap, Power2 } from "gsap";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Professionals = () => {
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

    const sections = document.querySelectorAll(".boxw");
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
      <div className="professionals pl-[0] pr-[0] py-[60px]">
        <div className="max-w-6xl mx-auto">
          <div class="col12 flex justify-center items-center gap-10 max-md:w-full max-md:flex-wrap">
            <Image
              class="max-w-[50%] float-left pt-[0] pr-[30px] pb-[30px] pl-[0] max-md:max-w-full max-md:p-5 servicchomesection"
              src={img}
              alt=""
            />
            <div class="max-md:p-5 boxw">
              <h2 class="text-[26px] font-bold text-[#000]">Our Core Values</h2>

              <p className="leading-[24px] text-[#000] mb-[30px] mt-8">
                Integrity: Upholding honest, transparent, and ethical behavior
                in all dealings, building trust with integrity as our
                cornerstone
                <br />
                Commitment - Demonstrating unwavering dedication to our mission,
                values, and stakeholders, driving us to go above and beyond in
                all that we do
                <br />
                Collaboration - Encouraging teamwork, open communication, and
                mutual respect to achieve common goals and foster a supportive
                work environment
              </p>
              <Link
                href="/"
                className="one  text-[#000] font-normal text-[12px] tracking-[1px] inlineblock px-[22px] py-[10px] rounded-[50px] [transition:0.5s] my-[10px] border[1px] bord] border[#ffffff] text-center w-[195px] flex justify-center items-center gap-2 hover:underline hoverborder-[#1d83b3]"
              >
                <Image
                  src="https://www.empowerprofessionals.com/img/ico_right.svg"
                  width={15}
                  height={15}
                  alt=""
                />
                <span>FIND OUT MORE</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section className="img w-full">
        <Image src={cr} alt="" className="w-full" />
      </section>
    </>
  );
};

export default Professionals;

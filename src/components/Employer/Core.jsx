"use client";
import Image from "next/image";
import React from "react";
import img from "./assets/core.jpg";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollMagic from "scrollmagic";
import { TweenMax } from "gsap";
import { gsap, Power2 } from "gsap";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const Core = () => {
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
              <p className="leading-[24px] text-[1rem] text-[#000] mb-[30px] mt-8">
                The core of our recruiting staff come from technical
                backgrounds, and Empower regularly facilitates training in new
                areas of technology to ensure all individuals understand the
                differences between what a microservices and monolithic
                architecture are, what a true agile practice looks like, what
                upgrades angular 7 has made to previous versions, and more.
                <br />
                <br />
                After sourcing and a preliminary match, all candidates are
                video-interviewed to assess true technical competency and fit,
                as well as credibility. By the time our candidates reach the
                hiring team, 90% of the job is done.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Core;

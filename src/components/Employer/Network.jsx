"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import img from "./assets/network.jpg";
import imgg from "./assets/rightarrowhite.png";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollMagic from "scrollmagic";
import { TweenMax } from "gsap";
import { gsap, Power2 } from "gsap";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const Network = () => {
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
              <h2 class="text-[26px] font-bold text-[#000]">
                A strong network
              </h2>

              <p className="leading-[24px] text-[#000] mb-[30px] mt-8">
                Empower is well-integrated into the consulting ecosystem and,
                over the course of 12 years of business and backed by a
                management team with 3 decades of experience in the industry,
                has become a key partner for global corporations across
                industries looking for top IT talent to enlist in ongoing
                initiatives.
                <br />
                <br />
                From the start, we have strategically surrounded ourselves with
                similarly minded partners and organizations, further
                strengthening our commitment to quality and excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Network;

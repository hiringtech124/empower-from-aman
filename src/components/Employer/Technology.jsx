import Image from "next/image";
import Link from "next/link";
import React from "react";

const Technology = () => {
  return (
    <>
      <section className="e-home overflow-hidden py-16">
        <div className="max-w-6xl mx-auto ">
          <div className="main justify-center items-center w-[90%] max-md:w-full max-md:text-center max-md:p-4">
            <h1 className="text-[#000] text-[28px] font-bold max-w-[455px]">
              Understanding and Leveraging Technology
            </h1>
            <p className="text-[#000] max-w[950px] w-full font-normal">
              Empower is committed to investing in a deep stack of tools and
              technologies to create a reliable, repeatable, and quality
              delivery offering to our clients. We continue to iterate on our
              workflow, incorporating the latest tools and creating new
              methodologies that elevate our offering. The result is high
              quality at lower price points.
              <br />
              While we have expanded to support a variety of non-IT recruiting
              needs, we started with IT and because of this the core of our
              recruiting staff come from technical backgrounds. Much like our
              investment in tools and technology, Empower invests in its people
              by regularly facilitating training in their specific recruiting
              domains. In tech, we want to ensure Empower recruiters understand
              the differences between what a microservices and monolithic
              architecture are, what a true agile practice looks like, what
              upgrades angular 17 has made to previous versions, and more.
              <br />
              After sourcing and a preliminary match, all candidates are
              video-interviewed by technical experts to assess true technical
              competency and fit, as well as credibility. By the time our
              candidates reach the hiring team, 90% of the job is done.
            </p>
          </div>
        </div>
      </section>

      <section className="px-[0] py-[30px] bg[#000] overflow-hidden bg-[#1c9cd2] text-[#FFFFFF] text-[12px]">
        <div class="max-w-6xl mx-auto">
          <div class="w-full">
            <div class=" w[50%] flex justify-center items-center max-md:flex-col max-md:justify-center max-md:gap-12 max-md:text-center">
              {/* <div class="w-[20%]">
                <Image src={imgd} alt="" title="" />
              </div> */}
              <div class=" w-[45%] max-md:w-full max-md:p-4">
                {/* <h3 class=" text-[28px] font-bold text-[#fff]">
                  The Empower Advantage{" "}
                </h3> */}
                <p class="cta- text-[18px] mt-4 text-center">
                  We are constantly refining and iterating on its multi-step
                  recruiting and screening process. Firstly, our team of
                  hand-picked recruiters go beyond standard industry practices
                  of utilizing a database and keyword matching, and instead
                  understand technology at a deeper level.
                </p>
              </div>
              {/* <div class="Emp-Adv- w-[20%]">
               
                <Image src={imgdb} alt="" title="" />
              
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Technology;

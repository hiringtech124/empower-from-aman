import React from "react";
import Img from "./assets/guidance.jpg";
import Image from "next/image";

function Guidance() {
  return (
    <>
      <div className="w-full h-full text-black relative">
        <div className=" max-w-6xl mx-auto font-openSans text-center mt-10">
          <p className="w-[700px] my-10 mx-auto max-md:w-full">
            Empower works to cultivate relationships that last. We don’t succeed
            unless you do!
          </p>
        </div>
        <div className="max-w-6xl mx- mx-auto flex gap-[84px] max-md:flex-col">
          <div className=" h-[576px] max-md:h-full">
            <Image className="" src={Img} alt="" />
          </div>
          <div className="flex gap-5 flex-col max-md:mb-10 max-md:p-3">
            <h1 className="text-[28px] fontmono font-bold">
              Providing guidance
            </h1>
            <p className="w-[486px] text-left text-[16px] max-sm:w-full">
              Empower is committed to supporting our workforce not only on
              immediate needs, but providing guidance on long-term goals. In the
              short-term, this means working with our marketing team to identify
              opportunities with our client base that fit best with your needs,
              rather than conforming your skillset to fit an existing client
              need.
            </p>
            <p className="w-[486px] text-left text-[16px] max-sm:w-full">
              In the long-term, this means collaborating with our consultant
              outreach team to discuss options for resume reviews, further
              education, and overall industry guidance.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Guidance;

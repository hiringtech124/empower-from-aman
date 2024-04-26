import React from "react";
import Img1 from "./assets/seeker-icon1.png";
import Img2 from "./assets/seeker-icon2.png";
import Image from "next/image";

function Icons() {
  return (
    <>
      <div className="w-full h-[550px]">
        <div className="max-w-6xl mx-auto ">
          <div className="flex gap-7 max-md:flex-col">
            <div className="w-[570px] h-[286px] flex flex-col justify-center items-center gap-5 shadow2xl text-center border-[1px] border-[solid] border-[#eee] p-[25px] max-md:w-full">
              <Image src={Img1} alt="" />
              <p className="text-center">
                Empower believes in an employee-centric culture where we provide
                flexibility and hold employee preference in high regard.
              </p>
            </div>
            <div className="w-[570px] h-[286px] flex flex-col justify-center items-center gap-5 shadow2xl text-center border-[1px] border-[solid] border-[#eee] p-[25px] max-md:w-full">
              <Image src={Img1} alt="" />
              <p className="text-center">
                Empower believes in an employee-centric culture where we provide
                flexibility and hold employee preference in high regard.
              </p>
            </div>
          </div>
          <p className="w-full shadow-2xl p-8 mt-9 font-semibold text-[18px] mb-12">
            Systems Analyst - Analyze data processing probs to design/implement
            comp systems. Analyze user reqs/procedures/problems to automate
            existing systems & review capabilities. Req’d Master of Comp Sci,
            Engineering, IS or Business Admin + 1 yr exp, or Bachelor’s + 5 yrs
            exp, w/ knowledge & use of at least 6 of the following: ASP.NET,
            MVC, SSRS, C#, Web API 2, WCF, Knockout.js, VB.NET, QTP, Selenium,
            Java, Seetest, Web Accessibility Automation, QC, ORACLE 11g, J2EE,
            STRUTS, SOAP, Spring, Jasper, Apache, HIBERNATE, JQuery, COBOL,
            CICS, DB2, VSAM, JCL, IBM MQ, Informatica, Unix, Autosys, Cognos,
            IBM IIB, IBM App Connect, IBM WAS, Rest API, IBM ITX or IBM BPM.
            Must be willing to travel throughout U.S. per client assignment.
            Resume to Empower Professionals, 100 Franklin Square Dr, Ste 104,
            Somerset, NJ 08873.​
          </p>
        </div>
      </div>
    </>
  );
}

export default Icons;

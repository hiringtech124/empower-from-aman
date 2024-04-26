"use client";
import React, { useState, useEffect } from "react";
import "./nav.scss";
import Img from "./logoo.png";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Ensure we're in the browser environment
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };

      // Add scroll event listener
      window.addEventListener('scroll', handleScroll);

      // Clean up event listener on component unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  let [width, setWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth);
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  let [active, setactive] = useState(false);
  const hamburger = () => {
    setactive(!active);
  };
  return (
    <>
      {width <= 900 ? (
        <>
          <header className="bg[#062b43] bg-opacity-50 w-full mx-auto sticky top-0 h[100px] rounded-full z-[9990] h-[76px]">
            <div
              className={
                isScrolled
                  ? "bg-[#1d83b3b3] w-full  flex justify-between font-openSans z-[1] sticky top-0  h-[100px] mt8 "
                  : "w-full  flex justify-between font-openSans z-[1] sticky -top-8 h-[80px] "
              }
            >
              <div className="logo">
                <Link href="/" className="mt-1 ml-[10px] mb-2 h-full">
                  <Image src={Img} alt="" className="mix-blend-differene" />
                </Link>
              </div>
              <button onClick={hamburger}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="65"
                  height="42"
                  viewBox="0 0 65 42"
                  fill="#fff"
                >
                  <line
                    x1="13.4353"
                    y1="12.1875"
                    x2="51.5647"
                    y2="12.1875"
                    stroke="white"
                  />
                  <line
                    x1="13.4353"
                    y1="20.3594"
                    x2="51.5647"
                    y2="20.3594"
                    stroke="white"
                  />
                  <line
                    x1="13.4353"
                    y1="28.813"
                    x2="51.5647"
                    y2="28.813"
                    stroke="white"
                  />
                </svg>
              </button>

              <div
                className={`lists flex items-center justify-between flex-col ${
                  active ? "active " : ""
                }`}
              >
                <nav className="flex gap-6 text-base font-medium text-black items-center flex-col w-1/2 mt-20">
                  <Link
                    onClick={hamburger}
                    className="hovertext-[#733e3d] text-white"
                    href="/aboutus"
                  >
                    ABOUT US
                  </Link>
                  <Link
                    onClick={hamburger}
                    className="hovertext-[#733e3d]  text-white"
                    href="/job-seeker"
                  >
                    JOBSEEKER
                  </Link>
                  <Link
                    onClick={hamburger}
                    className="hovertext-[#733e3d]  text-white"
                    href="/employer"
                  >
                    EMPLOYER
                  </Link>

                  <Link
                    onClick={hamburger}
                    className="hovertext-[#733e3d] text-white"
                    href="/contactus"
                  >
                    CONTACT
                  </Link>
                </nav>
                <div className="absolute right-20 top-20">
                  <button
                    type="reset"
                    className="bg-gray-300 text-gray-800 py-2 px-4 rounded-md ml-2"
                    onClick={hamburger}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#fff"
                    >
                      <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </header>
        </>
      ) : (
        <div
          className={
            isScrolled
              ? "bg-[#1d83b3b3] w-full  flex justify-between font-openSans z-[1] sticky top-0  h-[80px] mt8 "
              : "w-full  flex justify-between font-openSans z-[1] sticky top-3 h-[80px] "
          }
        >
          <Link href="/" className="mt-1 ml-[10px] mb-2 h-full">
            <Image src={Img} alt="" className="mix-blend-differene" />
          </Link>

          <div className="mr-11">
            <ul className="flex items-center text-white text-xs mt-1 mb-6 gap-8 py-[10px]">
              <li className="hover:rounded-full hover:border px-[14px] py-2">
                <a href="">ABOUT US</a>
              </li>
              <li className="hover:rounded-full hover:border px-[14px] py-2">
                <Link href="/job-seeker">JOBSEEKER</Link>
              </li>
              <li className="hover:rounded-full hover:border px-[14px] py-2">
                <Link href="/employer">EMPLOYER</Link>
              </li>
              <li className="rounded-full border px-[14px] py-2">
                <Link href="/contactus">CONTACT</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;

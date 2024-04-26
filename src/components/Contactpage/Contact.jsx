"use client";
import React from "react";
// import './css/contact.css'
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <>
      <div className="w-100%auto max-w-7xl mx-auto pr-[15px] pl-[15px] mt-[50px] mb-10 mr-auto ml-auto flex flex-col container justify-center">
        <div className=" max-w7xl mxauto">
          <h2 className="text-[46px] mb-[10px] font-bold">Drop us an email</h2>
          <h6 className="text-[24px] mb-[20px] font-medium">
            or give us a call
          </h6>
        </div>
        <div className="contactForm flex flex-row justify-between gap20 max-md:flex-col">
          <div>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <label
                  className="text-[#000] text-[10px] text-left uppercase block font-semibold"
                  htmlFor="name"
                >
                  Your Name
                </label>
                <input
                  className="p-4 mb-6 bg-blue-50 text-gray-700 text-base border border-transparent w-[600px] max-md:w-full text-[10px]"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col">
                <label
                  className="text-[#000] text-[10px] text-left uppercase block font-semibold"
                  htmlFor="email"
                >
                  {" "}
                  Your Email
                </label>
                <input
                  className="p-4 mb-6 bg-blue-50 text-gray-700 text-base border border-transparent max-w-[600px] text-[10px]"
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col">
                <label
                  className="text-[#000] text-[10px] text-left uppercase block font-semibold"
                  htmlFor="number"
                >
                  Telephone Number (optional)
                </label>
                <input
                  className="p-4 mb-6 bg-blue-50 text-gray-700 text-base border border-transparent max-w-[600px]  text-[10px]"
                  type="tel"
                  id="number"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col">
                <label
                  className="text-[#000] text-[10px] text-left uppercase block font-semibold"
                  htmlFor="message"
                >
                  {" "}
                  Your Message
                </label>
                <textarea
                  className="p-4 mb-6 bg-blue-50 text-gray-700 text-base border border-transparent rounded-none h-64 max-w-[600px] text-[10px]"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div>
                <button
                  className="text-center bg-[#1d83b3] text-white border-2  font-semibold tracking-wide py-2 px-4 uppercase transition duration-300 inlineblock w[600px] rounded-full w-full hover:!bg-[#333] hover:!border-[#333] hover:no-underline hover:text-[#fff] flex justify-center items-center gap-2"
                  type="submit"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={20}
                    height={20}
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-mail"
                  >
                    <path d="M4 4h16v16H4z" />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                  Send
                </button>
              </div>
            </form>
          </div>

          <div className="ml-[40px] w-[40%] max-md:w-full max-md:ml-0 ">
            <div className="mb-20">
              <h4 className="font-bold text-[24px] mb-[20px]">
                General enquiries
              </h4>
              <p className="mb-5 text-[#000] text-[1rem]">
                Get in touch with a member of our team. We usually respond
                within 48hrs.
              </p>
              <div className="text-[#1d83b3] font-bold">
                <a className="tex text-[1rem]">
                  ContactUs@empowerprofessionals.com
                </a>
                <br />
                <a className=" text-[1rem]">+1-732-356-8008</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-[24px] mb-5">Our branches</h4>
              <h5 className="font-bold mb-3">USA</h5>
              <p className="mb-2 text-[#000] text-[1rem]">
                100 Franklin Square Dr, Suite 104, Somerset, NJ 08873
              </p>
              <p className="mb-2 text-[#000] text-[1rem]">
                2815 Forbs Avenue Suite #107 Hoffman Estates, IL 60192
              </p>
              <h5 className="font-bold mb-3">INDIA</h5>
              <p className="text-[#000] text-[1rem]">
                312/313 Shagun Tower Vijaynagar, Indore 452001
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <iframe
          className="w-full h-[350px]"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2961.6061828599463!2d-88.197174!3d42.07306!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880f087074cb9eb1%3A0x600ef2046d75a5a0!2s2815%20Forbs%20Ave%20%23107b%2C%20Hoffman%20Estates%2C%20IL%2060192%2C%20USA!5e0!3m2!1sen!2sin!4v1713955417642!5m2!1sen!2sin"
        ></iframe>
      </div>
    </>
  );
}

export default Contact;

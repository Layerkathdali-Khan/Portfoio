import React from "react";
import SectionTriangle from "../SectionTriangle";
import { FaPhoneAlt, FaLinkedinIn } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { VscGithub } from "react-icons/vsc";

const Contact = () => {
  return (
    <SectionTriangle>
      <div className="section grid place-items-center">
        <div className="w-[calc(100%-18.5rem)] text-text_primary mx-auto min-h-[65vh] border-2 border-text_primary grid grid-cols-3 p-8">
          <form className="col-span-2 flex flex-col justify-between">
            <h3 className="text-2xl font-bold">Reach Out To Me</h3>
            <div className="flex flex-col gap-10 -mt-6">
              <input type="text" className="input" placeholder="Name" />
              <input
                type="text"
                className="input"
                placeholder="Email or Phone"
              />
              <textarea
                name="message"
                className="input resize-none"
                placeholder="Message"
              ></textarea>
            </div>
            <button className="px-6 py-2 w-max rounded-lg border-2 font-semibold border-text_primary ">
              Send
            </button>
          </form>
          <div className="flex flex-col  gap-10">
            <h3 className="text-2xl font-bold">Contact Me</h3>
            <div className="flex flex-col ">
              <h5 className="underline underline-offset-2 text-[#4F3F0061]">
                Email
              </h5>
              <a
                href="mailto:paingzaylynnhtet@gmail.com"
                className="font-semibold"
              >
                paingzaylynnhtet@gmail.com
              </a>
              <h5 className="mt-4 underline underline-offset-2 text-[#4F3F0061]">
                Phone Number
              </h5>
              <a
                href="tel:+959261085371"
                className="tracking-wide font-semibold"
              >
                (+95) 9261085371
              </a>
            </div>
            <div className="flex items-center gap-4 -mt-4">
              <a
                href=""
                className="w-6 aspect-square rounded-full grid place-items-center bg-blue-400 hover:scale-110 transition-transform ease-linear"
              >
                <FaLinkedinIn className="text-white" />
              </a>
              <a
                href=""
                className="w-6 aspect-square rounded-full grid place-items-center border-[4px] border-black hover:scale-110 transition-transform ease-linear"
              >
                <VscGithub className="text-black" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </SectionTriangle>
  );
};

export default Contact;

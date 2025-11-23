"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#fdd204] text-black px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-20 pt-8 pb-16 overflow-hidden relative">
      <div className="flex flex-col lg:flex-row justify-between items-center text-sm gap-3">
        <div className="flex flex-col lg:flex-row items-center gap-3">
          <p>© 2025 Hivyr. All rights reserved.</p>
          <p className="cursor-pointer hover:underline">Privacy Policy</p>
        </div>
        <div className="flex flex-col lg:flex-row flex-wrap justify-start lg:justify-center gap-5 items-center mt-10 lg:mt-0">
          <a href="mailto:hivyrsales@.ai" className="hover:underline" target="_blank">
            sales@hivyr.ai ↗
          </a>
          <a href="#" className="hover:underline" target="_blank">
            Book a demo ↗
          </a>
          <a href="#" className="hover:underline" target="_blank">
            Linkedin ↗
          </a>
        </div>
      </div>

      <div className="mt-12 text-center relative">
        <h1
          className="text-[35vw] md:text-[38vw] xl:text-[35vw] pb-10 font-extrabold leading-none"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, black 50%, rgba(0,0,0,0.1) 80%, transparent 100%)",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskSize: "100% 100%",
            maskImage: "linear-gradient(to bottom, black 50%, rgba(0,0,0,0.1) 80%, transparent 100%)",
            maskRepeat: "no-repeat",
            maskSize: "100% 100%",
          }}
        >
          Hivyr
        </h1>
      </div>
    </footer>
  );
};

export default Footer;

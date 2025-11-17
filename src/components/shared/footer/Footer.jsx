"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#f7b518] text-black px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-20 pt-8 pb-16 overflow-hidden relative">
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

      <div className="mt-12 text-center">
        <h1 className="text-[35vw] md:text-[38vw] xl:text-[35vw] -mb-24 md:-mb-28 lg:-mb-36 xl:-mb-48 2xl:-mb-56  font-extrabold leading-none">
          Hivyr
        </h1>
      </div>
    </footer>
  );
};

export default Footer;

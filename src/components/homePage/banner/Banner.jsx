"use client";
import { useEffect, useRef } from "react";
import Navbar from "@/components/shared/navbar/Navbar";

export default function Banner() {
  const headingRef = useRef(null);

  const scrambleText = (finalText, element) => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()";
    const totalFrames = 25;
    let frame = 0;
    const revealProgress = Array(finalText.length).fill(false);

    const update = () => {
      let output = "";
      for (let i = 0; i < finalText.length; i++) {
        if (revealProgress[i] || finalText[i] === " ") {
          output += finalText[i];
        } else {
          output += chars.charAt(Math.floor(Math.random() * chars.length));
        }
      }

      if (element.current) {
        element.current.textContent = output;
      }

      frame++;
      const revealIndex = Math.floor((frame / totalFrames) * finalText.length);
      if (revealIndex < finalText.length) {
        revealProgress[revealIndex] = true;
        requestAnimationFrame(update);
      } else if (element.current) {
        element.current.textContent = finalText;
      }
    };
    requestAnimationFrame(update);
  };

  useEffect(() => {
    const headingText = "YOUR INTELLIGENT AI AGENT FOR SMARTER WORKFLOWS";
    
    setTimeout(() => {
      scrambleText(headingText, headingRef);
    }, 300);
  }, []);

  return (
    <section className="relative w-full h-screen flex items-end justify-start overflow-hidden bg-white">
      
      {/* Background container - removed rounded corners on mobile for better alignment */}
      <div className="absolute inset-0 m-0 sm:m-2 md:m-4 rounded-none sm:rounded-2xl overflow-hidden">
        <video
          className="w-full h-full object-cover rounded-none sm:rounded-2xl scale-[1.1]"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/video/banner/hivyr-video.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40 rounded-none sm:rounded-2xl"></div>
      </div>

      {/* Navbar overlay - consistent padding with content */}
      <div className="absolute top-0 left-0 right-0 z-20 lg:px-16 xl:px-16 py-4 pt-6 ">
        <Navbar />
      </div>

      {/* Bottom Left Content - Perfect alignment with navbar */}
      <div className="relative z-10 w-full text-left text-white mb-6 sm:mb-10 px-4 sm:px-6 md:px-16 lg:px-24 2xl:px-40">
        <div className="max-w-5xl">
          <h1
            ref={headingRef}
            className="title_text text-white  break-words whitespace-normal"
          >
            {/* Scrambled text injects here */}
          </h1>

          <p className="paragraph_text max-w-2xl xl:max-w-3xl  mb-6 sm:mb-10">
            Meet your autonomous AI agent — designed to automate tasks, analyze data, 
            and execute complex workflows. Available 24/7, always learning, and ready 
            to amplify your team's capabilities.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 sm:gap-4 mt-4 sm:mt-8 mb-10">
            <button className="button_text bg-white hover:bg-black text-black hover:text-white  rounded-full  border border-transparent cursor-pointer">
              Meet Our Agent
            </button>
            <button className="button_text bg-[#fdd204] hover:bg-black text-black hover:text-white  rounded-full  transition-colors cursor-pointer">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
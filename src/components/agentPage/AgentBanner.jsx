"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const AgentBanner = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const textWidth = marquee.scrollWidth / 2;

    gsap.to(marquee, {
      x: `-${textWidth}px`,
      duration: 20,
      ease: "linear",
      repeat: -1,
    });
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex flex-col justify-center items-center -mt-26">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/ai-agents/agent-banner.jpg')",
        }}
      />

      {/* Dark Global Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Strong Gradient Behind Main Heading */}
      <div className="absolute inset-x-0 top-0 h-[55%]  from-black/70 via-black/40 to-transparent" />

      {/* Strong Gradient Behind Marquee */}
      <div className="absolute inset-x-0 bottom-0 h-[45%]  from-black/80 via-black/40 to-transparent" />

      {/* Centered Content */}
      <div className="relative z-10 text-center text-white flex flex-col items-center justify-center px-6">
        <h1 className="agnt_common_title mb-6 leading-tight">
          Empower Your Business with <br /> Intelligent AI Agents
        </h1>
        <p className="text-sm sm:text-base md:text-lg max-w-xl md:max-w-2xl mb-8 text-gray-200">
          From AI-driven workflow automation to intelligent business optimization—
          our agents deliver speed, reliability, and results anywhere in the world.
        </p>

        <button className="inline-flex items-center gap-2 bg-[#f7b518] text-black font-semibold px-5 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full text-sm sm:text-base md:text-lg transition-all">
          Request an Agent
          <span className="text-xl md:text-2xl">↗</span>
        </button>
      </div>

      {/* Moving Text (Marquee) */}
      <div className="absolute bottom-5 left-0 w-full overflow-hidden z-10">
        <div
          ref={marqueeRef}
          className="flex whitespace-nowrap text-[50px] sm:text-[70px] md:text-[80px] lg:text-[100px] xl:text-[110px] font-extrabold text-white uppercase tracking-wider opacity-90"
        >
          <span className="px-6 sm:px-8">AI-AGENT-SYSTEMS-AI-AGENT-SYSTEMS-</span>
          <span className="px-6 sm:px-8">AI-AGENT-SYSTEMS-AI-AGENT-SYSTEMS-</span>
        </div>
      </div>
    </section>
  );
};

export default AgentBanner;

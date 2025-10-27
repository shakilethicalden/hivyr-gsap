"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const AgentBanner = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    const textWidth = marquee.scrollWidth / 2;

    gsap.to(marquee, {
      x: `-${textWidth}px`,
      duration: 20,
      ease: "linear",
      repeat: -1,
    });
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex flex-col justify-center items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/ai-agents/agent-banner.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Centered Content */}
      <div className="relative z-10 text-center text-white flex flex-col items-center justify-center px-6">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
          Empower Your Business with <br /> Intelligent AI Agents
        </h1>
        <p className="text-base md:text-lg max-w-2xl mb-8 text-gray-200">
          From AI-driven workflow automation to intelligent business optimization—
          our agents deliver speed, reliability, and results anywhere in the world.
        </p>
        <button className="inline-flex items-center gap-2 bg-[#f7b518] text-black font-semibold px-6 py-3 md:px-8 md:py-4 rounded-full  transition-all text-lg">
          Request an Agent
          <span className="text-2xl">↗</span>
        </button>
      </div>

      {/* Moving Text (Slightly Higher in View) */}
      <div className="absolute bottom-24 left-0 w-full overflow-hidden">
        <div
          ref={marqueeRef}
          className="flex whitespace-nowrap text-[100px] md:text-[140px] font-extrabold text-white uppercase tracking-wider"
        >
          <span className="px-8">AI-AGENT-SYSTEMS-AI-AGENT-SYSTEMS-</span>
          <span className="px-8">AI-AGENT-SYSTEMS-AI-AGENT-SYSTEMS-</span>
        </div>
      </div>
    </section>
  );
};

export default AgentBanner;

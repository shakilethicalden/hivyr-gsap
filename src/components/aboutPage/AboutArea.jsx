"use client";
import React, { useRef } from "react";

export default function AboutArea() {
  const sectionRef = useRef(null);
  const leftAreaRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      className="bg-black text-white py-20 lg:py-24 common-px overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16 items-start justify-between">
        <div
          ref={leftAreaRef}
          className="lg:w-1/2 flex flex-col justify-start sticky top-0 self-start"
        >
          <p className="text-lg text-gray-400 uppercase tracking-widest mb-4">
            Our Perspective
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-snug">
            Building the Intelligence Layer for Autonomous AI Agents
          </h2>
        </div>

        <div className="lg:w-1/2 flex flex-col space-y-8 text-gray-300 text-2xl leading-relaxed">
          <p className="opacity-90">
            The limitations in automation today aren’t caused by workflows or
            interfaces—they’re caused by intelligence. Businesses rely on static
            software that can’t reason, adapt, or make decisions. Traditional
            automation is brittle because it doesn’t understand context.
          </p>
          <p className="opacity-90">
            To unlock true autonomy, organizations need agents that can perceive
            situations, understand goals, and take action in real time. That’s
            why we’re building the next generation of AI Agents—systems that
            operate independently, learn continuously, and collaborate
            seamlessly across tools, teams, and environments.
          </p>
        </div>
      </div>
    </section>
  );
}

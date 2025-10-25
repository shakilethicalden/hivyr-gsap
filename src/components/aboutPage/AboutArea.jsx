"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutArea() {
  const sectionRef = useRef(null);
  const leftAreaRef = useRef(null);
  const leftTextRef = useRef(null);
  const rightTextRefs = useRef([]);

  // 🔠 Scramble Function (independent per element)
  const scrambleText = (finalText, element) => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()";
    const totalFrames = 25;
    let frame = 0;
    const revealProgress = Array(finalText.length).fill(false);

    const scramble = () => {
      let displayed = "";
      for (let i = 0; i < finalText.length; i++) {
        if (revealProgress[i]) {
          displayed += finalText[i];
        } else {
          displayed += chars[Math.floor(Math.random() * chars.length)];
        }
      }
      element.textContent = displayed;
      frame++;

      if (frame < totalFrames) {
        const progress = frame / totalFrames;
        for (let i = 0; i < finalText.length; i++) {
          if (Math.random() < progress) revealProgress[i] = true;
        }
        requestAnimationFrame(scramble);
      } else {
        element.textContent = finalText;
      }
    };

    scramble();
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;

      // 🎯 Left Side Scramble
      const leftEl = leftTextRef.current;
      const leftText = leftEl.textContent;
      leftEl.textContent = "";
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        onEnter: () => scrambleText(leftText, leftEl),
      });

      // 📜 Right Side Paragraph Scrambles
      rightTextRefs.current.forEach((el) => {
        const original = el.textContent;
        el.textContent = "";
        ScrollTrigger.create({
          trigger: el,
          start: "top 85%",
          onEnter: () => scrambleText(original, el),
        });
      });

      // 📌 Pin Left Side when Section hits top
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        pin: leftAreaRef.current,
        pinSpacing: false,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-black text-white py-28 px-6 md:px-16 lg:px-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start justify-between">
        {/* LEFT SIDE (Pinned Area) */}
        <div
          ref={leftAreaRef}
          className="lg:w-1/2 flex flex-col justify-start sticky top-0 self-start"
        >
          <p className="text-sm text-gray-400 uppercase tracking-widest mb-4">
            Our Thesis
          </p>
          <h2
            ref={leftTextRef}
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-snug"
          >
            Building the Robotic Foundation Model for Defense
          </h2>
        </div>

        {/* RIGHT SIDE (Scroll Texts) */}
        <div className="lg:w-1/2 flex flex-col space-y-8 text-gray-300 text-2xl leading-relaxed">
          {[
            "The fundamental problem isn’t hardware, it’s intelligence. Robots aren’t pervasive today because they’re unintelligent. Most autonomy systems are brittle, limited, and disconnected from the real-world complexity that warfighters face.",
            "To unlock truly transformative capability, we need robots that think, adapt, and act with human-level intelligence. That’s why we’re building Fury, the first foundation model for defense robotics: an embodied AI brain that allows machines to perceive the world, understand natural language, and coordinate action autonomously across any domain.",
            "Fury represents a new paradigm: a multimodal, mission-adaptive foundation model trained not just to talk, but to do. It enables operators to command fleets of intelligent systems seamlessly, expanding human capability in the field.",
            "This shift marks the evolution from traditional automation to intelligent autonomy — bridging human insight with machine execution for defense innovation.",
            "Our mission is to redefine autonomy by merging technology and intelligence to create truly adaptable robotic systems."
          ].map((para, i) => (
            <p
              key={i}
              ref={(el) => (rightTextRefs.current[i] = el)}
              className="opacity-90"
            >
              {para}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

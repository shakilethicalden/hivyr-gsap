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

  // 🔠 Scramble Function
  const scrambleText = (finalText, element) => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()";
    const totalFrames = Math.max(30, finalText.length);
    let frame = 0;
    const revealProgress = Array(finalText.length).fill(false);

    const animate = () => {
      let displayed = "";
      for (let i = 0; i < finalText.length; i++) {
        displayed += revealProgress[i]
          ? finalText[i]
          : chars[Math.floor(Math.random() * chars.length)];
      }
      element.textContent = displayed;

      frame++;
      const progress = frame / totalFrames;
      for (let i = 0; i < finalText.length; i++) {
        if (!revealProgress[i] && Math.random() < progress) revealProgress[i] = true;
      }

      if (frame < totalFrames) requestAnimationFrame(animate);
      else element.textContent = finalText; // ensures original text ends correctly
    };

    animate();
  };

  // 🔹 Trigger scramble for all texts
  const triggerScramble = (el) => {
    if (!el) return;
    const originalText = el.dataset.text; // store original text in data-text
    scrambleText(originalText, el);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;

      // LEFT SIDE SCRAMBLE
      const leftEl = leftTextRef.current;
      triggerScramble(leftEl);

      // RIGHT SIDE SCRAMBLES
      rightTextRefs.current.forEach((el) => triggerScramble(el));

      // PIN LEFT AREA
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
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-snug inline-block"
            data-text="Building the Robotic Foundation Model for Defense"
          >
            Building the Robotic Foundation Model for Defense
          </h2>
        </div>

        {/* RIGHT SIDE (Scroll Texts) */}
        <div className="lg:w-1/2 flex flex-col space-y-8 text-gray-300 text-2xl leading-relaxed">
          {[
            "The fundamental problem isn’t hardware, it’s intelligence. Robots aren’t pervasive today because they’re unintelligent. Most autonomy systems are brittle, limited, and disconnected from the real-world complexity that warfighters face.",
            "To unlock truly transformative capability, we need robots that think, adapt, and act with human-level intelligence. That’s why we’re building Fury, the first foundation model for defense robotics: an embodied AI brain that allows machines to perceive the world, understand natural language, and coordinate action autonomously across any domain.",
          ].map((para, i) => (
            <p
              key={i}
              ref={(el) => (rightTextRefs.current[i] = el)}
              className="opacity-90 inline-block"
              data-text={para}
            >
              {para}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

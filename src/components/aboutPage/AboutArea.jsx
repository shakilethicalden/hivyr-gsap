"use client";
import React, { useEffect, useRef } from "react";

export default function AboutArea() {
  const sectionRef = useRef(null);
  const leftAreaRef = useRef(null);
  const leftTextRef = useRef(null);
  const rightTextRefs = useRef([]);

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
        if (!revealProgress[i] && Math.random() < progress)
          revealProgress[i] = true;
      }

      if (frame < totalFrames) requestAnimationFrame(animate);
      else element.textContent = finalText;
    };

    animate();
  };

  const triggerScramble = (el) => {
    if (!el) return;
    const originalText = el.dataset.text;
    scrambleText(originalText, el);
  };

  useEffect(() => {
    let ctx;

    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        const section = sectionRef.current;

        // LEFT SIDE
        triggerScramble(leftTextRef.current);

        // RIGHT SIDE
        rightTextRefs.current.forEach((el) => triggerScramble(el));

        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          pin: leftAreaRef.current,
          pinSpacing: false,
        });
      }, sectionRef);
    })();

    return () => ctx && ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-black text-white py-28 px-6 md:px-16 lg:px-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start justify-between">
        <div
          ref={leftAreaRef}
          className="lg:w-1/2 flex flex-col justify-start sticky top-0 self-start"
        >
          <p className="text-sm text-gray-400 uppercase tracking-widest mb-4">
            Our Perspective
          </p>

          <h2
            ref={leftTextRef}
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-snug inline-block"
            data-text="Building the Intelligence Layer for Autonomous AI Agents"
          >
            Building the Intelligence Layer for Autonomous AI Agents
          </h2>
        </div>

        <div className="lg:w-1/2 flex flex-col space-y-8 text-gray-300 text-2xl leading-relaxed">
          {[
            "The limitations in automation today aren’t caused by workflows or interfaces—they’re caused by intelligence. Businesses rely on static software that can’t reason, adapt, or make decisions. Traditional automation is brittle because it doesn’t understand context.",
            "To unlock true autonomy, organizations need agents that can perceive situations, understand goals, and take action in real time. That’s why we’re building the next generation of AI Agents—systems that operate independently, learn continuously, and collaborate seamlessly across tools, teams, and environments.",
          ].map((para, i) => (
            <p
              key={i}
              ref={(el) => (rightTextRefs.current[i] = el)}
              data-text={para}
              className="opacity-90 inline-block"
            >
              {para}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const AboutBanner = () => {
  const titleRef = useRef(null);

  // 🔠 Scramble Reveal Function
  const scrambleReveal = (finalText, element, duration = 2.5) => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()";
    const totalFrames = Math.floor(duration * 60);
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
      else element.textContent = finalText;
    };

    animate();
  };

  useEffect(() => {
    if (titleRef.current) {
      const text = titleRef.current.dataset.text;
      titleRef.current.textContent = "";
      scrambleReveal(text, titleRef.current, 2.5);
    }
  }, []);

  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/video/banner/banner.mp4" type="video/mp4" />
      </video>

      {/* Text Content */}
      <div className="relative z-10 text-center text-white px-5">
        <p className="text-sm md:text-base tracking-widest text-gray-300 mb-3">
          OUR MISSION
        </p>
        <h1
          ref={titleRef}
          data-text="Enable the largest robot army in the world through intelligent physical AI for the US military."
          className="text-4xl sm:text-5xl md:text-6xl  font-bold leading-relaxed max-w-5xl mx-auto inline-block"
        >
          Enable the largest robot army in the world through intelligent physical AI for the US military.
        </h1>
      </div>
    </section>
  );
};

export default AboutBanner;

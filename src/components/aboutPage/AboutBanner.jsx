"use client";
import React, { useEffect, useRef } from "react";

const AboutBanner = () => {
  const titleRef = useRef(null);

  const scrambleReveal = (finalText, element, duration = 2.5) => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()";
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
        if (!revealProgress[i] && Math.random() < progress)
          revealProgress[i] = true;
      }

      if (frame < totalFrames) requestAnimationFrame(animate);
      else element.textContent = finalText;
    };

    animate();
  };

  useEffect(() => {
    (async () => {
      const module = await import("gsap");
      const gsap = module.gsap;

      if (titleRef.current) {
        const text = titleRef.current.dataset.text;
        titleRef.current.textContent = "";
        scrambleReveal(text, titleRef.current, 2.5);
      }
    })();
  }, []);

  return (
    <section className="relative w-full h-[90vh] sm:h-[85vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
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

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>

      {/* Text Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-0">
        <p className="text-xs sm:text-sm md:text-base tracking-widest text-gray-300 mb-3">
          ABOUT OUR AI AGENT PLATFORM
        </p>

        <h1
          ref={titleRef}
          data-text="We build autonomous AI agents that think, act, and collaborate—empowering businesses to operate at machine speed."
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight max-w-full md:max-w-6xl mx-auto inline-block"
        >
          We build autonomous AI agents that think, act, and collaborate—empowering businesses to operate at machine speed.
        </h1>
      </div>
    </section>
  );
};

export default AboutBanner;

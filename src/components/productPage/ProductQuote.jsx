"use client";

import { useEffect, useRef } from "react";

export default function ProductQuote() {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const handleParallax = () => {
      if (!sectionRef.current || !bgRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        const progress =
          1 - Math.min(Math.max((rect.top + rect.height / 2) / windowHeight, 0), 1);

        const translateY = (progress - 0.5) * 8;

        bgRef.current.style.transform = `translateY(${translateY}%)`;
      }

      requestAnimationFrame(handleParallax);
    };

    requestAnimationFrame(handleParallax);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[90vh] sm:h-[95vh] overflow-hidden"
    >
      {/* Background */}
      <div
        ref={bgRef}
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center will-change-transform transition-transform duration-[2s] ease-out"
        style={{
          backgroundImage: "url('/images/product/quote.jpg')",
        }}
      ></div>

      {/* Dark Opacity Overlay (Perfect text visibility) */}
      <div className="absolute inset-0 bg-black/60"></div>


      {/* Quote Text */}
      <div className="absolute inset-0 flex items-center justify-center px-6 sm:px-10">
        <h1
          className="text-white text-center font-medium leading-snug max-w-5xl
                     text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl"
        >
          "Unlock the power of intelligence at your fingertips — where innovation
          meets insight, and your ideas become reality with every interaction."
        </h1>
      </div>
    </section>
  );
}

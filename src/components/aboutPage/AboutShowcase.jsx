"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const content = [
  {
    title: "Vision",
    text: "We envision a future where AI becomes a natural extension of every business — enhancing creativity and unlocking growth.",
  },
  {
    title: "Value",
    text: "We believe in clarity over complexity — building solutions that are simple, scalable, and impactful.",
  },
  {
    title: "Mission",
    text: "Our mission is to make AI practical and accessible for every business without friction.",
  },
];

export default function AboutModern() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const bgTextRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const ctx = gsap.context(() => {
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top 10%",
          end: "+=1500",
          scrub: true,
          pin: true,
          onUpdate: (self) => {
            const index = Math.min(
              content.length - 1,
              Math.floor(self.progress * content.length)
            );

            if (index !== activeIndex) {
              setActiveIndex(index);

              gsap.fromTo(
                textRef.current,
                { opacity: 0, y: 40 },
                { opacity: 1, y: 0, duration: 0.6 }
              );

              gsap.fromTo(
                bgTextRef.current,
                { opacity: 0, scale: 1.2 },
                { opacity: 0.05, scale: 1, duration: 0.8 }
              );
            }
          },
        });
      }, sectionRef);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, [activeIndex]);

  return (
    <section
      ref={sectionRef}
      className="bg-white pb-16 lg:pb-24 xl:pb-28 overflow-hidden"
    >
      <div className="px-4 sm:px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-center gap-12 md:gap-20">
        
        {/* Left */}
        <div className="md:w-1/2 text-center md:text-left flex justify-center md:justify-start">
          <h2 className="title_text max-w-md">
            What Defines Us
          </h2>
        </div>

        {/* Right */}
        <div className="md:w-1/2 relative flex items-center justify-center min-h-[220px] md:min-h-[300px] text-center md:text-left">
          
          {/* Big Background Word */}
          <h1
            ref={bgTextRef}
            className="hidden md:block absolute text-[80px] lg:text-[140px] font-bold text-black opacity-5 pointer-events-none select-none whitespace-nowrap"
          >
            {content[activeIndex].title}
          </h1>

          {/* Foreground Content */}
          <div ref={textRef} className="relative z-10 max-w-md">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#fdd204] mb-4 sm:mb-6">
              {content[activeIndex].title}
            </h3>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              {content[activeIndex].text}
            </p>
          </div>

          {/* Side Indicator (desktop only) */}
          <div className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 flex-col gap-3">
            {content.map((_, i) => (
              <div
                key={i}
                className={`w-[2px] transition-all duration-300 ${
                  i === activeIndex
                    ? "h-10 bg-[#fdd204]"
                    : "h-6 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
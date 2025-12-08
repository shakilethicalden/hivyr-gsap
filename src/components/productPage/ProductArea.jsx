"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const contentCards = [
  {
    title: "AI-Powered Insights",
    topText:
      "Leverage intelligent agents to analyze data and provide actionable insights instantly.",
  },
  {
    title: "Seamless Automation",
    topText:
      "Automate repetitive tasks and workflows with smart AI agents to save time and reduce errors.",
  },
  {
    title: "Personalized Assistance",
    topText:
      "Deliver customized user experiences using AI-driven recommendations and interactions.",
  },
  {
    title: "Future-Ready Solutions",
    topText:
      "Integrate cutting-edge AI agents to stay ahead in innovation and digital transformation.",
  },
];

export default function ProductArea() {
  const cardsRef = useRef([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Kill existing triggers before reinitializing
    ScrollTrigger.getAll().forEach((st) => st.kill());

    // Only enable scroll-pinning on large screens
    if (window.innerWidth >= 1024) {
      const pinCards = cardsRef.current.slice(0, 3);
      const lastCard = cardsRef.current[3];

      pinCards.forEach((card, index) => {
        if (!card || !lastCard) return;

        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          endTrigger: lastCard,
          end: "top top",
          pin: true,
          pinSpacing: true,
        });
      });
    }

    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section className="relative w-full flex flex-col items-center pb-20 lg:py-24 bg-white overflow-hidden">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-4 gap-6 auto-rows-[320px] lg:auto-rows-[380px]">
          {/* Row 1 */}
          <div
            ref={(el) => (cardsRef.current[0] = el)}
            className="p-8 xl:p-12 flex flex-col justify-between border border-[#fdd204] bg-[#fdd204]/10 text-gray-900 rounded-sm col-span-1"
          >
            <p className="text-lg text-gray-700 mb-6 ">
              {contentCards[0].topText}
            </p>
            <h3 className="text-3xl mt-auto">
              {contentCards[0].title}
            </h3>
          </div>
          <div className="col-span-3 bg-white"></div>

          {/* Row 2 */}
          <div className="col-span-1 bg-white"></div>
          <div
            ref={(el) => (cardsRef.current[1] = el)}
            className="p-8 xl:p-12 flex flex-col justify-between border border-[#fdd204] bg-[#fdd204]/10 text-gray-900 rounded-sm col-span-1"
          >
            <p className="text-lg text-gray-700 mb-6 ">
              {contentCards[1].topText}
            </p>
            <h3 className="text-3xl mt-auto">
              {contentCards[1].title}
            </h3>
          </div>
          <div className="col-span-2 bg-white"></div>

          {/* Row 3 */}
          <div className="col-span-2 bg-white"></div>
          <div
            ref={(el) => (cardsRef.current[2] = el)}
            className="p-8 xl:p-12 flex flex-col justify-between border border-[#fdd204] bg-[#fdd204]/10 text-gray-900 rounded-sm col-span-1"
          >
            <p className="text-lg text-gray-700 mb-6 ">
              {contentCards[2].topText}
            </p>
            <h3 className="text-3xl mt-auto">
              {contentCards[2].title}
            </h3>
          </div>
          <div className="col-span-1 bg-white"></div>

          {/* Row 4 */}
          <div className="col-span-3 bg-white"></div>
          <div
            ref={(el) => (cardsRef.current[3] = el)}
            className="p-8 xl:p-12 flex flex-col justify-between border border-[#fdd204] bg-[#fdd204]/10 text-gray-900 rounded-sm col-span-1"
          >
            <p className="text-lg text-gray-700 mb-6 ">
              {contentCards[3].topText}
            </p>
            <h3 className="text-3xl mt-auto">
              {contentCards[3].title}
            </h3>
          </div>
        </div>

        {/* Mobile / Tablet Stack */}
        <div className="lg:hidden flex flex-col gap-6">
          {contentCards.map((card, i) => (
            <div
              key={i}
              className="p-6 sm:p-8 border border-[#fdd204] bg-[#fdd204]/10 text-gray-900 rounded-md"
            >
              <p className="text-sm sm:text-base text-gray-700 mb-4 ">
                {card.topText}
              </p>
              <h3 className="text-2xl sm:text-3xl">{card.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

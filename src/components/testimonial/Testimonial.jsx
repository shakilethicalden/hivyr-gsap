"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const testimonials = [
  {
    rating: 5,
    text: "Our customer response time dropped by 60% after integrating the AI Agent. It's like having an extra teammate that never sleeps!",
    author: "Samantha Lee",
    platform: "Trustpilot",
  },
  {
    rating: 5,
    text: "The AI Agent handles repetitive support queries flawlessly — our human team now focuses on strategy and growth.",
    author: "David Wilson",
    platform: "G2",
  },
  {
    rating: 5,
    text: "We built personalized workflows using this AI assistant — efficiency and team satisfaction skyrocketed in just weeks.",
    author: "Priya Desai",
    platform: "Capterra",
  },
  {
    rating: 5,
    text: "Incredible product. The integration was effortless, and the insights from the AI dashboard are game-changing.",
    author: "Michael Adams",
    platform: "Product Hunt",
  },
];

export default function Testimonials() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const totalWidth = container.scrollWidth / 2;

    gsap.to(container, {
      x: `-${totalWidth}`,
      duration: 40,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
      },
    });
  }, []);

  return (
    <section className="py-16 sm:py-20 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading + Summary */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-12">
          <h2 className="prod_common_title">
            What Our <br />
            <span className="text-[#fdd204]">Users Say</span>
          </h2>

          <div className="border border-gray-300 bg-white text-gray-900 p-5 sm:p-6 rounded-md shadow-sm flex flex-col justify-between w-full sm:w-[360px]">
            <div className="flex items-center justify-between border-b border-gray-300 pb-3">
              <div className="flex items-center text-yellow-500">
                {"★★★★★".split("").map((s, i) => (
                  <span key={i}>{s}</span>
                ))}
              </div>
              <img
                src="https://cdn-icons-png.flaticon.com/512/4712/4712101.png"
                alt="AI Agent"
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
            </div>

            <div className="mt-4">
              <div className="flex items-end gap-1 text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900">
                <span>4.9</span>
                <span className="text-sm mb-[6px]">/5</span>
              </div>
              <p className="text-base sm:text-lg font-medium text-gray-800 mt-2">
                Excellent AI Experience
              </p>
              <p className="text-xs sm:text-sm text-gray-600">
                Based on 2,430 verified reviews
              </p>
            </div>
          </div>
        </div>

        {/* Infinite Scroll Cards */}
        <div className="overflow-hidden">
          <div ref={containerRef} className="flex w-max">
            {[...testimonials, ...testimonials].map((review, idx) => (
              <div
                key={idx}
                className="max-w-[250px] sm:max-w-[300px] md:max-w-[340px] lg:max-w-[400px] h-[260px] sm:h-[280px] md:h-[300px] lg:h-[320px] border border-gray-300 bg-white text-gray-900  p-4 sm:p-6 mx-2 sm:mx-3 flex flex-col justify-between  shadow-sm rounded-md flex-shrink-0"
              >
                {/* Top Row */}
                <div className="flex items-center justify-between border-b border-gray-300 pb-2 sm:pb-3">
                  <div className="flex items-center text-yellow-500 text-sm sm:text-base">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <span className="text-[10px] sm:text-xs text-gray-600 font-medium uppercase">
                    {review.platform}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-sm sm:text-base max-w-sm leading-snug flex-grow mt-3 sm:mt-4">
                  {review.text}
                </p>

                {/* Author */}
                <div className="mt-4 sm:mt-6">
                  <p className="text-xs sm:text-sm text-gray-700">Author</p>
                  <p className="font-semibold text-sm sm:text-base">{review.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

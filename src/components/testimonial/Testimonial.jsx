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
    const totalWidth = container.scrollWidth / 2;

    // smooth continuous loop
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
    <section className="py-20 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading and Review Summary */}
        <div className="flex justify-between items-start mb-12">
          <h2 className="text-[3rem] font-semibold text-gray-900 leading-tight">
            WHAT OUR <br />
            <span className="text-[#fdd204]">USERS SAY</span>
          </h2>

          <div className="border border-gray-300 bg-white text-gray-900 p-6 rounded-sm shadow-sm flex flex-col justify-between ">
            <div className="flex items-center justify-between border-b border-gray-300 pb-3">
              <div className="flex items-center text-yellow-500">
                {"★★★★★".split("").map((s, i) => (
                  <span key={i}>{s}</span>
                ))}
              </div>
              <img
                src="https://cdn-icons-png.flaticon.com/512/4712/4712101.png"
                alt="AI Agent"
                className="w-6 h-6"
              />
            </div>
            <div className="mt-4">
              <div className="flex items-end gap-1 text-5xl font-semibold text-gray-900">
                <span>4.9</span>
                <span className="text-base mb-[10px]">/5</span>
              </div>
              <p className="text-lg font-medium text-gray-800 mt-2">
                Excellent AI Experience
              </p>
              <p className="text-sm text-gray-600">
                Based on 2,430 verified reviews
              </p>
            </div>
          </div>
        </div>

        {/* Infinite Loop Section */}
        <div className="overflow-hidden">
          <div ref={containerRef} className="flex">
            {[...testimonials, ...testimonials, ...testimonials].map(
              (review, idx) => (
                <div
                  key={idx}
                  className="min-w-[320px] md:min-w-[360px] lg:min-w-[400px] h-[320px] 
                  border border-gray-300 bg-white text-gray-900 p-6 mx-3 
                  flex flex-col justify-between shadow-sm rounded-sm"
                >
                  <div className="flex items-center justify-between border-b border-gray-300 pb-3">
                    <div className="flex items-center text-yellow-500">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                    <span className="text-xs text-gray-600 font-medium uppercase">
                      {review.platform}
                    </span>
                  </div>

                  <p className="text-lg leading-snug flex-grow mt-4">
                    {review.text}
                  </p>

                  <div className="mt-6">
                    <p className="text-sm text-gray-700">Author</p>
                    <p className="font-semibold">{review.author}</p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

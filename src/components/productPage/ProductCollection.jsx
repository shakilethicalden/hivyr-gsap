"use client";

import React, { useRef } from 'react';

const products = [
  {
    id: 1,
    title: "AI Assistant",
    description: "Intelligent automation that adapts to your workflow seamlessly.",
    imageSrc: "/images/ai-agent-1.png",
  },
  {
    id: 2,
    title: "Smart Agent",
    description: "Autonomous task execution with real-time learning capabilities.",
    imageSrc: "/images/ai-agent-2.png",
  },
  {
    id: 3,
    title: "Neural Core",
    description: "Advanced NLP processing for natural human-like interactions.",
    imageSrc: "/images/ai-agent-3.png",
  },
  {
    id: 4,
    title: "Auto Pilot",
    description: "Fully automated workflow orchestration across all your tools.",
    imageSrc: "/images/ai-agent-4.png",
  },
  {
    id: 5,
    title: "Insight Engine",
    description: "Real-time analytics and predictive intelligence at your fingertips.",
    imageSrc: "/images/ai-agent-5.png",
  },
  {
    id: 6,
    title: "Response AI",
    description: "24/7 customer support automation with human-like accuracy.",
    imageSrc: "/images/ai-agent-6.png",
  },
  {
    id: 7,
    title: "Data Mind",
    description: "Turn unstructured data into actionable business insights.",
    imageSrc: "/images/ai-agent-7.png",
  },
  {
    id: 8,
    title: "Task Flow",
    description: "Seamless integration with your existing tools and workflows.",
    imageSrc: "/images/ai-agent-8.png",
  },
];

export default function ProductCollection() {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -400,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 400,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="bg-gray-100 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-[48px] font-semibold tracking-tight text-black">
            Our Product Collections
          </h2>

          {/* Navigation Controls */}
          <div className="flex gap-3">
            <button
              onClick={scrollLeft}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center bg-white text-black transition-all duration-300 cursor-pointer"
              aria-label="Scroll left"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={scrollRight}
              className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white transition-all duration-300 cursor-pointer"
              aria-label="Scroll right"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Product Cards Horizontal Scroll */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto no-scrollbar pb-10 scroll-smooth"
        >
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white text-black min-w-[320px] md:min-w-[360px] rounded-2xl p-8 flex flex-col shadow-sm border border-gray-100"
            >
              {/* Product Image Container with Yellow Accent */}
              <div className="w-full bg-[#fdd204] rounded-xl aspect-square flex items-center justify-center mb-6">
                <div className="w-32 h-32 flex items-center justify-center">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1" className="text-black">
                    <path d="M12 2a10 10 0 1010 10 10 10 0 00-10-10zm1 15h-2v-2h2zm0-4h-2V7h2z" />
                  </svg>
                </div>
              </div>

              {/* Textual Content */}
              <div>
                <h3 className="text-2xl font-semibold tracking-tight text-black mb-2">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hide Scrollbar Styles */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
"use client";
import React, { useRef } from "react";

export default function AboutArea() {
  const sectionRef = useRef(null);
  const leftAreaRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      className="bg-white text-black py-16 lg:py-24 xl:py-28 px-4 sm:px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-start justify-between">
        
        {/* LEFT SIDE */}
        <div
          ref={leftAreaRef}
          className="lg:w-1/2 flex flex-col justify-start sticky top-0 self-start"
        >
          <p className="text-sm text-gray-400 uppercase tracking-[0.2em] mb-4">
            Who We Are
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-snug text-black">
            Empowering Businesses with Intelligent AI Agents
          </h2>
        </div>

        {/* RIGHT SIDE */}
        <div className="lg:w-1/2 flex flex-col gap-10">
          
          {/* First Paragraph */}
          <p className="text-xl md:text-2xl leading-relaxed text-gray-800">
            We are a collective of AI pioneers, software engineers, and industry experts united by a shared vision: to make artificial intelligence accessible, practical, and transformative for businesses of all sizes. Our journey began with a simple question — how can we harness the power of AI to solve real-world business challenges without complexity?
          </p>

          {/* Key Stats or Highlights */}
          <div className="w-full border-t border-gray-200 mt-4">
            
            {/* Header */}
            <div className="grid grid-cols-3 text-xs uppercase tracking-wider text-gray-400 py-4">
              <span>Metric</span>
              <span>Value</span>
              <span className="text-right">Impact</span>
            </div>

            {/* Row 1 */}
            <div className="grid grid-cols-3 items-center py-4 border-t border-gray-100 text-sm">
              <span className="text-gray-700">Deployed Agents</span>
              <span className="text-gray-900">↳ 500+</span>
              <span className="text-right text-gray-600">Across 12 Industries</span>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-3 items-center py-4 border-t border-gray-100 text-sm">
              <span className="text-gray-700">Efficiency Gain</span>
              <span className="text-gray-900">↳ Up to 70%</span>
              <span className="text-right text-gray-600">Automation ROI</span>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-3 items-center py-4 border-t border-gray-100 text-sm">
              <span className="text-gray-700">Client Satisfaction</span>
              <span className="text-gray-900">↳ 98%</span>
              <span className="text-right text-gray-600">Retention Rate</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const testimonials = [
  {
    id: 1,
    quote: "Our customer response time dropped by 60% after integrating the AI Agent. It's like having an extra teammate that never sleeps!",
    author: "Samantha Lee",
    role: "Head of Customer Success",
    company: "FlowTech",
    rating: 5,
    metric: "60% faster",
  },
  {
    id: 2,
    quote: "The AI Agent handles repetitive support queries flawlessly — our human team now focuses on strategy and growth.",
    author: "David Wilson",
    role: "CTO",
    company: "Nexify",
    rating: 5,
    metric: "85% automated",
  },
  {
    id: 3,
    quote: "We built personalized workflows using this AI assistant — efficiency and team satisfaction skyrocketed in just weeks.",
    author: "Priya Desai",
    role: "Product Manager",
    company: "Stellar",
    rating: 5,
    metric: "3x efficiency",
  },
  {
    id: 4,
    quote: "Incredible product. The integration was effortless, and the insights from the AI dashboard are game-changing.",
    author: "Michael Adams",
    role: "Operations Director",
    company: "OmniCorp",
    rating: 5,
    metric: "Zero downtime",
  },
  {
    id: 5,
    quote: "Finally an AI that actually understands context. Our customer satisfaction scores hit an all-time high.",
    author: "Jessica Wu",
    role: "VP of Customer Experience",
    company: "Elevate",
    rating: 5,
    metric: "98% CSAT",
  },
  {
    id: 6,
    quote: "The best decision we made this year. Our support team is now 10x more productive.",
    author: "Marcus Thompson",
    role: "Support Director",
    company: "Apex",
    rating: 5,
    metric: "10x productivity",
  },
];

export default function Testimonials() {
  const sectionRef = useRef(null);
  const marqueeRef = useRef(null);
  const marqueeInnerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate header elements
      gsap.fromTo(
        ".section-badge",
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.6, scrollTrigger: { trigger: sectionRef.current, start: "top 85%" } }
      );
      
      gsap.fromTo(
        ".section-title span",
        { opacity: 0, y: 50, rotationX: -45 },
        { opacity: 1, y: 0, rotationX: 0, duration: 0.8, stagger: 0.05, scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
      );
      
      gsap.fromTo(
        ".section-description",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.4, scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
      );

      // Animate stat cards
      gsap.fromTo(
        ".stat-item",
        { opacity: 0, scale: 0.8, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 0.5, stagger: 0.1, scrollTrigger: { trigger: sectionRef.current, start: "top 75%" } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const marquee = marqueeInnerRef.current;
    if (!marquee) return;

    // Clone content for seamless loop
    const originalWidth = marquee.scrollWidth;
    const clone = marquee.cloneNode(true);
    marquee.parentNode.appendChild(clone);
    
    // Set up the animation moving from right to left
    const marqueeAnimation = gsap.to([marquee, clone], {
      x: `-${originalWidth}`,
      duration: 30,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % originalWidth),
      },
    });

    // Pause on hover
    const container = marquee.parentNode;
    const handleMouseEnter = () => marqueeAnimation.pause();
    const handleMouseLeave = () => marqueeAnimation.resume();
    
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
      marqueeAnimation.kill();
      if (clone && clone.parentNode) clone.parentNode.removeChild(clone);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 lg:py-24 xl:py-28 bg-white overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-20 w-80 h-80 bg-[#fdd204]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-20 w-80 h-80 bg-black/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#fdd204]/3 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#fdd204] to-transparent" />

      <div className="relative">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-10 lg:mb-16">
          <div className="text-center">

            <h2 className="section-title text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              {["Don't", "just", "take", "our", "word", "for", "it"].map((word, i) => (
                <span key={i} className="inline-block mr-2">
                  <span className={word === "it" ? "text-[#fdd204]" : "text-black"}>
                    {word}
                  </span>
                </span>
              ))}
            </h2>
            <p className="section-description text-black/50 text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
              See what our customers are saying about their experience with our AI Agent
            </p>
          </div>
        </div>

        {/* Full Width Right-to-Left Slider */}
        <div className="w-full overflow-hidden mt-12">
          <div ref={marqueeRef} className="flex">
            <div
              ref={marqueeInnerRef}
              className="flex gap-6 px-4"
              style={{ willChange: "transform" }}
            >
              {/* Map testimonials for seamless loop - 2 sets */}
              {[...testimonials, ...testimonials, ...testimonials].map((testimonial, idx) => (
                <div
                  key={`${testimonial.id}-${idx}`}
                  className="group relative w-[380px] md:w-[420px] lg:w-[460px] flex-shrink-0 bg-white rounded-2xl transition-all duration-500 overflow-hidden border-2 border-black/5 hover:border-[#fdd204]"
                >
                  {/* Top accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-1" />

                  <div className="p-6 md:p-8">
                    {/* Rating and Quote Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-4 h-4 text-[#fdd204] fill-[#fdd204]"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <div className="w-8 h-8 rounded-full bg-[#fdd204]/10 flex items-center justify-center">
                        <svg className="w-4 h-4 text-[#fdd204]" fill="currentColor" viewBox="0 0 32 32">
                          <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-2.2 1.8-4 4-4V8h-2zm12 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8h-2z" />
                        </svg>
                      </div>
                    </div>

                    {/* Quote - Now changes color on hover */}
                    <p className="text-black/80 text-base md:text-lg leading-relaxed min-h-[110px] transition-colors duration-500 group-hover:text-[#fdd204]">
                      "{testimonial.quote}"
                    </p>

                    {/* Author */}
                    <div className="mt-6 p-4 border border-black/5">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-bold text-black">{testimonial.author}</p>
                          <p className="text-sm text-black/50">
                            {testimonial.role} · {testimonial.company}
                          </p>
                        </div>
                        <div className="bg-[#fdd204]/10 rounded-full px-3 py-1.5">
                          <span className="text-xs font-bold text-[#fdd204]">
                            {testimonial.metric}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
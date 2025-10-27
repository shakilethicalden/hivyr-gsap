"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const agentCards = [
  {
    image: "/images/ai-agents/agent.jpg",
    text: "AI Workflow Optimization",
  },
  {
    image: "/images/ai-agents/agent.jpg",
    text: "Customer Support Automation",
  },
  {
    image: "/images/ai-agents/agent.jpg",
    text: "Data-driven Decision Making",
  },
  {
    image: "/images/ai-agents/agent.jpg",
    text: "Task Scheduling & Management",
  },
];

const AgentArea = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title Reveal Animation (bottom to top)
      gsap.fromTo(
        titleRef.current,
        {
          y: 80,
          opacity: 0,
          clipPath: "inset(100% 0% 0% 0%)",
        },
        {
          y: 0,
          opacity: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Paragraph Reveal Animation (top to bottom)
      gsap.fromTo(
        paragraphRef.current,
        {
          y: -40,
          opacity: 0,
          clipPath: "inset(0% 0% 100% 0%)",
        },
        {
          y: 0,
          opacity: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.2,
          ease: "power3.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: paragraphRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Top Heading */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
          <div ref={titleRef} className="flex items-center gap-3 overflow-hidden">
            <h2 className="text-5xl font-extrabold text-[#f7b518] leading-tight">
              EXPLORE
            </h2>
            <h2 className="text-5xl font-extrabold text-black leading-tight">
              AGENTS
            </h2>
          </div>

          <p
            ref={paragraphRef}
            className="text-gray-600 mt-4 md:mt-0 max-w-md text-sm md:text-base overflow-hidden"
          >
            Whether you're building your first AI workflow or scaling intelligent
            systems for enterprise, our AI agents keep your business connected,
            automated, and efficient.
          </p>
        </div>

        {/* Card Row with Hover Animation */}
        <div className="flex flex-col sm:flex-row gap-6 transition-all duration-700">
          {agentCards.map((card, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`
                relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ease-in-out
                ${hoveredIndex === index ? "flex-[1.4]" : hoveredIndex !== null ? "flex-[0.9]" : "flex-1"}
                h-[430px]
              `}
            >
              <div className="relative w-full h-full">
                <Image
                  src={card.image}
                  alt={card.text}
                  fill
                  className={`
                    object-cover transition-transform duration-700 ease-in-out
                    ${hoveredIndex === index ? "scale-95" : "scale-100"}
                  `}
                />
                {/* Text Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-5 transition-all duration-700">
                  <p className="text-white text-lg font-semibold">
                    {card.text}
                  </p>
                </div>

                {/* Hover Button */}
                <div
                  className={`absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-all duration-500
                    ${hoveredIndex === index ? "opacity-100" : "opacity-0"}`}
                >
                  <button className="flex items-center gap-2 bg-white text-black font-semibold px-5 py-3 rounded-full transition-all duration-500 hover:bg-gray-200">
                    Use Agent <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgentArea;

"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import AgentDemoModal from "./AgentDemoModal";

gsap.registerPlugin(ScrollTrigger);

const agentCards = [
  { image: "/images/ai-agents/conversational.jpg", text: "Conversational AI Engine", link: "/products/conversational-ai-engine" },
  { image: "/images/ai-agents/video-calling.jpg", text: "Video Calling", link: "/products/video-call" },
  { image: "/images/ai-agents/voice-calling.jpg", text: "Voice Calling", link: "/products/voice-call" },
  { image: "/images/ai-agents/chat.jpg", text: "Chat", link: "/products/chat" },
  { image: "/images/ai-agents/hr.jpg", text: "HR Management", link: "/products/hr-management" },
];

export default function AgentArea() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedAgentIndex, setSelectedAgentIndex] = useState(null);

  // Determine initial isDesktop without causing a render jump
  const [isDesktop, setIsDesktop] = useState(() => {
    if (typeof window !== "undefined") return window.innerWidth >= 1024;
    return true; // default to desktop in SSR
  });

  const titleRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { y: 80, opacity: 0, clipPath: "inset(100% 0% 0% 0%)" },
        {
          y: 0,
          opacity: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: { trigger: titleRef.current, start: "top 85%" },
        }
      );
      gsap.fromTo(
        paragraphRef.current,
        { y: -40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.2,
          scrollTrigger: { trigger: paragraphRef.current, start: "top 85%" },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  const openModal = (index) => setSelectedAgentIndex(index);
  const closeModal = () => setSelectedAgentIndex(null);

  return (
    <section className="w-full py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-10">
          <div ref={titleRef} className="flex items-center gap-3 overflow-hidden md:pb-8 xl:pb-0">
            <h2 className="agnt_common_title text-[#f7b518] leading-tight">Explore</h2>
            <h2 className="agnt_common_title text-black leading-tight">Agents</h2>
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

        {/* Agent Cards */}
        {isDesktop ? (
          <div className="flex flex-col gap-6">
            {Array.from({ length: Math.ceil(agentCards.length / 3) }).map((_, rowIndex) => {
              const rowCards = agentCards.slice(rowIndex * 3, rowIndex * 3 + 3);
              return (
                <div key={rowIndex} className="flex gap-6">
                  {rowCards.map((card, index) => {
                    const cardIndex = rowIndex * 3 + index;
                    let flexClass = "flex-1";
                    if (hoveredIndex === cardIndex) flexClass = "flex-[1.4]";
                    else if (hoveredIndex !== null && Math.floor(hoveredIndex / 3) === rowIndex)
                      flexClass = "flex-[0.9]";

                    return (
                      <div
                        key={cardIndex}
                        onMouseEnter={() => setHoveredIndex(cardIndex)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className={`relative rounded-2xl overflow-hidden transition-all duration-700 ease-in-out h-[430px] ${flexClass}`}
                      >
                        <Image src={card.image} alt={card.text} fill className="object-cover" />
                        <div className="absolute inset-0 bg-black/30 pointer-events-none" />
                        <div className="absolute bottom-0 left-0 right-0 p-5">
                          <p className="text-white text-lg font-semibold">{card.text}</p>
                        </div>

                        <div
                          className={`absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/50 backdrop-blur-sm transition-opacity duration-500 ${hoveredIndex === cardIndex ? "opacity-100" : "opacity-0"}`}
                        >
                          <button className="bg-white text-black font-semibold px-5 py-3 rounded-full cursor-pointer">
                            <a className="flex items-center gap-2" href={card.link}>
                              View Agent <ArrowRight size={18} />
                            </a>
                          </button>
                          <button
                            onClick={() => openModal(cardIndex)}
                            className="flex items-center gap-2 bg-[#f7b518] text-black font-semibold px-5 py-3 rounded-full cursor-pointer"
                          >
                            Try Demo <ArrowRight size={18} />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {agentCards.map((card, index) => (
              <div key={index} className="relative rounded-2xl overflow-hidden cursor-pointer h-[430px]">
                <Image src={card.image} alt={card.text} fill className="object-cover" />
                <div className="absolute inset-0 bg-black/30 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-white text-lg font-semibold">{card.text}</p>
                </div>
                <button
                  onClick={() => openModal(index)}
                  className="absolute top-4 right-4 flex items-center gap-2 bg-[#f7b518] text-black font-semibold px-4 py-2 rounded-full text-sm hover:bg-[#ffffff] hover:text-black"
                >
                  Try Demo <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Agent Demo Modal */}
      {selectedAgentIndex !== null && (
        <AgentDemoModal
          isOpen={selectedAgentIndex !== null}
          onClose={closeModal}
          agents={agentCards}
          initialIndex={selectedAgentIndex}
        />
      )}
    </section>
  );
}

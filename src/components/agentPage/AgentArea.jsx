"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import AgentDemoModal from "./AgentDemoModal";

gsap.registerPlugin(ScrollTrigger);

const agentCards = [
  { image: "/images/ai-agents/agent.jpg", text: "Conversational AI Engine", link: "/products/conversational-ai-engine" },
  { image: "/images/ai-agents/agent.jpg", text: "Video Calling", link: "/products/video-call" },
  { image: "/images/ai-agents/agent.jpg", text: "Voice Calling", link: "/products/voice-call" },
  { image: "/images/ai-agents/agent.jpg", text: "Task Scheduling & Management" },
  { image: "/images/ai-agents/agent.jpg", text: "AI-driven Research Assistant" },
  { image: "/images/ai-agents/agent.jpg", text: "Predictive Analytics Engine" },
  { image: "/images/ai-agents/agent.jpg", text: "Voice Command Integration" },
  { image: "/images/ai-agents/agent.jpg", text: "Customer Data Processing" },
  { image: "/images/ai-agents/agent.jpg", text: "Automated Report Generation" },
  { image: "/images/ai-agents/agent.jpg", text: "Content Recommendation System" },
  { image: "/images/ai-agents/agent.jpg", text: "Workflow Streamlining Agent" },
  { image: "/images/ai-agents/agent.jpg", text: "Sales Lead Intelligence" },
];

export default function AgentArea() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [selectedAgentIndex, setSelectedAgentIndex] = useState(null);

  const titleRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll Animations
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
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold text-[#f7b518] leading-tight">
              EXPLORE
            </h2>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold text-black leading-tight">
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

        {/* Agent Cards */}
        {isDesktop ? (
          <div className="flex flex-col gap-6">
            {Array.from({ length: Math.ceil(agentCards.length / 4) }).map((_, rowIndex) => {
              const rowCards = agentCards.slice(rowIndex * 4, rowIndex * 4 + 4);
              return (
                <div key={rowIndex} className="flex gap-6">
                  {rowCards.map((card, index) => {
                    const cardIndex = rowIndex * 4 + index;
                    let flexClass = "flex-1";
                    if (hoveredIndex === cardIndex) flexClass = "flex-[1.4]";
                    else if (hoveredIndex !== null && Math.floor(hoveredIndex / 4) === rowIndex)
                      flexClass = "flex-[0.9]";

                    return (
                      <div
                        key={cardIndex}
                        onMouseEnter={() => setHoveredIndex(cardIndex)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className={`relative rounded-2xl overflow-hidden  transition-all duration-700 ease-in-out h-[430px] ${flexClass}`}
                      >
                        <Image
                          src={card.image}
                          alt={card.text}
                          fill
                          className={`object-cover transition-transform duration-700 ease-in-out ${hoveredIndex === cardIndex ? "scale-95" : "scale-100"
                            }`}
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to from-black/70 to-transparent p-5">
                          <p className="text-white text-lg font-semibold">{card.text}</p>
                        </div>

                        {/* Hover Buttons */}
                        <div
                          className={`absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/50 backdrop-blur-sm transition-opacity duration-500 ${hoveredIndex === cardIndex ? "opacity-100" : "opacity-0"
                            }`}
                        >
                          <button className=" bg-white text-black font-semibold px-5 py-3 rounded-full hover:bg-[#f7b518] cursor-pointer">
                            <a className="flex items-center gap-2" href={card.link}>
                              View Agent <ArrowRight size={18} />
                            </a>
                          </button>
                          <button
                            onClick={() => openModal(cardIndex)}
                            className="flex items-center gap-2 bg-[#f7b518] text-black font-semibold px-5 py-3 rounded-full hover:bg-[#ffffff] hover:text-black cursor-pointer"
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
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to from-black/60 to-transparent p-5">
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

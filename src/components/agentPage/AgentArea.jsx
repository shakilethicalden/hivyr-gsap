"use client"

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight, X } from "lucide-react";

const agentCards = [
  { 
    id: '1',
    image: "/images/ai-agents/conversational.jpg", 
    text: "Conversational AI Engine", 
    role: "Intelligent Dialogue System",
    description: "Natural language processing and understanding for human-like conversations",
    link: "/products/conversational-ai-engine",
    social: { linkedin: "#", twitter: "#" }
  },
  { 
    id: '2',
    image: "/images/ai-agents/video-call.jpg", 
    text: "Video Calling", 
    role: "Real-time Communication",
    description: "HD video calls with AI-powered background removal and real-time translation",
    link: "/products/video-call",
    social: { linkedin: "#", twitter: "#" }
  },
  { 
    id: '3',
    image: "/images/ai-agents/voice-calling.jpg", 
    text: "Voice Calling", 
    role: "AI Voice Assistant",
    description: "Crystal clear voice calls with speech-to-text and real-time sentiment analysis",
    link: "/products/voice-call",
    social: { linkedin: "#", twitter: "#" }
  },
  { 
    id: '4',
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=400&fit=crop", 
    text: "Chat", 
    role: "Omnichannel Messaging",
    description: "Unified chat platform with AI responses across all messaging channels",
    link: "/products/chat",
    social: { linkedin: "#", twitter: "#" }
  },
  { 
    id: '5',
    image: "/images/ai-agents/hr.jpg", 
    text: "HR Management", 
    role: "Workforce Optimization",
    description: "AI-powered recruitment, onboarding, and employee engagement tools",
    link: "/products/hr-management",
    social: { linkedin: "#", twitter: "#" }
  },
  { 
    id: '6',
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop", 
    text: "Analytics Agent", 
    role: "Business Intelligence",
    description: "Real-time data analysis and predictive insights for decision making",
    link: "/products/analytics",
    social: { linkedin: "#", twitter: "#" }
  },
];

export default function AIShowcase() {
  const [hoveredId, setHoveredId] = useState(null);
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  // Handle responsive detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Responsive column calculation
  const getColumns = () => {
    if (isMobile) {
      // Single column for mobile
      return [agentCards];
    } else if (isTablet) {
      // Two columns for tablet
      const col1 = agentCards.filter((_, i) => i % 2 === 0);
      const col2 = agentCards.filter((_, i) => i % 2 === 1);
      return [col1, col2];
    } else {
      // Three columns for desktop
      return [
        agentCards.filter((_, i) => i % 3 === 0),
        agentCards.filter((_, i) => i % 3 === 1),
        agentCards.filter((_, i) => i % 3 === 2)
      ];
    }
  };

  const columns = getColumns();

  const handleTryDemo = (agent) => {
    setSelectedAgent(agent);
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="w-full bg-gradient-to-br from-gray-50 to-white overflow-hidden py-16 lg:py-24 xl:py-28 ">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header Section */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              <span className="text-[#fdd204]">Explore</span>{" "}
              <span className="text-black">AI Agents</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-4">
              Whether you're building your first AI workflow or scaling intelligent
              systems for enterprise, our AI agents keep your business connected.
            </p>
          </div>

          {/* Main Layout - Fully Responsive */}
          <div className="flex flex-col lg:flex-row items-start gap-6 sm:gap-8 lg:gap-12 select-none">
            {/* Photo Grid - Masonry Layout */}
            <div className="flex gap-3 sm:gap-4 md:gap-5 flex-shrink-0 w-full lg:w-auto justify-center lg:justify-start overflow-visible">
              {columns.map((column, colIndex) => (
                <div 
                  key={colIndex}
                  className="flex flex-col gap-3 sm:gap-4 md:gap-5"
                  style={{
                    marginTop: !isMobile && !isTablet && colIndex === 1 ? '60px' : 
                              !isMobile && !isTablet && colIndex === 2 ? '30px' : 
                              isTablet && colIndex === 1 ? '40px' : '0px'
                  }}
                >
                  {column.map((agent, agentIndex) => (
                    <PhotoCard
                      key={agent.id}
                      agent={agent}
                      isMobile={isMobile}
                      isTablet={isTablet}
                      hoveredId={hoveredId}
                      onHover={setHoveredId}
                    />
                  ))}
                </div>
              ))}
            </div>

            {/* Right: Agent List */}
            <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 pt-0 lg:pt-2 flex-1 w-full overflow-visible">
              {agentCards.map((agent) => (
                <AgentRow
                  key={agent.id}
                  agent={agent}
                  hoveredId={hoveredId}
                  onHover={setHoveredId}
                  onTryDemo={handleTryDemo}
                  isMobile={isMobile}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Demo Modal */}
      {isModalOpen && selectedAgent && (
        <DemoModal
          agent={selectedAgent}
          onClose={() => setIsModalOpen(false)}
          isMobile={isMobile}
        />
      )}
    </>
  );
}

// Responsive Photo Card Component
const PhotoCard = ({ agent, isMobile, isTablet, hoveredId, onHover }) => {
  const isActive = hoveredId === agent.id;
  const isDimmed = hoveredId !== null && !isActive;

  // Responsive sizing
  const getCardSize = () => {
    if (isMobile) return "w-[130px] h-[140px]";
    if (isTablet) return "w-[150px] h-[160px]";
    return "w-[180px] h-[190px]";
  };

  return (
    <div
      className={`
        relative overflow-hidden rounded-xl sm:rounded-2xl cursor-pointer flex-shrink-0
        transition-all duration-300 shadow-lg hover:shadow-xl
        ${getCardSize()}
        ${isDimmed ? 'opacity-40 sm:opacity-50' : 'opacity-100'}
      `}
      onMouseEnter={() => onHover(agent.id)}
      onMouseLeave={() => onHover(null)}
    >
      <div className="relative w-full h-full group">
        <img
          src={agent.image}
          alt={agent.text}
          className="w-full h-full object-cover transition-all duration-500"
          style={{
            filter: isActive ? 'grayscale(0) brightness(1)' : 'grayscale(0.3) brightness(0.85)',
            transform: isActive ? 'scale(1.05)' : 'scale(1)',
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Agent Name on Hover */}
        <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <p className="text-white text-[10px] sm:text-xs font-medium text-center bg-black/50 backdrop-blur-sm py-1 px-2 rounded">
            {agent.text.length > 20 ? agent.text.substring(0, 20) + '...' : agent.text}
          </p>
        </div>
      </div>
    </div>
  );
};

// Responsive Agent Row Component
const AgentRow = ({ agent, hoveredId, onHover, onTryDemo, isMobile }) => {
  const isActive = hoveredId === agent.id;
  const isDimmed = hoveredId !== null && !isActive;

  return (
    <div
      className={`
        cursor-pointer transition-all duration-300 group
        ${isDimmed ? 'opacity-40 sm:opacity-50' : 'opacity-100'}
        ${isMobile ? 'py-2' : ''}
      `}
      onMouseEnter={() => onHover(agent.id)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Agent Name and Status */}
      <div className="flex items-start sm:items-center gap-2 sm:gap-3 flex-wrap">
        <div
          className={`
            w-4 h-3 sm:w-5 sm:h-4 rounded-md flex-shrink-0 mt-1 sm:mt-0 transition-all duration-300
            ${isActive ? 'bg-[#fdd204] w-5 sm:w-7' : 'bg-gray-300'}
          `}
        />
        <h3
          className={`
            text-base sm:text-lg md:text-xl font-bold leading-tight tracking-tight transition-colors duration-300
            ${isActive ? 'text-black' : 'text-gray-700'}
          `}
        >
          {agent.text}
        </h3>

        {/* Action Buttons */}
        <div
          className={`
            flex items-center gap-1.5 sm:gap-2 transition-all duration-300
            ${isActive || isMobile
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 -translate-x-4 pointer-events-none'
            }
          `}
        >
          <a
            href={agent.link}
            onClick={(e) => e.stopPropagation()}
            className="px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-medium bg-black text-white rounded-md hover:bg-gray-800 transition-all duration-200 hover:scale-105"
          >
            Details
          </a>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onTryDemo(agent);
            }}
            className="px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-medium bg-[#fdd204] text-black rounded-md hover:bg-black hover:text-white transition-all duration-200 hover:scale-105"
          >
            Try Demo
          </button>
        </div>
      </div>

      {/* Agent Role/Subtitle */}
      <p className="mt-1 sm:mt-1.5 pl-6 sm:pl-8 text-[10px] sm:text-xs md:text-sm font-medium uppercase tracking-wider text-gray-500">
        {agent.role}
      </p>

      {/* Description */}
      <div
        className={`
          mt-1.5 sm:mt-2 pl-6 sm:pl-8 transition-all duration-300 overflow-hidden
          ${isActive ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
          {agent.description}
        </p>
      </div>
    </div>
  );
};

// Responsive Demo Modal Component
const DemoModal = ({ agent, onClose, isMobile }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Handle escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative bg-white rounded-xl sm:rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 p-1.5 sm:p-2 bg-black/10 hover:bg-black/20 rounded-full transition-colors"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
        </button>

        {/* Modal Content */}
        <div className="p-4 sm:p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
            {/* Image */}
            <div className="relative w-full md:w-1/2 h-48 sm:h-56 md:h-auto rounded-lg sm:rounded-xl overflow-hidden">
              <img
                src={agent.image}
                alt={agent.text}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Details */}
            <div className="flex-1">
              <div className="inline-block px-2 sm:px-3 py-0.5 sm:py-1 bg-[#fdd204] text-black text-[10px] sm:text-xs font-semibold rounded-full mb-3 sm:mb-4">
                AI Agent Demo
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1.5 sm:mb-2">{agent.text}</h3>
              <p className="text-gray-600 text-sm sm:text-base font-medium mb-3 sm:mb-4">{agent.role}</p>
              <p className="text-gray-700 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                {agent.description}
              </p>

              <div className="space-y-2 sm:space-y-3">
                <h4 className="font-semibold text-black text-sm sm:text-base">Key Features:</h4>
                <ul className="space-y-1.5 sm:space-y-2 text-gray-600 text-xs sm:text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#fdd204] rounded-full flex-shrink-0" />
                    Real-time processing and response
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#fdd204] rounded-full flex-shrink-0" />
                    Enterprise-grade security
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#fdd204] rounded-full flex-shrink-0" />
                    24/7 intelligent automation
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#fdd204] rounded-full flex-shrink-0" />
                    Seamless API integration
                  </li>
                </ul>
              </div>

              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-2 sm:gap-3">
                <a
                  href={agent.link}
                  className="flex-1 bg-black text-white text-center py-2 px-3 rounded-lg hover:bg-gray-800 transition-colors text-sm sm:text-base"
                >
                  View Full Details
                </a>
                <button
                  onClick={() => alert(`Launching ${agent.text} demo...`)}
                  className="flex-1 bg-[#fdd204] text-black py-2 px-3 rounded-lg hover:bg-black hover:text-white transition-colors text-sm sm:text-base"
                >
                  Launch Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
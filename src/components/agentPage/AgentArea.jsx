// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import { ArrowRight } from "lucide-react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import AgentDemoModal from "./AgentDemoModal";

// gsap.registerPlugin(ScrollTrigger);

// const agentCards = [
//   { image: "/images/ai-agents/conversational.jpg", text: "Conversational AI Engine", link: "/products/conversational-ai-engine" },
//   { image: "/images/ai-agents/video-calling.jpg", text: "Video Calling", link: "/products/video-call" },
//   { image: "/images/ai-agents/voice-calling.jpg", text: "Voice Calling", link: "/products/voice-call" },
//   { image: "/images/ai-agents/chat.jpg", text: "Chat", link: "/products/chat" },
//   { image: "/images/ai-agents/hr.jpg", text: "HR Management", link: "/products/hr-management" },
// ];

// export default function AgentArea() {
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const [selectedAgentIndex, setSelectedAgentIndex] = useState(null);

//   // Determine initial isDesktop without causing a render jump
//   const [isDesktop, setIsDesktop] = useState(() => {
//     if (typeof window !== "undefined") return window.innerWidth >= 1024;
//     return true; // default to desktop in SSR
//   });

//   const titleRef = useRef(null);
//   const paragraphRef = useRef(null);

//   useEffect(() => {
//     const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.fromTo(
//         titleRef.current,
//         { y: 80, opacity: 0, clipPath: "inset(100% 0% 0% 0%)" },
//         {
//           y: 0,
//           opacity: 1,
//           clipPath: "inset(0% 0% 0% 0%)",
//           duration: 1.2,
//           ease: "power3.out",
//           scrollTrigger: { trigger: titleRef.current, start: "top 85%" },
//         }
//       );
//       gsap.fromTo(
//         paragraphRef.current,
//         { y: -40, opacity: 0 },
//         {
//           y: 0,
//           opacity: 1,
//           duration: 1.2,
//           ease: "power3.out",
//           delay: 0.2,
//           scrollTrigger: { trigger: paragraphRef.current, start: "top 85%" },
//         }
//       );
//     });
//     return () => ctx.revert();
//   }, []);

//   const openModal = (index) => setSelectedAgentIndex(index);
//   const closeModal = () => setSelectedAgentIndex(null);

//   return (
//     <section className="w-full py-16 lg:py-24 xl:py-28 bg-white overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6">
//         {/* Header */}
//         <div className="flex flex-col lg:flex-row items-center lg:justify-between mb-10">
//           <div ref={titleRef} className="flex items-center gap-3 overflow-hidden md:pb-8 xl:pb-0">
//             <h2 className="common-title text-[#fdd204] leading-tight">Explore</h2>
//             <h2 className="common-title text-black leading-tight">Agents</h2>
//           </div>
//           <p
//             ref={paragraphRef}
//             className="text-gray-600 mt-4 md:mt-0 max-w-md text-lg lg:text-xl text-center lg:text-start overflow-hidden"
//           >
//             Whether you're building your first AI workflow or scaling intelligent
//             systems for enterprise, our AI agents keep your business connected,
//             automated, and efficient.
//           </p>
//         </div>

//         {/* Agent Cards */}
//         {isDesktop ? (
//           <div className="flex flex-col gap-6">
//             {Array.from({ length: Math.ceil(agentCards.length / 3) }).map((_, rowIndex) => {
//               const rowCards = agentCards.slice(rowIndex * 3, rowIndex * 3 + 3);
//               return (
//                 <div key={rowIndex} className="flex gap-6">
//                   {rowCards.map((card, index) => {
//                     const cardIndex = rowIndex * 3 + index;
//                     let flexClass = "flex-1";
//                     if (hoveredIndex === cardIndex) flexClass = "flex-[1.4]";
//                     else if (hoveredIndex !== null && Math.floor(hoveredIndex / 3) === rowIndex)
//                       flexClass = "flex-[0.9]";

//                     return (
//                       <div
//                         key={cardIndex}
//                         onMouseEnter={() => setHoveredIndex(cardIndex)}
//                         onMouseLeave={() => setHoveredIndex(null)}
//                         className={`relative rounded-2xl overflow-hidden transition-all duration-700 ease-in-out h-[430px] ${flexClass}`}
//                       >
//                         <Image src={card.image} alt={card.text} fill className="object-cover" />
//                         <div className="absolute inset-0 bg-black/30 pointer-events-none" />
//                         <div className="absolute bottom-0 left-0 right-0 p-5">
//                           <p className="text-white text-lg font-semibold">{card.text}</p>
//                         </div>

//                         <div
//                           className={`absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/50 backdrop-blur-sm transition-opacity duration-500 ${hoveredIndex === cardIndex ? "opacity-100" : "opacity-0"}`}
//                         >
//                           <button className="bg-white text-black font-semibold px-5 py-3 rounded-full cursor-pointer">
//                             <a className="flex items-center gap-2" href={card.link}>
//                               View Agent <ArrowRight size={18} />
//                             </a>
//                           </button>
//                           <button
//                             onClick={() => openModal(cardIndex)}
//                             className="flex items-center gap-2 bg-[#fdd204] text-black font-semibold px-5 py-3 rounded-full cursor-pointer"
//                           >
//                             Try Demo <ArrowRight size={18} />
//                           </button>
//                         </div>
//                       </div>
//                     );
//                   })}
//                 </div>
//               );
//             })}
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//             {agentCards.map((card, index) => (
//               <div key={index} className="relative rounded-2xl overflow-hidden cursor-pointer h-[430px]">
//                 <Image src={card.image} alt={card.text} fill className="object-cover" />
//                 <div className="absolute inset-0 bg-black/30 pointer-events-none" />
//                 <div className="absolute bottom-0 left-0 right-0 p-5">
//                   <p className="text-white text-lg font-semibold">{card.text}</p>
//                 </div>
//                 <button
//                   onClick={() => openModal(index)}
//                   className="absolute top-4 right-4 flex items-center gap-2 bg-[#fdd204] text-black font-semibold px-4 py-2 rounded-full text-sm hover:bg-[#ffffff] hover:text-black"
//                 >
//                   Try Demo <ArrowRight size={16} />
//                 </button>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Agent Demo Modal */}
//       {selectedAgentIndex !== null && (
//         <AgentDemoModal
//           isOpen={selectedAgentIndex !== null}
//           onClose={closeModal}
//           agents={agentCards}
//           initialIndex={selectedAgentIndex}
//         />
//       )}
//     </section>
//   );
// }


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
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedAgentIndex, setSelectedAgentIndex] = useState(null);
  const [isLgScreen, setIsLgScreen] = useState(false);

  const sectionRef = useRef(null);

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsLgScreen(window.innerWidth >= 1024);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // GSAP Animation - only on LG and larger
  useEffect(() => {
    if (!isLgScreen) return;

    const total = agentCards.length;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${total * 120}%`,
          pin: true,
          scrub: 1.2,
          snap: {
            snapTo: 1 / (total - 1),
            duration: 0.4,
            ease: "power1.inOut",
          },
          onUpdate: (self) => {
            const newIndex = Math.round(self.progress * (total - 1));
            setActiveIndex((prev) => {
              if (prev !== newIndex) return newIndex;
              return prev;
            });
          },
        },
      });

      tl.to({}, { duration: total });
    });

    return () => ctx.revert();
  }, [isLgScreen]);

  // Handle manual navigation for mobile/tablet
  const handleCardClick = (index) => {
    if (!isLgScreen) {
      setActiveIndex(index);
      sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      ref={sectionRef}
      className={`w-full ${isLgScreen ? 'h-screen' : 'min-h-screen'} bg-white overflow-hidden flex items-center`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-0">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-12 lg:mb-16 gap-6">
          <h2 className="title_text text-center lg:text-left">
            <span className="text-[#fdd204]">Explore</span>{" "}
            <span className="text-black">AI Agents</span>
          </h2>

          <p className="paragraph_text text-gray-500 max-w-lg  text-center lg:text-right">
            Whether you're building your first AI workflow or scaling intelligent
            systems for enterprise, our AI agents keep your business connected.
          </p>
        </div>

        {/* Main Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* LEFT - Navigation */}
          <div className="w-full lg:w-2/5 border border-black/10 rounded-xl overflow-hidden">
            {agentCards.map((agent, index) => (
              <div
                key={index}
                onClick={() => handleCardClick(index)}
                className={`
                  p-6 lg:p-8 text-lg lg:text-2xl font-semibold cursor-pointer
                  border-b border-black/10 transition-all duration-500
                  ${activeIndex === index
                    ? "bg-black text-white"
                    : "bg-white text-black opacity-40 hover:opacity-60"}
                `}
              >
                {agent.text}
              </div>
            ))}
          </div>

          {/* RIGHT - Content */}
          <div className="w-full lg:w-3/5 relative rounded-xl overflow-hidden min-h-[400px] lg:min-h-[500px]">
            {/* Image */}
            <Image
              key={activeIndex}
              src={agentCards[activeIndex].image}
              alt={agentCards[activeIndex].text}
              fill
              className="object-cover transition-all duration-700 ease-in-out"
              priority
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30" />

            {/* Content */}
            <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 right-4 md:right-8 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
              <div className="bg-black/70 text-white px-4 py-2 rounded-lg backdrop-blur">
                {agentCards[activeIndex].text}
              </div>

              <div className="flex gap-4 w-full sm:w-auto">
                <a
                  href={agentCards[activeIndex].link}
                  className="button_text bg-white text-black  rounded-lg  flex items-center gap-2 hover:bg-black hover:text-white transition flex-1 sm:flex-initial justify-center"
                >
                  View Details <ArrowRight size={18} />
                </a>

                <button
                  onClick={() => setSelectedAgentIndex(activeIndex)}
                  className="button_text bg-[#fdd204] text-black  rounded-lg  hover:bg-black hover:text-white transition flex-1 sm:flex-initial"
                >
                  Try Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedAgentIndex !== null && (
        <AgentDemoModal
          isOpen={selectedAgentIndex !== null}
          onClose={() => setSelectedAgentIndex(null)}
          agents={agentCards}
          initialIndex={selectedAgentIndex}
        />
      )}
    </section>
  );
}
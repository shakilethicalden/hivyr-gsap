// "use client";
// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import Image from "next/image";
// import {
//   FaChartLine,
//   FaMicrophoneAlt,
//   FaClosedCaptioning,
//   FaVolumeUp,
//   FaStore,
// } from "react-icons/fa";

// gsap.registerPlugin(ScrollTrigger);

// const Service = () => {
//   const cardRefs = useRef([]);

//   useEffect(() => {
//     //  Disable sticky animation for <1024px screens
//     if (window.innerWidth < 1024) return;

//     const cards = cardRefs.current;
//     const lastCard = cards[cards.length - 1];

//     cards.forEach((card) => {
//       if (!card) return;

//       gsap.to(card, {
//         scrollTrigger: {
//           trigger: card,
//           start: "top 15%",
//           endTrigger: lastCard,
//           end: "center center",
//           pin: true,
//           pinSpacing: false,
//           scrub: true,
//         },
//       });
//     });
//   }, []);

//   const services = [
//     {
//       title: "Hivyr Analytics",
//       description:
//         "Improve quality of experience with real-time monitoring, measurement, alerts, and diagnostics.",
//       image: "/images/service/analytics.jpg",
//       alt: "A graph detailing an upward growth trend",
//       icon: <FaChartLine />,
//     },
//     {
//       title: "Recording",
//       description:
//         "Flexible options to record audio streams, video streams, and web pages for archive, review, or distribution.",
//       image: "/images/service/recording.jpg",
//       alt: "Recording interface visualization",
//       icon: <FaMicrophoneAlt />,
//     },
//     {
//       title: "Real-Time Speech to Text",
//       description:
//         "Add live captions to calls and streams, generate transcripts, and integrate with large language models (LLMs).",
//       image: "/images/service/speech.png",
//       alt: "A glowing blue orb surrounded by iridescent rings",
//       icon: <FaClosedCaptioning />,
//     },
//     {
//       title: "AI Noise Suppression",
//       description:
//         "Reduce background noise for real-time audio and video with powerful AI enhancement.",
//       image: "/images/service/noise-supresion.jpg",
//       alt: "Overlapping transparent rectangles with gradients",
//       icon: <FaVolumeUp />,
//     },
//     {
//       title: "Extensions Marketplace",
//       description:
//         "Easily integrate powerful, fun, and interactive features into your real-time app.",
//       image: "/images/service/marketplace.jpg",
//       alt: "Marketplace of interactive extensions",
//       icon: <FaStore />,
//     },
//   ];

//   return (
//     <section className="bg-white py-20 lg:py-24 z-30">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <p className="text-[#fdd204] text-lg font-semibold text-center uppercase mb-2">
//           SERVICES
//         </p>
//         <h2 className="common-title text-center max-w-5xl mx-auto xl:max-w-7xl px-4 sm:px-8 mb-10 lg:mb-20">
//           Powerful tools to elevate your real-time communication
//         </h2>

//         {services.map((service, i) => (
//           <div
//             key={i}
//             ref={(el) => (cardRefs.current[i] = el)}
//             className={`relative bg-gray-100 rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-start overflow-hidden  h-auto lg:h-[600px] mt-10 z-[${i + 10}]`}
//           >
//             {/* Left side content */}
//             <div className="w-full lg:w-1/2 lg:pr-10 pt-4 lg:pt-8">
//               <p className="text-xl text-black bg-[#fdd204] rounded-full w-fit p-4 mb-6">
//                 {service.icon}
//               </p>
//               <h3 className="text-3xl lg:text-5xl font-bold leading-tight mb-6">
//                 {service.title}
//               </h3>
//               <p className="text-gray-600 text-lg lg:text-2xl max-w-md font-medium">
//                 {service.description}
//               </p>
//             </div>

//             {/* Right side section */}
//             <div className="w-full lg:w-1/2 relative h-[300px] sm:h-[400px] lg:h-full mt-10 lg:mt-0 flex items-center justify-center">
//               {i === 0 || i === 3 ? (
//                 // 1st & 4th card layout
//                 <div className="relative w-[90%] lg:w-[75%] h-full flex items-center justify-center">
//                   <div className="relative w-full h-[90%]">
//                     <Image
//                       src={service.image}
//                       alt={service.alt}
//                       fill
//                       className="object-cover rounded-3xl"
//                       priority
//                     />
//                   </div>

//                   {/* Mini cards for 1st & 4th */}
//                   <div className="absolute top-0 left-[-40px] lg:top-10 lg:left-[-80px] bg-white shadow-xl rounded-2xl p-4 lg:p-5 w-[160px] sm:w-[180px] lg:w-[200px]">
//                     <p className="text-xs sm:text-sm text-gray-400 uppercase font-semibold mb-1">
//                       AI METRICS
//                     </p>
//                     <p className="text-black font-bold text-base sm:text-lg">
//                       Accuracy: <span className="text-[#fdd204]">99.4%</span>
//                     </p>
//                   </div>

//                   <div className="absolute bottom-0 right-[-40px] lg:bottom-10 lg:right-[-80px] bg-white shadow-xl rounded-2xl p-4 lg:p-5 w-[180px] sm:w-[200px] lg:w-[220px]">
//                     <p className="text-xs sm:text-sm text-gray-400 uppercase font-semibold mb-1">
//                       Processing Time
//                     </p>
//                     <p className="text-black font-bold text-base sm:text-lg">
//                       1.2s avg
//                     </p>
//                     <button className="mt-2 sm:mt-3 text-xs sm:text-sm text-white bg-black px-3 py-1.5 sm:px-4 sm:py-2 rounded-full">
//                       View Report
//                     </button>
//                   </div>
//                 </div>
//               ) : i === 1 || i === 4 ? (
//                 // 2nd & 5th card layout
//                 <div className="relative w-[90%] lg:w-[100%] h-full flex items-center justify-center">
//                   <div className="relative w-full h-[70%]">
//                     <Image
//                       src={service.image}
//                       alt={service.alt}
//                       fill
//                       className="object-cover rounded-3xl"
//                       priority
//                     />
//                   </div>

//                   {/* Mini cards for 2nd & 5th */}
//                   <div className="absolute top-0 left-[-40px] lg:top-10 lg:left-[-80px] bg-[#fdd204] shadow-xl rounded-2xl p-4 lg:p-5 w-[160px] sm:w-[180px] lg:w-[200px]">
//                     <p className="text-xs sm:text-sm text-black uppercase font-semibold mb-1">
//                       Active Items
//                     </p>
//                     <p className="text-black font-bold text-base sm:text-lg">
//                       120+ available
//                     </p>
//                   </div>

//                   <div className="absolute bottom-0 right-[-40px] lg:bottom-1 lg:right-[-40px] bg-white shadow-xl rounded-2xl p-4 lg:p-5 w-[180px] sm:w-[200px] lg:w-[220px]">
//                     <p className="text-xs sm:text-sm text-gray-400 uppercase font-semibold mb-1">
//                       Details
//                     </p>
//                     <p className="text-black font-bold text-base sm:text-lg">
//                       Explore latest updates
//                     </p>
//                     <button className="mt-2 sm:mt-3 text-xs sm:text-sm text-white bg-black px-3 py-1.5 sm:px-4 sm:py-2 rounded-full">
//                       View
//                     </button>
//                   </div>
//                 </div>
//               ) : (
//                 // Default layout
//                 <div className="relative w-[90%] h-full">
//                   <Image
//                     src={service.image}
//                     alt={service.alt}
//                     fill
//                     className="object-cover rounded-3xl"
//                     priority
//                   />
//                 </div>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Service;

'use client'

import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';

const Service = () => {
  const [activeTab, setActiveTab] = useState('Phone Agent');

  const cards = [
    {
      id: 1,
      title: "Phone Agent",
      description:
        "A smart voice-based AI that handles calls, schedules appointments, and supports customers with natural, human-like conversation flow anytime.",
      image: "/images/meet-the-inteligent/phone-2.png",
    },
    {
      id: 2,
      title: "Chatbot Agent",
      description:
        "An intelligent chatbot that instantly answers queries, guides users, and improves engagement through seamless, context-aware conversations.",
      image: "/images/meet-the-inteligent/chatbot.jpg",
    },
    {
      id: 3,
      title: "Voice Agent",
      description:
        "A lifelike virtual assistant that understands voice commands and responds naturally, creating smooth and interactive communication experiences.",
      image: "/images/meet-the-inteligent/voice-agent.jpg",
    },
    {
      id: 4,
      title: "WhatsApp Agent",
      description:
        "Automate WhatsApp chats, send updates, and assist customers 24/7 with personalized, AI-driven responses that enhance satisfaction and sales.",
      image: "/images/meet-the-inteligent/whatsapp.jpg",
    },
    {
      id: 5,
      title: "Messenger Agent",
      description:
        "Engage your Facebook audience instantly using AI automation that answers FAQs, manages promotions, and boosts real-time interaction.",
      image: "/images/meet-the-inteligent/messenger.jpg",
    },
    {
      id: 6,
      title: "Instagram Agent",
      description:
        "Automate Instagram DMs, handle product queries, and respond to comments to increase engagement and convert followers into loyal customers.",
      image: "/images/meet-the-inteligent/instagram-2.png",
    },
    {
      id: 7,
      title: "Shopify Agent",
      description:
        "An AI sales assistant that helps customers, tracks orders, and recommends products, streamlining eCommerce operations and boosting revenue.",
      image: "/images/meet-the-inteligent/shopify-2.jpg",
    },
    {
      id: 8,
      title: "Gmail Agent",
      description:
        "A smart inbox assistant that reads, categorizes, and replies to emails automatically, helping you manage communication effortlessly.",
      image: "/images/meet-the-inteligent/gmail.jpg",
    },
    {
      id: 9,
      title: "Presentation Agent",
      description:
        "Create stunning presentations from text or ideas in seconds. The AI formats slides with design and content precision automatically.",
      image: "/images/meet-the-inteligent/presentation.jpg",
    },
    {
      id: 10,
      title: "SMS Agent",
      description:
        "Send automated reminders, alerts, and promotional texts instantly to maintain timely customer communication and increase engagement.",
      image: "/images/meet-the-inteligent/sms.jpg",
    },
  ];

  const services = cards.map(card => ({
    name: card.title,
    icon: getIconForTitle(card.title)
  }));

  function getIconForTitle(title) {
    const iconMap = {
      "Phone Agent": "📞",
      "Chatbot Agent": "💬",
      "Voice Agent": "🎙️",
      "WhatsApp Agent": "💚",
      "Messenger Agent": "💙",
      "Instagram Agent": "📷",
      "Shopify Agent": "🛍️",
      "Gmail Agent": "📧",
      "Presentation Agent": "📊",
      "SMS Agent": "📱"
    };
    return iconMap[title] || "🤖";
  }

  const activeCard = cards.find(card => card.title === activeTab);

  useEffect(() => {
    gsap.fromTo(".content-panel",
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
    );
  }, [activeTab]);

  return (
    <section className="bg-white text-gray-900 py-20 px-6 font-['Inter',_sans-serif]">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 max-w-3xl mx-auto leading-tight">
            Meet the <span className="bg-gradient-to-r from-[#f7b518] to-[#fdd204] bg-clip-text text-transparent">Intelligent Agents</span> by Hivyr
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Powerful AI agents that transform how you communicate, automate workflows, and engage customers across every channel.
          </p>
        </div>

        {/* Dashboard UI */}
        <div className="bg-gray-50 rounded-3xl border border-gray-200 overflow-hidden flex flex-col md:flex-row min-h-[650px] shadow-xl">

          {/* Sidebar */}
          <div className="w-full md:w-80 bg-white border-r border-gray-200 p-4 flex flex-col gap-1">
            {services.map((service) => (
              <button
                key={service.name}
                onClick={() => setActiveTab(service.name)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-sm font-medium w-full text-left ${activeTab === service.name
                    ? 'bg-gradient-to-r from-[#f7b518]/10 to-[#fdd204]/10 text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                style={activeTab === service.name ? { borderLeft: `3px solid #f7b518` } : {}}
              >
                <span className="text-xl">{service.icon}</span>
                <span className="font-medium">{service.name}</span>
              </button>
            ))}
          </div>

          {/* Main Content Area - Right Side Modal */}
          <div className="flex-1 p-8 bg-white relative overflow-hidden content-panel">
            {activeCard && (
              <div className="h-full flex flex-col">
                {/* Header with agent name and badge */}
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{getIconForTitle(activeCard.title)}</span>
                    <h3 className="text-2xl font-bold text-gray-900">{activeCard.title}</h3>
                  </div>
                  <div className="flex items-center gap-2 bg-gradient-to-r from-[#f7b518]/20 to-[#fdd204]/20 px-3 py-1.5 rounded-full border border-[#f7b518]/30">
                    <div className="w-2 h-2 bg-[#f7b518] rounded-full animate-pulse"></div>
                    <span className="text-xs font-medium text-gray-700">Active Agent</span>
                  </div>
                </div>

                {/* Agent Image/Visualization Area */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 flex-1">
                  {/* Left Column: Image/Visual */}
                  <div className="flex flex-col gap-4">
                    <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl flex items-center justify-center relative overflow-hidden border border-gray-200 shadow-lg">
                      {activeCard.image ? (
                        <img
                          src={activeCard.image}
                          alt={activeCard.title}
                          className="w-full h-full object-cover rounded-3xl"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'https://via.placeholder.com/400x400?text=AI+Agent';
                          }}
                        />
                      ) : (
                        <div className="text-center">
                          <span className="text-6xl mb-2 block">{getIconForTitle(activeCard.title)}</span>
                          <p className="text-gray-400 text-sm">Agent visualization</p>
                        </div>
                      )}

                      {/* Animated overlay effect */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>

                      {/* Live indicator badge */}
                      <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-gray-200 shadow-sm">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-xs font-medium text-gray-700">AI Powered</span>
                      </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="bg-gradient-to-r from-[#f7b518]/5 to-[#fdd204]/5 p-4 rounded-2xl border border-gray-200">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide">Response Time</p>
                          <p className="text-lg font-bold text-gray-900">&lt; 200ms</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide">Availability</p>
                          <p className="text-lg font-bold text-gray-900">24/7</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide">Accuracy</p>
                          <p className="text-lg font-bold text-gray-900">99.5%</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Agent Details & Demo */}
                  <div className="flex flex-col gap-6">
                    {/* Description Card */}
                    <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                      <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                        <span className="text-[#f7b518]">✨</span> About this Agent
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        {activeCard.description}
                      </p>
                    </div>

                    {/* Interactive Demo Preview */}
                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                      <h4 className="font-bold text-sm mb-4 text-gray-700 uppercase tracking-wide flex items-center gap-2">
                        <span>🎯</span> Live Preview
                      </h4>

                      {/* Demo Chat Interface Mockup */}
                      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                        <div className="flex items-start gap-3 mb-4">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#f7b518] to-[#fdd204] flex items-center justify-center text-white text-xs font-bold">
                            AI
                          </div>
                          <div className="flex-1 bg-gray-100 rounded-2xl rounded-tl-none p-3 max-w-[80%]">
                            <p className="text-sm text-gray-800">
                              {activeCard.title === "Phone Agent" && "Hello! I can handle calls and schedule appointments for you. How can I help today?"}
                              {activeCard.title === "Chatbot Agent" && "Hi there! I'm here to answer your questions instantly. What would you like to know?"}
                              {activeCard.title === "Voice Agent" && "I understand voice commands! Feel free to speak naturally with me."}
                              {activeCard.title === "WhatsApp Agent" && "👋 Hi! I'll help you via WhatsApp. Need any assistance?"}
                              {activeCard.title === "Messenger Agent" && "Hello! I manage Facebook messages. How can I assist you?"}
                              {activeCard.title === "Instagram Agent" && "📸 Hey! I handle Instagram DMs and comments. What do you need?"}
                              {activeCard.title === "Shopify Agent" && "🛒 Welcome to the store! I can help you find products and track orders."}
                              {activeCard.title === "Gmail Agent" && "📧 I'll help manage your inbox. Need to sort or reply to emails?"}
                              {activeCard.title === "Presentation Agent" && "🎨 Ready to create amazing presentations! Share your topic and I'll design slides."}
                              {activeCard.title === "SMS Agent" && "📱 I handle SMS communication. Want to send reminders or alerts?"}
                              {!["Phone Agent", "Chatbot Agent", "Voice Agent", "WhatsApp Agent", "Messenger Agent", "Instagram Agent", "Shopify Agent", "Gmail Agent", "Presentation Agent", "SMS Agent"].includes(activeCard.title) &&
                                "I'm ready to assist you with intelligent automation!"}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 justify-end">
                          <div className="bg-gradient-to-r from-[#f7b518] to-[#fdd204] rounded-2xl rounded-tr-none p-3 max-w-[80%]">
                            <p className="text-sm text-gray-900 font-medium">
                              Try a demo message!
                            </p>
                          </div>
                          <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-xs font-bold">
                            U
                          </div>
                        </div>

                        <div className="mt-4 pt-3 border-t border-gray-200">
                          <div className="flex gap-2">
                            <input
                              type="text"
                              placeholder="Type a test message..."
                              className="flex-1 px-4 py-2 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#f7b518] focus:border-transparent"
                            />
                            <button className="bg-gradient-to-r from-[#f7b518] to-[#fdd204] text-gray-900 px-5 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all">
                              Send
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <button className="flex-1 bg-gradient-to-r from-[#f7b518] to-[#fdd204] text-gray-900 px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
                        Try {activeCard.title}
                      </button>
                      <button className="px-6 py-3 rounded-xl border-2 border-gray-300 text-gray-700 font-semibold hover:border-[#f7b518] hover:text-[#f7b518] transition-all">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 text-sm mb-4">
            All agents are powered by Hivyr's advanced AI engine
          </p>
          <div className="flex gap-3 justify-center">
            <span className="w-2 h-2 bg-[#f7b518] rounded-full"></span>
            <span className="w-2 h-2 bg-[#fdd204] rounded-full"></span>
            <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
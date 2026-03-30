

'use client';

import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { 
  FaPhone, 
  FaCommentDots, 
  FaMicrophone, 
  FaWhatsapp, 
  FaFacebookMessenger, 
  FaInstagram, 
  FaShopify, 
  FaEnvelope, 
  FaChartLine, 
  FaSms,
  FaRocket,
  FaStar,
  FaClock,
  FaCheckCircle,
  FaArrowRight,
  FaRobot
} from 'react-icons/fa';
import { MdOutlineChat, MdAutoAwesome, MdOutlineLiveHelp } from 'react-icons/md';
import { BiMessageDetail, BiBot } from 'react-icons/bi';
import { TbMessages } from 'react-icons/tb';
import { SiGmail, SiShopify } from 'react-icons/si';
import { AiOutlineThunderbolt } from 'react-icons/ai';

const Service = () => {
  const [activeTab, setActiveTab] = useState('Phone Agent');
  const [inputMessage, setInputMessage] = useState('');
  const [demoResponse, setDemoResponse] = useState('');

  const cards = [
    {
      id: 1,
      title: "Phone Agent",
      description: "A smart voice-based AI that handles calls, schedules appointments, and supports customers with natural, human-like conversation flow anytime.",
      image: "/images/meet-the-inteligent/phone-2.png",
      features: ["Call handling", "Appointment scheduling", "Natural conversation", "24/7 availability"]
    },
    {
      id: 2,
      title: "Chatbot Agent",
      description: "An intelligent chatbot that instantly answers queries, guides users, and improves engagement through seamless, context-aware conversations.",
      image: "/images/meet-the-inteligent/chatbot.jpg",
      features: ["Instant responses", "Context-aware", "Multi-language", "Seamless integration"]
    },
    {
      id: 3,
      title: "Voice Agent",
      description: "A lifelike virtual assistant that understands voice commands and responds naturally, creating smooth and interactive communication experiences.",
      image: "/images/meet-the-inteligent/voice-agent.jpg",
      features: ["Voice recognition", "Natural responses", "Command execution", "Multi-device"]
    },
    {
      id: 4,
      title: "WhatsApp Agent",
      description: "Automate WhatsApp chats, send updates, and assist customers 24/7 with personalized, AI-driven responses that enhance satisfaction and sales.",
      image: "/images/meet-the-inteligent/whatsapp.jpg",
      features: ["WhatsApp automation", "Personalized replies", "24/7 support", "Sales assistance"]
    },
    {
      id: 5,
      title: "Messenger Agent",
      description: "Engage your Facebook audience instantly using AI automation that answers FAQs, manages promotions, and boosts real-time interaction.",
      image: "/images/meet-the-inteligent/messenger.jpg",
      features: ["Facebook integration", "FAQ automation", "Promotion management", "Real-time engagement"]
    },
    {
      id: 6,
      title: "Instagram Agent",
      description: "Automate Instagram DMs, handle product queries, and respond to comments to increase engagement and convert followers into loyal customers.",
      image: "/images/meet-the-inteligent/instagram-2.png",
      features: ["DM automation", "Comment responses", "Product queries", "Engagement boost"]
    },
    {
      id: 7,
      title: "Shopify Agent",
      description: "An AI sales assistant that helps customers, tracks orders, and recommends products, streamlining eCommerce operations and boosting revenue.",
      image: "/images/meet-the-inteligent/shopify-2.jpg",
      features: ["Product recommendations", "Order tracking", "Sales assistance", "Revenue boost"]
    },
    {
      id: 8,
      title: "Gmail Agent",
      description: "A smart inbox assistant that reads, categorizes, and replies to emails automatically, helping you manage communication effortlessly.",
      image: "/images/meet-the-inteligent/gmail.jpg",
      features: ["Email categorization", "Auto-replies", "Inbox management", "Smart sorting"]
    },
    {
      id: 9,
      title: "Presentation Agent",
      description: "Create stunning presentations from text or ideas in seconds. The AI formats slides with design and content precision automatically.",
      image: "/images/meet-the-inteligent/presentation.jpg",
      features: ["Auto-design", "Content formatting", "Slide generation", "Visual enhancement"]
    },
    {
      id: 10,
      title: "SMS Agent",
      description: "Send automated reminders, alerts, and promotional texts instantly to maintain timely customer communication and increase engagement.",
      image: "/images/meet-the-inteligent/sms.jpg",
      features: ["Automated alerts", "Reminders", "Promotional texts", "Engagement tracking"]
    },
  ];

  const getIconForTitle = (title) => {
    const iconMap = {
      "Phone Agent": <FaPhone className="text-xl" />,
      "Chatbot Agent": <MdOutlineChat className="text-xl" />,
      "Voice Agent": <FaMicrophone className="text-xl" />,
      "WhatsApp Agent": <FaWhatsapp className="text-xl" />,
      "Messenger Agent": <FaFacebookMessenger className="text-xl" />,
      "Instagram Agent": <FaInstagram className="text-xl" />,
      "Shopify Agent": <FaShopify className="text-xl" />,
      "Gmail Agent": <SiGmail className="text-xl" />,
      "Presentation Agent": <FaChartLine className="text-xl" />,
      "SMS Agent": <FaSms className="text-xl" />
    };
    return iconMap[title] || <FaRobot className="text-xl" />;
  };

  const getLargeIcon = (title) => {
    const iconMap = {
      "Phone Agent": <FaPhone className="text-4xl md:text-5xl" />,
      "Chatbot Agent": <MdOutlineChat className="text-4xl md:text-5xl" />,
      "Voice Agent": <FaMicrophone className="text-4xl md:text-5xl" />,
      "WhatsApp Agent": <FaWhatsapp className="text-4xl md:text-5xl" />,
      "Messenger Agent": <FaFacebookMessenger className="text-4xl md:text-5xl" />,
      "Instagram Agent": <FaInstagram className="text-4xl md:text-5xl" />,
      "Shopify Agent": <FaShopify className="text-4xl md:text-5xl" />,
      "Gmail Agent": <SiGmail className="text-4xl md:text-5xl" />,
      "Presentation Agent": <FaChartLine className="text-4xl md:text-5xl" />,
      "SMS Agent": <FaSms className="text-4xl md:text-5xl" />
    };
    return iconMap[title] || <FaRobot className="text-4xl md:text-5xl" />;
  };

  const services = cards.map(card => ({
    name: card.title,
    icon: getIconForTitle(card.title)
  }));

  const activeCard = cards.find(card => card.title === activeTab);

  const handleDemoSend = () => {
    if (inputMessage.trim()) {
      setDemoResponse(`🤖 ${activeTab}: Thanks for your message! I'll help you with "${inputMessage}". Our AI is processing your request.`);
      setTimeout(() => setDemoResponse(''), 3000);
      setInputMessage('');
    }
  };

  useEffect(() => {
    gsap.fromTo(".content-panel",
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
    );
  }, [activeTab]);

  const getDemoMessage = () => {
    const messages = {
      "Phone Agent": "Hello! I can handle calls and schedule appointments for you. How can I help today?",
      "Chatbot Agent": "Hi there! I'm here to answer your questions instantly. What would you like to know?",
      "Voice Agent": "I understand voice commands! Feel free to speak naturally with me.",
      "WhatsApp Agent": "👋 Hi! I'll help you via WhatsApp. Need any assistance?",
      "Messenger Agent": "Hello! I manage Facebook messages. How can I assist you?",
      "Instagram Agent": "📸 Hey! I handle Instagram DMs and comments. What do you need?",
      "Shopify Agent": "🛒 Welcome to the store! I can help you find products and track orders.",
      "Gmail Agent": "📧 I'll help manage your inbox. Need to sort or reply to emails?",
      "Presentation Agent": "🎨 Ready to create amazing presentations! Share your topic and I'll design slides.",
      "SMS Agent": "📱 I handle SMS communication. Want to send reminders or alerts?"
    };
    return messages[activeTab] || "I'm ready to assist you with intelligent automation!";
  };

  return (
    <section id='services' className="bg-white text-gray-900 pt-12 sm:pt-16 md:pt-20 lg:pt-24 xl:pt-28 px-4 sm:px-6 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section - Already Responsive */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.2] sm:leading-[1.2] md:leading-[1.1] mb-4 sm:mb-6 px-2 max-w-3xl mx-auto">
            Meet the <span className="bg-gradient-to-r from-[#f7b518] to-[#fdd204] bg-clip-text text-transparent">Intelligent Agents</span> by Hivyr
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 max-w-2xl xl:max-w-3xl mx-auto px-2">
            Powerful AI agents that transform how you communicate, automate workflows, and engage customers across every channel.
          </p>
        </div>

        {/* Dashboard UI - Fully Responsive */}
        <div className="bg-gray-50 rounded-2xl sm:rounded-3xl border border-gray-200 overflow-hidden flex flex-col lg:flex-row min-h-[550px] sm:min-h-[600px] md:min-h-[650px] shadow-xl">
          
          {/* Sidebar - Responsive Scroll */}
          <div className="w-full lg:w-72 xl:w-80 bg-white border-b lg:border-b-0 lg:border-r border-gray-200 p-2 sm:p-4 max-h-[300px] sm:max-h-[400px] lg:max-h-none overflow-y-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-1 sm:gap-2">
              {services.map((service) => (
                <button
                  key={service.name}
                  onClick={() => setActiveTab(service.name)}
                  className={`flex items-center gap-2 sm:gap-3 px-2 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl transition-all duration-200 text-xs sm:text-sm font-medium w-full text-left ${
                    activeTab === service.name
                      ? 'bg-gradient-to-r from-[#f7b518]/10 to-[#fdd204]/10 text-gray-900 shadow-sm border-l-2 sm:border-l-[3px] border-[#f7b518]'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <span className="text-base sm:text-xl flex-shrink-0">{service.icon}</span>
                  <span className="font-medium truncate">{service.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Main Content Area - Fully Responsive */}
          <div className="flex-1 p-4 sm:p-6 md:p-8 bg-white relative overflow-hidden content-panel">
            {activeCard && (
              <div className="h-full flex flex-col">
                {/* Header with agent name and badge */}
                <div className="flex flex-wrap justify-between items-center gap-3 mb-4 sm:mb-6">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="text-2xl sm:text-3xl">{getLargeIcon(activeCard.title)}</span>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{activeCard.title}</h3>
                  </div>
                  <div className="flex items-center gap-2 bg-gradient-to-r from-[#f7b518]/20 to-[#fdd204]/20 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border border-[#f7b518]/30">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#f7b518] rounded-full animate-pulse"></div>
                    <span className="text-[10px] sm:text-xs font-medium text-gray-700">Active Agent</span>
                  </div>
                </div>

                {/* Agent Content - Responsive Grid */}
                <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 flex-1">
                  {/* Left Column: Image/Visual */}
                  <div className="w-full lg:w-2/5">
                    <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl sm:rounded-3xl flex items-center justify-center relative overflow-hidden border border-gray-200 shadow-lg">
                      {activeCard.image ? (
                        <img
                          src={activeCard.image}
                          alt={activeCard.title}
                          className="w-full h-full object-cover rounded-2xl sm:rounded-3xl"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Crect width="100" height="100" fill="%23f7b51820"/%3E%3Ctext x="50" y="50" text-anchor="middle" dy=".3em" fill="%23f7b518" font-size="40"%3E🤖%3C/text%3E%3C/svg%3E';
                          }}
                        />
                      ) : (
                        <div className="text-center">
                          <span className="text-4xl sm:text-6xl mb-2 block">{getLargeIcon(activeCard.title)}</span>
                          <p className="text-gray-400 text-xs sm:text-sm">Agent visualization</p>
                        </div>
                      )}
                      
                      {/* Animated overlay effect */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>

                      {/* Live indicator badge */}
                      <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 flex items-center gap-1 sm:gap-2 bg-white/90 backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg border border-gray-200 shadow-sm">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-[10px] sm:text-xs font-medium text-gray-700">AI Powered</span>
                      </div>
                    </div>

                    {/* Quick Stats - Responsive */}
                    <div className="mt-4 sm:mt-6 bg-gradient-to-r from-[#f7b518]/5 to-[#fdd204]/5 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-gray-200">
                      <div className="flex justify-between items-center gap-2 sm:gap-4">
                        <div className="text-center flex-1">
                          <FaClock className="text-[#f7b518] text-sm sm:text-base mx-auto mb-1" />
                          <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wide">Response Time</p>
                          <p className="text-sm sm:text-lg font-bold text-gray-900">&lt; 200ms</p>
                        </div>
                        <div className="text-center flex-1">
                          <FaStar className="text-[#f7b518] text-sm sm:text-base mx-auto mb-1" />
                          <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wide">Availability</p>
                          <p className="text-sm sm:text-lg font-bold text-gray-900">24/7</p>
                        </div>
                        <div className="text-center flex-1">
                          <FaCheckCircle className="text-[#f7b518] text-sm sm:text-base mx-auto mb-1" />
                          <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wide">Accuracy</p>
                          <p className="text-sm sm:text-lg font-bold text-gray-900">99.5%</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Agent Details & Demo */}
                  <div className="w-full lg:flex-1 flex flex-col gap-4 sm:gap-6">
                    {/* Description Card */}
                    <div className="bg-gradient-to-br from-gray-50 to-white p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-gray-200 shadow-sm">
                      <h4 className="font-bold text-base sm:text-lg mb-2 sm:mb-3 flex items-center gap-2">
                        <FaRocket className="text-[#f7b518] text-sm sm:text-base" /> 
                        <span>About this Agent</span>
                      </h4>
                      <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                        {activeCard.description}
                      </p>
                      
                      {/* Features List - Responsive */}
                      <div className="mt-4 grid grid-cols-2 gap-2">
                        {activeCard.features?.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-1 sm:gap-2">
                            <FaCheckCircle className="text-[#f7b518] text-[10px] sm:text-xs" />
                            <span className="text-[11px] sm:text-xs text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Interactive Demo Preview - Responsive */}
                    <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200">
                      <h4 className="font-bold text-xs sm:text-sm mb-3 sm:mb-4 text-gray-700 uppercase tracking-wide flex items-center gap-2">
                        <MdAutoAwesome className="text-[#f7b518]" />
                        <span>Live Preview</span>
                      </h4>

                      {/* Demo Chat Interface Mockup */}
                      <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-sm border border-gray-200">
                        <div className="flex items-start gap-2 sm:gap-3 mb-3 sm:mb-4">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-[#f7b518] to-[#fdd204] flex items-center justify-center text-white text-[10px] sm:text-xs font-bold flex-shrink-0">
                            AI
                          </div>
                          <div className="flex-1 bg-gray-100 rounded-xl sm:rounded-2xl rounded-tl-none p-2 sm:p-3 max-w-[85%] sm:max-w-[80%]">
                            <p className="text-xs sm:text-sm text-gray-800">
                              {getDemoMessage()}
                            </p>
                          </div>
                        </div>

                        {demoResponse && (
                          <div className="flex items-start gap-2 sm:gap-3 mb-3 sm:mb-4 justify-end">
                            <div className="bg-gradient-to-r from-[#f7b518] to-[#fdd204] rounded-xl sm:rounded-2xl rounded-tr-none p-2 sm:p-3 max-w-[85%] sm:max-w-[80%]">
                              <p className="text-xs sm:text-sm text-gray-900 font-medium">
                                {demoResponse}
                              </p>
                            </div>
                            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-300 flex items-center justify-center text-[10px] sm:text-xs font-bold flex-shrink-0">
                              U
                            </div>
                          </div>
                        )}

                        <div className="mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-gray-200">
                          <div className="flex flex-col xs:flex-row gap-2">
                            <input
                              type="text"
                              value={inputMessage}
                              onChange={(e) => setInputMessage(e.target.value)}
                              onKeyPress={(e) => e.key === 'Enter' && handleDemoSend()}
                              placeholder="Type a test message..."
                              className="flex-1 px-3 sm:px-4 py-2 text-xs sm:text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#f7b518] focus:border-transparent"
                            />
                            <button 
                              onClick={handleDemoSend}
                              className="bg-gradient-to-r from-[#f7b518] to-[#fdd204] text-gray-900 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium hover:shadow-lg transition-all whitespace-nowrap"
                            >
                              Send <FaArrowRight className="inline ml-1 text-xs" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons - Responsive */}
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                      <button className="bg-gradient-to-r from-[#f7b518] to-[#fdd204] text-gray-900 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold hover:shadow-lg transition-all text-sm sm:text-base">
                        Try {activeCard.title}
                      </button>
                      <button className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl border-2 border-gray-300 text-gray-700 font-semibold hover:border-[#f7b518] hover:text-[#f7b518] transition-all text-sm sm:text-base">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom CTA Section - Responsive */}
        <div className="mt-8 sm:mt-10 md:mt-12 text-center">
          <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">
            All agents are powered by Hivyr's advanced AI engine
          </p>
          <div className="flex gap-2 sm:gap-3 justify-center">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#f7b518] rounded-full"></span>
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#fdd204] rounded-full"></span>
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
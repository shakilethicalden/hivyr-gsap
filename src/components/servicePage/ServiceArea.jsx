"use client";
import React from "react";
import Image from "next/image";

const serviceCards = [
  { title: "Virtual Assistant", description: "Automate your daily tasks and manage schedules effortlessly with our intelligent virtual assistant.", image: "/images/service/virtual.jpg" },
  { title: "AI-Powered Analytics", description: "Gain insights from your data with smart analytics and actionable recommendations.", image: "/images/service/analytics.jpg" },
  { title: "Voice Recognition", description: "Seamlessly interact with devices using our cutting-edge voice recognition technology.", image: "/images/service/recognition.jpg" },
  { title: "Smart Chatbots", description: "Enhance customer engagement with AI chatbots that understand and respond naturally.", image: "/images/service/chatbot.jpg" },
  { title: "Automated Reports", description: "Generate detailed reports automatically to save time and reduce errors.", image: "/images/service/reports.jpg" },
  { title: "Predictive AI", description: "Leverage predictive models to make informed business decisions in real-time.", image: "/images/service/predictive.jpg" },
  { title: "AI Image Recognition", description: "Identify and classify images instantly with advanced AI vision tools.", image: "/images/service/image-recognition.jpg" },
  { title: "Intelligent Workflow", description: "Optimize your business processes using AI-driven workflow automation.", image: "/images/service/workflow.jpg" },
];

const ServiceArea = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="serv_common_title mb-16 lg:mb-20 max-w-xl text-black">
          Explore Our <span className="text-[#fdd204]">AI-Powered</span> Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8">

          <div className="hidden lg:flex flex-col gap-5 mt-12">
            <HoverCard {...serviceCards[0]} />
            <HoverCard {...serviceCards[3]} />
          </div>

          <div className="hidden lg:flex flex-col gap-5 -mt-12">
            <HoverCard {...serviceCards[1]} />
            <HoverCard {...serviceCards[4]} />
            <HoverCard {...serviceCards[6]} />
          </div>

          <div className="hidden lg:flex flex-col gap-5 -mt-40">
            <HoverCard {...serviceCards[2]} />
            <HoverCard {...serviceCards[5]} />
            <HoverCard {...serviceCards[7]} />
          </div>

          {/* Mobile / Tablet */}
          {serviceCards.map((card, index) => (
            <div key={index} className="sm:block lg:hidden">
              <HoverCard {...card} alwaysVisible />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// HoverCard Component
const HoverCard = ({ title, description, image, alwaysVisible }) => {
  return (
    <div className="group relative bg-gray-100 rounded-2xl shadow-md overflow-hidden h-[260px] sm:h-[280px] md:h-[220px] lg:h-[280px] transition-all duration-500 ease-in-out hover:shadow-xl">

      {/* IMAGE */}
      <div
        className={`absolute inset-0 transition-all duration-700 ease-in-out
          ${alwaysVisible ? "opacity-100 scale-100" : "lg:opacity-0 group-hover:opacity-100"}
        `}
      >
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      {/* DARK OVERLAY FOR READABILITY */}
      <div
        className={`absolute inset-0 bg-black/50 transition-opacity duration-700
          ${alwaysVisible ? "opacity-60" : "lg:opacity-0 group-hover:opacity-60"}
        `}
      ></div>

      {/* TEXT */}
      <div className="relative z-10 p-6 sm:p-8 flex flex-col justify-end h-full">
        <h3
          className={`text-lg sm:text-xl font-semibold transition-transform duration-700 ease-in-out
            ${alwaysVisible ? "text-white translate-y-0" : "text-black group-hover:text-white group-hover:translate-y-16"}
          `}
        >
          {title}
        </h3>

        <p
          className={`text-xs sm:text-sm mt-2 leading-relaxed
            ${alwaysVisible ? "text-white" : "text-[#6e655d] group-hover:opacity-0"}
          `}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceArea;

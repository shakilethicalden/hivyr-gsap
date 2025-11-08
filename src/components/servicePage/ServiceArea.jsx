"use client";
import React from "react";
import Image from "next/image";

const serviceCards = [
  { title: "Virtual Assistant", description: "Automate your daily tasks and manage schedules effortlessly with our intelligent virtual assistant.", image: "/images/service/service-4.jpg" },
  { title: "AI-Powered Analytics", description: "Gain insights from your data with smart analytics and actionable recommendations.", image: "/images/service/service-5.jpg" },
  { title: "Voice Recognition", description: "Seamlessly interact with devices using our cutting-edge voice recognition technology.", image: "/images/service/service-4.jpg" },
  { title: "Smart Chatbots", description: "Enhance customer engagement with AI chatbots that understand and respond naturally.", image: "/images/service/service-5.jpg" },
  { title: "Automated Reports", description: "Generate detailed reports automatically to save time and reduce errors.", image: "/images/service/service-4.jpg" },
  { title: "Predictive AI", description: "Leverage predictive models to make informed business decisions in real-time.", image: "/images/service/service-5.jpg" },
  { title: "AI Image Recognition", description: "Identify and classify images instantly with advanced AI vision tools.", image: "/images/service/service-4.jpg" },
  { title: "Intelligent Workflow", description: "Optimize your business processes using AI-driven workflow automation.", image: "/images/service/service-5.jpg" },
];

const ServiceArea = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-16 max-w-lg text-black">
          Explore Our AI-Powered Services
        </h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8">
          {/* Large screen staggered layout */}
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

          {/* Tablet/Mobile layout */}
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
      {/* Image */}
      <div
        className={`absolute inset-0 transition-all duration-700 ease-in-out
          ${alwaysVisible ? "opacity-100 scale-100" : "lg:opacity-0 group-hover:opacity-100 lg:group-hover:scale-100"}
        `}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent transition-opacity duration-500 ease-in-out
        ${alwaysVisible ? "opacity-100" : "lg:opacity-0 group-hover:opacity-100"}
      `}></div>

      {/* Text */}
      <div className="relative z-10 p-6 sm:p-8 flex flex-col justify-end h-full">
        <h3 className={`text-lg sm:text-xl font-semibold transition-transform duration-700 ease-in-out
          ${alwaysVisible ? "text-white translate-y-0" : "text-black lg:text-black group-hover:text-white group-hover:translate-y-16"}
        `}>
          {title}
        </h3>
        <p className={`text-xs sm:text-sm mt-2 leading-relaxed
          ${alwaysVisible ? "text-white" : "text-[#6e655d] lg:text-[#6e655d] group-hover:opacity-0"}
        `}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceArea;

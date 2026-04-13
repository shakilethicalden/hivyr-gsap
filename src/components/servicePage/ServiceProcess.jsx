"use client";
import React from "react";
import LogoSlider from "../slider/LogoSlider";

const processSteps = [
  {
    id: "01",
    title: "Discovery & Analysis",
    description: "We dive deep into your business landscape, analyzing workflows, identifying automation opportunities, and mapping out AI integration points. Our team conducts comprehensive assessments to understand your unique challenges and goals.",
    alignment: "self-start"
  },
  {
    id: "02",
    title: "AI Strategy Development",
    description: "Based on our discovery, we craft a tailored AI implementation strategy. We define clear objectives, select optimal AI models and tools, and create a roadmap that aligns with your business priorities and timeline.",
    alignment: "self-center"
  },
  {
    id: "03",
    title: "Agent Development & Training",
    description: "We build and train your AI agents using cutting-edge machine learning models. Our team customizes solutions for your specific use cases, ensuring seamless integration with your existing systems and workflows.",
    alignment: "self-start"
  },
  {
    id: "04",
    title: "Deployment & Optimization",
    description: "We deploy your AI agents into production environments with rigorous testing and quality assurance. Continuous monitoring, performance optimization, and iterative improvements ensure maximum ROI and efficiency gains.",
    alignment: "self-end"
  }
];

const ServiceProcess = () => {
  return (
    <section className="bg-[#fdd204]/10 text-black selection:bg-black selection:text-[#fdd204]">
      {/* Header Section */}
      <div className="pt-20 pb-32 px-4 sm:px-6 lg:px-12 xl:px-20 flex justify-between items-start gap-8">
        <h1 className="title_text max-w-4xl text-black">
          Our AI Agent <br /> Implementation Process
        </h1>

        {/* Paratext paragraph instead of logo */}
        <div className="hidden md:block max-w-sm ">
          <p className="paragraph_text">
            A strategic, four-phase methodology designed to seamlessly integrate
            intelligent AI agents into your business operations, ensuring measurable
            results and continuous optimization at every stage.
          </p>
        </div>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-black/20">
        {processSteps.map((step, index) => (
          <div
            key={index}
            className={`
        flex flex-col p-6 sm:p-8 xl:p-10
        h-full min-h-[500px] sm:min-h-[550px] lg:min-h-[600px]
        border-b border-black/20
        ${index < 2 ? 'sm:border-b sm:border-black/20' : ''}
        ${index === 0 ? 'border-r border-black/20' : ''}
        ${index === 1 ? 'border-r border-black/20' : ''}
        ${index === 2 ? 'border-r border-black/20' : ''}
        ${step.alignment}
        ${index % 2 === 0 ? "bg-white/5" : "bg-transparent"}
        transition-all duration-300
      `}
          >
            <div className="w-full max-w-xs mx-auto lg:mx-0 flex flex-col h-full">
              <div className="mb-6">
                <span className="text-xs sm:text-sm font-bold text-black/60 tracking-wider">STEP</span>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-black mt-1">
                  {step.id}
                </h2>
                <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-black mt-3">
                  {step.title}
                </h3>
              </div>
              <p className="paragraph_text text-gray-500 flex-grow">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <LogoSlider />
    </section>
  );
};

export default ServiceProcess;
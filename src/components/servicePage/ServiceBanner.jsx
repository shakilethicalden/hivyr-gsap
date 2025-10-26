"use client";
import Image from "next/image";

export default function ServiceBanner() {
  return (
    <div className="relative h-screen w-full overflow-hidden text-white flex items-center justify-center text-center">
      {/* Background Image */}
      <Image
        src="/images/service/service-banner.jpg"
        alt="AI Agent Service Banner"
        fill
        style={{ objectFit: "cover" }}
        quality={100}
        className="z-0"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {/* Centered Content */}
      <div className="relative z-20 max-w-3xl px-6">
        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Empower Your Business with AI Agents
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Automate tasks, analyze data, and make smarter decisions with our intelligent AI solutions designed for modern businesses.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-6 mb-8 flex-wrap">
          <button className="bg-white text-black px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition duration-300">
            Get Started
          </button>
          <button className="bg-transparent border border-white px-8 py-3 rounded-full text-white font-semibold hover:bg-white hover:text-black transition duration-300">
            Learn More
          </button>
        </div>

        {/* Bottom Description with Underline */}
        <p className="text-gray-300 text-sm md:text-base">
          Discover how our <span className="underline decoration-white decoration-2">AI Agent services</span> can revolutionize your workflow.
        </p>
      </div>
    </div>
  );
}

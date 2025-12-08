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
      <div className="relative z-20 max-w-5xl px-6 sm:px-8 md:px-12 lg:px-16">
        {/* Title */}
        <h1 className="common-title mb-4 sm:mb-6 md:mb-8">
          Empower Your Business with AI Agents
        </h1>

        {/* Description */}
        <p className="text-lg lg:text-xl text-gray-100 font-semibold mb-6 sm:mb-8 md:mb-10">
          Automate tasks, analyze data, and make smarter decisions with our intelligent AI solutions designed for modern businesses.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
          <button className="bg-white text-black px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition duration-300">
            Get Started
          </button>
          <button className="bg-transparent border border-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-white font-semibold hover:bg-white hover:text-black transition duration-300">
            Learn More
          </button>
        </div>

        {/* Bottom Description with Underline */}
        <p className="text-gray-300 text-base">
          Discover how our{" "}
          <span className="underline decoration-white ">
            AI Agent services
          </span>{" "}
          can revolutionize your workflow.
        </p>
      </div>
    </div>
  );
}

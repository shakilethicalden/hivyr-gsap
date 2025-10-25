"use client";
import Image from "next/image";
import { FaRobot, FaBolt, FaShieldAlt, FaNetworkWired } from "react-icons/fa";

export default function ProductBanner() {
  const features = [
    { text: "AI-powered automation for your business", icon: <FaRobot size={24} /> },
    { text: "Lightning-fast processing", icon: <FaBolt size={24} /> },
    { text: "Secure and reliable platform", icon: <FaShieldAlt size={24} /> },
    { text: "Seamless integration with tools", icon: <FaNetworkWired size={24} /> },
  ];

  return (
    <div className="relative h-screen w-full overflow-hidden text-white lg:-mt-26">
      {/* Background Image */}
      <Image
        src="/images/product/product-banner.jpg"
        alt="AI Agent Product"
        fill
        style={{ objectFit: "cover" }}
        quality={100}
        className="z-0"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

      {/* Main Content */}
      <div className="relative z-20 h-full flex flex-col max-w-7xl mx-auto">
        <div className="h-20 w-full"></div>

        {/* Top Content */}
        <div className="flex-grow flex flex-col justify-center items-start pb-20">
          <div className="px-8 md:px-0 w-full">
            <p className="text-base uppercase tracking-widest mb-3 text-gray-200">
              INNOVATE. AUTOMATE. SCALE.
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light leading-snug mb-10 max-w-5xl">
              The Ultimate AI Agent <br /> for Modern Businesses
            </h1>

            <div className="flex space-x-4">
              <button className="bg-transparent border border-white px-7 py-3 rounded-full text-white text-sm font-semibold hover:bg-white hover:text-black transition duration-300">
                Learn More
              </button>
              <button className="bg-white text-black px-8 py-3 rounded-full text-sm font-semibold shadow-lg hover:bg-gray-100 transition duration-300">
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Feature Bar */}
        <div className="flex justify-center py-8">
          <div className="w-full max-w-7xl border-t border-white border-opacity-20">
            <div className="flex flex-col lg:flex-row justify-between items-center py-6 px-8 md:px-0">
              
              <p className="text-sm text-left mb-4 lg:mb-0">
                Key Features of Our AI Agent
              </p>

              <div className="flex flex-col lg:flex-row justify-start space-y-4 lg:space-y-0 lg:space-x-6 w-full">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 lg:w-auto w-full justify-start">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <div className="text-black">{feature.icon}</div>
                    </div>
                    <p className="text-xs text-left leading-tight opacity-90">
                      {feature.text}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

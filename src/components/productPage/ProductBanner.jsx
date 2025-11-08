"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FaRobot, FaBolt, FaShieldAlt, FaNetworkWired } from "react-icons/fa";

export default function ProductBanner() {
  const headingRef = useRef(null);
  const subtextRef = useRef(null);
  const buttonRef = useRef(null);
  const iconRefs = useRef([]);

  const features = [
    { text: "AI-powered automation for your business", icon: <FaRobot size={24} /> },
    { text: "Lightning-fast processing", icon: <FaBolt size={24} /> },
    { text: "Secure and reliable platform", icon: <FaShieldAlt size={24} /> },
    { text: "Seamless integration with tools", icon: <FaNetworkWired size={24} /> },
  ];

  useEffect(() => {
    // --- TEXT ANIMATION ---
    const letters = headingRef.current.querySelectorAll(".letter");
    gsap.set(letters, { opacity: 0, y: 50 });
    gsap.to(letters, {
      opacity: 1,
      y: 0,
      stagger: 0.05,
      duration: 0.8,
      ease: "power3.out",
      delay: 0.5,
    });

    gsap.fromTo(
      subtextRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 1.5 }
    );

    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)", delay: 2 }
    );

    // --- ICON BACKGROUND COLOR ANIMATION ---
    iconRefs.current.forEach((icon, i) => {
      const colors = [
        "linear-gradient(135deg, #ffffff, #d6f8ff)",
        "linear-gradient(135deg, #ffecd2, #fcb69f)",
        "linear-gradient(135deg, #c2e9fb, #a1c4fd)",
        "linear-gradient(135deg, #f6d365, #fda085)",
      ];

      let colorIndex = 0;
      const animateColor = () => {
        gsap.to(icon, {
          background: colors[colorIndex],
          duration: 3,
          ease: "power1.inOut",
          onComplete: () => {
            colorIndex = (colorIndex + 1) % colors.length;
            animateColor();
          },
        });
      };
      animateColor();
    });
  }, []);

  const renderAnimatedText = (text) => {
    return text.split("").map((char, i) => (
      <span key={i} className="inline-block letter">
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white">
      {/* Background Image */}
      <Image
        src="/images/product/product-banner.jpg"
        alt="AI Agent Product"
        fill
        className="z-0 object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-between h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-28 xl:pt-40">
        {/* Header Text */}
        <div className="mt-auto mb-[10vh] sm:mb-[15vh] text-left">
          <p
            ref={subtextRef}
            className="text-xs sm:text-sm uppercase tracking-[0.2em] mb-4 text-gray-300"
          >
            INNOVATE. AUTOMATE. SCALE.
          </p>

          <h1
            ref={headingRef}
            className="font-serif font-light leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl"
          >
            {renderAnimatedText("The Ultimate AI Agent for Modern Businesses")}
          </h1>

          <div
            ref={buttonRef}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-8"
          >
            <button className="bg-transparent border border-white px-7 py-3 rounded-full text-white text-sm font-semibold hover:bg-white hover:text-black transition duration-300 w-full sm:w-auto">
              Learn More
            </button>
            <button className="bg-white text-black px-8 py-3 rounded-full text-sm font-semibold shadow-lg hover:bg-gray-100 transition duration-300 w-full sm:w-auto">
              Get Started
            </button>
          </div>
        </div>

        {/* Feature Bar */}
        <div className="w-full border-t border-white/20 pt-6 sm:pt-8">
          <p className="text-sm sm:text-base mb-6 text-gray-200">
            Key Features of Our AI Agent
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 sm:w-auto w-full"
              >
                <div
                  ref={(el) => (iconRefs.current[index] = el)}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-1000 shadow-lg"
                  style={{
                    background:
                      "linear-gradient(135deg, #ffffff, #d6f8ff)",
                  }}
                >
                  <div className="text-black">{feature.icon}</div>
                </div>
                <p className="text-xs sm:text-sm leading-snug opacity-90 max-w-[200px]">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

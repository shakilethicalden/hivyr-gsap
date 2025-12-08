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
    // --- TEXT ANIMATION (letters inside words) ---
    if (headingRef.current) {
      const letters = headingRef.current.querySelectorAll(".letter");
      gsap.set(letters, { opacity: 0, y: 50 });
      gsap.to(letters, {
        opacity: 1,
        y: 0,
        stagger: 0.03,
        duration: 0.7,
        ease: "power3.out",
        delay: 0.5,
      });
    }

    gsap.fromTo(
      subtextRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 1.2 }
    );

    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 0.9, ease: "back.out(1.5)", delay: 1.8 }
    );

    // --- ICON BACKGROUND COLOR ANIMATION ---
    iconRefs.current.forEach((icon, i) => {
      if (!icon) return;
      const colors = ["#ffffff", "#f7b518", "#fdd204"];

      let colorIndex = 0;
      const animateColor = () => {
        gsap.to(icon, {
          backgroundColor: colors[colorIndex],
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

  // Split by words; wrap each word in a no-wrap span, animate letters inside
  const renderAnimatedText = (text) => {
    const words = text.split(" ");
    return words.map((word, wi) => (
      <span
        key={`w-${wi}`}
        className="inline-block whitespace-nowrap mr-2 word"
        aria-hidden="true"
      // small right margin so words separate nicely; accessible text below
      >
        {word.split("").map((char, i) => (
          <span key={`${wi}-${i}`} className="inline-block letter">
            {char}
          </span>
        ))}
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
            className="text-lg uppercase  mb-4 text-gray-100"
          >
            INNOVATE. AUTOMATE. SCALE.
          </p>

          {/* Visible heading for animations (note: keep an accessible text duplicate for screen readers) */}
          <h1
            ref={headingRef}
            className="common-title max-w-5xl  leading-tight "
            role="presentation"
          >
            {renderAnimatedText("The Ultimate AI Agent for Modern Businesses")}
          </h1>

          {/* Accessible, plain text fallback (screen readers) */}
          <span className="sr-only">
            The Ultimate AI Agent for Modern Businesses
          </span>

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
        <div className="w-full border-t border-white/20 pt-6 sm:pt-8 pb-5">
          <p className="text-lg lg:text-xl mb-6 text-gray-100">
            Key Features of Our AI Agent
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 w-full">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 w-full"
              >
                <div
                  ref={(el) => (iconRefs.current[index] = el)}
                  className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-1000 shadow-lg"
                  style={{
                    background: "linear-gradient(135deg, #ffffff, #d6f8ff)",
                  }}
                >
                  <div className="text-black">{feature.icon}</div>
                </div>
                <p className="text-lg leading-snug opacity-90">
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

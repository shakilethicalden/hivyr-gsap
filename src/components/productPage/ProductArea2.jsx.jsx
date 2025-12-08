"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

const topLeftCard = {
  title: "Voice AI Agent",
  distance: "Real-time",
  subtitle: "AI-powered voice assistant",
  image: "/images/product/product.jpg",
  height: "h-[320px]",
};

const topRightCard = {
  title: "Chat AI Assistant",
  distance: "24/7 Support",
  subtitle: "Conversational AI platform",
  image: "/images/product/product-2.jpg",
  height: "h-[320px]",
};

const bottomCards = [
  {
    title: "Image Recognition",
    distance: "Instant Analysis",
    subtitle: "AI detects and labels images",
    image: "/images/product/product.jpg",
    height: "h-64",
  },
  {
    title: "Sentiment Analysis",
    distance: "Real-time",
    subtitle: "Analyze text emotion",
    image: "/images/product/product-2.jpg",
    height: "h-[320px]",
  },
  {
    title: "Data Prediction",
    distance: "Fast Forecast",
    subtitle: "AI predicts trends",
    image: "/images/product/product.jpg",
    height: "h-[280px]",
  },
  {
    title: "Smart Automation",
    distance: "Workflow AI",
    subtitle: "Automate repetitive tasks",
    image: "/images/product/product-2.jpg",
    height: "h-[320px]",
  },
  {
    title: "Voice-to-Text",
    distance: "Accurate Transcription",
    subtitle: "Convert speech to text",
    image: "/images/product/product.jpg",
    height: "h-64",
  },
];

const HoverCard = ({ image, title, distance, subtitle, height, isMobile }) => {
  const cardRef = useRef(null);
  const overlayRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const overlay = overlayRef.current;
    const img = imageRef.current;

    const handleEnter = () => {
      gsap.to(img, { scale: 1.15, duration: 1.2, ease: "power3.out" });
      gsap.fromTo(
        overlay,
        { scale: 0, opacity: 0 },
        { scale: 3.8, opacity: 0.65, duration: 1.1, ease: "power4.out" }
      );
    };

    const handleLeave = () => {
      gsap.to(img, { scale: 1, duration: 1.2, ease: "power3.inOut" });
      gsap.to(overlay, { scale: 0, opacity: 0, duration: 1, ease: "expo.inOut" });
    };

    card.addEventListener("mouseenter", handleEnter);
    card.addEventListener("mouseleave", handleLeave);

    return () => {
      card.removeEventListener("mouseenter", handleEnter);
      card.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`relative rounded-2xl overflow-hidden shadow-lg ${
        isMobile ? "h-[300px]" : height
      }`}
    >
      <Image
        ref={imageRef}
        src={image}
        alt={title}
        width={400}
        height={300}
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black scale-0 opacity-0"
        style={{
          borderRadius: "50%",
          width: "200%",
          height: "200%",
          top: "50%",
          left: "50%",
          translate: "-50% -50%",
        }}
      ></div>

      {/* Title */}
      <div
        className={`absolute top-4 lg:top-2 xl:top-4 lg:left-2 xl:left-4 left-4 text-white text-sm font-medium flex items-center gap-2 z-10 ${
          isMobile ? "text-left" : ""
        }`}
      >
        <span className="w-2 h-2 bg-white rounded-full"></span>
        {title}
      </div>

      {/* Description */}
      <div
        className={`absolute bottom-5 lg:bottom-2 xl:bottom-5 lg:left-2 xl:left-5 left-5 text-white z-10 ${
          isMobile ? "text-left" : ""
        }`}
      >
        <p className="text-3xl lg:text-2xl xl:text-3xl font-semibold">{distance}</p>
        <p className="text-sm">{subtitle}</p>
      </div>
    </div>
  );
};

const ProductArea2 = () => {
  return (
    <section className="py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <h2 className="common-title text-center">
          Explore Our AI Agent Products
        </h2>

        {/* --- Large Device Layout --- */}
        <div className="hidden lg:grid grid-cols-5 gap-6 items-end mt-10">
          <HoverCard {...topLeftCard} />
          <div className="col-span-3 text-center self-start mt-6">
            <p className="text-gray-600 text-lg lg:text-xl mb-8 leading-relaxed max-w-md mx-auto">
              Discover our suite of AI-powered solutions designed to enhance
              productivity, streamline workflows, and provide intelligent
              insights in real time.
            </p>
            <button className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-[#fdd204] hover:text-black transition">
              Explore Products
            </button>
          </div>
          <HoverCard {...topRightCard} />
        </div>

        {/* Bottom Section (Large only) */}
        <div className="hidden lg:grid grid-cols-5 gap-6 -mt-10 items-end">
          {bottomCards.map((item, idx) => (
            <HoverCard key={idx} {...item} />
          ))}
        </div>

        {/* --- Mobile & Tablet Layout --- */}
        <div className="lg:hidden mt-10 flex flex-col items-center">
          <p className="text-gray-600 text-lg lg:text-xl mb-8 leading-relaxed max-w-md mx-auto text-center">
            Discover our suite of AI-powered solutions designed to enhance
            productivity, streamline workflows, and provide intelligent insights
            in real time.
          </p>
          <button className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-[#fdd204] hover:text-black transition mb-10">
            Explore Products
          </button>

          {/* 2 cards per row on tablet, 1 per row on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {[topLeftCard, topRightCard, ...bottomCards].map((item, idx) => (
              <HoverCard key={idx} {...item} isMobile />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductArea2;

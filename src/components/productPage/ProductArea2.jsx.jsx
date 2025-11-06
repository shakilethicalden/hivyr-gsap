"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

const topLeftCard = {
  title: "Voice AI Agent",
  distance: "Real-time",
  subtitle: "AI-powered voice assistant",
  image: "/images/product/product.jpg",
};

const topRightCard = {
  title: "Chat AI Assistant",
  distance: "24/7 Support",
  subtitle: "Conversational AI platform",
  image: "/images/product/product-2.jpg",
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

const HoverCard = ({ image, title, distance, subtitle, height }) => {
  const cardRef = useRef(null);
  const overlayRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const overlay = overlayRef.current;
    const img = imageRef.current;

    const handleEnter = () => {
      gsap.to(img, {
        scale: 1.15,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.fromTo(
        overlay,
        { scale: 0, opacity: 0 },
        {
          scale: 3.8,
          opacity: 0.65,
          duration: 1.1,
          ease: "power4.out",
          transformOrigin: "center center",
        }
      );
    };

    const handleLeave = () => {
      gsap.to(img, {
        scale: 1,
        duration: 1.2,
        ease: "power3.inOut",
      });

      gsap.to(overlay, {
        scale: 0,
        opacity: 0,
        duration: 1,
        ease: "expo.inOut",
      });
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
      className={`relative rounded-2xl overflow-hidden shadow-lg ${height}`}
    >
      <Image
        ref={imageRef}
        src={image}
        alt={title}
        width={400}
        height={300}
        className="w-full h-full object-cover"
      />

      {/* Smooth circular expanding overlay */}
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
          transformOrigin: "center center",
        }}
      ></div>

      {/* Text Content */}
      <div className="absolute top-4 left-4 text-white text-sm font-medium flex items-center gap-2 z-10">
        <span className="w-2 h-2 bg-white rounded-full"></span>
        {title}
      </div>
      <div className="absolute bottom-5 left-5 text-white z-10">
        <p className="text-3xl font-semibold">{distance}</p>
        <p className="text-sm">{subtitle}</p>
      </div>
    </div>
  );
};

const ProductArea2 = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-semibold text-center text-[#2e2a27] leading-tight ">
          Explore Our AI Agent Products
        </h2>

        {/* Top Section */}
        <div className="grid grid-cols-5 gap-6 items-end mt-10">
          <HoverCard {...topLeftCard} height="h-[320px]" />

          {/* Center Text */}
          <div className="col-span-3 text-center self-start mt-12">
            <p className="text-[#6e655d] mb-8 leading-relaxed max-w-md mx-auto">
              Discover our suite of AI-powered solutions designed to enhance productivity,
              streamline workflows, and provide intelligent insights in real time.
            </p>
            <button className="bg-[#2e2a27] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#403a35] transition">
              Explore Products
            </button>
          </div>

          <HoverCard {...topRightCard} height="h-[320px]" />
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-5 gap-6 -mt-10 items-end">
          {bottomCards.map((item, idx) => (
            <HoverCard key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductArea2;

"use client";
import React from "react";
import Image from "next/image";

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

const ProductArea2 = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-semibold text-center text-[#2e2a27] leading-tight ">
          Explore Our AI Agent Products
        </h2>

        {/* Top Section */}
        <div className="grid grid-cols-5 gap-6 items-end">
          {/* Top Left */}
          <div className="relative col-span-1 h-[320px] rounded-2xl overflow-hidden shadow-lg">
            <Image src={topLeftCard.image} alt={topLeftCard.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute top-4 left-4 text-white text-sm font-medium flex items-center gap-2">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              {topLeftCard.title}
            </div>
            <div className="absolute bottom-5 left-5 text-white">
              <p className="text-3xl font-semibold">{topLeftCard.distance}</p>
              <p className="text-sm">{topLeftCard.subtitle}</p>
            </div>
          </div>

          {/* Center Text */}
          <div className="col-span-3 text-center self-start mt-12">
            <p className="text-[#6e655d] mb-8 leading-relaxed max-w-md mx-auto">
              Discover our suite of AI-powered solutions designed to enhance productivity, streamline workflows, and provide intelligent insights in real time.
            </p>
            <button className="bg-[#2e2a27] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#403a35] transition">
              Explore Products
            </button>
          </div>

          {/* Top Right */}
          <div className="relative col-span-1 h-[320px] rounded-2xl overflow-hidden shadow-lg">
            <Image src={topRightCard.image} alt={topRightCard.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute top-4 left-4 text-white text-sm font-medium flex items-center gap-2">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              {topRightCard.title}
            </div>
            <div className="absolute bottom-5 left-5 text-white">
              <p className="text-3xl font-semibold">{topRightCard.distance}</p>
              <p className="text-sm">{topRightCard.subtitle}</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-5 gap-6 -mt-10 items-end">
          {bottomCards.map((item, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl overflow-hidden shadow-lg ${item.height}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute top-4 left-4 text-white text-sm font-medium flex items-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                {item.title}
              </div>
              <div className="absolute bottom-5 left-5 text-white">
                <p className="text-3xl font-semibold">{item.distance}</p>
                <p className="text-sm">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductArea2;

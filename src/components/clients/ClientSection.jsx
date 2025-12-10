"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { MessageCircle, Workflow, TrendingUp } from "lucide-react";
import { gsap } from "gsap";

const clientLogos = [
  "/images/clients/gmail.png",
  "/images/clients/google.png",
  "/images/clients/playstore.jpg",
  "/images/clients/slack.png",
  "/images/clients/google.png",
  "/images/clients/slack.png",
  "/images/clients/playstore.jpg",
];

export default function ClientSection() {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const container = marqueeRef.current;
    if (!container) return;

    const content = container.innerHTML;
    container.innerHTML += content;

    gsap.to(container, {
      x: "-50%",
      duration: 30,
      ease: "linear",
      repeat: -1,
    });
  }, []);

  return (
    <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

      {/* Title + Description Side By Side */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-8 md:gap-10 xl:gap-20 mb-8 lg:mb-16">

        {/* Title Left */}
        <div>
          <h1 className="common-title text-center md:text-left">
            Your AI Partner
          </h1>
        </div>

        {/* Description Right */}
        <div>
          <p className="text-gray-600 text-lg lg:text-xl leading-relaxed text-center md:text-left">
            Leverage cutting-edge artificial intelligence to revolutionize your business processes.
            From intelligent chatbots to predictive analytics, we build AI agents that work tirelessly
            to elevate your customer experience and operational efficiency.
          </p>
        </div>
      </div>

      {/* Features Row - Card Design */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">

        {/* Card 1 */}
        <div className="bg-gray-100 p-8 rounded-2xl hover:bg-[#fdd204]">
          <div className="flex flex-col items-center text-center">
            <MessageCircle className="mb-4 w-10 h-10 text-gray-700" />
            <h3 className="text-lg font-semibold text-gray-800">Smart Conversational AI</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Deliver human-like chatbot experiences powered by AI.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-100 p-8 rounded-2xl hover:bg-[#fdd204]">
          <div className="flex flex-col items-center text-center">
            <Workflow className="mb-4 w-10 h-10 text-gray-700" />
            <h3 className="text-lg font-semibold text-gray-800">Process Automation</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Automate repetitive workflows and improve efficiency.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-100 p-8 rounded-2xl hover:bg-[#fdd204]">
          <div className="flex flex-col items-center text-center">
            <TrendingUp className="mb-4 w-10 h-10 text-gray-700" />
            <h3 className="text-lg font-semibold text-gray-800">Data-Driven Decisions</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Use predictive analytics to make smarter business decisions.
            </p>
          </div>
        </div>

      </div>


      {/* Infinite Logo Marquee */}
      <div className="overflow-hidden relative h-24">
        <div
          ref={marqueeRef}
          className="flex gap-5 lg:gap-10 whitespace-nowrap absolute top-0 left-0"
        >
          {clientLogos.map((src, i) => (
            <div key={i} className="w-20 h-20 lg:w-32 lg:h-24 relative flex-shrink-0">
              <Image
                src={src}
                alt={`Client ${i}`}
                fill
                className="object-contain grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition"
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

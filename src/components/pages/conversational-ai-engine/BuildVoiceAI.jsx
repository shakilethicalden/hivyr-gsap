"use client";

import Image from "next/image";
import { Volume2, Wifi, Rocket } from "lucide-react";

export default function BuildVoiceAI() {
  const items = [
    {
      icon: <Volume2 className="w-8 h-8 text-white" />,
      title: "Make AI voice conversations more natural",
      desc: "Give any AI model the ability to clearly understand and respond to human speech with ultra-low latency for lifelike conversations. Agora’s conversational AI platform features built-in interruption handling, AI echo cancellation and background noise suppression to ensure accurate voice processing in any environment.",
      color: "bg-[#fdd204]/20",
    },
    {
      icon: <Wifi className="w-8 h-8 text-white" />,
      title: "Eliminate latency and scalability challenges",
      desc: "Prevent common issues with latency and packet loss by using Agora’s global network with intelligent routing and advanced optimizations to ensure optimal real-time performance, anywhere on any device—even under poor network conditions.",
      color: "bg-[#fdd204]/20",
    },
    {
      icon: <Rocket className="w-8 h-8 text-white" />,
      title: "Get to market faster",
      desc: "Integrate voice AI agents into your application in minutes, with support for all device types and major development platforms. Leverage Agora’s existing real-time infrastructure to quickly deploy reliable and responsive voice AI experiences.",
      color: "bg-[#fdd204]/20",
    },
  ];

  return (
    <section className="bg-black text-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold lg:font-bold text-center mb-4">
          Build natural and scalable voice AI—fast
        </h2>
        <p className="text-gray-400 text-center mb-12">
          Enable natural conversation with AI agents
        </p>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Left Image */}
          <div className="flex justify-center items-stretch">
            <Image
              src="/images/ai-agents/buildvoice.png"
              alt="Voice AI"
              width={520}
              height={420}
              className="rounded-2xl w-full h-full object-cover"
            />
          </div>

          {/* Right Cards */}
          <div className="flex flex-col gap-8 h-full">
            {items.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-6 bg-neutral-900 border border-neutral-800 hover:border-neutral-700 p-6 rounded-2xl transition-all duration-300 flex-1"
              >
                {/* Icon (bigger and center aligned) */}
                <div
                  className={`flex items-center justify-center rounded-full ${item.color}`}
                  style={{ width: "64px", height: "64px", minWidth: "64px", minHeight: "64px" }}
                >
                  {item.icon}
                </div>

                {/* Text */}
                <div>
                  <h3 className="font-medium text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

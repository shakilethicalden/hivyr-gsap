"use client";

import Image from "next/image";
import { Volume2, Wifi, Rocket } from "lucide-react";

export default function BuildVoiceAI() {
  const items = [
    {
      icon: <Volume2 className="w-5 h-5 text-white" />,
      title: "Make AI voice conversations more natural",
      desc: "Enable more fluid, human-like voice conversations powered by real-time neural rendering and context-aware responses.",
      color: "bg-[#f7b518]/20",
    },
    {
      icon: <Wifi className="w-5 h-5 text-white" />,
      title: "Eliminate latency and network challenges",
      desc: "Robust streaming architecture ensures low-latency communication and stable performance globally.",
      color: "bg-[#f7b518]/20",
    },
    {
      icon: <Rocket className="w-5 h-5 text-white" />,
      title: "Go to market faster",
      desc: "Deploy production-ready voice AI agents rapidly without needing deep technical expertise.",
      color: "bg-[#f7b518]/20",
    },
  ];

  return (
    <section className="bg-black text-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 items-center gap-12">
        {/* Left Image */}
        <div className="flex justify-center">
          <Image
            src="/images/ai-agents/buildvoice.png"
            alt="Voice AI"
            width={520}
            height={420}
            className="rounded-2xl w-full h-auto max-w-md lg:max-w-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-10">
            Build natural and scalable voice AI—fast
          </h2>

          <div className="space-y-8">
            {items.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-5 bg-neutral-900 border border-neutral-800 hover:border-neutral-700 p-5 rounded-2xl transition-all duration-300"
              >
                {/* Left Icon (Perfect Circle) */}
                <div
                  className={`flex items-center justify-center rounded-full ${item.color}`}
                  style={{ width: "48px", height: "48px", minWidth: "48px", minHeight: "48px" }}
                >
                  {item.icon}
                </div>

                {/* Right Text */}
                <div>
                  <h3 className="font-medium text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

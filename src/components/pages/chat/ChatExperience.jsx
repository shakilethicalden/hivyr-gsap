"use client";

import Image from "next/image";
import { MessageCircle, ShieldCheck, Lock } from "lucide-react";

export default function ChatExperience() {
  const items = [
    {
      icon: <MessageCircle className="w-8 h-8 text-white" />,
      title: "Integrate messaging effortlessly",
      desc: "Build a truly immersive and engaging user experience with our web and mobile chat SDKs that work seamlessly with our video, voice, and streaming products.",
      color: "bg-[#f7b518]/20",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-white" />,
      title: "Safeguard your community",
      desc: "Protect users from unwanted profanity, offense, and inappropriate images or text with robust content moderation built into the chat platform.",
      color: "bg-[#f7b518]/20",
    },
    {
      icon: <Lock className="w-8 h-8 text-white" />,
      title: "Ensure the highest level of security",
      desc: "Agora’s Chat APIs provide the flexibility to integrate powerful and interactive 3rd party solutions so you can fully customize the chat experience for your users.",
      color: "bg-[#f7b518]/20",
    },
  ];

  return (
    <section className="bg-black text-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold md:font-bold text-center mb-4">
          Boost user engagement by adding chat to your RTC experience
        </h2>
        <p className="text-gray-400 text-center mb-12">
          Adding messaging to your app keeps your online users connected, informed, and engaged, improving overall in-app conversion and retention.
        </p>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Left Image */}
          <div className="flex justify-center items-stretch">
            <Image
              src="/images/ai-agents/ChatSDK.webp"
              alt="Real-time Chat"
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
                {/* Icon */}
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

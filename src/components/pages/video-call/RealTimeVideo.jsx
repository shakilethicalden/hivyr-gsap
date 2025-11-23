"use client";

import Image from "next/image";
import { Rocket, Settings, ShieldCheck } from "lucide-react";

export default function RealTimeVideo() {
  const items = [
    {
      icon: <Rocket className="w-8 h-8 text-white" />,
      title: "Get to market faster",
      desc: "Increase development speed and get your video chat experience to market faster with tools like our no-code App Builder and library of extensions like recording, noise suppression, and more.",
      color: "bg-[#fdd204]/20",
    },
    {
      icon: <Settings className="w-8 h-8 text-white" />,
      title: "Customize for your use case",
      desc: "Agora’s flexible, cross-platform live video SDK gives you full control over the user experience so you can build video calling for any use case from telehealth to live shopping.",
      color: "bg-[#fdd204]/20",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-white" />,
      title: "Ensure reliability and quality",
      desc: "Deliver a seamless and uninterrupted video call experience for your users on the world’s only network built to power real-time video with ultra-low latency and intelligent routing.",
      color: "bg-[#fdd204]/20",
    },
  ];

  return (
    <section className="bg-black text-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold lg:font-bold text-center mb-12">
          Boost in-app engagement with real-time video
        </h2>
        <p className="text-gray-400 text-center mb-12">
          Adding real-time video to your app keeps users engaged longer—on any platform or device.
        </p>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Left Image */}
          <div className="flex justify-center items-stretch">
            <Image
              src="/images/ai-agents/Videochat.webp"
              alt="Real-time Video"
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

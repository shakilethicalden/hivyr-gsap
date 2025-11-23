"use client";
import React, { useState, useEffect } from "react";
import { X, ArrowLeft, ArrowRight, Video, Mic } from "lucide-react";

export default function AgentDemoModal({ isOpen, onClose, agents, initialIndex = 0 }) {
  const [current, setCurrent] = useState(initialIndex);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    if (isOpen) setCurrent(initialIndex);
  }, [isOpen, initialIndex]);

  if (!isOpen || !agents || agents.length === 0) return null;

  const nextAgent = () => {
    setFade(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % agents.length);
      setFade(false);
    }, 250);
  };

  const prevAgent = () => {
    setFade(true);
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + agents.length) % agents.length);
      setFade(false);
    }, 250);
  };

  const currentAgent = agents[current];

  const isChatAgent = !["Video Calling", "Voice Calling"].includes(currentAgent.text);

  return (
    <div className="fixed inset-0 z-99 flex items-center justify-center bg-black/90 backdrop-blur-sm">
      <div className="relative w-full max-w-7xl bg-[#0a0a0a] text-white rounded-3xl shadow-2xl p-6 sm:p-10 transition-all duration-300 ease-in-out">

        {/* Close */}
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-300 hover:text-white">
          <X size={28} />
        </button>

        {/* Arrows */}
        <button
          onClick={prevAgent}
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-3 transition"
        >
          <ArrowLeft size={22} />
        </button>
        <button
          onClick={nextAgent}
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-3 transition"
        >
          <ArrowRight size={22} />
        </button>

        {/* Title */}
        <div className="text-center mb-6 transition-all duration-300">
          <h2 className="text-3xl font-semibold text-[#fdd204]">{currentAgent.text}</h2>
          <p className="text-gray-400 mt-2">
            A demonstration of <span>{currentAgent.text}</span> capabilities.
          </p>
        </div>

        {/* Demo Panel */}
        <div
          className={`flex flex-col justify-between items-center w-full h-[400px] sm:h-[500px] bg-[#0f0f0f] rounded-2xl overflow-hidden border border-white/10 shadow-inner transition-opacity duration-300 ${
            fade ? "opacity-0" : "opacity-100"
          }`}
        >
          {/* Agent Header */}
          <div className="flex items-center gap-4 p-6 w-full border-b border-white/10 bg-[#151515]">
            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-[#fdd204] text-xl font-bold">
              {currentAgent.text[0]}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">{currentAgent.text}</h3>
              <p className="text-gray-400 text-sm">Demo Preview</p>
            </div>
          </div>

          {/* Chat / Call Demo */}
          {isChatAgent ? (
            <div className="flex-1 w-full px-6 py-4 overflow-y-auto space-y-4">
              <div className="flex justify-end">
                <div className="bg-[#fdd204] text-black px-5 py-3 rounded-2xl max-w-[75%] text-sm shadow-lg">
                  {currentAgent.demo?.user || "Hi! Show me what you can do."}
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-white/10 text-gray-200 px-5 py-3 rounded-2xl max-w-[75%] text-sm shadow-lg border border-white/5">
                  {currentAgent.demo?.ai || "Sure! Here is an example of how this agent works…"}
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-400 pl-1">
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-150"></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-300"></div>
              </div>
            </div>
          ) : currentAgent.text === "Video Calling" ? (
            <div className="flex-1 w-full flex flex-col items-center justify-center gap-4 relative">
              <Video size={48} className="text-[#fdd204]" />
              <div className="w-3/4 h-60 bg-gray-800 rounded-lg relative overflow-hidden border border-white/20">
                {/* Simulated participant rectangles */}
                <div className="absolute top-4 left-4 w-16 h-16 bg-[#fdd204]/50 rounded-md animate-pulse"></div>
                <div className="absolute bottom-4 right-4 w-16 h-16 bg-[#fdd204]/50 rounded-md animate-pulse delay-200"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-400 text-sm">
                  Live video feed simulation
                </div>
                {/* Recording dot */}
                <div className="absolute top-2 right-2 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
              </div>
            </div>
          ) : (
            <div className="flex-1 w-full flex flex-col items-center justify-center gap-4">
              <Mic size={48} className="text-[#fdd204]" />
              <div className="w-3/4 h-20 bg-gray-800 rounded-lg flex items-center justify-center overflow-hidden border border-white/20">
                {/* Animated waveform bars */}
                {Array.from({ length: 10 }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 mx-1 bg-[#fdd204] rounded animate-pulse`}
                    style={{ animationDelay: `${i * 100}ms`, height: `${Math.random() * 40 + 10}px` }}
                  ></div>
                ))}
              </div>
              <p className="text-gray-400 text-lg">Voice call in progress...</p>
            </div>
          )}

          {/* Footer */}
          <div className="p-4 w-full border-t border-white/10 bg-[#151515] text-center text-gray-400 text-sm">
            Live demonstration panel
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <button className="bg-[#fdd204] hover:bg-white text-black font-semibold px-6 py-2 rounded-lg">
            Use Agent
          </button>
          <button onClick={onClose} className="bg-white hover:bg-black hover:text-white text-black px-6 py-2 rounded-lg">
            Close
          </button>
        </div>

      </div>
    </div>
  );
}

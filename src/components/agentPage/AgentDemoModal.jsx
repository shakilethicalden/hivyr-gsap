"use client";
import React, { useState, useEffect } from "react";
import { X, ArrowLeft, ArrowRight } from "lucide-react";

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

  return (
    <div className="fixed inset-0 z-99 flex items-center justify-center bg-black/90 backdrop-blur-sm">
      <div className="relative w-full max-w-7xl bg-[#0a0a0a] text-white rounded-3xl shadow-2xl p-6 sm:p-10 transition-all duration-300 ease-in-out">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-300 hover:text-white"
        >
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

        {/* Title and Description */}
        <div className="text-center mb-6 transition-all duration-300">
          <h2 className="text-3xl font-semibold">{currentAgent.text}</h2>
          <p className="text-gray-400 mt-2">
            A demonstration of <span className="text-[#f7b518]">{currentAgent.text}</span> capabilities.
          </p>
        </div>

        {/* Demo Preview */}
        <div
          className={`flex justify-center items-center w-full h-[400px] sm:h-[500px] bg-[#111] rounded-2xl overflow-hidden border border-white/10 shadow-inner transition-opacity duration-300 ${
            fade ? "opacity-0" : "opacity-100"
          }`}
        >
          <img
            src={currentAgent.image}
            alt={currentAgent.text}
            className="object-contain w-full h-full"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <button className="bg-[#f7b518] hover:bg-[#ffffff] text-black font-semibold px-6 py-2 rounded-lg">
            Use Agent
          </button>
          <button
            onClick={onClose}
            className="bg-white hover:bg-black hover:text-white text-black px-6 py-2 rounded-lg"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

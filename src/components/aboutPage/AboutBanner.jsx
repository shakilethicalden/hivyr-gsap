"use client";
import React from "react";

const AboutBanner = () => {
    return (
        <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Background Video */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="/video/banner/banner.mp4" type="video/mp4" />
            </video>

            {/* Overlay for dark effect */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Text Content */}
            <div className="relative z-10 text-center text-white px-5">
                <p className="text-sm md:text-base tracking-widest text-gray-300 mb-3">
                    OUR MISSION
                </p>
                <h1 className="text-2xl md:text-4xl font-semibold leading-relaxed max-w-3xl mx-auto">
                    Enable the largest robot army in the world through intelligent
                    physical AI for the US military.
                </h1>
            </div>
        </section>
    );
};

export default AboutBanner;

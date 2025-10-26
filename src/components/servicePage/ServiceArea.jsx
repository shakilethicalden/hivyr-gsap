"use client";
import React from "react";
import Image from "next/image";

const serviceCards = [
    {
        title: "Virtual Assistant",
        description:
            "Automate your daily tasks and manage schedules effortlessly with our intelligent virtual assistant.",
        image: "/images/service/service-4.jpg",
    },
    {
        title: "AI-Powered Analytics",
        description:
            "Gain insights from your data with smart analytics and actionable recommendations.",
        image: "/images/service/service-5.jpg",
    },
    {
        title: "Voice Recognition",
        description:
            "Seamlessly interact with devices using our cutting-edge voice recognition technology.",
        image: "/images/service/service-4.jpg",
    },
    {
        title: "Smart Chatbots",
        description:
            "Enhance customer engagement with AI chatbots that understand and respond naturally.",
        image: "/images/service/service-5.jpg",
    },
    {
        title: "Automated Reports",
        description:
            "Generate detailed reports automatically to save time and reduce errors.",
        image: "/images/service/service-4.jpg",
    },
    {
        title: "Predictive AI",
        description:
            "Leverage predictive models to make informed business decisions in real-time.",
        image: "/images/service/service-5.jpg",
    },
    {
        title: "AI Image Recognition",
        description:
            "Identify and classify images instantly with advanced AI vision tools.",
        image: "/images/service/service-4.jpg",
    },
    {
        title: "Intelligent Workflow",
        description:
            "Optimize your business processes using AI-driven workflow automation.",
        image: "/images/service/service-5.jpg",
    },
];

const ServiceArea = () => {
    return (
        <section className="py-24">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <h2 className="text-4xl md:text-5xl font-semibold text-[#2e2a27] leading-tight mb-16 max-w-lg">
                    Explore Our AI-Powered Services
                </h2>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {/* Left Column */}
                    <div className="flex flex-col gap-5 mt-12">
                        <HoverCard {...serviceCards[0]} />
                        <HoverCard {...serviceCards[3]} />
                    </div>

                    {/* Middle Column */}
                    <div className="flex flex-col gap-5 -mt-12">
                        <HoverCard {...serviceCards[1]} />
                        <HoverCard {...serviceCards[4]} />
                        <HoverCard {...serviceCards[6]} />
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-5 -mt-40">
                        <HoverCard {...serviceCards[2]} />
                        <HoverCard {...serviceCards[5]} />
                        <HoverCard {...serviceCards[7]} />
                    </div>
                </div>
            </div>
        </section>
    );
};

// Reusable HoverCard Component
const HoverCard = ({ title, description, image }) => {
    return (
        <div className="group relative bg-gray-100 rounded-2xl shadow-md overflow-hidden h-[280px] md:h-[220px] transition-all duration-500 ease-in-out hover:shadow-xl">
            {/* Background Image */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transform scale-110 group-hover:scale-100 transition-transform duration-700 ease-in-out"
                />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>

            {/* Text Content */}
            <div className="relative z-10 p-8 flex flex-col justify-end h-full">
                <h3 className="text-xl font-semibold group-hover:text-white group-hover:translate-y-2 transition-all duration-500 ease-in-out">
                    {title}
                </h3>
                <p className="text-[#6e655d] text-sm mt-2 leading-relaxed group-hover:opacity-0 transition-opacity duration-400 ease-in-out">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default ServiceArea;

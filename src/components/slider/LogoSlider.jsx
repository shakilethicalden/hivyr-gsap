"use client";
import React from "react";

const logos = [
    { name: "Discord" },
    { name: "Del Monte" },
    { name: "SoFi" },
    { name: "SEMrush" },
    { name: "Sequel" },
    { name: "Eaze" },
    { name: "Lumanu" },
    { name: "Eat Dirt" },
    { name: "Enginears" },
    { name: "GCI" },
    { name: "Cardless" },
    { name: "Raised By Us" },
    { name: "HiLyte" },
    { name: "Forma" }
];

const LogoSlider = () => {
    return (
        <div className="relative overflow-hidden border-t border-white/20 py-10">
            <div className="flex w-max animate-marquee gap-16">
                {[...logos, ...logos].map((logo, i) => (
                    <div
                        key={i}
                        className="flex items-center justify-center min-w-[120px] opacity-70 hover:opacity-100 transition"
                    >
                        <span className="text-black text-lg md:text-xl font-semibold tracking-wide whitespace-nowrap">
                            {logo.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LogoSlider;
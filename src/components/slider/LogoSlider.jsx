"use client";
import React from "react";

const logos = [
    { name: "Discord", src: "/logos/discord.svg" },
    { name: "Del Monte", src: "/logos/delmonte.svg" },
    { name: "SoFi", src: "/logos/sofi.svg" },
    { name: "SEMrush", src: "/logos/semrush.svg" },
    { name: "Sequel", src: "/logos/sequel.svg" },
    { name: "Eaze", src: "/logos/eaze.svg" },
    { name: "Lumanu", src: "/logos/lumanu.svg" },
    { name: "Eat Dirt", src: "/logos/eatdirt.svg" },
    { name: "Enginears", src: "/logos/enginears.svg" },
    { name: "GCI", src: "/logos/gci.svg" },
    { name: "Cardless", src: "/logos/cardless.svg" },
    { name: "Raised By Us", src: "/logos/raisedbyus.svg" },
    { name: "HiLyte", src: "/logos/hilyte.svg" },
    { name: "Forma", src: "/logos/forma.svg" }
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
                        <img
                            src={logo.src}
                            alt={logo.name}
                            className="h-8 md:h-10 object-contain grayscale hover:grayscale-0 transition"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LogoSlider;
"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import BottomText from "./BottomText";

gsap.registerPlugin(ScrollTrigger);

const WhyHivyr = () => {
    const sectionRef = useRef(null);
    const pillsRef = useRef(null);
    const leftPillRef = useRef(null);
    const centerPillRef = useRef(null);
    const rightPillRef = useRef(null);

    useEffect(() => {
        const screenWidth = window.innerWidth;

        // Disable scroll animations on mobile/tablet
        if (screenWidth < 1024) return;

        const sectionEl = sectionRef.current;
        const pillsEl = pillsRef.current;
        const leftPill = leftPillRef.current;
        const centerPill = centerPillRef.current;
        const rightPill = rightPillRef.current;

        // Pin entire section (text + pills)
        ScrollTrigger.create({
            trigger: sectionEl,
            start: "top top",
            end: "bottom+=600 top",
            pin: true,
            scrub: false,
        });

        const viewportCenter = window.innerWidth / 2;

        // Measure pills' center positions
        const leftRect = leftPill.getBoundingClientRect();
        const rightRect = rightPill.getBoundingClientRect();

        const leftCurrentCenter = leftRect.left + leftRect.width / 2;
        const rightCurrentCenter = rightRect.left + rightRect.width / 2;

        // Movement needed to get both pills centered
        const leftMove = viewportCenter - leftCurrentCenter;
        const rightMove = viewportCenter - rightCurrentCenter;

        // Main pills movement animation (NO revert)
        gsap.timeline({
            scrollTrigger: {
                trigger: pillsEl,
                start: "top center",
                end: "bottom+=400 center",
                scrub: 1,
            },
        })
            .to(leftPill, { x: leftMove, rotate: 0, ease: "none" }, 0)
            .to(rightPill, { x: rightMove, rotate: 0, ease: "none" }, 0)
            .to(centerPill, { rotate: 0, ease: "none" }, 0);

    }, []);

    return (
        <>
            <section
                ref={sectionRef}
                className="relative bg-[#f7b518] text-black py-32 overflow-hidden z-10"
            >
                {/* Text Section */}
                <div className="text-center max-w-2xl mx-auto">
                    <p className="uppercase tracking-wide text-sm mb-3">STATS</p>
                    <h2 className="text-4xl xl:text-6xl font-bold mb-6">Why Hivyr?</h2>
                    <p className="text-lg leading-relaxed text-black/90">
                        At Hivyr, we harness the power of AI to streamline complex processes
                        and automate repetitive tasks. Our solutions free up your time so
                        you can focus on what truly matters—making smarter decisions,
                        improving productivity, and driving innovation.
                    </p>
                </div>

                {/* Pills Section */}
                <div
                    ref={pillsRef}
                    className="relative w-full pt-20 md:pt-28 py-0 lg:pt-40  lg:pb-20 lg:mt-[200px] flex flex-col md:flex-col lg:block items-center gap-8"
                >
                    {/* Left Pill */}
                    <div
                        ref={leftPillRef}
                        className="flex items-center justify-center rotate-0 md:rotate-0 lg:rotate-[-20deg] lg:absolute lg:left-[12%] lg:-top-36"
                    >
                        <div className="w-28 h-20 flex items-center justify-center rounded-l-full font-semibold text-2xl text-black bg-gradient-to-br from-[#3b82f6] to-[#1e3a8a] shadow-[inset_0_4px_10px_rgba(255,255,255,0.5),0_6px_12px_rgba(0,0,0,0.25)] relative overflow-hidden">
                            <span className="relative z-10">50+</span>
                            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/30 to-transparent rounded-l-full opacity-60"></div>
                        </div>
                        <div className="bg-gradient-to-br from-gray-100 to-gray-300 text-black text-sm w-48 h-20 flex items-center justify-center text-center rounded-r-full shadow-[inset_0_2px_8px_rgba(255,255,255,0.4),0_4px_10px_rgba(0,0,0,0.25)] relative overflow-hidden">
                            <span className="relative z-10">
                                Tasks automated<br />per week
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/30 to-transparent rounded-r-full opacity-60"></div>
                        </div>
                    </div>

                    {/* Center Pill */}
                    <div
                        ref={centerPillRef}
                        className="flex items-center justify-center rotate-0 md:rotate-0 lg:rotate-[10deg] lg:-mt-20"
                    >
                        <div className="w-28 h-20 flex items-center justify-center rounded-l-full font-semibold text-2xl text-black bg-gradient-to-br from-[#38bdf8] to-[#0ea5e9] shadow-[inset_0_4px_10px_rgba(255,255,255,0.5),0_6px_12px_rgba(0,0,0,0.25)] relative overflow-hidden">
                            <span className="relative z-10">120+</span>
                            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/30 to-transparent rounded-l-full opacity-60"></div>
                        </div>
                        <div className="bg-gradient-to-br from-gray-100 to-gray-300 text-black text-sm w-48 h-20 flex items-center justify-center text-center rounded-r-full shadow-[inset_0_2px_8px_rgba(255,255,255,0.4),0_4px_10px_rgba(0,0,0,0.25)] relative overflow-hidden">
                            <span className="relative z-10">
                                Decisions optimized<br />daily
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/30 to-transparent rounded-r-full opacity-60"></div>
                        </div>
                    </div>

                    {/* Right Pill */}
                    <div
                        ref={rightPillRef}
                        className="flex items-center justify-center rotate-0 md:rotate-0 lg:rotate-[15deg] lg:absolute lg:right-[12%] lg:-top-8"
                    >
                        <div className="w-28 h-20 flex items-center justify-center rounded-l-full font-semibold text-2xl text-black bg-gradient-to-br from-[#ffd36e] to-[#e39a00] shadow-[inset_0_4px_10px_rgba(255,255,255,0.5),0_6px_12px_rgba(0,0,0,0.25)] relative overflow-hidden">
                            <span className="relative z-10">99%</span>
                            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/30 to-transparent rounded-l-full opacity-60"></div>
                        </div>
                        <div className="bg-gradient-to-br from-gray-100 to-gray-300 text-black text-sm w-48 h-20 flex items-center justify-center text-center rounded-r-full shadow-[inset_0_2px_8px_rgba(255,255,255,0.4),0_4px_10px_rgba(0,0,0,0.25)] relative overflow-hidden">
                            <span className="relative z-10">
                                Accuracy achieved<br />in AI predictions
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/30 to-transparent rounded-r-full opacity-60"></div>
                        </div>
                    </div>
                </div>
            </section>

            <BottomText />
        </>
    );
};

export default WhyHivyr;

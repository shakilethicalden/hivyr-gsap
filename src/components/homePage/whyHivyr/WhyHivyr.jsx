// "use client";
// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import BottomText from "./BottomText";

// gsap.registerPlugin(ScrollTrigger);

// const WhyHivyr = () => {
//     const sectionRef = useRef(null);
//     const pillsRef = useRef(null);
//     const leftPillRef = useRef(null);
//     const centerPillRef = useRef(null);
//     const rightPillRef = useRef(null);

//     useEffect(() => {
//         const screenWidth = window.innerWidth;

//         // Disable scroll animations on mobile/tablet
//         if (screenWidth < 1024) return;

//         const sectionEl = sectionRef.current;
//         const pillsEl = pillsRef.current;
//         const leftPill = leftPillRef.current;
//         const centerPill = centerPillRef.current;
//         const rightPill = rightPillRef.current;

//         // Pin entire section (text + pills)
//         ScrollTrigger.create({
//             trigger: sectionEl,
//             start: "top top",
//             end: "bottom+=600 top",
//             pin: true,
//             scrub: false,
//         });

//         const viewportCenter = window.innerWidth / 2;

//         // Measure pills' center positions
//         const leftRect = leftPill.getBoundingClientRect();
//         const rightRect = rightPill.getBoundingClientRect();

//         const leftCurrentCenter = leftRect.left + leftRect.width / 2;
//         const rightCurrentCenter = rightRect.left + rightRect.width / 2;

//         // Movement needed to get both pills centered
//         const leftMove = viewportCenter - leftCurrentCenter;
//         const rightMove = viewportCenter - rightCurrentCenter;

//         // Main pills movement animation (NO revert)
//         gsap.timeline({
//             scrollTrigger: {
//                 trigger: pillsEl,
//                 start: "top center",
//                 end: "bottom+=400 center",
//                 scrub: 1,
//             },
//         })
//             .to(leftPill, { x: leftMove, rotate: 0, ease: "none" }, 0)
//             .to(rightPill, { x: rightMove, rotate: 0, ease: "none" }, 0)
//             .to(centerPill, { rotate: 0, ease: "none" }, 0);

//     }, []);

//     return (
//         <>
//             <section
//                 ref={sectionRef}
//                 className="relative bg-[#fdd204] text-black py-20 lg:py-24 overflow-hidden z-10"
//             >
//                 {/* Text Section */}
//                 <div className="text-center max-w-2xl mx-auto">
//                     <p className="uppercase tracking-wide text-lg font-medium mb-3">STATS</p>
//                     <h2 className="common-title mb-6">Why Hivyr?</h2>
//                     <p className="text-lg lg:text-xl leading-relaxed text-black/90 common-px">
//                         At Hivyr, we harness the power of AI to streamline complex processes
//                         and automate repetitive tasks. Our solutions free up your time so
//                         you can focus on what truly matters—making smarter decisions,
//                         improving productivity, and driving innovation.
//                     </p>
//                 </div>

//                 {/* Pills Section */}
//                 <div
//                     ref={pillsRef}
//                     className="relative w-full pt-20 md:pt-28 py-0 lg:pt-40  lg:pb-20 lg:mt-[200px] flex flex-col md:flex-col lg:block items-center gap-8"
//                 >
//                     {/* Left Pill */}
//                     <div
//                         ref={leftPillRef}
//                         className="flex items-center justify-center rotate-0 md:rotate-0 lg:rotate-[-20deg] lg:absolute lg:left-[12%] lg:-top-36"
//                     >
//                         <div className="w-28 h-20 flex items-center justify-center rounded-l-full font-semibold text-2xl text-black bg-gradient-to-br from-[#3b82f6] to-[#1e3a8a] shadow-[inset_0_4px_10px_rgba(255,255,255,0.5),0_6px_12px_rgba(0,0,0,0.25)] relative overflow-hidden">
//                             <span className="relative z-10">50+</span>
//                             <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/30 to-transparent rounded-l-full opacity-60"></div>
//                         </div>
//                         <div className="bg-gradient-to-br from-gray-100 to-gray-300 text-black text-sm w-48 h-20 flex items-center justify-center text-center rounded-r-full shadow-[inset_0_2px_8px_rgba(255,255,255,0.4),0_4px_10px_rgba(0,0,0,0.25)] relative overflow-hidden">
//                             <span className="relative z-10">
//                                 Tasks automated<br />per week
//                             </span>
//                             <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/30 to-transparent rounded-r-full opacity-60"></div>
//                         </div>
//                     </div>

//                     {/* Center Pill */}
//                     <div
//                         ref={centerPillRef}
//                         className="flex items-center justify-center rotate-0 md:rotate-0 lg:rotate-[10deg] lg:-mt-20"
//                     >
//                         <div className="w-28 h-20 flex items-center justify-center rounded-l-full font-semibold text-2xl text-black bg-gradient-to-br from-[#38bdf8] to-[#0ea5e9] shadow-[inset_0_4px_10px_rgba(255,255,255,0.5),0_6px_12px_rgba(0,0,0,0.25)] relative overflow-hidden">
//                             <span className="relative z-10">120+</span>
//                             <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/30 to-transparent rounded-l-full opacity-60"></div>
//                         </div>
//                         <div className="bg-gradient-to-br from-gray-100 to-gray-300 text-black text-sm w-48 h-20 flex items-center justify-center text-center rounded-r-full shadow-[inset_0_2px_8px_rgba(255,255,255,0.4),0_4px_10px_rgba(0,0,0,0.25)] relative overflow-hidden">
//                             <span className="relative z-10">
//                                 Decisions optimized<br />daily
//                             </span>
//                             <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/30 to-transparent rounded-r-full opacity-60"></div>
//                         </div>
//                     </div>

//                     {/* Right Pill */}
//                     <div
//                         ref={rightPillRef}
//                         className="flex items-center justify-center rotate-0 md:rotate-0 lg:rotate-[15deg] lg:absolute lg:right-[12%] lg:-top-8"
//                     >
//                         <div className="w-28 h-20 flex items-center justify-center rounded-l-full font-semibold text-2xl text-black bg-gradient-to-br from-[#ffd36e] to-[#e39a00] shadow-[inset_0_4px_10px_rgba(255,255,255,0.5),0_6px_12px_rgba(0,0,0,0.25)] relative overflow-hidden">
//                             <span className="relative z-10">99%</span>
//                             <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/30 to-transparent rounded-l-full opacity-60"></div>
//                         </div>
//                         <div className="bg-gradient-to-br from-gray-100 to-gray-300 text-black text-sm w-48 h-20 flex items-center justify-center text-center rounded-r-full shadow-[inset_0_2px_8px_rgba(255,255,255,0.4),0_4px_10px_rgba(0,0,0,0.25)] relative overflow-hidden">
//                             <span className="relative z-10">
//                                 Accuracy achieved<br />in AI predictions
//                             </span>
//                             <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/30 to-transparent rounded-r-full opacity-60"></div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <BottomText />
//         </>
//     );
// };

// export default WhyHivyr;


"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import BottomText from "./BottomText";

gsap.registerPlugin(ScrollTrigger);

const stats = [
    { value: 50, suffix: "+", label: "Tasks automated / week" },
    { value: 120, suffix: "+", label: "Decisions optimized / daily" },
    { value: 99, suffix: "%", label: "Accuracy in AI predictions" },
];

const features = [
    {
        icon: "⏰",
        title: "Always On",
        desc: "24/7 availability — your agents never sleep, never tire, never miss a beat.",
    },
    {
        icon: "⚡",
        title: "Zero Latency",
        desc: "Sub-300ms response times so your customers never wait.",
    },
    {
        icon: "🔌",
        title: "Plug & Play",
        desc: "Integrates with your existing stack in minutes, not months.",
    },
];

const WhyHivyr = () => {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const statsRef = useRef([]);
    const cardsRef = useRef([]);

    // Pill refs kept for backward compat in case BottomText relies on them
    const pillsRef = useRef(null);
    const leftPillRef = useRef(null);
    const centerPillRef = useRef(null);
    const rightPillRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            // Heading fade up
            if (headingRef.current) {
                gsap.fromTo(
                    headingRef.current,
                    { y: 50, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.9,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: headingRef.current,
                            start: "top 85%",
                            toggleActions: "play none none none",
                        },
                    }
                );
            }

            // Animated counters
            statsRef.current.forEach((el, i) => {
                if (!el) return;
                const target = stats[i].value;
                const counter = { val: 0 };
                const numEl = el.querySelector(".stat-number");
                if (!numEl) return;

                ScrollTrigger.create({
                    trigger: el,
                    start: "top 85%",
                    once: true,
                    onEnter: () => {
                        gsap.to(counter, {
                            val: target,
                            duration: 1.8,
                            ease: "power2.out",
                            onUpdate: () => {
                                numEl.textContent =
                                    Math.round(counter.val) + stats[i].suffix;
                            },
                        });
                    },
                });
            });

            // Feature cards stagger
            if (cardsRef.current.length) {
                gsap.fromTo(
                    cardsRef.current.filter(Boolean),
                    { y: 60, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.7,
                        stagger: 0.15,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: cardsRef.current[0],
                            start: "top 88%",
                            toggleActions: "play none none none",
                        },
                    }
                );
            }

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <>
            <section
            id="about"
                ref={sectionRef}
                className="relative bg-[#fdd204] text-black mt-16 lg:mt-24 xl:mt-28 py-20 lg:py-28 overflow-hidden z-10"
            >
                {/* Subtle background texture */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle, #000 1px, transparent 1px)",
                        backgroundSize: "28px 28px",
                    }}
                />

                <div className="relative max-w-7xl mx-auto px-6">

                    {/* Header */}
                    <div ref={headingRef} className="relative text-center max-w-3xl mx-auto mb-20">
                        {/* Watermark */}
                        <span aria-hidden="true" className="absolute -top-6 left-1/2 -translate-x-1/2 text-[120px] lg:text-[160px] font-black text-black/[0.04] select-none leading-none pointer-events-none whitespace-nowrap">
                            Hivyr
                        </span>
                        <div className="relative flex items-center justify-center gap-2 mb-4">
                            <span className="w-2 h-2 rounded-full bg-black inline-block"></span>
                            <p className="uppercase tracking-widest text-sm font-semibold text-black/70">
                                Why Hivyr
                            </p>
                        </div>
                        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black leading-tight text-black mb-5">
                            Built for speed.{" "}
                            <span className="text-black/60">Designed for scale.</span>
                        </h2>
                        <p className="text-base lg:text-lg text-black/70 leading-relaxed">
                            At Hivyr, we harness the power of AI to streamline complex processes
                            and automate repetitive tasks — freeing you to focus on what truly matters.
                        </p>
                    </div>

                    {/* Stats row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                        {stats.map((stat, i) => (
                            <div
                                key={i}
                                ref={(el) => (statsRef.current[i] = el)}
                                className="relative bg-white rounded-3xl p-10 text-center shadow-xl ring-1 ring-black/5 overflow-hidden group hover:shadow-2xl transition-shadow duration-300"
                            >

                                <p className="stat-number text-6xl lg:text-8xl font-black text-gray-900 leading-none mb-3">
                                    0{stat.suffix}
                                </p>
                                <p className="text-base lg:text-lg text-gray-500 font-medium">
                                    {stat.label}
                                </p>
                                {/* Yellow accent bar */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#fdd204] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left rounded-b-3xl" />
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            <BottomText />
        </>
    );
};

export default WhyHivyr;
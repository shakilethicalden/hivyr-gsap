"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

export default function Team() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // Check screen size on client side
  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    // Initial check
    checkScreenSize();

    // Add resize listener
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Only enable animation on large devices
      if (isLargeScreen) {
        cardRefs.current.forEach((card) => {
          if (!card) return;

          const tiles = card.querySelectorAll(".tile");

          gsap.set(tiles, { opacity: 1, scale: 1 });

          gsap.to(tiles, {
            opacity: 0,
            scale: 1.1,
            duration: 0.8,
            ease: "power2.out",
            stagger: { each: 0.1, from: "random" },
            scrollTrigger: {
              trigger: card,
              start: "top 40%",
              toggleActions: "play none none reverse",
            },
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [isLargeScreen]);

  const team = [
    {
      name: "Fardeen",
      title: "CEO & Founder",
      img: "/images/team/Fardeen.webp",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Arihant",
      title: "Co-founder",
      img: "/images/team/arihant.webp",
      linkedin: "#",
      twitter: "#",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-black text-white py-16 common-px overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-12 text-center lg:text-left">
          <p className="text-lg text-gray-400 uppercase tracking-widest">
            Meet the Team
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-2">
            Leadership
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {team.map((member, i) => (
            <div
              key={i}
              className="group flex flex-col lg:flex-col"
              ref={(el) => (cardRefs.current[i] = el)}
            >
              <div className="relative w-full h-[350px] sm:h-[420px] lg:h-[520px] rounded-2xl overflow-hidden">
                {/* Single full image */}
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                  priority
                />


                {/* 9 tile masks overlay for large devices */}
                {isLargeScreen &&
                  Array.from({ length: 9 }).map((_, idx) => {
                    const col = idx % 3;
                    const row = Math.floor(idx / 3);
                    return (
                      <div
                        key={idx}
                        className="tile absolute bg-black"
                        style={{
                          top: `${row * 33.3333}%`,
                          left: `${col * 33.3333}%`,
                          width: "34%",
                          height: "34%",
                        }}
                      />
                    );
                  })}
              </div>

              {/* Text Info */}
              <div className="mt-5 text-center sm:text-left lg:text-left">
                <h3 className="text-lg sm:text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-400 text-sm sm:text-base">{member.title}</p>

                <div className="flex justify-center sm:justify-start items-center gap-5 mt-3 text-sm uppercase tracking-wider">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-gray-200 transition-all"
                  >
                    <FaLinkedinIn />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-gray-200 transition-all"
                  >
                    <FaXTwitter />
                    <span>X</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
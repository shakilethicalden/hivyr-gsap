"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { FiArrowUpRight } from "react-icons/fi";

const teamMembers = [
  { id: 1, name: "Jessica", role: "Senior Interior Designer", img: "/images/team/1.jpg" },
  { id: 2, name: "Jason", role: "VP Architecture and Interior Design", img: "/images/team/2.jpg" },
  { id: 3, name: "Adele", role: "Architect and Interior Designer", img: "/images/team/3.jpg" },
  { id: 4, name: "Jesús", role: "Senior Architectural Designer", img: "/images/team/4.jpg" },
];

const AboutTeam = () => {
  const imageRefs = useRef({});
  const rowRefs = useRef({});
  const arrowRefs = useRef({});

  useEffect(() => {
    // Hide images and arrows initially
    gsap.set(Object.values(imageRefs.current), { autoAlpha: 0, x: 50 });
    gsap.set(Object.values(arrowRefs.current), { autoAlpha: 0, x: 20 });
  }, []);

  const handleEnter = (id) => {
    if (window.innerWidth < 1024) return; // disable hover on mobile/tablet

    gsap.killTweensOf([rowRefs.current[id], imageRefs.current[id], arrowRefs.current[id]]);

    gsap.to(rowRefs.current[id], {
      backgroundColor: "#111111",
      color: "#fff",
      duration: 0.3,
    });
    gsap.to(imageRefs.current[id], {
      autoAlpha: 1,
      x: 0,
      duration: 0.6,
      ease: "power3.out",
    });
    gsap.to(arrowRefs.current[id], {
      autoAlpha: 1,
      x: 0,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  const handleLeave = (id) => {
    if (window.innerWidth < 1024) return;

    gsap.killTweensOf([rowRefs.current[id], imageRefs.current[id], arrowRefs.current[id]]);

    gsap.to(rowRefs.current[id], {
      backgroundColor: "#000",
      color: "#fff",
      duration: 0.3,
    });
    gsap.to(imageRefs.current[id], {
      autoAlpha: 0,
      x: 50,
      duration: 0.5,
      ease: "power3.inOut",
    });
    gsap.to(arrowRefs.current[id], {
      autoAlpha: 0,
      x: 20,
      duration: 0.4,
      ease: "power3.inOut",
    });
  };

  return (
    <section className="relative w-full bg-black py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-white">
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16 mb-16">
          {/* Left Side - Big Title */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Meet Our Amazing <br /> Team Members
            </h2>
          </div>

          {/* Right Side - Description */}
          <div className="lg:w-1/2 flex items-start">
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-300">
              Our team consists of talented and dedicated professionals who bring creativity, experience,
              and passion to every project. Each member plays a crucial role in delivering outstanding
              results and innovative solutions for our clients. Together, we strive to create a collaborative
              and inspiring environment.
            </p>
          </div>
        </div>

        {/* Team Members */}
        <div className="space-y-12">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              ref={(el) => (rowRefs.current[member.id] = el)}
              onMouseEnter={() => handleEnter(member.id)}
              onMouseLeave={() => handleLeave(member.id)}
              className="relative rounded-lg border border-gray-700 overflow-visible bg-black"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 items-center py-10 px-6 md:px-12 gap-4">
                {/* Mobile/Tablet: text left, image right (no hover) */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full">
                  <div className="flex flex-col md:flex-col xl:flex-row justify-start xl:justify-center xl:items-center xl:gap-16">
                    <span className="text-sm sm:text-base uppercase tracking-wide font-medium text-gray-400 text-left z-30 ">
                      {member.role}
                    </span>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-light">{member.name}</h3>
                  </div>
                </div>
              </div>

              {/* Floating Image */}
              <img
                ref={(el) => (imageRefs.current[member.id] = el)}
                src={member.img}
                alt={member.name}
                className="absolute top-1/2 right-0 md:right-12 lg:right-20 -translate-y-1/2 w-48 h-48 md:w-56 md:h-56 lg:w-60 lg:h-60 object-cover rounded-full border-4 z-20 border-white shadow-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;

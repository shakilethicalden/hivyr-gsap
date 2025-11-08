"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ServiceVideo = () => {
  const videoRef = useRef(null);
  const leftImgRef = useRef(null);
  const rightImgRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!videoRef.current) return;

    const updateImageHeight = () => {
      const videoHeight = videoRef.current.offsetHeight;
      if (videoHeight > 0 && leftImgRef.current && rightImgRef.current) {
        leftImgRef.current.style.height = `${videoHeight}px`;
        rightImgRef.current.style.height = `${videoHeight}px`;
      }
    };

    const observer = new ResizeObserver(updateImageHeight);
    observer.observe(videoRef.current);

    updateImageHeight();

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Only run animations for large screens
    if (window.innerWidth < 1024) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "top 30%",
        scrub: 1,
      },
    });

    tl.fromTo(
      videoRef.current,
      { scale: 0.5, opacity: 0.8 },
      { scale: 1, opacity: 1, ease: "power2.out", duration: 1.5 }
    );

    tl.fromTo(
      leftImgRef.current,
      { x: "-100%", opacity: 0 },
      { x: "0%", opacity: 1, ease: "power2.out", duration: 1.5 },
      "-=1.2"
    );

    tl.fromTo(
      rightImgRef.current,
      { x: "100%", opacity: 0 },
      { x: "0%", opacity: 1, ease: "power2.out", duration: 1.5 },
      "<"
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col lg:flex-row items-center justify-center py-20 px-4 lg:px-20 gap-5 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Left Image - only show on large devices */}
      <div className="hidden lg:flex flex-1 basis-1/3 items-center justify-end">
        <img
          ref={leftImgRef}
          src="/images/service/service-1.jpg"
          alt="Left"
          className="w-full object-cover rounded-2xl"
        />
      </div>

      {/* Video */}
      <div className="relative z-10 flex-1 basis-1/3 w-full">
        <video
          ref={videoRef}
          className="rounded-2xl w-full h-auto shadow-lg"
          src="/images/service/service-video.mp4"
          autoPlay
          muted
          loop
        />
      </div>

      {/* Right Image - only show on large devices */}
      <div className="hidden lg:flex flex-1 basis-1/3 items-center justify-start">
        <img
          ref={rightImgRef}
          src="/images/service/service-2.jpg"
          alt="Right"
          className="w-full object-cover rounded-2xl"
        />
      </div>
    </div>
  );
};

export default ServiceVideo;

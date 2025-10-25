"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProductBannerImg() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardRefs.current.forEach((card) => {
        const tiles = card.querySelectorAll(".tile");

        // Initial state
        gsap.set(tiles, { opacity: 1, scale: 1 });

        // Animation
        gsap.to(tiles, {
          opacity: 0,
          scale: 1.1,
          duration: 1,
          ease: "power2.out",
          stagger: { each: 0.1, from: "random" },
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const products = [
    { img: "/images/product/product-img.jpg" },
    { img: "/images/product/product-img.jpg" },
    { img: "/images/product/product-img.jpg" },
    { img: "/images/product/product-img.jpg" },
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full overflow-hidden py-16"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {products.map((item, i) => (
          <div
            key={i}
            className="relative w-full h-[300px] md:h-[400px] overflow-hidden"
            ref={(el) => (cardRefs.current[i] = el)}
          >
            {/* Main Image */}
            <Image
              src={item.img}
              alt={`Product ${i + 1}`}
              fill
              className="object-cover"
            />

            {/* 9 Tile Mask Layers */}
            {Array.from({ length: 9 }).map((_, idx) => {
              const col = idx % 3;
              const row = Math.floor(idx / 3);
              return (
                <div
                  key={idx}
                  className="tile absolute bg-white"
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
        ))}
      </div>
    </section>
  );
}

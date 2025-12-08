'use client';
import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { MessageCircle, Workflow, TrendingUp } from 'lucide-react';
import { gsap } from 'gsap';

const imagesLeft = [
  '/images/clients/gmail.png',
  '/images/clients/google.png',
  '/images/clients/playstore.jpg',
  '/images/clients/slack.png',
];

const imagesMiddle = [
  '/images/clients/google.png',
  '/images/clients/slack.png',
  '/images/clients/playstore.jpg',
  '/images/clients/gmail.png',
];

const imagesRight = [
  '/images/clients/slack.png',
  '/images/clients/playstore.jpg',
  '/images/clients/gmail.png',
  '/images/clients/google.png',
];

const ClientSection = () => {
  const col1Ref = useRef(null);
  const col2Ref = useRef(null);
  const col3Ref = useRef(null);

  const setupInfiniteScroll = (ref, direction = 'up') => {
    const container = ref.current;
    if (!container) return;
    const children = Array.from(container.children);

    children.forEach((child) => {
      const clone = child.cloneNode(true);
      container.appendChild(clone);
    });

    const totalHeight = container.scrollHeight / 2;

    gsap.to(container, {
      y: direction === 'up' ? `-=${totalHeight}` : `+=${totalHeight}`,
      duration: 20,
      ease: 'linear',
      repeat: -1,
      modifiers: {
        y: (y) => {
          let numY = parseFloat(y);
          if (direction === 'up') {
            if (numY <= -totalHeight) numY += totalHeight;
          } else {
            if (numY >= 0) numY -= totalHeight;
          }
          return `${numY}px`;
        },
      },
    });
  };

  useEffect(() => {
    setupInfiniteScroll(col1Ref, 'up');
    setupInfiniteScroll(col2Ref, 'down');
    setupInfiniteScroll(col3Ref, 'up');
  }, []);

  const ImageColumn = ({ images, refProp }) => (
    <div className="overflow-hidden w-full sm:w-1/3 h-60 sm:h-[400px] md:h-[550px] lg:h-[570px] xl:h-[520px] px-2">
      <div ref={refProp} className="flex flex-col">
        {images.map((src, i) => (
          <div
            key={i}
            className="w-full h-20 sm:h-25 mb-4 md:mb-1.5 lg:mb-3 relative rounded-xl overflow-hidden flex items-center justify-center"
          >
            <Image
              src={src}
              alt={`Image ${i}`}
              fill
              className="object-contain brightness-[0.95] contrast-110 saturate-0 opacity-80 mix-blend-screen"
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-20 lg:py-24 ppx-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex justify-center">
      <div className="  w-full flex flex-col md:flex-row items-start bg-gray-100 rounded-2xl shadow-sm">
        {/* Image Columns */}
        <div className="flex w-full lg:w-1/3 justify-between mb-8 md:mb-0 lg:mb-0">
          <ImageColumn images={imagesLeft} refProp={col1Ref} />
          <ImageColumn images={imagesMiddle} refProp={col2Ref} />
          <ImageColumn images={imagesRight} refProp={col3Ref} />
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-2/3 flex flex-col justify-start space-y-6 lg:space-y-8 py-6 lg:py-10 px-4 sm:px-8">
          <h1 className="serv_common_title text-2xl sm:text-3xl lg:text-4xl">
            Your AI Partner <br /> for Digital Transformation
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Leverage cutting-edge artificial intelligence to revolutionize your business processes.
            From intelligent chatbots to predictive analytics, we build AI agents that work tirelessly
            to elevate your customer experience and operational efficiency.
          </p>

          <ul className="space-y-4 pt-2">
            <li className="flex items-center text-gray-700 text-base sm:text-lg">
              <MessageCircle className="mr-3 w-5 h-5 sm:w-6 sm:h-6 text-[#5b5b5b] shrink-0" />
              Smart Conversational AI
            </li>
            <li className="flex items-center text-gray-700 text-base sm:text-lg">
              <Workflow className="mr-3 w-5 h-5 sm:w-6 sm:h-6 text-[#5b5b5b] shrink-0" />
              Process Automation
            </li>
            <li className="flex items-center text-gray-700 text-base sm:text-lg">
              <TrendingUp className="mr-3 w-5 h-5 sm:w-6 sm:h-6 text-[#5b5b5b] shrink-0" />
              Data-Driven Decision Making
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ClientSection;

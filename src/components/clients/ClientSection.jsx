'use client'
import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { Heart, Droplet, Sun } from 'lucide-react';
import { gsap } from 'gsap';

const imagesLeft = [
    '/images/clients/gmail.png',
    '/images/clients/google.png',
    '/images/clients/playstore.jpg',
    '/images/clients/slack.png',
];

const imagesRight = [
    '/images/clients/gmail.png',
    '/images/clients/google.png',
    '/images/clients/playstore.jpg',
    '/images/clients/slack.png',
];

const ClientSection = () => {
    const col1Ref = useRef(null);
    const col2Ref = useRef(null);

    const setupInfiniteScroll = (ref, direction = 'up') => {
        const container = ref.current;
        const children = Array.from(container.children);

        // Duplicate each child for seamless looping
        children.forEach(child => {
            const clone = child.cloneNode(true);
            container.appendChild(clone);
        });

        const totalHeight = container.scrollHeight / 2;

        // Use GSAP modifiers to wrap infinitely
        gsap.to(container, {
            y: direction === 'up' ? `-=${totalHeight}` : `+=${totalHeight}`,
            duration: 20,
            ease: 'linear',
            repeat: -1,
            modifiers: {
                y: (y) => {
                    // Wrap Y position
                    let numY = parseFloat(y);
                    if (direction === 'up') {
                        if (numY <= -totalHeight) numY += totalHeight;
                    } else {
                        if (numY >= 0) numY -= totalHeight;
                    }
                    return `${numY}px`;
                }
            }
        });
    };

    useEffect(() => {
        setupInfiniteScroll(col1Ref, 'up');
        setupInfiniteScroll(col2Ref, 'down');
    }, []);

    const ImageColumn = ({ images, refProp }) => (
        <div className="overflow-hidden h-[600px] w-1/2">
            <div ref={refProp} className="flex flex-col">
                {images.map((src, i) => (
                    <div key={i} className="w-full h-44 mb-4 relative">
                        <Image
                            src={src}
                            alt={`Image ${i}`}
                            fill
                            className="object-cover rounded-2xl shadow-lg"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <section className="py-16 md:py-24 px-4 flex justify-center">
            <div className="max-w-7xl w-full flex gap-12 bg-gray-100">

                {/* Image Columns */}
                <div className="flex w-1/2 gap-4">
                    <ImageColumn images={imagesLeft} refProp={col1Ref} />
                    <ImageColumn images={imagesRight} refProp={col2Ref} />
                </div>

                {/* Text Content */}
                <div className="w-1/2 flex flex-col justify-start space-y-6 lg:space-y-8 py-10">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#3f3f3f] leading-tight" style={{ fontFamily: 'Georgia, serif', fontWeight: 500 }}>
                        Private Wellness Experience <br /> Just for You
                    </h1>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Enjoy a private wellness room with a dry Finnish sauna, a relaxing lounge area, and a hot tub on the terrace with a beautiful view. For an even greater experience, you can request a professional massage directly at your cabin.
                    </p>
                    <ul className="space-y-4 pt-2">
                        <li className="flex items-center text-gray-700 text-lg">
                            <Heart className="mr-3 w-6 h-6 text-[#5b5b5b] shrink-0" /> Finnish sauna with relaxation zone
                        </li>
                        <li className="flex items-center text-gray-700 text-lg">
                            <Droplet className="mr-3 w-6 h-6 text-[#5b5b5b] shrink-0" /> Outdoor hot tub
                        </li>
                        <li className="flex items-center text-gray-700 text-lg">
                            <Sun className="mr-3 w-6 h-6 text-[#5b5b5b] shrink-0" /> Chill-out terrace zone
                        </li>
                    </ul>
                </div>

            </div>
        </section>
    );
};

export default ClientSection;

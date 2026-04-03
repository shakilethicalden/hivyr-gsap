'use client';

import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';

const servicesData = [
    {
        id: 1,
        title: 'AI Strategy & Consulting',
        description: "Custom AI roadmaps tailored to your business goals. From ideation to deployment, we architect agentic systems that drive real ROI and future-proof your operations.",
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    },
    {
        id: 2,
        title: 'Autonomous Agents',
        description: "Self-learning AI agents that automate complex workflows, handle customer interactions, and optimize processes 24/7 with human-like reasoning and adaptability.",
        image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=600&fit=crop',
    },
    {
        id: 3,
        title: 'Generative AI Integration',
        description: "Seamlessly embed LLMs, image generators, and multimodal AI into your products. Build next-gen creative tools, copilots, and content engines that redefine possibilities.",
        image: 'https://images.unsplash.com/photo-1696258686451-5e5fc1eaa78d?w=800&h=600&fit=crop',
    },
    {
        id: 4,
        title: 'AI UX & Interface Design',
        description: "Human-centric interfaces for AI products. We design conversational UIs, adaptive dashboards, and immersive experiences that make AI approachable and powerful.",
        image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&h=600&fit=crop',
    },
    {
        id: 5,
        title: 'Agent Orchestration',
        description: "Coordinate multi-agent systems that collaborate, delegate, and execute complex missions with precision. Scalable architecture for enterprise-level AI deployment.",
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    },
];

const ServiceItem = ({ service, index, isActive, onHoverStart, onHoverEnd }) => {
    const indexRef = useRef(null);
    const descRef = useRef(null);
    const lineRef = useRef(null);

    // Handle hover animations
    useEffect(() => {
        if (isActive) {
            // Active state animations
            gsap.to(indexRef.current, { color: '#fdd204', duration: 0.3, ease: 'power2.out' });
            gsap.to(descRef.current, { color: '#000000', duration: 0.3, ease: 'power2.out' });
            gsap.to(lineRef.current, { width: '100%', duration: 0.4, ease: 'power2.out' });
        } else {
            // Reset animations
            gsap.to(indexRef.current, { color: '#9ca3af', duration: 0.3, ease: 'power2.out' });
            gsap.to(descRef.current, { color: '#6b7280', duration: 0.3, ease: 'power2.out' });
            gsap.to(lineRef.current, { width: '0%', duration: 0.3, ease: 'power2.in' });
        }
    }, [isActive]);

    return (
        <div
            onMouseEnter={() => onHoverStart(service.id)}
            onMouseLeave={onHoverEnd}
            className="relative border-t border-gray-200 py-8 md:py-12 lg:py-16  cursor-pointer"
        >
            {/* Hover underline */}
            <div className="absolute bottom-0 left-0 w-full h-[2px] overflow-hidden">
                <div ref={lineRef} className="h-full bg-[#fdd204]" style={{ width: '0%' }} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 lg:gap-8 items-center">
                {/* Index */}
                <div className="md:col-span-1">
                    <span ref={indexRef} className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-boldr text-gray-500" >
                        {String(index).padStart(2, '0')}
                    </span>
                </div>

                {/* Title */}
                <div className="md:col-span-5">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-black" >
                        {service.title}
                    </h3>
                </div>

                {/* Description */}
                <div className="md:col-span-6">
                    <p ref={descRef} className="paragraph_text text-gray-500" >
                        {service.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

const ServiceArea2 = () => {
    const [activeId, setActiveId] = useState(null);

    const handleHoverStart = (id) => {
        setActiveId(id);
    };

    const handleHoverEnd = () => {
        setActiveId(null);
    };

    // Header animations
    useEffect(() => {
        const headerBadge = document.querySelector('.header-badge');
        const headerTitle = document.querySelector('.header-title');
        const headerSubtitle = document.querySelector('.header-subtitle');
        
        if (headerBadge) {
            gsap.fromTo(headerBadge,
                { opacity: 0, y: -30, filter: 'blur(4px)' },
                { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8, ease: 'power3.out' }
            );
        }
        
        if (headerTitle) {
            gsap.fromTo(headerTitle,
                { opacity: 0, y: 40, filter: 'blur(8px)' },
                { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1, delay: 0.2, ease: 'power3.out' }
            );
        }
        
        if (headerSubtitle) {
            gsap.fromTo(headerSubtitle,
                { opacity: 0, x: 30 },
                { opacity: 1, x: 0, duration: 0.8, delay: 0.4, ease: 'power3.out' }
            );
        }
    }, []);

    return (
        <section className="bg-white text-black  py-16 lg:py-24 xl:py-28 px-4 sm:px-6 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-gradient-to-r from-[#fdd204]/10 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-gradient-to-l from-[#fdd204]/10 to-transparent rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_#fdd20405_0%,_transparent_70%)]" />
            </div>
            
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 md:mb-20 lg:mb-28 gap-6 md:gap-8">
                    <div className="flex-1">
                        <h2 className="title_text">
                            Intelligent<br />
                            <span>Solutions.</span>
                        </h2>
                    </div>
                    <div className="max-w-md lg:text-right w-full lg:w-auto">
                        <p className="header-subtitle text-gray-600 paragraph_text  lg:pl-0 lg:pr-6">
                            Next-generation AI agents designed to elevate your brand, automate workflows, and deliver unparalleled digital experiences.
                        </p>
                    </div>
                </div>

                {/* Services List */}
                <div className="border-b border-gray-200">
                    {servicesData.map((service, index) => (
                        <ServiceItem
                            key={service.id}
                            service={service}
                            index={index + 1}
                            isActive={activeId === service.id}
                            onHoverStart={handleHoverStart}
                            onHoverEnd={handleHoverEnd}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceArea2;
'use client';
import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { MdArrowOutward } from 'react-icons/md';

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
    {
        id: 1,
        title: 'Product Strategy & Roadmap',
        image: '/images/service/service.jpg',
        features: ['Market Analysis', 'Feature Prioritization', 'Growth Planning', 'Long-term Strategy'],
    },
    {
        id: 2,
        title: 'UX/UI Design',
        image: '/images/service/service.jpg',
        features: ['Wireframing', 'Prototyping', 'User Testing', 'Visual Design'],
    },
    {
        id: 3,
        title: 'Custom Software Development',
        image: '/images/service/service.jpg',
        features: ['Frontend Engineering', 'Backend Development', 'QA & Testing', 'Deployment & CI/CD'],
    },
    {
        id: 4,
        title: 'Product Analytics',
        image: '/images/service/service.jpg',
        features: ['Data Tracking', 'KPI Monitoring', 'A/B Testing', 'User Insights'],
    },
    {
        id: 5,
        title: 'Consulting Services',
        image: '/images/service/service.jpg',
        features: ['Strategy Planning', 'Process Optimization', 'Market Research', 'Technology Consulting'],
    },
];

const ServiceItem = ({ service, index, activeId, setActiveId }) => {
    const containerRef = useRef(null);
    const contentRef = useRef(null);
    const isActive = activeId === service.id;

    const handleMouseEnter = () => setActiveId(service.id);
    const handleMouseLeave = () => setActiveId(null);

    // Scroll-trigger animation for large devices
    useEffect(() => {
        if (!containerRef.current) return;
        if (window.innerWidth >= 1024) {
            gsap.fromTo(
                containerRef.current,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 90%',
                        toggleActions: 'play none none none',
                    },
                    delay: index * 0.1,
                }
            );
        }
    }, []);

    // Hover animation for large devices only
    useEffect(() => {
        if (!containerRef.current || !contentRef.current) return;
        if (window.innerWidth < 1024) return; // skip animation on mobile/tablet

        if (isActive) {
            gsap.set(contentRef.current, { display: 'flex' });
            gsap.fromTo(
                contentRef.current,
                { y: -20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.3, ease: 'power3.out' }
            );
            gsap.to(containerRef.current, { backgroundColor: '#000000', duration: 0.3 });
        } else {
            gsap.to(contentRef.current, {
                y: -20,
                opacity: 0,
                duration: 0.2,
                onComplete: () => gsap.set(contentRef.current, { display: 'none' }),
            });
            gsap.to(containerRef.current, { backgroundColor: '#1e1e1e', duration: 0.3 });
        }
    }, [isActive]);

    return (
        <div
            ref={containerRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10 mb-6 px-6 lg:px-8 py-6 rounded-2xl bg-[#1e1e1e] relative"
            style={{
                minHeight: window.innerWidth >= 1024 ? '180px' : 'auto',
            }}
        >
            {/* Title */}
            <div className="w-full flex items-center gap-4 mb-4 lg:mb-0">
                <span className={`text-xl font-bold ${isActive ? 'text-orange-500' : 'text-gray-500'}`}>
                    {index}.
                </span>
                <h4 className={`text-2xl font-semibold truncate ${isActive ? 'text-orange-500' : 'text-gray-400'}`}>
                    {service.title}
                </h4>
            </div>

            {/* Image + Feature List */}
            <div
                ref={contentRef}
                className="flex flex-col lg:flex-row w-full items-center justify-between gap-6 lg:gap-20"
                style={{ display: window.innerWidth >= 1024 ? 'none' : 'flex' }}
            >
                {/* Image */}
                <div className="w-full lg:w-1/2 flex justify-center items-center mb-4 lg:mb-0">
                    <div className="w-full h-full max-w-[280px] max-h-[120px] rounded-lg flex items-center justify-center shadow-xl overflow-hidden">
                        <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                    </div>
                </div>

                {/* Feature List */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-2 text-sm text-gray-200">
                    {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start">
                            <span className="text-orange-500 text-2xl leading-none mr-2 mt-[-3px] font-bold">&bull;</span>
                            {feature}
                        </div>
                    ))}
                </div>
            </div>

            {/* Icon only for large devices */}
            <div className="hidden lg:flex ml-auto bg-orange-500 p-3 rounded-full text-white text-3xl items-center justify-center">
                <MdArrowOutward />
            </div>
        </div>
    );
};

const ServiceArea2 = () => {
    const [activeId, setActiveId] = useState(null);

    return (
        <section className="bg-[#272727] text-white min-h-screen py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 pb-12">
                    <div>
                        <h3 className="text-white text-xl font-semibold tracking-wider uppercase mb-3">
                            Service
                        </h3>
                        <p className="text-gray-400 text-lg max-w-sm">
                            Market Analysis, Feature Prioritization, Growth Planning, Long-term Strategy
                        </p>
                    </div>
                    <div className="flex items-end justify-start md:justify-end">
                        <h2 className="text-5xl lg:text-6xl font-bold leading-tight text-white">
                            Our award winning digital services
                        </h2>
                    </div>
                </div>

                <div className="space-y-6">
                    {servicesData.map((service, index) => (
                        <ServiceItem key={service.id} service={service} index={index + 1} activeId={activeId} setActiveId={setActiveId} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceArea2;

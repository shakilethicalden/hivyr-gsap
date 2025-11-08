"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const iconRef = useRef([]);
    const linkRefs = useRef([]);
    const underlineRefs = useRef([]);
    const tl = useRef(null);
    const iconTl = useRef(null);

    const getHref = (text) => {
        const clean = text.replace(/\s*\+/, "").trim().toLowerCase();
        if (clean === "log in") return "/login";
        if (clean === "contact") return "/contact";
        return `/${clean.replace(/\s+/g, "-")}`;
    };

    useEffect(() => {
        // Menu slide animation
        tl.current = gsap.timeline({ paused: true });
        tl.current
            .fromTo(
                menuRef.current,
                { y: "-100%", opacity: 0 },
                { y: "0%", opacity: 1, duration: 0.6, ease: "power3.out" }
            )
            .fromTo(
                ".menu-item",
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.05,
                    duration: 0.4,
                    ease: "power2.out",
                },
                "-=0.3"
            );

        // Icon animation (hamburger ↔ X)
        iconTl.current = gsap.timeline({ paused: true });
        iconTl.current
            .to(iconRef.current[0], {
                y: 6,
                rotate: 45,
                duration: 0.3,
                ease: "power2.inOut",
            })
            .to(
                iconRef.current[1],
                { opacity: 0, duration: 0.2, ease: "power1.out" },
                "-=0.2"
            )
            .to(
                iconRef.current[2],
                {
                    y: -6,
                    rotate: -45,
                    duration: 0.3,
                    ease: "power2.inOut",
                },
                "-=0.3"
            );
    }, []);

    useEffect(() => {
        if (menuOpen) {
            tl.current.play();
            iconTl.current.play();
        } else {
            tl.current.reverse();
            iconTl.current.reverse();
        }
    }, [menuOpen]);

    // Hover underline GSAP animation
    useEffect(() => {
        linkRefs.current.forEach((el, index) => {
            const underline = underlineRefs.current[index];
            if (!el || !underline) return;

            const hoverTl = gsap.timeline({ paused: true });
            hoverTl.fromTo(
                underline,
                { scaleX: 0, transformOrigin: "left" },
                { scaleX: 1, duration: 0.4, ease: "power3.out" }
            );

            el.addEventListener("mouseenter", () => hoverTl.play());
            el.addEventListener("mouseleave", () => hoverTl.reverse());
        });
    }, []);

    const navItems = ["Products", "Agents", "Services +", "About", "Pricing"];

    return (
        <nav className="w-full flex items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-20 py-4 relative z-50 bg-transparent">
            {/* Logo */}
            <div className="flex items-center w-32 z-50">
                <Link href="/">
                    <Image
                        src="/images/logo/logo.png"
                        alt="Logo"
                        width={800}
                        height={800}
                        className="object-contain"
                        priority
                    />
                </Link>
            </div>

            {/* Desktop Links */}
            <div className="hidden lg:flex flex-1 bg-black text-white items-center justify-between lg:px-6 xl:px-12 py-5 lg:ml-2 xl:ml-5 2xl:ml-8">
                <ul className="flex items-center space-x-12 lg:text-sm xl:text-lg tracking-wide">
                    {navItems.map((text, index) => (
                        <li key={index} className="relative">
                            <Link
                                href={getHref(text)}
                                ref={(el) => (linkRefs.current[index] = el)}
                                className="relative inline-block pb-1"
                            >
                                {text}
                                <span
                                    ref={(el) => (underlineRefs.current[index] = el)}
                                    className="absolute left-0 bottom-0 h-[1px] w-full bg-white scale-x-0"
                                ></span>
                            </Link>
                        </li>
                    ))}
                </ul>

                <Link
                    href={getHref("Log In")}
                    ref={(el) => (linkRefs.current[5] = el)}
                    className="relative inline-block pb-1 lg:text-sm xl:text-lg"
                >
                    Log In
                    <span
                        ref={(el) => (underlineRefs.current[5] = el)}
                        className="absolute left-0 bottom-0 h-[1px] w-full bg-white scale-x-0"
                    ></span>
                </Link>
            </div>

            {/* Contact button for desktop */}
            <div className="hidden lg:block bg-white text-gray-800 px-8 lg:py-5 xl:py-6 cursor-pointer hover:bg-black hover:text-white transition-all duration-300">
                <Link href={getHref("Contact")} className="relative inline-block text-sm font-medium">
                    Contact
                </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden flex flex-col justify-center items-center space-y-1.5 z-50 w-8 h-8 bg-black"
            >
                {[0, 1, 2].map((i) => (
                    <span
                        key={i}
                        ref={(el) => (iconRef.current[i] = el)}
                        className="block h-[2px] w-6 bg-white rounded-full"
                    ></span>
                ))}
            </button>

            {/* Mobile Menu Overlay */}
            <div
                ref={menuRef}
                className="fixed inset-0 bg-black text-white flex flex-col justify-between p-8 lg:hidden opacity-0 pointer-events-none"
                style={{ pointerEvents: menuOpen ? "auto" : "none" }}
            >
                <div>
                    <ul className="space-y-6 text-xl md:text-2xl font-light mt-40">
                        {navItems.map((text, index) => (
                            <li key={index} className="menu-item">
                                <Link
                                    href={getHref(text)}
                                    className="hover:text-gray-400 transition-colors duration-300"
                                >
                                    {text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex">
                    <Link
                        href={getHref("Log In")}
                        className="w-1/2 bg-[#fdd204] py-4 text-black text-lg text-center menu-item"
                    >
                        Log In
                    </Link>
                    <Link
                        href={getHref("Contact")}
                        className="w-1/2 bg-[#fff] py-4 text-black text-lg text-center menu-item"
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
}

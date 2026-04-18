"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const iconRef = useRef([]);
    const linkRefs = useRef([]);
    const underlineRefs = useRef([]);
    const tl = useRef(null);
    const iconTl = useRef(null);
    const pathname = usePathname();

    // Define navigation items with their paths
    const navItems = [
        { name: "Products", path: "/products" },
        { name: "Agents", path: "/agents" },
        { name: "Services", path: "/services" },
        { name: "About", path: "/about" },
        // { name: "Pricing", path: "/pricing" }
    ];

    // Check if a path is active
    const isActive = (path) => {
        if (path === "/") {
            return pathname === path;
        }
        return pathname === path;
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
            // Prevent body scrolling when menu is open
            document.body.style.overflow = "hidden";
        } else {
            tl.current.reverse();
            iconTl.current.reverse();
            // Restore body scrolling when menu is closed
            document.body.style.overflow = "";
        }
        
        // Cleanup function
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    // Hover underline GSAP animation with active state management
    useEffect(() => {
        // First, set initial state for all underlines based on active status
        linkRefs.current.forEach((el, index) => {
            const underline = underlineRefs.current[index];
            if (!el || !underline) return;
            
            // Get the path for this link
            const linkPath = el.getAttribute('data-path');
            
            // If this link is active, set its underline to full width
            if (linkPath && isActive(linkPath)) {
                gsap.set(underline, { scaleX: 1 });
            } else {
                gsap.set(underline, { scaleX: 0 });
            }
        });

        // Setup hover animations
        linkRefs.current.forEach((el, index) => {
            const underline = underlineRefs.current[index];
            if (!el || !underline) return;
            
            const linkPath = el.getAttribute('data-path');
            
            // Skip setting up hover animation for active link if you don't want hover effect
            // Or keep it to allow hover even on active link
            const hoverTl = gsap.timeline({ paused: true });
            hoverTl.to(underline, {
                scaleX: 1,
                duration: 0.4,
                ease: "power3.out",
                transformOrigin: "left"
            });

            const handleMouseEnter = () => {
                hoverTl.play();
            };
            
            const handleMouseLeave = () => {
                // Only reverse if it's not the active link
                // Remove this condition if you want the hover to reverse even on active link
                if (!linkPath || !isActive(linkPath)) {
                    hoverTl.reverse();
                } else {
                    // If it's active, ensure it stays at scaleX: 1 after hover
                    gsap.set(underline, { scaleX: 1 });
                }
            };
            
            el.addEventListener("mouseenter", handleMouseEnter);
            el.addEventListener("mouseleave", handleMouseLeave);
            
            // Store cleanup functions
            el._cleanup = () => {
                el.removeEventListener("mouseenter", handleMouseEnter);
                el.removeEventListener("mouseleave", handleMouseLeave);
            };
        });
        
        // Cleanup function
        return () => {
            linkRefs.current.forEach((el) => {
                if (el && el._cleanup) {
                    el._cleanup();
                }
            });
        };
    }, [pathname]); // Re-run when pathname changes to update active states

    // Close menu when clicking on a link
    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="fixed top-5 left-0 w-full flex items-center justify-between px-4 sm:px-6 md:px-16 lg:px-8 2xl:px-20 py-4 z-50 bg-transparent">
            {/* Logo - no glass effect on mobile */}
            <div className="flex items-center w-32 z-[60] relative">
                <Link href="/" onClick={handleLinkClick}>
                    <Image
                        src="/images/logo/logo-white.png"
                        alt="Logo"
                        width={800}
                        height={800}
                        className="object-contain cursor-pointer"
                        priority
                    />
                </Link>
            </div>

            {/* Desktop Links - Glassmorphism effect */}
            <div className="hidden lg:flex flex-1 bg-white/5 backdrop-blur-md text-white items-center justify-between lg:px-2.5 lg:pl-6 lg:ml-2 xl:ml-5 2xl:ml-8 rounded-full border border-white/20 shadow-lg">
                <ul className="flex items-center space-x-12 lg:text-sm xl:text-lg tracking-wide ">
                    {navItems.map((item, index) => (
                        <li key={index} className="relative">
                            <Link
                                href={item.path}
                                ref={(el) => {
                                    if (el) linkRefs.current[index] = el;
                                }}
                                data-path={item.path}
                                className={`relative inline-block pb-1 cursor-pointer transition-colors duration-300 ${
                                    isActive(item.path) ? 'text-yellow-400' : ''
                                }`}
                            >
                                {item.name}
                                <span
                                    ref={(el) => {
                                        if (el) underlineRefs.current[index] = el;
                                    }}
                                    className="absolute left-0 bottom-0 h-[1px] w-full bg-white"
                                ></span>
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center space-x-8">
                    {/* Contact button */}
                    <Link
                        href="/contact"
                        className="bg-gradient-to-r from-[#fdd204] to-[#f7b518] text-black px-8 py-3 cursor-pointer hover:opacity-90 transition-all duration-300 rounded-full inline-block lg:text-sm xl:text-lg font-medium my-2.5 "
                    >
                        Contact
                    </Link>
                </div>
            </div>

            {/* Mobile Menu Button with glass effect only */}
            <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden flex flex-col justify-center items-center space-y-1.5 z-[60] relative w-10 h-10 bg-white/10 backdrop-blur-md rounded-full border border-white/20 transition-all duration-300 hover:bg-white/20"
            >
                {[0, 1, 2].map((i) => (
                    <span
                        key={i}
                        ref={(el) => (iconRef.current[i] = el)}
                        className="block h-[2px] w-5 bg-white rounded-full"
                    ></span>
                ))}
            </button>

            {/* Mobile Menu Overlay - FIXED */}
            <div
                ref={menuRef}
                className="fixed inset-0 z-50 bg-black text-white lg:hidden overflow-y-auto"
                style={{ 
                    transform: menuOpen ? "translateY(0)" : "translateY(-100%)",
                    opacity: menuOpen ? 1 : 0,
                    visibility: menuOpen ? "visible" : "hidden",
                    transition: "visibility 0.3s ease-in-out",
                    pointerEvents: menuOpen ? "auto" : "none"
                }}
            >
                {/* Content wrapper with min-height to ensure scrolling works */}
                <div className="min-h-screen flex flex-col justify-between p-8">
                    <div>
                        <ul className="space-y-6 text-xl md:text-2xl font-light mt-40">
                            {navItems.map((item, index) => (
                                <li key={index} className="menu-item">
                                    <Link
                                        href={item.path}
                                        onClick={handleLinkClick}
                                        className={`hover:text-gray-400 transition-colors duration-300 w-full text-left ${
                                            isActive(item.path) ? 'text-yellow-400' : ''
                                        }`}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex mb-8">
                        {/* <Link
                            href="/login"
                            onClick={handleLinkClick}
                            className={`w-1/2 bg-[#fdd204] py-4 text-black text-lg text-center menu-item ${
                                isActive('/login') ? 'bg-yellow-500' : ''
                            }`}
                        >
                            Log In
                        </Link> */}
                        <Link
                            href="/contact"
                            onClick={handleLinkClick}
                            className={`w-1/2 bg-gradient-to-r from-[#fdd204] to-[#f7b518] py-4 text-black text-lg text-center menu-item ${
                                isActive('/contact') ? 'bg-gray-200' : ''
                            }`}
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-white text-gray-900 relative overflow-hidden">

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="px-4 sm:px-6 lg:px-12 xl:px-20 pt-20 pb-8 relative z-10">

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">

          {/* Brand Section */}
          <div className="lg:col-span-5">
            {/* Logo SVG - Replace the path with your actual logo path */}
            <div className="mb-6">
              <Image
                src="/images/logo/logo.png"
                alt="Hivyr"
                width={750}
                height={750}
                className="mb-6 w-[150px] h-auto"
              />
            </div>
            <p className="text-gray-500 paragraph_text max-w-md">
              Building next-generation digital experiences with AI-first thinking.
              Hivyr blends design, technology, and strategy to create impactful products.
            </p>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Explore */}
            <div>
              <h4 className="text-[16px] md:text-[18px] font-bold uppercase tracking-wider  mb-4">
                Explore
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/products" className="footer-link paragraph_text  transition-all">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/agents" className="footer-link paragraph_text transition-all">
                    Agents
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="footer-link paragraph_text transition-all">
                    Services
                  </Link>
                </li>
                {/* <li>
                  <Link href="/pricing" className="footer-link paragraph_text transition-all">
                    Pricing
                  </Link>
                </li> */}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-[16px] md:text-[18px] font-bold tracking-wider  mb-4">
                Company
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="footer-link paragraph_text transition-all">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="footer-link paragraph_text transition-all">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="footer-link paragraph_text transition-all">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="footer-link paragraph_text transition-all">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-[16px] md:text-[18px] font-bold tracking-wider  mb-4">
                Resources
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/docs" className="footer-link paragraph_text transition-all">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="footer-link paragraph_text transition-all">
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="/status" className="footer-link paragraph_text transition-all">
                    Status
                  </Link>
                </li>
                <li>
                  <Link href="/api" className="footer-link paragraph_text transition-all">
                    API Reference
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-[16px] md:text-[18px] font-bold tracking-wider  mb-4">
                Legal
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/privacy" className="footer-link paragraph_text transition-all">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="footer-link paragraph_text transition-all">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="footer-link paragraph_text transition-all">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-b border-black/20 py-8 mb-8">
          <div className="flex flex-col md:flex-row gap-8 justify-between md:items-center">
            <div>
              <h3 className="text-[16px] md:text-[18px] font-bold mb-2">Stay in the loop</h3>
              <p className="text-gray-500 text-sm">
                Get the latest updates, insights, and product news delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full md:w-60 px-4 py-3 bg-white/50 backdrop-blur-sm border border-black/20 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-900/40 focus:border-transparent transition-all text-gray-900 placeholder:text-gray-600"
              />
              <button className="button_text bg-black text-white rounded-full transition-all ">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <div className="flex gap-6">
            <span className="text-gray-500">© 2026 Hivyr. All rights reserved.</span>
          </div>

          <div className="flex gap-6">
            <a href="#" className="social-link paragraph_text transition-all">
              Twitter
            </a>
            <a href="#" className="social-link paragraph_text transition-all">
              LinkedIn
            </a>
            <a href="#" className="social-link paragraph_text transition-all">
              GitHub
            </a>
            <a href="#" className="social-link paragraph_text transition-all">
              Behance
            </a>
          </div>
        </div>
      </div>

      {/* Enhanced Link Styles */}
      <style jsx>{`
        .footer-link {
          position: relative;
          display: inline-block;
          font-weight: 500;
        }

        .footer-link::after {
          content: "";
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0%;
          height: 2px;
          background: currentColor;
          transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .footer-link:hover::after {
          width: 100%;
        }

        .social-link {
          position: relative;
          font-weight: 500;
        }

        .social-link::after {
          content: "";
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0%;
          height: 2px;
          background: currentColor;
          transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .social-link:hover::after {
          width: 100%;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .footer-link, .social-link {
          animation: fadeInUp 0.5s ease-out forwards;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
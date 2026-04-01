"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-[#fdd204] text-gray-900 relative overflow-hidden">
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="px-4 sm:px-6 lg:px-12 xl:px-20 pt-20 pb-8 relative z-10">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Section */}
          <div className="lg:col-span-5">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              HIVYR
            </h2>
            <p className="text-gray-800 text-base leading-relaxed max-w-md">
              Building next-generation digital experiences with AI-first thinking. 
              Hivyr blends design, technology, and strategy to create impactful products.
            </p>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Explore */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-900/70 mb-4">
                Explore
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/products" className="footer-link text-gray-800 hover:text-gray-900 transition-all">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/agents" className="footer-link text-gray-800 hover:text-gray-900 transition-all">
                    Agents
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="footer-link text-gray-800 hover:text-gray-900 transition-all">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="footer-link text-gray-800 hover:text-gray-900 transition-all">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-900/70 mb-4">
                Company
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="footer-link text-gray-800 hover:text-gray-900 transition-all">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="footer-link text-gray-800 hover:text-gray-900 transition-all">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="footer-link text-gray-800 hover:text-gray-900 transition-all">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="footer-link text-gray-800 hover:text-gray-900 transition-all">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-900/70 mb-4">
                Resources
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/docs" className="footer-link text-gray-800 hover:text-gray-900 transition-all">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="footer-link text-gray-800 hover:text-gray-900 transition-all">
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="/status" className="footer-link text-gray-800 hover:text-gray-900 transition-all">
                    Status
                  </Link>
                </li>
                <li>
                  <Link href="/api" className="footer-link text-gray-800 hover:text-gray-900 transition-all">
                    API Reference
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-900/70 mb-4">
                Legal
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/privacy" className="footer-link text-gray-800 hover:text-gray-900 transition-all">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="footer-link text-gray-800 hover:text-gray-900 transition-all">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="footer-link text-gray-800 hover:text-gray-900 transition-all">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-b border-gray-900/20 py-8 mb-8">
          <div className="flex flex-col md:flex-row gap-8 justify-between md:items-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">Stay in the loop</h3>
              <p className="text-gray-800 text-sm">
                Get the latest updates, insights, and product news delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
  type="email"
  placeholder="Enter your email"
  className="w-full md:w-60 px-4 py-3 bg-white/50 backdrop-blur-sm border border-gray-900/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900/40 focus:border-transparent transition-all text-gray-900 placeholder:text-gray-600"
/>
              <button className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all font-medium text-sm whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <div className="flex gap-6">
            <span className="text-gray-800/70">© 2026 Hivyr. All rights reserved.</span>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="social-link text-gray-800 hover:text-gray-900 transition-all">
              Twitter
            </a>
            <a href="#" className="social-link text-gray-800 hover:text-gray-900 transition-all">
              LinkedIn
            </a>
            <a href="#" className="social-link text-gray-800 hover:text-gray-900 transition-all">
              GitHub
            </a>
            <a href="#" className="social-link text-gray-800 hover:text-gray-900 transition-all">
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

// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="w-full bg-[#f4f4f4] text-[#707070] px-6 md:px-12 pt-16 pb-0 overflow-hidden relative min-h-[600px] flex flex-col justify-between">
//       {/* Top Section: Branding and Links */}
//       <div className="grid grid-cols-1 md:grid-cols-12 gap-10 z-10">
        
//         {/* Logo and Tagline */}
//         <div className="md:col-span-5 lg:col-span-6">
//           <div className="mb-4">
//             {/* Replace with your actual SVG logo */}
//             <div className="w-8 h-8 bg-[#707070] rounded-sm opacity-80" /> 
//           </div>
//           <p className="max-w-[280px] text-[15px] leading-relaxed font-medium">
//             A more meaningful home for photography, built by photographers.
//           </p>
//         </div>

//         {/* Navigation Links */}
//         <div className="md:col-span-7 lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8">
//           <div className="flex flex-col gap-2">
//             <span className="text-[10px] uppercase tracking-widest opacity-50 mb-1">Hivyr</span>
//             <a href="#" className="hover:text-black transition-colors">About</a>
//             <a href="#" className="hover:text-black transition-colors">Premium</a>
//             <a href="#" className="hover:text-black transition-colors">Help</a>
//           </div>
          
//           <div className="flex flex-col gap-2">
//             <span className="text-[10px] uppercase tracking-widest opacity-50 mb-1">Updates</span>
//             <a href="#" className="hover:text-black transition-colors">Changelog</a>
//             <a href="#" className="hover:text-black transition-colors">Roadmap</a>
//             <a href="#" className="hover:text-black transition-colors">Discord</a>
//           </div>

//           <div className="flex flex-col gap-2">
//             <span className="text-[10px] uppercase tracking-widest opacity-50 mb-1">Legal</span>
//             <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
//             <a href="#" className="hover:text-black transition-colors">Privacy policy</a>
//             <a href="#" className="hover:text-black transition-colors">Community Guidelines</a>
//           </div>
//         </div>
//       </div>

//       {/* Large Background Text Section */}
//       <div className="relative w-full flex items-end justify-center pointer-events-none select-none">
//         <h1 
//           className="text-[28vw] font-bold leading-[0.8] tracking-tighter text-[#e5e5e5] translate-y-[15%]"
//           style={{
//             // This creates the subtle transparent overlap effect seen in the screenshot
//             mixBlendMode: 'multiply' 
//           }}
//         >
//           HIVYR
//         </h1>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#fdd204] text-black relative overflow-hidden border-t border-black/10">
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-20 pt-12 pb-16 md:pt-14 md:pb-20">
        {/* Top Row: Copyright + Legal + Links */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-4">
          {/* Left side: copyright and privacy policy */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm font-medium tracking-tight">
            <span className="text-black/80">© 2025 Hivyr. All rights reserved.</span>
            <button className="footer-link cursor-pointer text-black/80 hover:text-black transition-colors">
              Privacy Policy
            </button>
            <button className="footer-link cursor-pointer text-black/80 hover:text-black transition-colors hidden sm:inline-block">
              Terms of Use
            </button>
          </div>

          {/* Right side: email, demo, linkedin */}
          <div className="flex flex-wrap justify-center items-center gap-5 sm:gap-6">
            <a
              href="mailto:info@hivyr.ai"
              className="footer-link text-black/80 hover:text-black text-sm font-medium transition-all inline-flex items-center gap-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              info@hivyr.ai
              <svg
                className="w-3.5 h-3.5 opacity-70"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>

            <a
              href="#"
              className="group bg-black/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-semibold text-black hover:bg-black hover:text-[#fdd204] transition-all duration-200 inline-flex items-center gap-1.5"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a demo
              <svg
                className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </a>

            <a
              href="#"
              className="footer-link text-black/80 hover:text-black text-sm font-medium inline-flex items-center gap-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        {/* FULL-WIDTH MASSIVE LOGO with gradient mask */}
        <div className="mt-14 md:mt-16 w-full relative">
          <h1
            className="text-[32vw] sm:text-[30vw] md:text-[28vw] lg:text-[26vw] xl:text-[24vw] 2xl:text-[22vw] font-black leading-[0.85] tracking-tighter text-black text-center w-full select-none"
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, black 55%, rgba(0,0,0,0.25) 85%, transparent 100%)",
              maskImage:
                "linear-gradient(to bottom, black 55%, rgba(0,0,0,0.25) 85%, transparent 100%)",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskSize: "100% 100%",
              maskSize: "100% 100%",
            }}
          >
            HIVYR
          </h1>
          {/* Soft gradient fade at bottom for smooth transition */}
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#fdd204] via-[#fdd204]/80 to-transparent pointer-events-none"></div>
        </div>

        {/* Bottom micro info row */}
        <div className="flex flex-wrap justify-between items-center mt-8 pt-4 border-t border-black/10 text-black/60 text-xs">
          <div className="flex gap-4">
            <span>AI-native ecosystem</span>
            <span className="hidden sm:inline-block">•</span>
            <span className="hidden sm:inline-block">Designed for tomorrow</span>
          </div>
          <div className="flex gap-3 mt-2 sm:mt-0">
            <a href="#" className="hover:text-black transition">
              Accessibility
            </a>
            <a href="#" className="hover:text-black transition">
              Status
            </a>
          </div>
        </div>
      </div>

      {/* Optional grain texture overlay for modern depth */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      <style jsx>{`
        .footer-link {
          transition: all 0.2s ease;
          position: relative;
        }
        .footer-link::after {
          content: "";
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1.5px;
          background: currentColor;
          transition: width 0.25s cubic-bezier(0.2, 0.9, 0.4, 1.1);
        }
        .footer-link:hover::after {
          width: 100%;
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
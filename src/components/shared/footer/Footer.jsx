"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#fdd204] text-black px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-20 pt-8 pb-16 overflow-hidden relative">
      <div className="flex flex-col lg:flex-row justify-between items-center text-sm gap-3">
        <div className="flex flex-col lg:flex-row items-center gap-3">
          <p>© 2025 Hivyr. All rights reserved.</p>
          <p className="cursor-pointer hover:underline">Privacy Policy</p>
        </div>
        <div className="flex flex-col lg:flex-row flex-wrap justify-start lg:justify-center gap-5 items-center mt-10 lg:mt-0">
          <a href="mailto:hivyrinfo@.ai" className="hover:underline" target="_blank">
            info@hivyr.ai ↗
          </a>
          <a href="#" className="hover:underline" target="_blank">
            Book a demo ↗
          </a>
          <a href="#" className="hover:underline" target="_blank">
            Linkedin ↗
          </a>
        </div>
      </div>

      <div className="mt-12 text-center relative">
        <h1
          className="text-[35vw] md:text-[38vw] xl:text-[35vw] pb-10 font-extrabold leading-none"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, black 50%, rgba(0,0,0,0.1) 80%, transparent 100%)",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskSize: "100% 100%",
            maskImage: "linear-gradient(to bottom, black 50%, rgba(0,0,0,0.1) 80%, transparent 100%)",
            maskRepeat: "no-repeat",
            maskSize: "100% 100%",
          }}
        >
          Hivyr
        </h1>
      </div>
    </footer>
  );
};

export default Footer;


// "use client";
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
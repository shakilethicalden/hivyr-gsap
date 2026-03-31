import React from 'react';

export default function ProductAbout() {
  return (
    <section className="bg-white py-16 px-6 md:py-24 ">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-[1.1] tracking-tight mb-12 md:mb-20 max-w-4xl">
         No more slow dashboards. No more manual work.
AI moves you forward — when it counts.
        </h2>

        {/* Content aligned to RIGHT */}
        <div className="flex justify-end">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6  items-center max-w-3xl">
            
            {/* Image */}
            <div className="w-[320px]">
              <img
                src="/images/product/about.jpg" 
                alt="AI Agent Interface"
                className="rounded-2xl w-full h-auto object-cover"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col items-start space-y-5">
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                Our AI Agent combines advanced automation with intelligent 
                insights to help you streamline tasks and make smarter 
                business decisions.
              </p>

              <button className="flex items-center bg-black text-white pl-6 pr-2 py-2 rounded-full hover:bg-[#fdd204] hover:text-black transition-colors">
                <span className="text-sm font-medium mr-3">Learn More</span>
                <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
                  <svg 
                    viewBox="0 0 20 20" 
                    fill="currentColor" 
                    className="w-5 h-5 text-black"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                </div>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
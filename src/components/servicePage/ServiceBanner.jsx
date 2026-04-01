"use client";
import Navbar from "@/components/shared/navbar/Navbar";

export default function ServiceBanner() {
  return (
    <>
      {/* Navbar outside - same structure as ProductBanner */}
      <div className="absolute top-0 left-0 right-0 z-50 lg:px-8 xl:px-16 py-4 pt-6">
        <Navbar />
      </div>

      {/* Section with overflow-hidden for background effect only */}
      <section className="relative w-full h-screen flex items-start overflow-hidden bg-white">
        
        {/* Background container with image */}
        <div className="absolute inset-0 m-0 sm:m-2 md:m-4 rounded-none sm:rounded-2xl overflow-hidden">
          <div
            className="relative w-full h-full bg-cover bg-center bg-no-repeat rounded-none sm:rounded-2xl"
            style={{ backgroundImage: "url('/images/agentPage/agent-banner.jpg')" }}
          >
            {/* Black overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Optional zoom layer */}
            <div className="w-full h-full transition-transform duration-700 hover:scale-110"></div>
          </div>
        </div>

        {/* Main Layout */}
        <main className="relative z-10 w-full h-full flex items-end sm:items-center md:mt-20 lg:mt-24 xl:mt-16 2xl:mt-20 xl:ml-44 2xl:ml-14">
          <div className="max-w-[1400px] mx-auto w-full px-4 sm:px-8 md:px-12 pb-8 sm:pb-0">
            
            {/* Title and Para Wrapper */}
            <div className="flex flex-col text-white">
              {/* First two lines of Title - Responsive sizing */}
              <h1 className="reveal italic text-[15vw] sm:text-[13vw] md:text-[11vw] 2xl:text-[9vw] leading-[1.1] xl:leading-[0.9] tracking-tighter text-left">
                AI-Powered<br />
                <span className="xl:-ml-32 2xl:-ml-40 inline-block">Enterprise</span>
              </h1>

              {/* Bottom line with Para next to it - Stack on mobile, row on tablet/desktop */}
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-6 md:gap-12">
                <h1 className="reveal italic text-[15vw] sm:text-[13vw] md:text-[11vw] 2xl:text-[9vw] leading-[1.1] xl:leading-[0.9] tracking-tighter">
                  Solutions
                </h1>
                
                {/* Paragraph - Full width on mobile, constrained on tablet/desktop */}
                <div className="reveal max-w-full sm:max-w-[320px] md:max-w-[380px] pt-2 sm:pt-0 pb-2 sm:pb-4">
                  <p className="font-light text-[14px] sm:text-[16px] md:text-[18px] leading-[1.4] sm:leading-[1.4] opacity-80">
                    Deploy custom AI agents tailored to your business needs. From intelligent automation to predictive analytics, our agents work autonomously while seamlessly integrating with your existing systems. Scale your operations with AI that delivers measurable results.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </main>
      </section>
    </>
  );
}
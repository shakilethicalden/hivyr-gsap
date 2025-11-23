import Image from "next/image";

export default function HrManagementBanner() {

  return (
    <section className="bg-black text-white py-16 md:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 px-6 lg:px-8">
        {/* Left Text Section */}
        <div className="w-full lg:w-1/2 max-w-xl text-center lg:text-left">
          <p className="uppercase text-sm text-gray-400 mb-2 tracking-wide">
            HR Management
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Streamline Your Workforce
          </h1>
          <p className="text-gray-400 leading-relaxed mb-8">
            Our HR management platform simplifies employee onboarding, payroll, leave management, and performance tracking — all in one centralized system.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-6">
            <button className="bg-white text-black font-semibold px-6 py-2.5 rounded-full hover:bg-[#fdd204] hover:text-black transition">
              Request a Demo
            </button>
            <button className="border border-white px-6 py-2.5 rounded-full hover:bg-white hover:text-black transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[550px]">
            <Image
              src="/images/ai-agents/hr-banner.jpg"
              alt="HR Management"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

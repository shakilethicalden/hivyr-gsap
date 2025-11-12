import Image from "next/image";

export default function ConversationalBanner() {
  return (
    <section className="bg-black text-white py-16 md:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 px-6 lg:px-8">
        {/* Left Text Section */}
        <div className="w-full lg:w-1/2 max-w-xl text-center lg:text-left">
          <p className="uppercase text-sm text-gray-400 mb-2 tracking-wide">
            Platform
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Conversational AI Engine
          </h1>
          <p className="text-gray-400 leading-relaxed mb-8">
            Hivyr AI models the ability to understand and respond naturally
            through speech—even in challenging network conditions and noisy
            environments.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button className="bg-white text-black font-semibold px-6 py-2.5 rounded-full hover:bg-[#f7b518] hover:text-black transition">
              Try the Demo
            </button>
            <button className="border border-white px-6 py-2.5 rounded-full hover:bg-white hover:text-black transition">
              Get the Docs
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[550px]">
            <Image
              src="/images/ai-agents/conversational.png"
              alt="AI Engine"
              fill
              className="object-contain "
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

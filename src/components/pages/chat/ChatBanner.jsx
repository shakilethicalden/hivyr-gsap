import Image from "next/image";
import { FaAndroid, FaApple, FaChrome, FaLinux, FaWindows } from "react-icons/fa";

export default function ChatBanner() {
  const platforms = [
    { icon: <FaApple className="w-5 h-5 text-white" />, color: "bg-[#f7b518]/20" },
    { icon: <FaWindows className="w-5 h-5 text-white" />, color: "bg-[#f7b518]/20" },
    { icon: <FaAndroid className="w-5 h-5 text-white" />, color: "bg-[#f7b518]/20" },
    { icon: <FaLinux className="w-5 h-5 text-white" />, color: "bg-[#f7b518]/20" },
    { icon: <FaChrome className="w-5 h-5 text-white" />, color: "bg-[#f7b518]/20" },
  ];

  return (
    <section className="bg-black text-white py-16 md:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 px-6 lg:px-8">
        {/* Left Text Section */}
        <div className="w-full lg:w-1/2 max-w-xl text-center lg:text-left">
          <p className="uppercase text-sm text-gray-400 mb-2 tracking-wide">
            Platform
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Chat SDK
          </h1>
          <p className="text-gray-400 leading-relaxed mb-8">
            Add customized messaging experiences to your real-time video and voice apps with Agora’s chat SDK
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-6">
            <button className="bg-white text-black font-semibold px-6 py-2.5 rounded-full hover:bg-[#f7b518] hover:text-black transition">
              Try the Demo
            </button>
            <button className="border border-white px-6 py-2.5 rounded-full hover:bg-white hover:text-black transition">
              Get the Docs
            </button>
          </div>

          {/* Supported Platforms */}
          <div className="mt-8">
            <p className="text-white uppercase text-sm mb-3">Supported Platforms</p>
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              {platforms.map((platform, i) => (
                <div
                  key={i}
                  className={`w-10 h-10 flex items-center justify-center rounded-full ${platform.color}`}
                >
                  {platform.icon}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[550px]">
            <Image
              src="/images/ai-agents/chat-banner.webp"
              alt="AI Engine"
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

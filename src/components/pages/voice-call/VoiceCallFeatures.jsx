import { Volume, Record, Headphones, Mic, Globe, Type, HeadphonesIcon, Mic2, Globe2, TypeIcon } from "lucide-react";
import { FaRecordVinyl } from "react-icons/fa";

export default function VoiceCallFeatures() {
  const features = [
    {
      icon: <Volume className="w-6 h-6 text-white" />,
      title: "Quality and Clarity",
      desc: "Ensures optimal clarity with a 48 kHz sampling rate and full-sound bandwidth capture for HD audio quality up to 192kbps.",
    },
    {
      icon: <FaRecordVinyl className="w-6 h-6 text-white" />,
      title: "Recording",
      desc: "Record live audio events in the cloud or on-premises. You control the audio format, location for storage, and voice quality.",
    },
    {
      icon: <HeadphonesIcon className="w-6 h-6 text-white" />,
      title: "Real-time Voice AI",
      desc: "Connect with your choice of LLM and text-to-speech voice to build custom voice AI agents and integrate into your apps.",
    },
    {
      icon: <Mic2 className="w-6 h-6 text-white" />,
      title: "AI-powered Noise Suppression",
      desc: "Enable distraction-free live streaming and conversations with AI Noise Suppression, the platform adapts to variant acoustic conditions to remove distractions.",
    },
    {
      icon: <Globe2 className="w-6 h-6 text-white" />,
      title: "3D Spatial Audio",
      desc: "Enable 3D Spatial Audio to provide an immersive and natural audio experience that makes users feel like they are in the same room.",
    },
    {
      icon: <TypeIcon className="w-6 h-6 text-white" />,
      title: "Real-Time Speech to Text",
      desc: "Securely and accurately transcribe and record audio in real-time and organize recordings and transcripts to speed up workflows.",
    },
  ];

  return (
    <section className="bg-black text-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold lg:font-bold text-center mb-12">
          Voice Call SDK Features
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 hover:border-neutral-700 transition-all duration-300 text-left"
            >
              {/* Icon on top (aligned left) */}
              <div className="bg-[#fdd204]/20 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                {feature.icon}
              </div>

              {/* Title & Description */}
              <h3 className="font-medium text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

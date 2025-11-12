import { Cpu, ShieldCheck, Zap, WifiOff, Lock, Server } from "lucide-react";

export default function ConversationalFeatures() {
  const features = [
    {
      icon: <Cpu className="w-6 h-6 text-white" />,
      title: "Any LLM model integration",
      desc: "Seamlessly integrate any existing LLM model or framework for real-time voice interactions.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
      title: "Interaction & moderation",
      desc: "Supports customizable rules, plug-ins, and filters to manage appropriate AI responses.",
    },
    {
      icon: <Zap className="w-6 h-6 text-white" />,
      title: "Reduced response delays",
      desc: "Optimized streaming pipeline for faster, human-like AI voice experiences.",
    },
    {
      icon: <WifiOff className="w-6 h-6 text-white" />,
      title: "Built-in latency mitigation technology",
      desc: "Smart buffering and prediction ensure smooth speech even in poor network conditions.",
    },
    {
      icon: <Lock className="w-6 h-6 text-white" />,
      title: "End-to-end data encryption",
      desc: "All transmitted data is encrypted to maintain security and privacy standards.",
    },
    {
      icon: <Server className="w-6 h-6 text-white" />,
      title: "Scalable multi-agent hosting",
      desc: "Deploy and scale voice agents across multiple environments effortlessly.",
    },
  ];

  return (
    <section className="bg-black text-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold lg:font-bold text-center mb-12">
          Create real-time AI voice agents with any LLM
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 hover:border-neutral-700 transition-all duration-300 text-left"
            >
              {/* Icon on top (aligned left) */}
              <div className="bg-[#f7b518]/20 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                {feature.icon}
              </div>

              {/* Title & Description */}
              <h3 className="font-medium text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

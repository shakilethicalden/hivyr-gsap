import { Image } from "next/image";
import { Image as ImageIcon, Users, BarChart2, MessageCircle, ShieldCheck, Globe2 } from "lucide-react";

export default function ChatFeatures() {
  const features = [
    {
      icon: <ImageIcon className="w-6 h-6 text-white" />,
      title: "Rich media messages",
      desc: "Support emojis, GPS locations, structured messages, push notifications, and rich-media files with auto-generated thumbnails with Agora’s Chat API service.",
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Channel and user management",
      desc: "Customize channel metadata, push notification behavior, and message history storage based on use cases and perform role-based user management.",
    },
    {
      icon: <BarChart2 className="w-6 h-6 text-white" />,
      title: "Chat analytics",
      desc: "Easily monitor, measure, and improve quality of experience with Agora Analytics and Datadog integration, keeping a pulse on both usage and quality metrics from Agora’s Chat SDK.",
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-white" />,
      title: "Message essentials",
      desc: "Allow offline messaging, message recall and delete, read receipts, presence and typing indicator, push notifications, and exporting chat history.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
      title: "Security and compliance",
      desc: "Build a secure chat application with TLS/SSL and file encryption and ensure data privacy compliance by allowing users to erase their personal data.",
    },
    {
      icon: <Globe2 className="w-6 h-6 text-white" />,
      title: "Message translation",
      desc: "Enable auto, on-demand, or push translation so your users can chat in their preferred language.",
    },
  ];

  return (
    <section className="bg-black text-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold lg:font-bold text-center mb-12">
          Chat Features
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 hover:border-neutral-700 transition-all duration-300 text-left"
            >
              {/* Icon */}
              <div className="bg-[#f7b518]/20 w-12 h-12 flex items-center justify-center rounded-full mb-4">
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

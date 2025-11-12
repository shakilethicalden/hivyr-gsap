import { Video, Monitor, Puzzle, Record, VideoOff, Globe, VideoOffIcon, Globe2 } from "lucide-react";
import { FaRecordVinyl } from "react-icons/fa";

export default function VideoCallFeatures() {
    const features = [
        {
            icon: <Video className="w-6 h-6 text-white" />,
            title: "Reliable video communication",
            desc: "Agora’s video chat API ensures consistent video quality, free of stutter, jitter, and lag, even under challenging network conditions.",
        },
        {
            icon: <Monitor className="w-6 h-6 text-white" />,
            title: "Screen sharing and collaboration",
            desc: "Video conferencing solutions support screen sharing, interactive whiteboards, and other advanced collaboration features.",
        },
        {
            icon: <Puzzle className="w-6 h-6 text-white" />,
            title: "Easy-to-add extensions",
            desc: "Quick integration of powerful video conferencing features from AI Noise Suppression to Real-Time Speech to Text.",
        },
        {
            icon: <FaRecordVinyl className="w-6 h-6 text-white" />,
            title: "Call recording",
            desc: "Enable video meeting recording in the cloud or on-premises with control over the format, storage, and quality.",
        },
        {
            icon: <VideoOffIcon className="w-6 h-6 text-white" />,
            title: "Multi-track video",
            desc: "Support for multiple audio and video tracks making it easy to publish multiple camera or microphone streams in one instance.",
        },
        {
            icon: <Globe2 className="w-6 h-6 text-white" />,
            title: "Global scalability",
            desc: "Scale from 1:1 to millions of users on the video call API powering 80 billion monthly minutes of real-time voice and video to users in over 200 countries and regions.",
        },
    ];

    return (
        <section className="bg-black text-white py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12">
                    Video Call SDK Features
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

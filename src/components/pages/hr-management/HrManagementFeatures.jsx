import { Users, Calendar, ClipboardCheck, BarChart2, FileText, Globe2 } from "lucide-react";

export default function HrManagementFeatures() {
    const features = [
        {
            icon: <Users className="w-6 h-6 text-white" />,
            title: "Employee Management",
            desc: "Easily manage employee profiles, roles, departments, and personal information in one centralized system.",
        },
        {
            icon: <Calendar className="w-6 h-6 text-white" />,
            title: "Attendance & Leave Tracking",
            desc: "Monitor attendance, track leaves, and automate approvals to streamline workforce management.",
        },
        {
            icon: <ClipboardCheck className="w-6 h-6 text-white" />,
            title: "Recruitment & Onboarding",
            desc: "Simplify hiring with candidate tracking, automated workflows, and smooth onboarding for new employees.",
        },
        {
            icon: <BarChart2 className="w-6 h-6 text-white" />,
            title: "Performance Management",
            desc: "Set goals, track KPIs, and conduct performance reviews to ensure employee growth and engagement.",
        },
        {
            icon: <FileText className="w-6 h-6 text-white" />,
            title: "Payroll & Benefits",
            desc: "Automate salary calculations, tax deductions, and benefits management for accurate and timely payments.",
        },
        {
            icon: <Globe2 className="w-6 h-6 text-white" />,
            title: "Global Compliance",
            desc: "Ensure HR policies comply with local labor laws, regulations, and international standards.",
        },
    ];

    return (
        <section className="bg-black text-white py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold lg:font-bold text-center mb-12">
                    HR Management Features
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

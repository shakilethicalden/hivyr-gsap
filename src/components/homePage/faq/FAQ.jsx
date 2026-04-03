"use client";
import React, { useState, useRef, useEffect } from "react";
import { Plus, Minus, Edit3, Shield, MessageCircle, CreditCard, Zap, Users, Settings } from "lucide-react";
import { gsap } from "gsap";

const faqData = [
    {
        category: "Getting Started",
        icon: <Edit3 className="w-4 h-4" />,
        questions: [
            {
                question: "What are AI Agents and how can they benefit my business?",
                answer: "AI Agents are intelligent virtual assistants that automate complex workflows, handle customer interactions, process data, and execute tasks autonomously. They benefit businesses by reducing operational costs by up to 40%, improving response times by 300%, and freeing up your team to focus on strategic initiatives. Our AI Agents work 24/7, never take breaks, and consistently deliver high-quality results.",
            },
            {
                question: "How do I start using AI Agents for my business?",
                answer: "Getting started is simple and takes just 3 steps. First, schedule a free 30-minute consultation to discuss your business needs and pain points. Second, our team designs and deploys custom AI Agents tailored to your specific workflows within 48 hours. Third, we provide comprehensive training and onboarding support to ensure your team is confident using the platform. You'll see results within the first week of deployment.",
            },
            {
                question: "What types of tasks can AI Agents handle?",
                answer: "Our AI Agents are incredibly versatile and can handle dozens of tasks including: 24/7 customer support and ticket resolution, lead generation and qualification, automated data entry and processing, smart appointment scheduling, social media management and content creation, email automation and newsletter management, market research and competitor analysis, real-time report generation, inventory management alerts, and intelligent workflow orchestration across all your business tools.",
            },
            {
                question: "How quickly can I see ROI after implementing AI Agents?",
                answer: "Most of our clients see positive ROI within the first 2-3 months of deployment. On average, businesses save 40-60 hours per week in manual work, reduce operational costs by 35-50%, and increase customer satisfaction scores by 25%. We provide a detailed ROI analysis during your consultation and track actual results through our analytics dashboard to ensure you're achieving your goals.",
            },
        ],
    },
    {
        category: "Security & Privacy",
        icon: <Shield className="w-4 h-4" />,
        questions: [
            {
                question: "How do you ensure my data is secure?",
                answer: "Security is our top priority. We implement enterprise-grade encryption (AES-256 at rest, TLS 1.3 in transit), maintain SOC 2 Type II compliance, and adhere to GDPR, CCPA, and HIPAA standards. All data processing occurs in secure, isolated environments with strict access controls. We undergo regular third-party security audits and penetration testing to ensure your data remains protected at all times.",
            },
            {
                question: "Where is my data stored and who has access to it?",
                answer: "You have full control over your data residency. We offer deployment options across AWS, Azure, and GCP with data centers in North America, Europe, and Asia-Pacific. Only authorized team members with explicit permissions can access your data, and all access is logged and monitored. We never share your data with third parties without your explicit consent.",
            },
            {
                question: "Do you offer on-premise deployment for enterprises?",
                answer: "Yes, we offer on-premise and Virtual Private Cloud (VPC) deployment options for enterprise clients with strict security requirements. This allows your AI Agents to operate within your private infrastructure while maintaining all intelligent capabilities. Our team handles the setup and ensures seamless integration with your existing systems.",
            },
            {
                question: "How do you handle data backup and disaster recovery?",
                answer: "We maintain automated daily backups with point-in-time recovery options. Our infrastructure is designed for high availability across multiple availability zones, ensuring 99.9% uptime. In the unlikely event of a failure, our disaster recovery protocols ensure minimal data loss and rapid restoration of services.",
            },
        ],
    },
    {
        category: "Technical Support",
        icon: <MessageCircle className="w-4 h-4" />,
        questions: [
            {
                question: "What level of support is included with my plan?",
                answer: "All plans include dedicated technical support with guaranteed response times. You get access to our support portal, email support, and live chat. Response times vary by plan: Starter (24-hour response), Professional (12-hour response), and Enterprise (2-hour response with dedicated account manager). All plans include our comprehensive knowledge base, video tutorials, and onboarding documentation.",
            },
            {
                question: "Do you provide training for my team?",
                answer: "Absolutely! We offer comprehensive training programs tailored to your team's needs. This includes live onboarding sessions (up to 4 hours), recorded video tutorials, detailed documentation, and monthly workshops on advanced features. Enterprise clients receive custom training programs and quarterly strategy sessions with our customer success team.",
            },
            {
                question: "What's your uptime guarantee and how do you handle outages?",
                answer: "We guarantee 99.9% uptime for all production deployments backed by a service level agreement (SLA). Our infrastructure is monitored 24/7 with proactive alerting. In the rare event of an outage, our engineering team is immediately notified and works to restore services within minutes. All incidents are documented, and root cause analysis is shared with affected clients.",
            },
            {
                question: "Can I get help with custom AI Agent development?",
                answer: "Yes! Our professional services team can assist with developing custom AI Agents for complex use cases. We offer consulting services to design optimal workflows, custom integration development, and specialized training for your team. Enterprise clients receive dedicated engineering support for their custom requirements.",
            },
        ],
    },
    {
        category: "Pricing & Plans",
        icon: <CreditCard className="w-4 h-4" />,
        questions: [
            {
                question: "How is pricing structured for AI Agents?",
                answer: "We offer flexible, transparent pricing based on your usage needs. Plans start at $299/month for 1,000 AI interactions, with volume discounts available as you scale. All plans include core features like multi-channel deployment, analytics dashboard, and basic integrations. Enterprise clients receive custom pricing with unlimited interactions, dedicated support, and advanced security features.",
            },
            {
                question: "Is there a long-term contract required?",
                answer: "No long-term contracts are required! We offer both monthly and annual billing options. Annual plans come with a 15% discount. You can upgrade, downgrade, or cancel your plan at any time with 30 days notice. There are no hidden fees or setup costs for standard deployments.",
            },
            {
                question: "What's included in the free trial?",
                answer: "Our 14-day free trial includes full platform access, up to 500 AI interactions, deployment of 2 custom AI Agents, integration with up to 5 tools, and dedicated onboarding support. You can cancel anytime during the trial with no obligations. After the trial, you can choose the plan that best fits your needs.",
            },
            {
                question: "Are there any setup or implementation fees?",
                answer: "For standard deployments, there are no setup fees. Implementation, onboarding, and training are all included in your subscription. For complex custom deployments requiring specialized integrations or custom AI model training, we provide a separate quote based on the scope of work. All fees are discussed upfront with no surprises.",
            },
        ],
    },
    {
        category: "Integrations",
        icon: <Zap className="w-4 h-4" />,
        questions: [
            {
                question: "What tools and platforms can AI Agents integrate with?",
                answer: "Our AI Agents seamlessly integrate with 100+ popular business tools including CRM systems (Salesforce, HubSpot), communication platforms (Slack, Microsoft Teams), e-commerce (Shopify, WooCommerce), customer support (Zendesk, Intercom), and productivity suites (Google Workspace, Microsoft 365). We also offer custom API integrations for any specialized tools your business uses.",
            },
            {
                question: "How long does it take to set up integrations?",
                answer: "Most standard integrations can be set up within minutes using our no-code connection wizard. Simply authenticate your accounts, select the data you want to sync, and our AI Agents will start working immediately. For custom integrations, our team typically completes the setup within 3-5 business days.",
            },
            {
                question: "Can I connect multiple tools to work together?",
                answer: "Absolutely! One of our core strengths is creating intelligent workflows that connect multiple tools. For example, your AI Agent can pull leads from Facebook Ads, add them to your CRM, send welcome emails through Mailchimp, and schedule follow-up tasks in Asana - all automatically. Our visual workflow builder makes it easy to create complex automations without any coding.",
            },
            {
                question: "Do you offer API access for custom integrations?",
                answer: "Yes, all plans include access to our comprehensive REST API and webhooks. This allows your development team to build custom integrations with any internal or external system. We provide detailed API documentation, SDKs for popular programming languages, and dedicated developer support to ensure smooth implementation.",
            },
        ],
    },
];

const FaqItem = ({ item, isOpen, onClick }) => {
    const contentRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            gsap.to(contentRef.current, { height: "auto", opacity: 1, duration: 0.4, ease: "power2.out" });
        } else {
            gsap.to(contentRef.current, { height: 0, opacity: 0, duration: 0.3, ease: "power2.in" });
        }
    }, [isOpen]);

    return (
        <div className="border border-gray-100 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 overflow-hidden bg-white transition-all duration-300 hover:shadow-md">
            <button
                className="flex justify-between items-center w-full p-4 sm:p-5 md:p-6 text-left focus:outline-none gap-3"
                onClick={onClick}
            >
                <span className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-gray-900 flex-1">
                    {item.question}
                </span>
                <div className="bg-gray-50 rounded-full p-1 border border-gray-200 shrink-0">
                    {isOpen ? 
                        <Minus className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" /> : 
                        <Plus className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                    }
                </div>
            </button>
            <div ref={contentRef} style={{ height: 0, opacity: 0 }} className="px-4 sm:px-5 md:px-6 overflow-hidden">
                <p className="pb-4 sm:pb-5 md:pb-6 text-gray-500 leading-relaxed text-base md:text-lg lg:text-xl ">
                    {item.answer}
                </p>
            </div>
        </div>
    );
};

export default function FAQ() {
    const [activeTab, setActiveTab] = useState("Getting Started");
    const [openIndex, setOpenIndex] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const currentQuestions = faqData.find((t) => t.category === activeTab)?.questions || [];

    // Handle tab change on mobile
    const handleTabChange = (category) => {
        setActiveTab(category);
        setOpenIndex(0);
        setIsMobileMenuOpen(false);
    };

    return (
        <section className="bg-white py-16 lg:py-24 xl:py-28 px-4 sm:px-6 min-h-screen">
            <div className="max-w-7xl mx-auto">
                {/* Header - Responsive */}
                <div className="text-center mb-8 sm:mb-10 md:mb-12">
                    <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#fdd204]/10 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-3 sm:mb-4">
                        <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#fdd204]" />
                        <span className="text-gray-400">FAQ</span>
                    </div>
                    <h2 className="title_text">
                        Got any <span className="underline decoration-[#fdd204] underline-offset-4">Questions?</span>
                    </h2>
                    <p className="paragraph_text text-gray-500 mt-3 sm:mt-4 max-w-3xl mx-auto  px-2">
                        Find answers to common questions about our AI Agent platform. Can't find what you're looking for? Contact our support team.
                    </p>
                </div>

                {/* Mobile Dropdown for Categories */}
                <div className="lg:hidden mb-6">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="w-full flex items-center justify-between gap-2 bg-white border border-gray-200 rounded-xl px-4 py-3 font-semibold text-base md:text-lg text-gray-700 hover:border-[#fdd204] transition-all"
                    >
                        <div className="flex items-center gap-2">
                            {faqData.find(t => t.category === activeTab)?.icon}
                            <span>{activeTab}</span>
                        </div>
                        <svg 
                            className={`w-4 h-4 transition-transform duration-200 ${isMobileMenuOpen ? 'rotate-180' : ''}`}
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    
                    {isMobileMenuOpen && (
                        <div className="mt-2 bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg">
                            {faqData.map((tab) => (
                                <button
                                    key={tab.category}
                                    onClick={() => handleTabChange(tab.category)}
                                    className={`w-full flex items-center gap-2 px-4 py-3 text-base font-medium transition-all duration-200 ${
                                        activeTab === tab.category
                                            ? "bg-[#fdd204]/10 text-[#fdd204]"
                                            : "text-gray-600 hover:bg-gray-50"
                                    }`}
                                >
                                    {tab.icon}
                                    {tab.category}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Tabs Navigation - Desktop */}
                <div className="hidden lg:flex justify-center mb-10 md:mb-12">
                    <div className="flex flex-wrap justify-center gap-2 border border-gray-100 bg-white p-1.5 sm:p-2 rounded-2xl shadow-sm">
                        {faqData.map((tab) => (
                            <button
                                key={tab.category}
                                onClick={() => {
                                    setActiveTab(tab.category);
                                    setOpenIndex(0);
                                }}
                                className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-xl text-base font-medium transition-all duration-200 whitespace-nowrap ${
                                    activeTab === tab.category
                                        ? "bg-[#fdd204] text-black shadow-md"
                                        : "text-gray-600 hover:bg-gray-50"
                                }`}
                            >
                                {tab.icon}
                                <span className="hidden sm:inline">{tab.category}</span>
                                <span className="sm:hidden">
                                    {tab.category === "Getting Started" ? "Start" : 
                                     tab.category === "Security & Privacy" ? "Security" :
                                     tab.category === "Technical Support" ? "Support" :
                                     tab.category === "Pricing & Plans" ? "Pricing" :
                                     tab.category === "Integrations" ? "Integrate" : tab.category}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* FAQ List - Responsive */}
                <div className="space-y-2 max-w-3xl lg:max-w-5xl mx-auto px-0 sm:px-2">
                    {currentQuestions.map((item, index) => (
                        <FaqItem
                            key={index}
                            item={item}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        />
                    ))}
                </div>

                {/* Contact Support CTA - Responsive */}
                {/* <div className="mt-10 sm:mt-12 md:mt-16 text-center">
                    <p className="text-gray-500 text-xs sm:text-sm lg:text-base mb-3 sm:mb-4">Still have questions?</p>
                    <button className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-[#fdd204] hover:shadow-md transition-all duration-200 rounded-lg sm:rounded-xl px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm lg:text-base font-medium text-gray-700">
                        <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        Contact Our Support Team
                    </button>
                </div> */}
            </div>
        </section>
    );
}
"use client";
import React, { useState, useRef, useEffect } from "react";

/**
 * Hivyr AI Chatbot Widget
 * Color scheme: #fdd204 (gold/yellow), white, black
 * Features: Custom chatbot image icon with transparent background, natural text formatting (no ** markers)
 */
const HivyrAIChatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [isBotTyping, setIsBotTyping] = useState(false);
    const [showLeadForm, setShowLeadForm] = useState(false);
    const [leadSubmitted, setLeadSubmitted] = useState(false);
    const [leadData, setLeadData] = useState({ name: "", email: "", company: "" });
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    // Brand Colors
    const colors = {
        primary: "#fdd204",
        primaryDark: "#e6c003",
        primaryLight: "#ffe066",
        white: "#ffffff",
        black: "#000000",
        gray: "#333333",
        lightGray: "#f5f5f5",
        mediumGray: "#e0e0e0",
        gradient: "linear-gradient(135deg, #fdd204 0%, #e6c003 100%)",
    };

    // Auto-scroll to bottom
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    // Focus input when panel opens
    useEffect(() => {
        if (isOpen && !showLeadForm) {
            inputRef.current?.focus();
        }
    }, [isOpen, showLeadForm]);

    // Welcome message - natural formatting, no asterisks or markdown
    useEffect(() => {
        setMessages([
            {
                id: Date.now(),
                sender: "bot",
                text: "🤖 Welcome to Hivyr AI — Your strategic AI automation partner! I'm Nova, your AI assistant. Ready to transform your business with cutting-edge AI solutions?",
                timestamp: new Date(),
            },
            {
                id: Date.now() + 1,
                sender: "bot",
                text: "✨ What we offer:\n• Custom AI Agents & Chatbots\n• Workflow Automation\n• Enterprise AI Integration\n• 24/7 AI Support Solutions\n\n💡 Type 'services' to explore or 'demo' to book a free consultation!",
                timestamp: new Date(),
            },
        ]);
    }, []);

    const getFormattedTime = (date) => {
        return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    };

    // Natural text formatter — removes any ** artifacts and creates clean, human-readable messages
    const formatNaturalText = (text) => {
        // Remove any remaining ** markers (no markdown artifacts)
        let cleaned = text.replace(/\*\*/g, "");
        const lines = cleaned.split("\n");

        return lines.map((line, i) => {
            // Bullet points (• or - or *)
            if (line.trim().startsWith("•") || line.trim().startsWith("-") || line.trim().startsWith("*")) {
                let content = line.trim().substring(1).trim();
                if (content.startsWith("•")) content = content.substring(1).trim();
                return (
                    <div key={i} className="flex items-start gap-2 my-1.5">
                        <span style={{ color: colors.primary }} className="font-bold text-base">▹</span>
                        <span className="flex-1">{content}</span>
                    </div>
                );
            }
            // Numbered list
            if (/^\d+\./.test(line.trim())) {
                return (
                    <div key={i} className="my-1.5 font-medium" style={{ color: colors.black }}>
                        {line.trim()}
                    </div>
                );
            }
            // Empty line
            if (line.trim() === "") return <br key={i} />;
            // Regular paragraph
            return (
                <div key={i} className="my-1">
                    {line}
                </div>
            );
        });
    };

    // Natural, human-like response logic — case-insensitive, no AI-sounding artifacts
    const getNaturalResponse = (userMessage) => {
        const msg = userMessage.toLowerCase().trim();

        // Services
        if (msg.includes("services") || msg.includes("offer") || msg.includes("what do you do") || msg.includes("what can you do")) {
            return "🚀 Hivyr AI Services:\n\n• Custom AI Agents — Intelligent chatbots, voice assistants, and AI workflows built for your business.\n• Process Automation — Streamline operations, reduce costs by 40-60% with smart automation.\n• Enterprise LLM Solutions — Secure, private AI models for your organization.\n• AI Strategy Consulting — End-to-end guidance from ideation to deployment.\n• 24/7 Support AI — Never miss a customer inquiry with intelligent support agents.\n\nAll solutions include dedicated support and continuous optimization. Ready to transform? Type 'demo' to get started!";
        }

        // Demo / Consultation
        if (msg.includes("demo") || msg.includes("book") || msg.includes("consultation") || msg.includes("meeting") || msg.includes("schedule")) {
            setShowLeadForm(true);
            return "🎯 Excellent choice! Let's schedule your free AI consultation. Please share your details below, and one of our AI specialists will contact you within 24 hours. What's your full name?";
        }

        // Pricing
        if (msg.includes("price") || msg.includes("cost") || msg.includes("pricing") || msg.includes("how much")) {
            return "💰 Hivyr AI Pricing Plans:\n\nStarter — $499/month\n• AI Chatbot Integration\n• Basic Workflow Automation\n• Email Support\n\nProfessional — $1,499/month\n• Custom AI Agents\n• Advanced Automation\n• Priority Support\n• Monthly Strategy Call\n\nEnterprise — Custom Pricing\n• Full AI Transformation\n• Dedicated AI Engineer\n• 24/7 Premium Support\n• On-premise Deployment\n\nWant a custom quote? Type 'demo' to speak with our team!";
        }

        // Case Studies
        if (msg.includes("case study") || msg.includes("portfolio") || msg.includes("examples") || msg.includes("clients") || msg.includes("success")) {
            return "📊 Hivyr AI Success Stories:\n\nE-commerce Brand — AI support agent reduced tickets by 70%, saving $200K annually.\n\nHealthcare Network — AI scheduling assistant cut no-shows by 45%, saving 150+ staff hours monthly.\n\nFinTech Startup — AI analyst bot accelerated data processing 4x, with 90% accuracy.\n\nRetail Chain — Voice AI assistant boosted customer engagement by 55%.\n\nReady to be our next success story? Type 'demo' to begin!";
        }

        // About Hivyr
        if (msg.includes("about") || msg.includes("who are you") || msg.includes("company") || msg.includes("hivyr")) {
            return "🏢 About Hivyr AI\n\nFounded in 2023, Hivyr AI is a premier AI automation agency dedicated to helping businesses harness artificial intelligence.\n\nOur mission: Democratize AI access and make enterprise-grade solutions affordable for businesses of all sizes.\n\nThe team includes 30+ AI specialists, engineers, and strategists with over 100 combined years of experience.\n\nWe've partnered with 200+ businesses across e-commerce, healthcare, finance, SaaS, and manufacturing.\n\nJoin the Hivyr family — type 'demo' to get started!";
        }

        // Contact
        if (msg.includes("contact") || msg.includes("email") || msg.includes("phone") || msg.includes("reach") || msg.includes("call")) {
            return "📬 Contact Hivyr AI:\n\n• Email: hello@hivyr.ai\n• Phone: +1 (888) 448-9972\n• Hours: Mon-Fri, 9am-7pm EST\n• Website: www.hivyr.ai\n\nOr simply type 'demo' to book a call — we'll reach out within 24 hours!";
        }

        // E-commerce
        if (msg.includes("ecommerce") || msg.includes("retail") || msg.includes("shop") || msg.includes("store")) {
            return "🛍️ AI Solutions for E-commerce:\n\n• 24/7 customer support AI (handles 85% of inquiries)\n• AI-powered product recommendations\n• Smart inventory forecasting\n• Automated review analysis\n• Cart abandonment recovery via AI messaging\n\nROI: Clients see 3-6x return within first 6 months. Want a demo for your store? Type 'demo'!";
        }

        // Healthcare
        if (msg.includes("healthcare") || msg.includes("medical") || msg.includes("clinic") || msg.includes("hospital") || msg.includes("doctor")) {
            return "🏥 Healthcare AI Solutions:\n\n• AI appointment scheduling & reminders\n• Patient intake and triage automation\n• Medical documentation assistance\n• 24/7 patient FAQ handling\n• HIPAA-compliant secure architecture\n\nTrusted by 25+ healthcare providers. Type 'demo' to see how we can help your practice!";
        }

        // Finance
        if (msg.includes("finance") || msg.includes("banking") || msg.includes("fintech") || msg.includes("bank") || msg.includes("investment")) {
            return "💰 Financial Services AI:\n\n• Customer support automation for banking queries\n• Fraud detection and real-time alerts\n• AI financial advisor assistants\n• Regulatory compliance automation\n• Secure, enterprise-grade deployment\n\nType 'demo' for a personalized walkthrough!";
        }

        // Greetings
        if (msg.match(/^(hi|hello|hey|howdy|greetings|sup|yo)$/)) {
            return "Hello! 👋 I'm Nova from Hivyr AI. Ready to explore how AI can transform your business?\n\nQuick suggestions:\n• Type 'services' — See our offerings\n• Type 'demo' — Book free consultation\n• Type 'pricing' — View plans\n• Type 'case study' — See client successes\n\nWhat would you like to learn about?";
        }

        // How are you
        if (msg.includes("how are you") || msg.includes("how are things")) {
            return "I'm doing fantastic! 🌟 Thanks for asking. I'm powered by Hivyr AI and ready to help you transform your business with intelligent automation. What can I help you with today?";
        }

        // Thanks
        if (msg.includes("thank") || msg.includes("thanks") || msg.includes("thx")) {
            return "You're welcome! 🙌 At Hivyr AI, we're passionate about helping businesses thrive with AI. Is there anything specific about AI automation you'd like to explore? I'm happy to share more insights!";
        }

        // Goodbye
        if (msg.includes("bye") || msg.includes("goodbye") || msg.includes("see you") || msg.includes("later")) {
            return "Take care! 👋 Feel free to come back anytime you want to explore AI solutions for your business. Have a wonderful day! 🌟";
        }

        // Help
        if (msg.includes("help") || msg.includes("what can i ask")) {
            return "🆘 How can I help you today?\n\nYou can ask me about:\n• services — Learn what Hivyr AI offers\n• pricing — See our plans\n• demo — Book a free consultation\n• case study — See client success stories\n• ecommerce / healthcare / finance — Industry solutions\n• about — Learn about our company\n• contact — Get in touch\n\nWhat would you like to know?";
        }

        // Default friendly response
        return "🤖 Thanks for reaching out to Hivyr AI! I'm here to help you discover the perfect AI solution for your business.\n\nTry asking about:\n• Services & offerings\n• Pricing plans\n• Case studies\n• Industry solutions (e-commerce, healthcare, finance)\n• Booking a free consultation\n\nWhat sparks your interest?";
    };

    const sendBotReply = async (userText) => {
        setIsBotTyping(true);
        await new Promise((resolve) => setTimeout(resolve, 600 + Math.random() * 400));

        const replyText = getNaturalResponse(userText);
        if (replyText) {
            setMessages((prev) => [
                ...prev,
                {
                    id: Date.now(),
                    sender: "bot",
                    text: replyText,
                    timestamp: new Date(),
                },
            ]);
        }
        setIsBotTyping(false);
    };

    const handleSendMessage = async () => {
        if (inputValue.trim() === "") return;
        if (isBotTyping) return;

        const userMessage = inputValue.trim();

        setMessages((prev) => [
            ...prev,
            {
                id: Date.now(),
                sender: "user",
                text: userMessage,
                timestamp: new Date(),
            },
        ]);

        setInputValue("");
        await sendBotReply(userMessage);
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    const updateLeadForm = (field, value) => {
        setLeadData((prev) => ({ ...prev, [field]: value }));
    };

    const handleLeadSubmit = (e) => {
        e.preventDefault();
        if (leadData.name && leadData.email) {
            setLeadSubmitted(true);
            setMessages((prev) => [
                ...prev,
                {
                    id: Date.now(),
                    sender: "user",
                    text: `Name: ${leadData.name}, Email: ${leadData.email}, Company: ${leadData.company || "Not specified"}`,
                    timestamp: new Date(),
                },
                {
                    id: Date.now() + 1,
                    sender: "bot",
                    text: `🎉 Thanks ${leadData.name.split(" ")[0]}! Your consultation request is confirmed.\n\nOne of our AI specialists will contact you at ${leadData.email} within 24 hours to schedule your personalized demo.\n\nIn the meantime, feel free to ask me anything about our AI solutions!\n\nQuick links:\n• Type 'services' to explore offerings\n• Type 'pricing' for plan details\n• Type 'case study' to see client successes\n\nWe can't wait to help transform your business with AI! 🚀`,
                    timestamp: new Date(),
                },
            ]);
            setShowLeadForm(false);
            setLeadData({ name: "", email: "", company: "" });
        }
    };

    const handleLeadFormNext = () => {
        if (!leadData.name) {
            setMessages((prev) => [
                ...prev,
                {
                    id: Date.now(),
                    sender: "bot",
                    text: "What's your full name?",
                    timestamp: new Date(),
                },
            ]);
        } else if (!leadData.email) {
            setMessages((prev) => [
                ...prev,
                {
                    id: Date.now(),
                    sender: "bot",
                    text: `Thanks ${leadData.name.split(" ")[0]}! What's your email address?`,
                    timestamp: new Date(),
                },
            ]);
        } else {
            handleLeadSubmit({ preventDefault: () => { } });
        }
    };

    // Add keyframes animation to document
    useEffect(() => {
        const styleSheet = document.createElement("style");
        styleSheet.textContent = `
      @keyframes pulse {
        0% { transform: scale(1); opacity: 0.6; }
        70% { transform: scale(1.3); opacity: 0; }
        100% { transform: scale(1.3); opacity: 0; }
      }
      @keyframes slideUp {
        from { opacity: 0; transform: translateY(30px) scale(0.95); }
        to { opacity: 1; transform: translateY(0) scale(1); }
      }
      @keyframes fadeSlideUp {
        from { opacity: 0; transform: translateY(8px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes blink {
        0%, 80%, 100% { opacity: 0.3; transform: translateY(0); }
        40% { opacity: 1; transform: translateY(-3px); }
      }
    `;
        document.head.appendChild(styleSheet);
        return () => {
            document.head.removeChild(styleSheet);
        };
    }, []);

    return (
        <div className="fixed bottom-6 right-6 z-[9999] font-sans">
            {/* Floating Toggle Button with Custom Chatbot Image - Transparent Background */}
            <button
                className="relative transition-all duration-200 hover:scale-105 cursor-pointer"
                
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.08)";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                }}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="relative">
                    {/* Custom Chatbot Icon Image - Transparent background PNG/SVG */}
                    <img
                        src="/video/chatbot.gif"
                        alt="Hivyr AI Chatbot"
                        className="w-[150px] h-[150px] object-cover"
                    />
                </div>
            </button>

            {/* Chat Panel */}
            {isOpen && (
                <div className="absolute bottom-[84px] right-0 w-[400px] h-[620px] bg-white rounded-[28px] shadow-2xl flex flex-col overflow-hidden animate-[slideUp_0.3s_cubic-bezier(0.16,1,0.3,1)] border border-gray-200">
                    <div className="bg-black text-white p-4 flex items-center justify-between border-b-2" style={{ borderBottomColor: colors.primary }}>
                        <div className="flex items-center gap-3">
                            <div className="bg-transparent w-[42px] h-[42px] rounded-xl flex items-center justify-center overflow-hidden">
                                {/* Header Logo - Transparent background */}
                                <img
                                    src="/images/logo/logo-2.png"
                                    alt="Hivyr AI"
                                    className="w-9 h-9 object-contain bg-transparent"
                                />
                            </div>
                            <div>
                                <div className="text-base font-bold mb-0.5 flex items-center gap-1.5 text-white">
                                    Hivyr AI <span className="bg-[#fdd204] text-black text-[10px] px-1.5 py-0.5 rounded-full font-bold">✓</span>
                                </div>
                                <p className="text-[0.7rem] opacity-80 m-0 text-white">AI Automation Agency • Online</p>
                            </div>
                        </div>
                        <button
                            className="bg-white/20 border-none text-white w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 hover:bg-white/30 text-base"
                            onClick={() => setIsOpen(false)}
                        >
                            ✕
                        </button>
                    </div>

                    <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3.5 bg-white">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={`flex flex-col max-w-[88%] animate-[fadeSlideUp_0.25s_ease] ${
                                    msg.sender === "bot" ? "self-start" : "self-end"
                                }`}
                            >
                                <div
                                    className={`p-3 rounded-2xl text-[0.9rem] leading-relaxed break-words flex gap-2 ${
                                        msg.sender === "bot" 
                                            ? "bg-gray-100 text-black rounded-bl-md shadow-sm" 
                                            : "bg-[#fdd204] text-black rounded-br-md"
                                    }`}
                                >
                                    {msg.sender === "bot" && (
                                        <div className="bg-[#fdd204] w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-black text-xs">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <circle cx="12" cy="12" r="10" />
                                                <path d="M8 12h8M12 8v8" />
                                            </svg>
                                        </div>
                                    )}
                                    <div className="flex-1">{formatNaturalText(msg.text)}</div>
                                </div>
                                <div className={`text-[0.6rem] text-gray-500 mt-1 ${
                                    msg.sender === "user" ? "text-right mr-0" : "ml-8"
                                }`}>
                                    {getFormattedTime(msg.timestamp)}
                                </div>
                            </div>
                        ))}

                        {isBotTyping && (
                            <div className="flex flex-col max-w-[88%] self-start">
                                <div className="flex items-center gap-1.5 bg-gray-100 p-3 rounded-2xl rounded-bl-md">
                                    <span className="w-2 h-2 bg-[#fdd204] rounded-full animate-[blink_1.2s_infinite_ease_both]"></span>
                                    <span className="w-2 h-2 bg-[#fdd204] rounded-full animate-[blink_1.2s_infinite_ease_both] delay-200"></span>
                                    <span className="w-2 h-2 bg-[#fdd204] rounded-full animate-[blink_1.2s_infinite_ease_both] delay-400"></span>
                                    <span className="text-xs text-gray-600 ml-2">Hivyr AI is thinking</span>
                                </div>
                            </div>
                        )}

                        {/* Lead Form */}
                        {showLeadForm && !leadSubmitted && (
                            <div className="my-2">
                                <div className="bg-white rounded-2xl p-4 border border-[#fdd204] shadow-sm">
                                    <div className="flex items-center gap-2 font-semibold text-black mb-4 text-sm">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={colors.primary} strokeWidth="2">
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
                                        </svg>
                                        <span>Free AI Consultation</span>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Full name"
                                        value={leadData.name}
                                        onChange={(e) => updateLeadForm("name", e.target.value)}
                                        onKeyPress={(e) => e.key === "Enter" && handleLeadFormNext()}
                                        className="w-full p-2.5 mb-3 border border-gray-200 rounded-xl text-sm font-sans transition-all duration-200 focus:outline-none focus:border-[#fdd204]"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email address"
                                        value={leadData.email}
                                        onChange={(e) => updateLeadForm("email", e.target.value)}
                                        onKeyPress={(e) => e.key === "Enter" && handleLeadFormNext()}
                                        className="w-full p-2.5 mb-3 border border-gray-200 rounded-xl text-sm font-sans transition-all duration-200 focus:outline-none focus:border-[#fdd204]"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Company (optional)"
                                        value={leadData.company}
                                        onChange={(e) => updateLeadForm("company", e.target.value)}
                                        onKeyPress={(e) => e.key === "Enter" && handleLeadFormNext()}
                                        className="w-full p-2.5 mb-3 border border-gray-200 rounded-xl text-sm font-sans transition-all duration-200 focus:outline-none focus:border-[#fdd204]"
                                    />
                                    <button
                                        onClick={handleLeadFormNext}
                                        className="w-full bg-[#fdd204] text-black border-none py-3 rounded-xl font-semibold cursor-pointer transition-all duration-200 mt-2 hover:-translate-y-0.5 hover:shadow-md"
                                    >
                                        Request Demo →
                                    </button>
                                    <p className="text-[0.7rem] text-gray-500 text-center mt-3 mb-0">
                                        We'll respond within 24h. No spam, ever.
                                    </p>
                                </div>
                            </div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    <div className="bg-white border-t border-gray-200 p-3.5 flex gap-2.5 items-center">
                        <input
                            ref={inputRef}
                            type="text"
                            placeholder={showLeadForm ? "Fill the form above..." : "Ask about AI solutions..."}
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={handleKeyPress}
                            disabled={isBotTyping || showLeadForm}
                            className="flex-1 border border-gray-200 rounded-full py-3 px-4 text-sm font-sans outline-none transition-all duration-200 focus:border-[#fdd204] disabled:opacity-50 disabled:cursor-not-allowed"
                        />
                        <button
                            onClick={handleSendMessage}
                            disabled={isBotTyping || !inputValue.trim() || showLeadForm}
                            className={`bg-[#fdd204] border-none w-11 h-11 rounded-full text-black cursor-pointer transition-all duration-200 flex items-center justify-center text-base ${
                                (isBotTyping || !inputValue.trim() || showLeadForm) ? "opacity-50 cursor-not-allowed" : "hover:scale-95 hover:bg-[#e6c003]"
                            }`}
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                            </svg>
                        </button>
                    </div>

                    <div className="text-center py-2 text-[0.65rem] text-gray-500 border-t border-gray-200 bg-white">
                        <span>Powered by Hivyr AI — Enterprise-grade AI agents</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HivyrAIChatbot;
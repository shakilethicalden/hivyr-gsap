"use client";

import { DollarSign } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { FiCalendar, FiClock, FiCheck } from "react-icons/fi";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [hoveredCard, setHoveredCard] = useState(null);

  // Pricing data with monthly and yearly options
  const plans = [
    {
      id: "starter",
      name: "Starter",
      description: "Ideal for individuals getting started",
      monthlyPrice: 19,
      yearlyPrice: 190,
      features: [
        "Access to essential tools",
        "Secure data management",
        "Community engagement features",
        "24/7 customer support",
        "Monthly updates and resources",
      ],
      buttonText: "Choose essential",
      buttonLink: "/pricing",
    },
    {
      id: "pro",
      name: "Pro Plan",
      description: "Enhanced features for growing teams",
      monthlyPrice: 49,
      yearlyPrice: 490,
      features: [
        "All Starter Plan benefits",
        "Advanced privacy controls",
        "Collaboration tools for teams",
        "API access for integrations",
        "Priority support response",
      ],
      buttonText: "Choose scale",
      buttonLink: "/pricing",
      popular: true,
    },
    {
      id: "enterprise",
      name: "Enterprise",
      description: "Comprehensive solutions for organization",
      monthlyPrice: 99,
      yearlyPrice: 990,
      features: [
        "All Pro Plan benefits",
        "Customizable features and branding",
        "Dedicated account manager",
        "In-depth analytics and reporting",
        "Onboarding and training sessions",
      ],
      buttonText: "Book a call",
      buttonLink: "/pricing",
    },
  ];

  const getCurrentPrice = (plan) => {
    if (billingCycle === "yearly") {
      return plan.yearlyPrice;
    }
    return plan.monthlyPrice;
  };

  const getPeriodText = () => {
    return billingCycle === "yearly" ? "/year" : "/month";
  };

  const getSaveText = (plan) => {
    if (billingCycle === "yearly") {
      const monthlyEquivalent = plan.yearlyPrice / 12;
      const saving = plan.monthlyPrice - monthlyEquivalent;
      if (saving > 0) {
        return `Save $${saving.toFixed(2)}/month`;
      }
    }
    return null;
  };

  return (
    <section id="pricing" className="bg-white text-black mt-16 lg:mt-24 xl:mt-28 flex justify-center">
      <div className="max-w-7xl w-full px-4 sm:px-6">
        {/* Top heading section - Responsive */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 lg:gap-8 mb-12 sm:mb-16">
          <div className="flex flex-col gap-3 sm:gap-4">
            <div className="inline-flex items-center gap-1.5 w-fit sm:gap-2 bg-[#fdd204]/10 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-3 sm:mb-4">
              <DollarSign className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#fdd204]" />
              <span className="text-gray-400">Pricing</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
              Start Today, <br className="hidden sm:block" /> Cancel Anytime
            </h2>
          </div>

          {/* Toggle Switch - Responsive */}
          <div className="flex bg-gray-50 p-1 rounded-2xl border border-gray-100 w-full sm:w-auto">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`flex items-center justify-center gap-1 sm:gap-2 flex-1 sm:flex-none px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl transition-all text-sm sm:text-base ${billingCycle === "monthly"
                ? "bg-[#fdd204] text-black shadow-md"
                : "text-gray-500 hover:text-gray-700"
                }`}
            >
              <FiCalendar className="text-sm sm:text-base" /> Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`flex items-center justify-center gap-1 sm:gap-2 flex-1 sm:flex-none px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl transition-all text-sm sm:text-base ${billingCycle === "yearly"
                ? "bg-[#fdd204] text-black shadow-md"
                : "text-gray-500 hover:text-gray-700"
                }`}
            >
              <FiClock className="text-sm sm:text-base" /> Yearly
            </button>
          </div>
        </div>

        {/* Pricing Cards - Fully Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {plans.map((plan) => {
            const currentPrice = getCurrentPrice(plan);
            const periodText = getPeriodText();
            const saveText = getSaveText(plan);
            const isHovered = hoveredCard === plan.id;

            // Determine background color based on hover state
            let bgColor = "";
            if (isHovered) {
              bgColor = "bg-[#fdd204]";
            } else {
              bgColor = "bg-gray-50/50";
            }

            // Determine text color for description and features
            const descriptionColorClass = isHovered ? "text-black font-medium" : "text-gray-600";
            const featuresTextColorClass = isHovered ? "text-black" : "text-gray-600";

            return (
              <div
                key={plan.id}
                onMouseEnter={() => setHoveredCard(plan.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`${bgColor} rounded-2xl sm:rounded-[2rem] p-6 sm:p-8 flex flex-col transition-all duration-300 border border-gray-100 relative ${plan.popular ? "shadow-xl ring-2 ring-[#fdd204]/50" : ""
                  }`}
              >
                {/* Popular Badge - Responsive */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#fdd204] text-black px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-bold shadow-md whitespace-nowrap">
                    Most Popular
                  </div>
                )}

                <h3 className="text-xl sm:text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-1 flex-wrap">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-bold">${currentPrice}</span>
                  <span className={`text-sm sm:text-base ${isHovered ? "text-black" : "text-gray-500"}`}>
                    {periodText}
                  </span>
                </div>
                {saveText && (
                  <p className={`text-xs sm:text-sm ${isHovered ? "text-black" : "text-gray-500"} font-medium mb-3 sm:mb-4`}>{saveText}</p>
                )}
                <p
                  className={`mb-6 sm:mb-8 text-sm sm:text-base ${descriptionColorClass}`}
                >
                  {plan.description}
                </p>

                <Link
                  href={plan.buttonLink}
                  className="font-bold py-3 sm:py-4 rounded-full text-center transition mb-4 bg-black text-white hover:bg-zinc-800 text-sm sm:text-base"
                >
                  {plan.buttonText}
                </Link>
                <p
                  className={`text-center text-xs sm:text-sm mb-6 sm:mb-8 ${isHovered ? "text-black" : "text-gray-400"
                    }`}
                >
                  14-day free trial
                </p>

                <div
                  className={`rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-100 flex-grow ${isHovered ? "bg-white/50" : "bg-white"
                    }`}
                >
                  <ul className={`space-y-3 sm:space-y-4 ${featuresTextColorClass}`}>
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base">
                        <FiCheck className={`flex-shrink-0 mt-0.5 ${isHovered ? "text-black" : "text-[#fdd204]"}`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info - Responsive */}
        {/* <div className="mt-12 sm:mt-16 text-center">
          <p className="text-gray-500 text-xs sm:text-sm">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default Pricing;
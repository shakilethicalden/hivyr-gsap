"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FiCalendar, FiClock } from "react-icons/fi";

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
    <section className="bg-white text-black py-20 lg:py-24 flex justify-center">
      <div className="max-w-7xl w-full px-6">
        {/* Top heading section */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 border border-gray-200 w-fit px-3 py-1 rounded-full text-sm font-medium">
              <span className="text-gray-400">✦</span> Pricing
            </div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
              Start Today, <br /> Cancel Anytime
            </h2>
          </div>

          {/* Toggle Switch */}
          <div className="mt-8 md:mt-0 flex bg-gray-50 p-1 rounded-2xl border border-gray-100">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all ${
                billingCycle === "monthly"
                  ? "bg-[#fdd204] text-black shadow-md"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <FiCalendar /> Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all ${
                billingCycle === "yearly"
                  ? "bg-[#fdd204] text-black shadow-md"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <FiClock /> Yearly
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                className={`${bgColor} rounded-[2rem] p-8 flex flex-col transition-all duration-300 border border-gray-100`}
              >
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-5xl font-bold">${currentPrice}</span>
                  <span className={isHovered ? "text-black" : "text-gray-500"}>
                    {periodText}
                  </span>
                </div>
                {saveText && (
                  <p className="text-sm text-green-600 font-medium mb-4">{saveText}</p>
                )}
                <p
                  className={`mb-8 ${descriptionColorClass}`}
                >
                  {plan.description}
                </p>

                <Link
                  href={plan.buttonLink}
                  className="font-bold py-4 rounded-full text-center transition mb-4 bg-black text-white hover:bg-zinc-800"
                >
                  {plan.buttonText}
                </Link>
                <p
                  className={`text-center text-sm mb-8 ${
                    isHovered ? "text-black" : "text-gray-400"
                  }`}
                >
                  14-day free trial
                </p>

                <div
                  className={`rounded-2xl p-6 border border-gray-100 flex-grow ${
                    isHovered ? "bg-white/50" : "bg-white"
                  }`}
                >
                  <ul className={`space-y-4 ${featuresTextColorClass}`}>
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        • {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
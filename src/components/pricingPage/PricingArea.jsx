"use client";
import React, { useState } from "react";

const users = [
    { id: 1, name: "John Doe", avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
    { id: 2, name: "Jane Smith", avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
    { id: 3, name: "Peter Jones", avatar: "https://randomuser.me/api/portraits/men/70.jpg" },
    { id: 4, name: "Sarah Lee", avatar: "https://randomuser.me/api/portraits/women/60.jpg" },
    { id: 5, name: "Mike Ross", avatar: "https://randomuser.me/api/portraits/men/55.jpg" },
];

const plans = [
    {
        name: "Basic plan",
        price: 10,
        description: "Basic features for up to 10 users.",
        isPopular: false,
        features: [
            "Access to basic features",
            "Basic reporting and analytics",
            "Up to 10 individual users",
            "20GB individual data each user",
        ],
    },
    {
        name: "Business plan",
        price: 20,
        description: "Enhanced features for up to 20 users.",
        isPopular: true,
        features: [
            "Everything in Basic plus...",
            "200+ integrations",
            "Advanced reporting and analytics",
            "Up to 20 individual users",
            "40GB individual data each user",
        ],
    },
    {
        name: "Enterprise plan",
        price: 40,
        description: "Advanced features + unlimited users.",
        isPopular: false,
        features: [
            "Everything in Business plus...",
            "Advanced custom fields",
            "Audit log and data history",
            "Unlimited individual users",
            "Unlimited individual data",
        ],
    },
];

const CheckIcon = () => (
    <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#f7b518]">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3 text-black"
            viewBox="0 0 20 20"
            fill="currentColor"
        >
            <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 00-1.414-1.414L8 11.172 4.707 7.879a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8z"
                clipRule="evenodd"
            />
        </svg>
    </span>
);


const PricingArea = () => {
    const [billingPeriod, setBillingPeriod] = useState("monthly");

    const formatPrice = (price) => {
        return billingPeriod === "monthly" ? price : Math.round(price * 12 * 0.84);
    };

    return (
        <div className="min-h-screen bg-[#f7b518]/10  py-16 ">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                    <h1 className="text-5xl md:text-5xl font-bold leading-tight tracking-tight mt-4">
                        We've got a plan<br />
                        that's perfect for you
                    </h1>

                    <div className="flex items-center mt-6 md:mt-0">
                        <div className="flex -space-x-2 mr-4">
                            {users.map((user) => (
                                <img
                                    key={user.id}
                                    className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
                                    src={user.avatar}
                                    alt={user.name}
                                />
                            ))}
                            <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-sm font-semibold text-gray-600">
                                +10
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="flex text-yellow-400 mb-1 text-sm">{'★'.repeat(5)}</div>
                            <span className="text-gray-500 text-xs md:text-sm">from 4,000+ reviews</span>
                        </div>
                    </div>
                </div>

                {/* Billing Toggle Top-Left */}
                <div className="flex justify-start mb-8 gap-4">
                    <button
                        onClick={() => setBillingPeriod("monthly")}
                        className={`py-3 px-6 rounded-lg font-semibold border ${billingPeriod === "monthly"
                            ? "bg-black text-white border-black"
                            : "bg-white text-black border-gray-300"
                            }`}
                    >
                        Monthly billing
                    </button>
                    <button
                        onClick={() => setBillingPeriod("annual")}
                        className={`py-3 px-6 rounded-lg font-semibold border ${billingPeriod === "annual"
                            ? "bg-black text-white border-black"
                            : "bg-white text-black border-gray-300"
                            }`}
                    >
                        Annual billing <span className="ml-2 bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 rounded-full font-semibold">Save 16%</span>
                    </button>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className="bg-white rounded-2xl shadow-lg p-8 flex flex-col border border-gray-200"
                        >
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-xl font-semibold">{plan.name}</h3>
                                {plan.isPopular && (
                                    <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full">
                                        Popular
                                    </span>
                                )}
                            </div>

                            <div className="flex items-baseline mb-2">
                                <span className="text-4xl font-bold">${formatPrice(plan.price)}</span>
                                <span className="ml-1 text-gray-500 text-lg">/user</span>
                            </div>
                            <p className="text-gray-500 text-sm mb-6">
                                per {billingPeriod === "monthly" ? "month" : "year"}
                            </p>

                            <p className="text-gray-600 mb-8">{plan.description}</p>

                            <button className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition duration-200 mb-6">
                                Get started
                            </button>

                            <div className="mt-auto pt-6 border-t border-gray-200">
                                <h4 className="font-semibold mb-4 text-gray-800">Features</h4>
                                <ul className="space-y-3">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-gray-700">
                                            <CheckIcon />
                                            <span className="ml-3">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PricingArea;

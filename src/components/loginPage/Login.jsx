'use client';
import Image from "next/image";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#fdd204]/10 px-6  sm:px-10 lg:px-16 xl:px-20 py-16 ">
            <div className="bg-white rounded-2xl shadow-lg flex flex-col lg:flex-row w-full max-w-5xl overflow-hidden">

                {/* Left Side */}
                <div className="lg:w-1/2 relative h-64 lg:h-auto rounded-t-2xl lg:rounded-l-2xl overflow-hidden">
                    <Image
                        src="/images/sign-up/img-signup.png"
                        alt="Background"
                        layout="fill"
                        objectFit="cover"
                        className="absolute"
                    />

                    <div className="absolute inset-0 bg-black/60 flex flex-col justify-end items-center text-center p-6 sm:p-10">
                        <Image
                            src="/images/logo/logo-2.png"
                            alt="Logo"
                            width={120}
                            height={40}
                            className="mb-4 sm:mb-8"
                        />
                        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-white mb-2 sm:mb-4">
                            Join a thriving <br /> community of creators
                        </h1>
                        <p className="text-gray-300 text-xs sm:text-sm">
                            with Artificial Intelligence
                        </p>
                    </div>
                </div>

                {/* Right Side */}
                <div className="lg:w-1/2 p-6 sm:p-10 flex flex-col justify-center">
                    <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Create an account</h2>

                    {/* Google Signup Button */}
                    <button className="w-full flex items-center justify-center gap-2 border rounded-lg py-2 mb-4 sm:mb-6 hover:bg-gray-100">
                        <FcGoogle size={22} />
                        <span className="text-sm sm:text-base">Sign up with Google</span>
                    </button>

                    <div className="flex items-center mb-4 sm:mb-6">
                        <hr className="flex-grow border-gray-300" />
                        <span className="px-2 text-gray-500 text-xs sm:text-sm">Or</span>
                        <hr className="flex-grow border-gray-300" />
                    </div>

                    {/* Form */}
                    <form className="space-y-3 sm:space-y-4">
                        <div>
                            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="What should we call you?"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full border rounded-lg px-3 py-2 sm:px-3 sm:py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm sm:text-base"
                            />
                        </div>

                        <div>
                            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="you@domain.com"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full border rounded-lg px-3 py-2 sm:px-3 sm:py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm sm:text-base"
                            />
                        </div>

                        <div>
                            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="********"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full border rounded-lg px-3 py-2 sm:px-3 sm:py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm sm:text-base"
                            />
                            <p className="text-[10px] sm:text-xs text-gray-500 mt-1">
                                Must be at least 8 characters
                            </p>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base"
                        >
                            Create account
                        </button>
                    </form>

                    <p className="text-xs sm:text-sm text-center text-gray-600 mt-4 sm:mt-6">
                        Already a member?{" "}
                        <a href="#" className="text-yellow-600 hover:underline">
                            Log in
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

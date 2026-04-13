'use client'
import Head from "next/head";
import { useState } from "react";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const ContactArea = () => {
  const [phone, setPhone] = useState();

  return (
    <div className="min-h-screen bg-[#fdd204]/10 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-12">
      <Head>
        <title>Contact Us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col lg:flex-row max-w-6xl w-full gap-8 lg:gap-12">
        {/* Left Section - Contact Form */}
        <div className="w-full lg:w-2/3 p-6 sm:p-12 bg-white shadow-lg rounded-lg">
          <h1 className="text-3xl sm:text-4xl text-black mb-8 text-center lg:text-left">
            Contact Us
          </h1>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-black mb-2">
                  First Name*
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full p-3 bg-[#fdd204]/10 border border-[#e0ddd8] rounded-md focus:outline-none focus:ring-1 focus:ring-[#fdd204]/20"
                  placeholder="Your first name"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-black mb-2">
                  Last Name*
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full p-3 bg-[#fdd204]/10 border border-[#e0ddd8] rounded-md focus:outline-none focus:ring-1 focus:ring-[#fdd204]/20"
                  placeholder="Your last name"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-black mb-2">
                  Phone Number *
                </label>

                <PhoneInput
                  international
                  defaultCountry="IN"
                  value={phone}
                  onChange={setPhone}
                  className="custom-phone-input w-full"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 bg-[#fdd204]/10 border border-[#e0ddd8] rounded-md focus:outline-none focus:ring-1 focus:ring-[#fdd204]/20"
                  placeholder="Your email address"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows="6"
                className="w-full p-3 bg-[#fdd204]/10 border border-[#e0ddd8] rounded-md focus:outline-none focus:ring-1 focus:ring-[#fdd204]/20"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <div className="flex items-start mb-4">
              <input
                type="checkbox"
                id="gdpr"
                className="h-4 w-4 text-[#fdd204]/20 focus:ring-[#fdd204]/20 border-gray-300 rounded mt-1"
              />
              <label htmlFor="gdpr" className="ml-2 block text-sm text-black">
                I agree to the processing of{' '}
                <a href="#" className="underline text-black">
                  personal data
                </a>{' '}
                *
              </label>
            </div>

            <button
              type="submit"
              className="w-full lg:w-auto px-8 py-3 bg-black text-white rounded-full hover:bg-[#fdd204] hover:text-black focus:outline-none focus:ring-2 focus:ring-[#fdd204]/20 focus:ring-offset-2 transition-all"
            >
              Send Message
            </button>
          </form>

          <p className="text-xs text-[#666] mt-6 sm:mt-8 leading-relaxed text-center lg:text-left">
            This site is protected by reCAPTCHA and the Google{' '}
            <a href="#" className="underline text-[#666]">Privacy Policy</a> and{' '}
            <a href="#" className="underline text-[#666]">Terms of Service</a> apply.
          </p>
        </div>

        {/* Right Section - Contact Info and Map */}
        <div className="w-full lg:w-1/3 flex flex-col gap-6 p-6 sm:p-6 lg:p-0">
          <div className="bg-black text-white p-6 rounded-lg w-full lg:w-auto">
            <h2 className="text-sm uppercase tracking-wider mb-2 opacity-75">Address</h2>
            <p className="text-lg">Nokia Care Building,</p>
            <p className="text-lg">South Dumdum, Kolkata,</p>
            <p className="text-lg">India .</p>
          </div>

          <div className="bg-black text-white p-6 rounded-lg w-full lg:w-auto">
            <h2 className="text-sm uppercase tracking-wider mb-2 opacity-75">Email</h2>
            <p className="text-lg">info@hivyr.ai</p>
          </div>

          <div className="bg-black text-white p-6 rounded-lg w-full lg:w-auto">
            <h2 className="text-sm uppercase tracking-wider mb-2 opacity-75">Phone</h2>
            <p className="text-lg">+91 9547578920</p>
          </div>

          {/* Map Section */}
          <div className="relative w-full h-64 sm:h-80 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31507.123456789!2d88.4000!3d22.6400!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f88b0abc12345%3A0xabcdef1234567890!2sYour+New+Address+Here!5e0!3m2!1sen!2sin!4v0000000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactArea;
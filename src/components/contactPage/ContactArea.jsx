import Head from "next/head";

const ContactArea = () => {
  return (
    <div className="min-h-screen bg-[#f7b518]/10 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-12">
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
                  className="w-full p-3 bg-[#f7b518]/10 border border-[#e0ddd8] rounded-md focus:outline-none focus:ring-1 focus:ring-[#f7b518]/20"
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
                  className="w-full p-3 bg-[#f7b518]/10 border border-[#e0ddd8] rounded-md focus:outline-none focus:ring-1 focus:ring-[#f7b518]/20"
                  placeholder="Your last name"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-black mb-2">
                  Phone Number *
                </label>
                <input
                  type="text"
                  id="phone"
                  className="w-full p-3 bg-[#f7b518]/10 border border-[#e0ddd8] rounded-md focus:outline-none focus:ring-1 focus:ring-[#f7b518]/20"
                  placeholder="e.g. +421"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 bg-[#f7b518]/10 border border-[#e0ddd8] rounded-md focus:outline-none focus:ring-1 focus:ring-[#f7b518]/20"
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
                className="w-full p-3 bg-[#f7b518]/10 border border-[#e0ddd8] rounded-md focus:outline-none focus:ring-1 focus:ring-[#f7b518]/20"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <div className="flex items-start mb-4">
              <input
                type="checkbox"
                id="gdpr"
                className="h-4 w-4 text-[#f7b518]/20 focus:ring-[#f7b518]/20 border-gray-300 rounded mt-1"
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
              className="w-full lg:w-auto px-8 py-3 bg-black text-white rounded-md hover:bg-[#f7b518] hover:text-black focus:outline-none focus:ring-2 focus:ring-[#f7b518]/20 focus:ring-offset-2 transition-all"
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
            <p className="text-lg">Topolova 1,</p>
            <p className="text-lg">039 52 Veľká Lomnica,</p>
            <p className="text-lg">Slovakia</p>
          </div>

          <div className="bg-black text-white p-6 rounded-lg w-full lg:w-auto">
            <h2 className="text-sm uppercase tracking-wider mb-2 opacity-75">Email</h2>
            <p className="text-lg">info@hivyr.io</p>
          </div>

          <div className="bg-black text-white p-6 rounded-lg w-full lg:w-auto">
            <h2 className="text-sm uppercase tracking-wider mb-2 opacity-75">Phone</h2>
            <p className="text-lg">+421 911 669 061</p>
          </div>

          {/* Map Section */}
          <div className="relative w-full h-64 sm:h-80 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2581.428456801946!2d20.370878515715836!3d49.07221087930814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47392e9c2e0f316b%3A0x6b4c1e4c7d0e9b92!2sTopolova%201%2C%20039%2052%20Ve%C4%BEk%C3%A1%20Lomnica%2C%20Slovensko!5e0!3m2!1sen!2ssk!4v1678912345678!5m2!1sen!2ssk"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(1) contrast(1) brightness(0.2)' }}
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

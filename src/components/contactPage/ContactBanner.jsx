"use client";

import Navbar from "@/components/shared/navbar/Navbar";

export default function ContactBanner() {
    return (
        <>
            {/* Navbar outside - same structure as ProductBanner */}
            <div className="absolute top-0 left-0 right-0 z-50 lg:px-8 xl:px-16 py-4 pt-6">
                <Navbar />
            </div>

            {/* Section with overflow-hidden for background effect only */}
            <section className="relative w-full h-screen flex items-start overflow-hidden bg-white group">

                {/* Background container with image */}
                <div className="absolute inset-0 m-0 sm:m-2 md:m-4 rounded-none sm:rounded-2xl overflow-hidden">
                    <div
                        className="relative w-full h-full bg-cover bg-center bg-no-repeat rounded-none sm:rounded-2xl"
                        style={{ backgroundImage: "url('/images/contact/contact-banner.png')" }}
                    >
                        {/* Black overlay - slightly darker for contact section */}
                        <div className="absolute inset-0 bg-black/60"></div>

                        {/* Optional zoom layer */}
                        <div className="w-full h-full transition-transform duration-700 group-hover:scale-105"></div>
                    </div>
                </div>

                {/* Main Layout */}
                <main className="relative z-10 w-full h-full flex items-end sm:items-center md:mt-20 lg:mt-24 xl:mt-16 2xl:mt-20 xl:ml-44 2xl:ml-14">
                    <div className="max-w-[1400px] mx-auto w-full px-4 sm:px-8 md:px-12 pb-8 sm:pb-0">

                        {/* Title and Contact Wrapper */}
                        <div className="flex flex-col text-white">
                            {/* Main headline - Contact focused */}
                            <h1 className="reveal italic text-[15vw] md:text-[6vw] lg:text-[8vw] 2xl:text-[9vw] leading-[1.1] xl:leading-[0.9] tracking-tighter text-left">
                                Contact<br />
                                <span className="xl:-ml-32 2xl:-ml-40 inline-block">Our Team</span>
                            </h1>

                            {/* Subheading and Contact Details - Stack on mobile, row on tablet/desktop */}
                            <div className="flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-6 md:gap-12 mt-2">
                                <h2 className="reveal italic text-[15vw] md:text-[6vw] lg:text-[8vw] 2xl:text-[9vw] leading-[1.1] xl:leading-[0.9] tracking-tighter">
                                    Let's Talk
                                </h2>

                                {/* Contact Info & CTA Block */}
                                <div className="reveal max-w-full sm:max-w-[380px] md:max-w-[420px] pt-2 sm:pt-0 pb-2 sm:pb-4">
                                    <p className="paragraph_text text-white/85">
                                        Scale your workflows with our intelligent agents. From customer support to data analysis — we build custom AI that adapts to your business. Reach out and let's automate the future together.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </main>
            </section>
        </>
    );
}
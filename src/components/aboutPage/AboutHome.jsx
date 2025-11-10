import React from "react";
import dynamic from "next/dynamic";
import Navbar from "../shared/navbar/Navbar";
import AboutBanner from "./AboutBanner";
import AboutArea from "./AboutArea";
import Team from "./Team";
import Footer from "../shared/footer/Footer";

// ✅ Disable SSR for AboutTeam so it only loads in the browser
const AboutTeam = dynamic(() => import("./AboutTeam"), {
  ssr: false,
  loading: () => <div className="min-h-[50vh] bg-black" />, // optional fallback
});

const AboutHome = () => {
  return (
    <div>
      <Navbar />
      <AboutBanner />
      <AboutArea />
      <Team />
      <AboutTeam />
      <Footer />
    </div>
  );
};

export default AboutHome;

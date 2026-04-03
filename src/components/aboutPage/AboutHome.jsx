"use client"
import React from "react";
import Navbar from "../shared/navbar/Navbar";
import AboutBanner from "./AboutBanner";
import AboutArea from "./AboutArea";
import Team from "./Team";
import Footer from "../shared/footer/Footer";
import AboutShowcase from "./AboutShowcase";



const AboutHome = () => {
  return (
    <div>
      <AboutBanner />
      <AboutArea />
      {/* <AboutShowcase /> */}
      <Team />
      <Footer />
    </div>
  );
};

export default AboutHome;

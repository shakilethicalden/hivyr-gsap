"use client"
import React from "react";
import Navbar from "../shared/navbar/Navbar";
import AboutBanner from "./AboutBanner";
import AboutArea from "./AboutArea";
import Team from "./Team";
import Footer from "../shared/footer/Footer";



const AboutHome = () => {
  return (
    <div>
      <Navbar />
      <AboutBanner />
      <AboutArea />
      <Team />
      <Footer />
    </div>
  );
};

export default AboutHome;

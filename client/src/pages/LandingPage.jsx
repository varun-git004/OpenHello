import React from "react";
import NavBar from "../components/Navbar";
import ScrollingText from "../components/ScrollingText";
import TextType from "../components/TextType";
import HeroSection from "../components/HeroSection";

function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#8d99ae]">
      <div className=" mt-3">
      <NavBar />
      </div>
      
      <div className="flex justify-center items-center">
        <HeroSection/>
      </div>
    </div>
  );
}

export default LandingPage;
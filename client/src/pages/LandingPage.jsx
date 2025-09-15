import React from "react";
import NavBar from "../components/Navbar";
import HeroSection from "../components/HeroSection";

function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#8d99ae]">
      <div className="mt-10">
        <NavBar />
      </div>
      
      <div className="flex-1 flex justify-center items-end">
        <HeroSection/>
      </div>
    </div>
  );
}

export default LandingPage;

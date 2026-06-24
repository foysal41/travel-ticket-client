import React from "react";
import heroBg from "@/app/assets/bus-hero-image.webp";
import HeroSearchForm from "./HeroSectionForm";

const HeroSection = () => {
  return (
    <section className="relative ">
      {/* Hero Banner */}
      <div
        className="h-105 bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${heroBg.src})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/45"></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 pt-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Find & Book Your <br />
            <span className="text-[#FB6E19]">Travel Tickets</span> Easily
          </h1>

          <p className="text-white mt-4 text-lg max-w-md">
            Buy bus, train, launch, and air tickets <br />
            from verified sellers.
          </p>
        </div>
      </div>

    <HeroSearchForm></HeroSearchForm>
    </section>
  );
};

export default HeroSection;
import React from "react";
import heroBg from "@/app/assets/bus-hero-image.webp";

const HeroSection = () => {
  return (
    <section className="relative ">
      {/* Hero Banner */}
      <div
        className="h-[420px] bg-cover bg-center relative"
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

      {/* Search Form */}
      <div className="max-w-6xl mx-auto px-4 -mt-16 relative z-20 ">
        <div className="bg-white rounded-xl shadow-xl p-6 grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
          {/* From */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">
              From
            </label>
            <input
              type="text"
              placeholder="Select From"
              className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none text-black placeholder:text-gray-500 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* To */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">
              To
            </label>
            <input
              type="text"
              placeholder="Select To"
              className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none text-black placeholder:text-gray-500 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Transport Type */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">
              Transport Type
            </label>
            <select className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none text-black focus:ring-2 focus:ring-blue-500">
              <option value="">All</option>
              <option value="bus">Bus</option>
              <option value="train">Train</option>
              <option value="launch">Launch</option>
              <option value="plane">Plane</option>
            </select>
          </div>

          {/* Departure Date */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">
              Departure Date
            </label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none text-black focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Search Button */}
          <button className="bg-[#072F7F] hover:bg-[#0A3C9D] text-white rounded-md py-3 px-6 font-semibold transition duration-300">
            Search
          </button>
        </div>

        <div className="w-24 h-1 bg-[#072F7F] mx-auto mt-5 rounded-full"></div>
      </div>
    </section>
  );
};

export default HeroSection;
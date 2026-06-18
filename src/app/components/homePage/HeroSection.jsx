import React from 'react'
import heroBg from '@/app/assets/bus-hero-image.webp'

const HeroSection = () => {
   return (
    <section className="relative">
      <div
        className="h-[420px] bg-cover bg-center relative"
        style={{
  backgroundImage: `url(${heroBg.src})`,
}}
      >
        <div className="absolute inset-0 bg-black/45"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 pt-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Find & Book Your <br />
            <span className='text-[#FB6E19]'>Travel Tickets</span> Easily
          </h1>

          <p className="text-white mt-4 text-lg max-w-md">
            Buy bus, train, launch, and air tickets <br />
            from verified sellers.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 -mt-16 relative z-20">
        <div className="bg-white rounded-lg shadow-xl p-5 grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
          <div>
            <label className="block text-sm font-medium mb-2">From</label>
            <input
              type="text"
              placeholder="Select From"
              className="w-full border rounded-md px-4 py-3 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">To</label>
            <input
              type="text"
              placeholder="Select To"
              className="w-full border rounded-md px-4 py-3 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Transport Type
            </label>
            <select className="w-full border rounded-md px-4 py-3 outline-none">
              <option>All</option>
              <option>Bus</option>
              <option>Train</option>
              <option>Launch</option>
              <option>Plane</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Departure Date
            </label>
            <input
              type="date"
              className="w-full border rounded-md px-4 py-3 outline-none"
            />
          </div>

          <button className="bg-[#072F7F] hover:bg-blue-700 text-white rounded-md py-3 font-semibold">
            Search
          </button>
        </div>

        <div className="w-24 h-1 bg-blue-600 mx-auto mt-5 rounded-full"></div>
      </div>
    </section>
  );
}

export default HeroSection
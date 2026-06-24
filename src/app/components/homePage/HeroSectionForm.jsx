"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const HeroSearchForm = () => {
  const router = useRouter();

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [transportType, setTransportType] = useState("");
  const [departureDate, setDepartureDate] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    const query = new URLSearchParams();

    if (from) query.set("from", from);
    if (to) query.set("to", to);
    if (transportType) query.set("transportType", transportType);
    if (departureDate) query.set("departureDate", departureDate);

    router.push(`/all-tickets?${query.toString()}`);
  };

  return (
    <div className="relative z-20 mx-auto -mt-16 max-w-6xl px-4">
      <form
        onSubmit={handleSearch}
        className="grid grid-cols-1 items-end gap-4 rounded-xl bg-white p-6 shadow-xl md:grid-cols-5"
      >
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            From
          </label>
          <input
            type="text"
            placeholder="Select From"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="w-full rounded-md border border-gray-300 px-4 py-3 text-black outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            To
          </label>
          <input
            type="text"
            placeholder="Select To"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="w-full rounded-md border border-gray-300 px-4 py-3 text-black outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Transport Type
          </label>
          <select
            value={transportType}
            onChange={(e) => setTransportType(e.target.value)}
            className="w-full rounded-md border border-gray-300 px-4 py-3 text-black outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All</option>
            <option value="bus">Bus</option>
            <option value="train">Train</option>
            <option value="launch">Launch</option>
            <option value="plane">Plane</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Departure Date
          </label>
          <input
            type="date"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
            className="w-full rounded-md border border-gray-300 px-4 py-3 text-black outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="rounded-md bg-[#072F7F] px-6 py-3 font-semibold text-white transition duration-300 hover:bg-[#0A3C9D]"
        >
          Search
        </button>
      </form>

      <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-[#072F7F]" />
    </div>
  );
};

export default HeroSearchForm;
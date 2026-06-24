"use client";

import Image from "next/image";
import React, { useMemo, useState } from "react";
import { Bus, Ticket, Gift, Users } from "lucide-react";
import Link from "next/link";

const AllTicketList = ({ tickets = [] }) => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [transport, setTransport] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [currentPage, setCurrentPage] = useState(1); // বর্তমানে user কোন page এ আছে সেটা track করবে

  const ticketsPerPage = 4;

  // useMemo ব্যবহার করছি যাতে filter/sort calculation unnecessary বারবার না হয়
  // tickets/from/to/transport/sortBy change হলেই শুধু নতুন করে calculation হবে
  const filteredTickets = useMemo(() => {
    let result = [...tickets];

    // user input দিলে ticket.from এর সাথে মিল আছে কিনা check করছি
    if (from) {
      result = result.filter((ticket) =>
        ticket.from?.toLowerCase().includes(from.toLowerCase())
      );
    }

    if (to) {
      result = result.filter((ticket) =>
        ticket.to?.toLowerCase().includes(to.toLowerCase())
      );
    }

    // bus/train/launch/plane select করলে শুধু ওই type এর ticket দেখাবে
    if (transport) {
      result = result.filter((ticket) => ticket.transportType === transport);
    }

    // কম দাম থেকে বেশি দাম অনুযায়ী সাজাবে
    if (sortBy === "price-low-high") {
      result.sort((a, b) => Number(a.price) - Number(b.price));
    }

    if (sortBy === "price-high-low") {
      result.sort((a, b) => Number(b.price) - Number(a.price));
    }

    // বেশি seat quantity আগে দেখাবে
    if (sortBy === "quantity-high-low") {
      result.sort((a, b) => Number(b.quantity) - Number(a.quantity));
    }

    // departure date/time অনুযায়ী latest ticket আগে দেখাবে
    if (sortBy === "latest") {
      result.sort(
        (a, b) => new Date(b.departureDateTime) - new Date(a.departureDateTime)
      );
    }

    // সব filter/sort করার পর final result return করছি
    return result;
  }, [tickets, from, to, transport, sortBy]);

  // total কয়টা page হবে সেটা calculate করছি
  const totalPages = Math.ceil(filteredTickets.length / ticketsPerPage);

  // current page অনুযায়ী কোন index থেকে ticket show হবে
  const startIndex = (currentPage - 1) * ticketsPerPage;

  // current page অনুযায়ী কোন index পর্যন্ত ticket show হবে
  const endIndex = startIndex + ticketsPerPage;

  // filteredTickets থেকে শুধু current page এর tickets বের করছি
  const paginatedTickets = filteredTickets.slice(startIndex, endIndex);

  return (
    <section className="px-4 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">All Tickets</h1>
          <p className="mt-2 text-sm text-gray-500">
            Browse all admin approved travel tickets.
          </p>
        </div>

        {/* Filter Area */}
        <div className="mb-8 grid grid-cols-1 gap-4 rounded-2xl border bg-white p-5 shadow-sm md:grid-cols-4">
          <input
            type="text"
            placeholder="From location"
            value={from}
            onChange={(e) => {
              setFrom(e.target.value);
              setCurrentPage(1);
            }}
            className="h-12 rounded-xl border px-4 text-sm outline-none focus:border-blue-500"
          />

          <input
            type="text"
            placeholder="To location"
            value={to}
            onChange={(e) => {
              setTo(e.target.value);
              setCurrentPage(1);
            }}
            className="h-12 rounded-xl border px-4 text-sm outline-none focus:border-blue-500"
          />

          <select
            value={transport}
            onChange={(e) => {
              setTransport(e.target.value);
              setCurrentPage(1);
            }}
            className="h-12 rounded-xl border px-4 text-sm outline-none focus:border-blue-500"
          >
            <option value="">All Transport</option>
            <option value="bus">Bus</option>
            <option value="train">Train</option>
            <option value="launch">Launch</option>
            <option value="plane">Plane</option>
          </select>

          <select
            value={sortBy}
            onChange={(e) => {
              setSortBy(e.target.value);
              setCurrentPage(1);
            }}
            className="h-12 rounded-xl border px-4 text-sm outline-none focus:border-blue-500"
          >
            <option value="">Sort By</option>
            <option value="latest">Latest Departure</option>
            <option value="price-low-high">Price Low to High</option>
            <option value="price-high-low">Price High to Low</option>
            <option value="quantity-high-low">Quantity High to Low</option>
          </select>
        </div>

        <div className="mb-5 text-sm text-gray-500">
          Showing {paginatedTickets.length} of {filteredTickets.length} tickets
        </div>

        {/* Tickets Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {paginatedTickets.map((ticket) => (
            <div
              key={ticket._id}
              className="overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <Image
                src={ticket.image}
                alt={ticket.title || "Ticket image"}
                width={500}
                height={300}
                className="h-48 w-full object-cover"
              />

              <div className="space-y-4 p-5">
                <h2 className="line-clamp-1 text-lg font-bold text-gray-900">
                  {ticket.title}
                </h2>

                <p className="text-sm font-medium text-gray-600">
                  {ticket.from} → {ticket.to}
                </p>

                <div className="grid grid-cols-2 gap-3 text-sm text-gray-600">
                  <p className="flex items-center gap-2">
                    <Bus size={16} />
                    {ticket.transportType}
                  </p>

                  <p className="flex items-center gap-2">
                    <Ticket size={16} />৳ {ticket.price}
                  </p>

                  <p className="flex items-center gap-2">
                    <Users size={16} />
                    {ticket.quantity} Seats
                  </p>

                  <p className="flex items-center gap-2">
                    <Gift size={16} />
                    {Array.isArray(ticket.perks)
                      ? ticket.perks[0]
                      : ticket.perks || "No Perks"}
                  </p>
                </div>

                <p className="text-sm text-gray-500">
                  Departure: {ticket.departureDateTime?.replace("T", " ")}
                </p>

                <Link
                  href={`/all-tickets/${ticket._id}`}
                  className="block rounded-xl bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-blue-700"
                >
                  See Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredTickets.length === 0 && (
          <p className="mt-10 text-center text-gray-500">No tickets found.</p>
        )}

        {filteredTickets.length > 0 && totalPages > 1 && (
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setCurrentPage((prev) => prev - 1)}
              disabled={currentPage === 1}
              className="rounded-lg border px-4 py-2 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-50"
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, index) => {
              const pageNumber = index + 1;

              return (
                <button
                  key={pageNumber}
                  onClick={() => setCurrentPage(pageNumber)}
                  className={`rounded-lg border px-4 py-2 text-sm font-semibold ${
                    currentPage === pageNumber
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-700"
                  }`}
                >
                  {pageNumber}
                </button>
              );
            })}

            <button
              onClick={() => setCurrentPage((prev) => prev + 1)}
              disabled={currentPage === totalPages}
              className="rounded-lg border px-4 py-2 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default AllTicketList;
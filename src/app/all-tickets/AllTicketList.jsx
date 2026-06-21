import Image from "next/image";
import React from "react";
import { Bus, Ticket, Gift, Users } from "lucide-react";
import Link from "next/link";

const AllTicketList = ({ tickets = [] }) => {
  return (
    <section className="px-4 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">All Tickets</h1>
          <p className="mt-2 text-sm text-gray-500">
            Browse all admin approved travel tickets.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {tickets.map((ticket) => (
            <div
              key={ticket._id}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
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
                    <Ticket size={16} />
                    ৳ {ticket.price}
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
                  href={`/tickets/${ticket._id}`}
                  className="block rounded-xl bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-blue-700"
                >
                  See Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllTicketList;
import React from "react";
import { Button, Card } from "@heroui/react";
import Link from "next/link";
import { getTickets } from "@/app/lib/api/gettickets";

const MyAddedTicketsTable = async () => {
  const tickets = await getTickets();
 
  const statusClass = {
    pending: "bg-yellow-100 text-yellow-700",
    approved: "bg-green-100 text-green-700",
    rejected: "bg-red-100 text-red-700",
  };

  return (
    <main className="min-h-screen  px-4 py-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Added Tickets</h1>
          <p className="mt-2 text-sm text-gray-500">
            All the tickets you have added are listed below.
          </p>
        </div>

        <Button className="rounded-xl bg-blue-600 px-6 text-white">
          <Link href={"/dashboard/vendor/add-ticket"}>Add New Ticket</Link>
        </Button>
      </div>

      <Card className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
        <div className="mb-5 grid grid-cols-1 gap-4 md:grid-cols-3">
          <input
            type="text"
            placeholder="Search by title, route or transport type..."
            className="h-12 rounded-xl border border-gray-300 bg-white px-4 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-blue-500"
          />

          <select className="h-12 rounded-xl border border-gray-300 bg-white px-4 text-sm text-gray-900 outline-none focus:border-blue-500">
            <option>All Status</option>
            <option>Pending</option>
            <option>Approved</option>
            <option>Rejected</option>
          </select>

          <select className="h-12 rounded-xl border border-gray-300 bg-white px-4 text-sm text-gray-900 outline-none focus:border-blue-500">
            <option>Sort by: Latest</option>
            <option>Price Low to High</option>
            <option>Price High to Low</option>
          </select>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full min-w-275 border-collapse text-left">
            <thead className="bg-blue-50">
              <tr className="text-sm text-gray-700">
                <th className="px-4 py-4 font-semibold">#</th>
                <th className="px-4 py-4 font-semibold">Image</th>
                <th className="px-4 py-4 font-semibold">Ticket Title</th>
                <th className="px-4 py-4 font-semibold">Route</th>
                <th className="px-4 py-4 font-semibold">Transport</th>
                <th className="px-4 py-4 font-semibold">Price</th>
                <th className="px-4 py-4 font-semibold">Quantity</th>
                <th className="px-4 py-4 font-semibold">Departure</th>
                <th className="px-4 py-4 font-semibold">Perks</th>
                <th className="px-4 py-4 font-semibold">Status</th>
                <th className="px-4 py-4 font-semibold">Actions</th>
              </tr>
            </thead>

            <tbody>
              {tickets.map((ticket, index) => {
                const isRejected = ticket.status === "rejected";

                return (
                  <tr
                    key={ticket.id}
                    className="border-t border-gray-200 text-sm text-gray-700"
                  >
                    <td className="px-4 py-4">{index + 1}</td>

                    <td className="px-4 py-4">
                      <img
                        src={ticket.image}
                        alt={ticket.title}
                        className="h-20 w-32 rounded-xl object-cover"
                      />
                    </td>

                    <td className="px-4 py-4">
                      <h3 className="max-w-40 font-semibold text-gray-900">
                        {ticket.title}
                      </h3>
                      <p className="mt-1 text-xs text-gray-500">
                        ID: {ticket._id}
                      </p>
                    </td>

                    <td className="px-4 py-4">
                      <p>{ticket.from}</p>
                      <p className="text-blue-600">→</p>
                      <p>{ticket.to}</p>
                    </td>

                    <td className="px-4 py-4">
                      <span className="rounded-lg bg-blue-50 px-3 py-1 text-blue-600">
                        {ticket.transportType}
                      </span>
                    </td>

                    <td className="px-4 py-4 font-medium">৳ {ticket.price}</td>

                    <td className="px-4 py-4">{ticket.quantity} Seats</td>

                    <td className="px-4 py-4">
                      <p>{ticket.departureDateTime?.split("T")[0]}</p>
                      <p>{ticket.departureDateTime?.split("T")[1]}</p>
                    </td>

                    <td className="px-4 py-4">
                      <div className="flex flex-wrap gap-2">
                        {Array.isArray(ticket.perks) ? (
                          ticket.perks.map((perk, index) => (
                            <span
                              key={index}
                              className="rounded-lg bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700"
                            >
                              {perk}
                            </span>
                          ))
                        ) : (
                          <span className="rounded-lg bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                            {ticket.perks || "No Perks"}
                          </span>
                        )}
                      </div>
                    </td>

                    <td className="px-4 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${statusClass[ticket.verificationStatus]}`}
                      >
                        {ticket.verificationStatus}
                      </span>
                    </td>

                    <td className="px-4 py-4">
                      <div className="flex flex-col gap-2">
                        <Button
                          disabled={isRejected}
                          className={`h-9 rounded-lg border text-sm ${
                            isRejected
                              ? "border-gray-200 bg-gray-100 text-gray-400"
                              : "border-blue-600 bg-white text-blue-600 hover:bg-blue-50"
                          }`}
                        >
                          Edit
                        </Button>

                        <Button
                          disabled={isRejected}
                          className={`h-9 rounded-lg border text-sm ${
                            isRejected
                              ? "border-gray-200 bg-gray-100 text-gray-400"
                              : "border-red-500 bg-white text-red-500 hover:bg-red-50"
                          }`}
                        >
                          Delete
                        </Button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <p className="mt-5 text-sm text-gray-500">
          Showing 1 to {tickets.length} of {tickets.length} tickets
        </p>
      </Card>
    </main>
  );
};

export default MyAddedTicketsTable;

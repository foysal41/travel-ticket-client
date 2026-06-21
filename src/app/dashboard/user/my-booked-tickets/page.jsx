import React from "react";
import { Button, Card } from "@heroui/react";
import Image from "next/image";
import { getBookedTickets } from "@/app/lib/api/getBookedTickets";

const MyBookedTicketsPage = async() => {
    const bookings = await getBookedTickets()
  

  const statusClass = {
     pending: "bg-yellow-100 text-yellow-700",
    approved: "bg-green-100 text-green-700",
    rejected: "bg-red-100 text-red-700",
  };

  return (
    <main className="min-h-screen px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">My Booked Tickets</h1>
        <p className="mt-2 text-sm text-gray-500">
          All the tickets you have booked are listed below.
        </p>
      </div>

      <Card className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full min-w-275 border-collapse text-left">
            <thead className="bg-blue-50">
              <tr className="text-sm text-gray-700">
                <th className="px-4 py-4 font-semibold">#</th>
                <th className="px-4 py-4 font-semibold">Image</th>
                <th className="px-4 py-4 font-semibold">Ticket Title</th>
                <th className="px-4 py-4 font-semibold">Route</th>
                <th className="px-4 py-4 font-semibold">Transport</th>
                <th className="px-4 py-4 font-semibold">Unit Price</th>
                <th className="px-4 py-4 font-semibold">Booked Qty</th>
                <th className="px-4 py-4 font-semibold">Total Price</th>
                <th className="px-4 py-4 font-semibold">Departure</th>
                <th className="px-4 py-4 font-semibold">Status</th>
                <th className="px-4 py-4 font-semibold">Action</th>
              </tr>
            </thead>

            <tbody>
              {bookings.map((booking, index) => (
                <tr
                  key={booking.id}
                  className="border-t border-gray-200 text-sm text-gray-700"
                >
                  <td className="px-4 py-4">{index + 1}</td>

                  <td className="px-4 py-4">
                    <Image
                      src={booking.ticketImage}
                      alt={booking.title}
                      width={128}
                      height={80}
                      className="h-20 w-32 rounded-xl object-cover"
                    />
                  </td>

                  <td className="px-4 py-4">
                    <h3 className="max-w-40 font-semibold text-gray-900">
                      {booking.title}
                    </h3>
                    <p className="mt-1 text-xs text-gray-500">
                      ID: {booking.ticketId}
                    </p>
                  </td>

                  <td className="px-4 py-4">
                    <p>{booking.from}</p>
                    <p className="text-blue-600">→</p>
                    <p>{booking.to}</p>
                  </td>

                  <td className="px-4 py-4">
                    <span className="rounded-lg bg-blue-50 px-3 py-1 text-blue-600">
                      {booking.transportType}
                    </span>
                  </td>

                  <td className="px-4 py-4 font-medium">
                    ৳ {booking.unitPrice}
                  </td>

                  <td className="px-4 py-4">
                    {booking.bookingQuantity} Seats
                  </td>

                  <td className="px-4 py-4 font-semibold text-gray-900">
                    ৳ {booking.totalPrice}
                  </td>

                  <td className="px-4 py-4">
                    <p>{booking.departureDateTime?.split("T")[0]}</p>
                    <p>{booking.departureDateTime?.split("T")[1]}</p>
                  </td>

                  <td className="px-4 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${statusClass[booking.status]}`}
                    >
                      {booking.status}
                    </span>
                  </td>

                  <td className="px-4 py-4">
                    <Button
                        disabled
                        className="h-9 rounded-lg bg-blue-500 px-4 text-sm text-white"
                      >
                        Edit
                      </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-5 text-sm text-gray-500">
          Showing 1 to {bookings.length} of {bookings.length} booked tickets
        </p>
      </Card>


      
    </main>
  );
};

export default MyBookedTicketsPage;
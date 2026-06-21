import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button, Card } from "@heroui/react";
import { getTickets } from "@/app/lib/api/gettickets";
import CountdownTimer from "@/app/components/CountdownTimer";
import BookNowModal from "@/app/components/BookNowModal";

const TicketDetailsPage = async ({ params }) => {
  const { id } = await params;
  const ticket = await getTickets();

   const myticket = ticket.find((item) => item._id === id);
  

  const [date, time] = myticket.departureDateTime?.split("T") || [];

  return (
    <main className="min-h-screen px-4 py-8">
     <section className="max-w-7xl mx-auto px-4">
       <Link
        href="/tickets"
        className="mb-6 inline-block text-sm font-semibold text-blue-600 hover:underline"
      >
        ← Back to All Tickets
      </Link>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <Card className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
            {myticket.image && (
              <Image
                src={myticket?.image}
                alt={myticket?.title || "Ticket image"}
                width={900}
                height={450}
                className="h-[360px] w-full object-cover"
              />
            )}

            <div className="p-6">
              <h1 className="text-3xl font-bold text-gray-900">
                {myticket.title}
                
              </h1>

              <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-4">
                <div className="rounded-2xl bg-blue-50 p-4">
                  <p className="text-sm text-gray-500">Start Point</p>
                  <p className="mt-1 font-semibold text-gray-900">
                    {myticket.from}
                  </p>
                </div>

                <div className="rounded-2xl bg-blue-50 p-4">
                  <p className="text-sm text-gray-500">Destination</p>
                  <p className="mt-1 font-semibold text-gray-900">
                    {myticket.to}
                  </p>
                </div>

                <div className="rounded-2xl bg-blue-50 p-4">
                  <p className="text-sm text-gray-500">Transport</p>
                  <p className="mt-1 font-semibold text-gray-900">
                    {myticket.transportType}
                  </p>
                </div>

                <div className="rounded-2xl bg-blue-50 p-4">
                  <p className="text-sm text-gray-500">Departure</p>
                  <p className="mt-1 font-semibold text-gray-900">{myticket.departureDateTime}</p>
                  <p className="text-sm text-gray-500">{time}</p>
                </div>
              </div>

              <p className="mt-6 leading-7 text-gray-600">
                Enjoy a comfortable and safe journey from {myticket.from} to{" "}
                {myticket.to}. This ticket is provided by a verified vendor with
                clear departure time and available seat information.
              </p>
            </div>
          </Card>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900">
                Vendor Information
              </h2>

              <div className="mt-5 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-xl font-bold text-blue-600">
                  {myticket.vendorName?.charAt(0) || "V"}
                </div>

                <div>
                  <p className="font-semibold text-gray-900">
                    {myticket.vendorName}
                  </p>
                  
                  <p className="text-sm text-gray-500">
                    {myticket.vendorEmail}
                  </p>
                </div>
              </div>
            </Card>

            <Card className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900">
                Cancellation Policy
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                You can cancel your booking before the vendor accepts it. Once
                accepted or paid, cancellation rules may depend on the vendor.
              </p>
            </Card>
          </div>
        </div>

        <div>
          <Card className="sticky top-24 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">
              Ticket Summary
            </h2>

            <div className="mt-6 space-y-5">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">Price Per Ticket</p>
                <p className="font-semibold text-gray-900">৳ {myticket.price}</p>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">Available Seats</p>
                <p className="font-semibold text-green-600">
                  {myticket.quantity} Seats
                </p>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">Transport Type</p>
                <span className="rounded-lg bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
                  {myticket.transportType}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">Departure Date</p>
                <p className="font-semibold text-gray-900">{date}</p>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">Departure Time</p>
                <p className="font-semibold text-gray-900">{time}</p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-blue-50 p-5">
             


                <CountdownTimer departureDateTime={myticket.departureDateTime} ></CountdownTimer>
       
            </div>

            <div className="mt-6 rounded-2xl bg-green-50 p-5">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-green-700">
                  Seat Availability
                </p>
                <p className="font-semibold text-green-700">
                  {myticket.quantity} Seats Left
                </p>
              </div>

              <div className="mt-4 h-2 rounded-full bg-green-100">
                <div className="h-2 w-4/5 rounded-full bg-green-500" />
              </div>
            </div>

            <div className="mt-6">
              <p className="text-4xl font-bold text-blue-600">
                ৳ {myticket.price}
                <span className="ml-2 text-sm font-medium text-gray-500">
                  Per Ticket
                </span>
              </p>

             <BookNowModal ticket={myticket} />
            </div>

            <div className="mt-5 space-y-3 rounded-2xl border border-yellow-200 bg-yellow-50 p-4">
              <p className="text-sm text-gray-700">
                Book Now button will be disabled if departure time has passed.
              </p>
              <p className="text-sm text-gray-700">
                You cannot book more than the available ticket quantity.
              </p>
            </div>
          </Card>
        </div>
      </div>
     </section>
    </main>
  );
};

export default TicketDetailsPage;
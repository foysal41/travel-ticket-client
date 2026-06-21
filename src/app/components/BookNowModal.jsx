"use client";

import React, { useState } from "react";
import { Button } from "@heroui/react";

const BookNowModal = ({ ticket }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [bookingQuantity, setBookingQuantity] = useState(1);

  const price = Number(ticket.price);
  const availableQuantity = Number(ticket.quantity);
  const totalPrice = price * Number(bookingQuantity);

  const isInvalidQuantity =
    bookingQuantity < 1 || bookingQuantity > availableQuantity;

  const isDeparturePassed =
    new Date(ticket.departureDateTime).getTime() < new Date().getTime();

  const isSoldOut = availableQuantity === 0;

  const handleConfirmBooking = () => {
    if (isInvalidQuantity) return;

    const bookingData = {
      ticketId: ticket._id,
      ticketTitle: ticket.title,
      ticketImage: ticket.image,
      from: ticket.from,
      to: ticket.to,
      transportType: ticket.transportType,
      unitPrice: price,
      bookingQuantity: Number(bookingQuantity),
      totalPrice,
      status: "pending",
      vendorName: ticket.vendorName,
      vendorEmail: ticket.vendorEmail,
      departureDateTime: ticket.departureDateTime,
    };

    console.log("Booking Data:", bookingData);

    setIsOpen(false);
  };

  return (
    <>
      <Button
        disabled={isDeparturePassed || isSoldOut}
        onPress={() => setIsOpen(true)}
        className="mt-5 h-12 w-full rounded-xl bg-blue-600 text-sm font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-300"
      >
        Book Now
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-xl">
            <h2 className="text-2xl font-bold text-gray-900">
              Confirm Booking
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Enter your desired ticket quantity.
            </p>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl bg-blue-50 p-4">
                <p className="font-semibold text-gray-900">{ticket.title}</p>
                <p className="mt-1 text-sm text-gray-500">
                  {ticket.from} → {ticket.to}
                </p>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Ticket Quantity
                </label>

                <input
                  type="number"
                  min="1"
                  max={availableQuantity}
                  value={bookingQuantity}
                  onChange={(e) => setBookingQuantity(e.target.value)}
                  className="h-12 w-full rounded-xl border border-gray-300 bg-white px-4 text-sm text-gray-900 outline-none focus:border-blue-500"
                />

                {isInvalidQuantity && (
                  <p className="mt-2 text-sm text-red-500">
                    Quantity must be between 1 and {availableQuantity}.
                  </p>
                )}
              </div>

              <div className="space-y-3 rounded-2xl border border-gray-200 p-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Price Per Ticket</span>
                  <span className="font-semibold text-gray-900">৳ {price}</span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Quantity</span>
                  <span className="font-semibold text-gray-900">
                    {bookingQuantity}
                  </span>
                </div>

                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">
                      Total Price
                    </span>
                    <span className="text-xl font-bold text-blue-600">
                      ৳ {totalPrice || 0}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <Button
                onPress={() => setIsOpen(false)}
                className="rounded-xl border border-gray-300 bg-white px-5 text-gray-700"
              >
                Cancel
              </Button>

              <Button
                disabled={isInvalidQuantity}
                onPress={handleConfirmBooking}
                className="rounded-xl bg-blue-600 px-6 text-white hover:bg-blue-700 disabled:bg-gray-300"
              >
                Confirm
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BookNowModal;
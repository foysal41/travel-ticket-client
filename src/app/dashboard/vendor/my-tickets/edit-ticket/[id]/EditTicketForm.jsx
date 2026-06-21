"use client"
import React from 'react'
import { Button, Card } from "@heroui/react";
import Link from "next/link";
import Image from 'next/image';
import { useRouter } from "next/navigation";
import { verificationSchema } from 'better-auth';
import { updateTicket } from '@/app/lib/actions/updateTicket';

const EditTicketForm = ({tickets}) => {
  const router = useRouter()
   const [{_id, title, from , to, transportType, price, quantity, departureDateTime, perks, image}] = tickets
  

const handleUpdate = async (e) => {
  e.preventDefault();
  
const formData = new FormData(e.currentTarget);
const data = Object.fromEntries(formData.entries())


const payload = {
  ...data,
  price: Number(data.price),
  quantity: Number(data.quantity),
  verificationStatus: "pending"
}

const res = await updateTicket(_id, payload)

 if (res.modifiedCount > 0) {
    toast.success("Ticket updated successfully!");
    router.push("/dashboard/vendor/my-tickets");
    router.refresh();
  } else {
    toast.error("No changes updated");
  }




}
    
  return (
    <div>
        <form onSubmit={handleUpdate} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Card className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-xl font-semibold text-gray-900">
              Ticket Information
            </h2>

            <div className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Ticket Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  defaultValue={title}
                  className="h-12 w-full rounded-xl border border-gray-300 bg-white px-4 text-sm text-gray-900 outline-none focus:border-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    From Location <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    defaultValue={from}
                    className="h-12 w-full rounded-xl border border-gray-300 bg-white px-4 text-sm text-gray-900 outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    To Location <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    defaultValue={to}
                    className="h-12 w-full rounded-xl border border-gray-300 bg-white px-4 text-sm text-gray-900 outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Transport Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    defaultValue={transportType}
                    className="h-12 w-full rounded-xl border border-gray-300 bg-white px-4 text-sm text-gray-900 outline-none focus:border-blue-500"
                  >
                    <option value="bus">Bus</option>
                    <option value="train">Train</option>
                    <option value="launch">Launch</option>
                    <option value="plane">Plane</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Price Per Ticket <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    defaultValue={price}
                    className="h-12 w-full rounded-xl border border-gray-300 bg-white px-4 text-sm text-gray-900 outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Ticket Quantity <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    defaultValue={quantity}
                    className="h-12 w-full rounded-xl border border-gray-300 bg-white px-4 text-sm text-gray-900 outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Departure Date & Time <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="datetime-local"
                    defaultValue={departureDateTime}
                    className="h-12 w-full rounded-xl border border-gray-300 bg-white px-4 text-sm text-gray-900 outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Perks
                </label>
                <input
                  type="text"
                  defaultValue={perks}
                  className="h-12 w-full rounded-xl border border-gray-300 bg-white px-4 text-sm text-gray-900 outline-none focus:border-blue-500"
                />
                <p className="mt-2 text-xs text-gray-500">
                  Press Enter to add multiple perks
                </p>
              </div>
            </div>
          </Card>

          <Card className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-xl font-semibold text-gray-900">
              Ticket Image
            </h2>

            <label className="flex min-h-[420px] cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-300 bg-white px-6 py-10 text-center">
              <Image
                src={image}
                alt="Ticket"
                width={128}
                height={80}
                className="mb-8 h-40 w-72 rounded-2xl object-cover shadow-sm"
              />

              <input type="file" accept="image/*" className="hidden" />

              <span className="rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-blue-600">
                ☁ Change Image
              </span>

              <p className="mt-5 text-sm text-gray-500">
                PNG, JPG or WEBP allowed (Max 5MB)
              </p>
            </label>
          </Card>
        </div>

        <div className="rounded-xl border border-blue-200 bg-blue-50 px-5 py-4 text-sm font-medium text-blue-600">
          ⓘ After updating, the ticket will be reviewed by admin. You will be
          notified once it is approved.
        </div>

        <div className="flex justify-end gap-3 border-t border-gray-200 pt-6">
          <Link
            href="/dashboard/vendor/my-tickets"
            className="rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </Link>

          <Button
            type="submit"
            className="h-12 rounded-xl bg-blue-600 px-8 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Update Ticket
          </Button>
        </div>
      </form>
    </div>
  )
}

export default EditTicketForm
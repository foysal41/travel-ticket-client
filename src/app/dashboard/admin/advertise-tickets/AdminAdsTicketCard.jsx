"use client";
import Image from "next/image";
import React from "react";
import { Button } from "@heroui/react";
import { advertiseTicketByAdmin } from "@/app/lib/actions/advertiseTicketByAdmin";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";


const AdminAdsTicketCard = ({ advertisedTicketPage }) => {
    const router = useRouter();
  const handleApprove = async (id) => {
    const res = await advertiseTicketByAdmin(id, "YES");

    if (res.modifiedCount > 0) {
      toast.success("Ticket Advertise Added successfully!");
      router.refresh();
    }
  };

  const handleReject = async(id) => {
    const res = await advertiseTicketByAdmin(id, "NO") ;

    if(res.modifiedCount > 0) {
        toast.success("Ticket Advertise Not Added !")
         router.refresh();
    }
  }




  const statusClass = {
    pending: "bg-yellow-100 text-yellow-700",
    approved: "bg-green-100 text-green-700",
    rejected: "bg-red-100 text-red-700",
  };

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="overflow-x-auto rounded-2xl border border-gray-200">
        <table className="w-full min-w-[1100px] border-collapse text-left">
          <thead className="bg-blue-50">
            <tr className="text-sm text-gray-700">
              <th className="px-4 py-4 font-semibold">#</th>
              <th className="px-4 py-4 font-semibold">Photo</th>
              <th className="px-4 py-4 font-semibold">Ticket Name</th>
              <th className="px-4 py-4 font-semibold">From</th>
              <th className="px-4 py-4 font-semibold">To</th>
              <th className="px-4 py-4 font-semibold">Transport</th>
              <th className="px-4 py-4 font-semibold">Price</th>
              <th className="px-4 py-4 font-semibold">Quantity</th>
              <th className="px-4 py-4 font-semibold">Vendor</th>
              <th className="px-4 py-4 font-semibold">Status</th>
              <th className="px-4 py-4 font-semibold">Action</th>
            </tr>
          </thead>

          <tbody>
            {advertisedTicketPage.map((ticket, index) => (
              <tr
                key={index}
                className="border-t border-gray-200 text-sm text-gray-700"
              >
                <td className="px-4 py-4">{index + 1}</td>

                <td className="px-4 py-4">
                  <Image
                    src={ticket.image}
                    alt={ticket.title}
                    width={128}
                    height={80}
                    className="h-20 w-32 rounded-xl object-cover"
                  />
                </td>

                <td className="px-4 py-4">
                  <h3 className="max-w-40 font-semibold text-gray-900">
                    {ticket.title}
                  </h3>
                  <p className="mt-1 text-xs text-gray-500">
                    ID:{ticket._id}
                  </p>
                </td>

                <td className="px-4 py-4">{ticket.from}</td>
                <td className="px-4 py-4">{ticket.to}</td>

                <td className="px-4 py-4">
                  <span className="rounded-lg bg-blue-50 px-3 py-1 text-blue-600">
                    {ticket.transportType}
                  </span>
                </td>

                <td className="px-4 py-4 font-medium">৳ {ticket.price}</td>
                <td className="px-4 py-4">{ticket.quantity} Seats</td>

                <td className="px-4 py-4">
                  <p className="font-medium text-gray-900">
                    {ticket.vendorName}
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    {ticket.vendorEmail}
                  </p>
                </td>

                <td className="px-4 py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${statusClass[ticket.verificationStatus]}`}
                  >
                    {ticket.verificationStatus}
                  </span>
                </td>

               

                <td className="px-4 py-4">
                  <div className="flex flex-row gap-2">
                    <Button
                      onClick={() => handleApprove(ticket._id)}
                      className="h-9 rounded-lg border border-blue-500 bg-white px-4 text-sm text-blue-600 hover:bg-green-50"
                    >
                      Approve
                    </Button>

                    <Button
                      onClick={() => handleReject(ticket._id)}
                      className="h-9 rounded-lg border border-red-500 bg-white px-4 text-sm text-red-500 hover:bg-red-50"
                    >
                      Reject
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-5 text-sm text-gray-500">
        Showing {advertisedTicketPage.length} tickets
      </p>
    </div>
  );
};

export default AdminAdsTicketCard;

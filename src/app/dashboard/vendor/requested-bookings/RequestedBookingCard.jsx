"use client";
import React from 'react'
import Image from "next/image";
import { Button, Card } from "@heroui/react";
import { toast } from 'react-toastify';
import { updateBookedTicketStatus } from '@/app/lib/actions/updateBookedTicketStatus';
import { useRouter } from "next/navigation";



const RequestedBookingCard = ({BookedTickets}) => {
     const router = useRouter();


    const handleApproved = async(id) =>{
       const res = await updateBookedTicketStatus(id, "approved");
       if(res.modifiedCount >0){
        toast.success("Ticket approved successfully!");
        router.refresh()
       }
    }

    const handleReject = async(id) => {
        const res = await updateBookedTicketStatus(id, 'rejected');
         if(res.modifiedCount > 0 ){
            toast.success("Ticket rejected successfully!");
                  router.refresh();
         }
    }



 const statusClass = {
    pending: "bg-yellow-100 text-yellow-700",
    approved: "bg-green-100 text-green-700",
    rejected: "bg-red-100 text-red-700",
  };
   
  return (
     <Card className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="overflow-x-auto rounded-2xl border border-gray-200">
              <table className="w-full min-w-275 border-collapse text-left">
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
                    <th className="px-4 py-4 font-semibold">Status</th>
                    <th className="px-4 py-4 font-semibold">Action</th>
                  </tr>
                </thead>
    
                <tbody>
                  {BookedTickets.map((bookedTicket, index) => (
                    <tr
                      key={index}
                      className="border-t border-gray-200 text-sm text-gray-700"
                    >
                      <td className="px-4 py-4">{index + 1}</td>
    
                      <td className="px-4 py-4">
                        <Image
                          src={bookedTicket.ticketImage}
                          alt={bookedTicket.ticketTitle}
                          width={128}
                          height={80}
                          className="h-20 w-32 rounded-xl object-cover"
                        />
                      </td>
    
                      <td className="px-4 py-4">
                        <h3 className="max-w-40 font-semibold text-gray-900">
                          {bookedTicket.ticketTitle}
                        </h3>
                        <p className="mt-1 text-xs text-gray-500">
                          ID: {bookedTicket._id}
                        </p>
                      </td>
    
                      <td className="px-4 py-4">{bookedTicket.from}</td>
    
                      <td className="px-4 py-4">{bookedTicket.to}</td>
    
                      <td className="px-4 py-4">
                        <span className="rounded-lg bg-blue-50 px-3 py-1 text-blue-600">
                          {bookedTicket.transportType}
                        </span>
                      </td>
    
                      <td className="px-4 py-4 font-medium">৳ {bookedTicket.unitPrice}</td>
    
                      <td className="px-4 py-4">{bookedTicket.bookingQuantity} Seats</td>
                       
    
                      <td className="px-4 py-4">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${statusClass[bookedTicket.status]}`}
                        >
                          {bookedTicket.status}
                        </span>
                      </td>
    
                      <td className="px-4 py-4">
                        <div className="flex flex-row gap-2">
                          <Button  onClick={() => handleApproved(bookedTicket._id)} className="h-9 rounded-lg border border-blue-500 bg-white px-4 text-sm text-blue-600 hover:bg-green-50">
                            Approve
                          </Button>
    
                          <Button  onClick={() => handleReject(bookedTicket._id)} className="h-9 rounded-lg border border-red-500 bg-white px-4 text-sm text-red-500 hover:bg-red-50">
                            Reject
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
    
            {/* <p className="mt-5 text-sm text-gray-500">
              Showing 1 to {bookedTicket.length} of {bookedTicket.length} tickets
            </p> */}
          </Card>
  )
}

export default RequestedBookingCard
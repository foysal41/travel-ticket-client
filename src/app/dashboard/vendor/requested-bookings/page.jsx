
import { getBookedTickets } from '@/app/lib/api/getBookedTickets'
import React from 'react'
import RequestedBookingCard from './RequestedBookingCard'

const RequestedBookingPage = async() => {
    const BookedTickets = await getBookedTickets()
   

  return (
      <main className="min-h-screen px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Your Tickets</h1>
        <p className="mt-2 text-sm text-gray-500">
          Review the Ticket by  vendor submitted tickets and approve or reject them.
        </p>
      </div>
       
       <RequestedBookingCard BookedTickets={BookedTickets} ></RequestedBookingCard>
     
    </main>
  )
}

export default RequestedBookingPage
import React from "react";
import Link from "next/link";

import { getTickets } from "@/app/lib/api/gettickets";
import EditTicketForm from "./EditTicketForm";

const EditTicketPage =  async({params}) => {
  const tickets = await getTickets()
  
 
  return (
    <main className="min-h-screen px-4 py-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Edit Ticket</h1>
          <p className="mt-2 text-sm text-gray-500">
            Update the ticket information below and save your changes.
          </p>
        </div>

        <Link
          href="/dashboard/vendor/my-tickets"
          className="rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          ← Back to My Tickets
        </Link>
      </div>

    <EditTicketForm tickets={tickets}></EditTicketForm>
      
    </main>
  );
};

export default EditTicketPage;
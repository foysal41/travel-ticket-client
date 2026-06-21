import React from "react";
import { getTickets } from "@/app/lib/api/gettickets";

import ManageTicketCard from "./ManageTicketCard";

const ManageTicketsPage = async() => {
    const tickets = await getTickets()    

  return (
    <main className="min-h-screen px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Manage Tickets</h1>
        <p className="mt-2 text-sm text-gray-500">
          Review vendor submitted tickets and approve or reject them.
        </p>
      </div>
        <ManageTicketCard tickets={tickets}></ManageTicketCard>
     
    </main>
  );
};

export default ManageTicketsPage;
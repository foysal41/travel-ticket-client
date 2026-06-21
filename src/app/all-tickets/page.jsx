import React from 'react'
import { getTickets } from '../lib/api/gettickets'
import AllTicketList from './AllTicketList'


const AllTickets = async() => {
    const tickets = await getTickets()

const approvedTickets = tickets.filter(
    (ticket) => ticket.verificationStatus === "approved"
  );
    
  return ( 

    <AllTicketList tickets={approvedTickets}></AllTicketList>
  )
}

export default AllTickets
import { getTickets } from '@/app/lib/api/gettickets'
import React from 'react'
import AdminAdsTicketCard from './AdminAdsTicketCard'



const AdvertiseTicketsPage = async() => {
    const advertisedTicketPage = await getTickets()
    console.log(advertisedTicketPage)
  return (
    <div>
        <AdminAdsTicketCard advertisedTicketPage={advertisedTicketPage}></AdminAdsTicketCard>
    </div>
  )
}

export default AdvertiseTicketsPage
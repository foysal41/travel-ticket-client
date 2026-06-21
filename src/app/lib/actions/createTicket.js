'use client'

import { serverMutation } from "../core/server"

export const createTicket = async(newTicketData) => {
    return serverMutation('/api/createTicket', newTicketData)
}





// const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

// export const createTicket = async(newTicketData) => {
//     const res = await fetch(`${baseUrl}/api/createTicket`, {
//         method: 'POST',
//         headers:{
//             'Content-Type':'application/json',
//         },
//         body: JSON.stringify(newTicketData)
//     })

//     return res.json();
// }
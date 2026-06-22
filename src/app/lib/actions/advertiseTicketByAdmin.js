
'use client'
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
export const advertiseTicketByAdmin = async(id, ticketDisplayByAdmin) => {
    const res = await fetch(`${baseUrl}/api/advertiseTicket/status/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type' : 'Application/json',
        },
        body:JSON.stringify({ticketDisplayByAdmin: "YES"})
    })
    return res.json();
}



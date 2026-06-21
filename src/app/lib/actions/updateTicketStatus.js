'use client'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const updateTicketStatus = async(id, status) => {
    const res = await fetch(`${baseUrl}/api/ticket/status/${id}`, {
        method:"PATCH", 
        headers: {
            'Content-Type' : 'Application/json',
        },
        body:JSON.stringify({status})
    })

    return res.json();
}
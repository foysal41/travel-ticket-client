const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
export const getBookedTickets = async () => {
    const res = await fetch(`${baseUrl}/api/allBookedTickets` , {
        cache: 'no-store',
    })
    return res.json()
}
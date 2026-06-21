'use client'

import { serverMutation } from "../core/server"

export const bookedTicket = async(bookedTicketData) => {
    return serverMutation('/api/bookedTicket' , bookedTicketData)
}
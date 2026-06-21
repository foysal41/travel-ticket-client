"use client";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const updateTicket = async (id, newTicketData) => {
  const res = await fetch(`${baseUrl}/api/ticket/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTicketData),
  });

  return res.json();
};
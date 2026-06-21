import { NextResponse } from "next/server";
import { stripe } from "@/app/lib/stripe";

export async function POST(req) {
  try {
    const bookingData = await req.json();

    const session = await stripe.checkout.sessions.create({
      mode: "payment",

      line_items: [
        {
          price_data: {
            currency: "bdt",
            product_data: {
              name: bookingData.ticketTitle,
              images: [bookingData.ticketImage],
            },
            unit_amount: Number(bookingData.unitPrice) * 100,
          },
          quantity: Number(bookingData.bookingQuantity),
        },
      ],

      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/all-tickets/${bookingData.ticketId}`,

    //   metadata: {
    //     ticketId: bookingData.ticketId,
    //     ticketTitle: bookingData.ticketTitle,
    //     ticketImage: bookingData.ticketImage,
    //     from: bookingData.from,
    //     to: bookingData.to,
    //     transportType: bookingData.transportType,
    //     unitPrice: String(bookingData.unitPrice),
    //     bookingQuantity: String(bookingData.bookingQuantity),
    //     totalPrice: String(bookingData.totalPrice),
    //     vendorName: bookingData.vendorName,
    //     vendorEmail: bookingData.vendorEmail,
    //     departureDateTime: bookingData.departureDateTime,
    //   },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    return NextResponse.json(
      { error: err.message },
      { status: err.statusCode || 500 }
    );
  }
}
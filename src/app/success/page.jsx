import { redirect } from "next/navigation";
import { CheckCircle } from "lucide-react";
import { stripe } from "../lib/stripe";
import Link from "next/link";

export default async function Success({ searchParams }) {
  const { session_id } = await searchParams;

  if (!session_id) {
    throw new Error("Please provide a valid session_id (`cs_test_...`)");
  }

  const session = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ["line_items", "payment_intent"],
  });

  const {
    status,
    customer_details: { email: customerEmail },
    metadata,
  } = session;

  if (status === "open") {
    return redirect("/");
  }

  if (status === "complete") {
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/payment-success`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
      body: JSON.stringify({
        bookingId: metadata.bookingId,
        ticketId: metadata.ticketId,
        bookingQuantity: metadata.bookingQuantity,
        stripeSessionId: session_id,
        customerEmail,
      }),
    });

    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-emerald-100 px-4">
        <div className="rounded-3xl bg-white p-8 text-center shadow-xl">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-blue-100 p-4">
              <CheckCircle className="h-16 w-16 text-blue-600" />
            </div>
          </div>

          <h1 className="mb-3 text-3xl font-bold text-gray-900">
            Payment Successful 🎉
          </h1>

          <p className="mb-6 text-gray-600">
            Thank you for your purchase. Your payment has been processed
            successfully.
          </p>

          <div className="mb-6 rounded-xl border bg-gray-50 p-4">
            <p className="text-sm text-gray-500">Confirmation email sent to</p>
            <p className="break-all font-semibold text-gray-900">
              {customerEmail}
            </p>
          </div>

          <p className="mb-8 text-gray-600">
            Your booking status is now paid and ticket quantity has been updated.
          </p>

          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/dashboard/user/my-booked-tickets"
              className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
            >
              View My Tickets
            </Link>

            <Link
              href="/"
              className="rounded-xl border border-gray-300 px-6 py-3 font-medium text-gray-700 transition hover:bg-gray-50"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return redirect("/");
}
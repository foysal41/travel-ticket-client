import { redirect } from "next/navigation";
import { CheckCircle } from "lucide-react";
import { stripe } from "../lib/stripe";
import Link from 'next/link'

export default async function Success({ searchParams }) {
  const { session_id } = await searchParams;

  if (!session_id) {
    throw new Error("Please provide a valid session_id (`cs_test_...`)");
  }

  const {
    status,
    customer_details: { email: customerEmail },
  } = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ["line_items", "payment_intent"],
  });

  if (status === "open") {
    return redirect("/");
  }

  if (status === "complete") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-emerald-100 px-4">
        <div className=" bg-white rounded-3xl shadow-xl p-8 text-center">
      
          <div className="flex justify-center mb-6">
            <div className="bg-blue-100 p-4 rounded-full">
              <CheckCircle className="w-16 h-16 text-blue-600" />
            </div>
          </div>

         
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Payment Successful 🎉
          </h1>

          <p className="text-gray-600 mb-6">
            Thank you for your purchase. Your payment has been processed
            successfully.
          </p>

         
          <div className="bg-gray-50 border rounded-xl p-4 mb-6">
            <p className="text-sm text-gray-500">Confirmation email sent to</p>
            <p className="font-semibold text-gray-900 break-all">
              {customerEmail}
            </p>
          </div>

     
          <p className="text-gray-600 mb-8">
            If you have any questions about your order, feel free to contact our
            support team.
          </p>

      
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
            >
              Back to Home
            </Link>

            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

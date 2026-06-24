import { NextResponse } from "next/server";
import { stripe } from "@/app/lib/stripe";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const userEmail = searchParams.get("email");

    const sessions = await stripe.checkout.sessions.list({
      limit: 100,
    });

    const revenue = sessions.data.map((item) => ({
      id: item.id,
      amount: item.amount_total / 100,
      email: item.customer_details?.email || item.customer_email || "No email",
      paymentStatus: item.payment_status,
      date: item.created * 1000,
    }));

    // console.log("FRONTEND EMAIL:", userEmail);
    // console.log("STRIPE EMAILS:", revenue.map((item) => item.email));

    const userRevenue = revenue.filter(
      (item) =>
        item.email?.toLowerCase() === userEmail?.toLowerCase()
    );

    const totalRevenue = userRevenue.reduce(
      (sum, item) => sum + Number(item.amount || 0),
      0
    );

    const paidPayments = userRevenue.filter(
      (item) => item.paymentStatus === "paid"
    ).length;

    return NextResponse.json({
      success: true,
      userEmail,
      totalRevenue,
      totalTransactions: userRevenue.length,
      paidPayments,
      revenue: userRevenue,
    //   allStripeEmails: revenue.map((item) => item.email),
    });
  } catch (error) {
    console.log("STRIPE ERROR:", error);

    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
"use client";

import { useSession } from "@/lib/auth-client";
import { useEffect, useState } from "react";

export default function TransitionHistoryPage() {
  const [data, setData] = useState(null);
 const {data:session, isPending} = useSession()
 const userEmail = session?.user.email;
 

  useEffect(() => {
    const loadRevenue = async () => {
      

      const res = await fetch(
        `/api/user/stripe-payments?email=${userEmail}`
      );

      const result = await res.json();

      console.log("REVENUE RESULT:", result);

      setData(result);
    };

    loadRevenue();
  }, []);

  return (
    <div>
      
        <div className="px-4 py-4">
          <h1 className="text-3xl font-bold text-gray-900">Transition History</h1>
       
        </div>

        
     

      <div className="grid grid-cols-3 gap-5 mt-5">
        <div className="bg-white p-5 rounded shadow">
          <h3>Total Revenue</h3>
          <p className="text-2xl font-bold">
            ৳ {data?.totalRevenue || 0}
          </p>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <h3>Total Transactions</h3>
          <p className="text-2xl font-bold">
            {data?.totalTransactions || 0}
          </p>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <h3>Paid Payments</h3>
          <p className="text-2xl font-bold">
            {data?.paidPayments || 0}
          </p>
        </div>
      </div>

    
    </div>
  );
}
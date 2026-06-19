"use client"
import LoadingSpinner from '@/app/components/dashboard/LoadingSpinner'
import StateCard from '@/app/components/dashboard/StateCard'
import { useSession } from '@/lib/auth-client'

import Ticket from "@gravity-ui/icons/Ticket";
import {Calendar} from '@gravity-ui/icons';
import CircleDollar from "@gravity-ui/icons/CircleDollar";
import StarFill from "@gravity-ui/icons/StarFill";


const VendorDashboardPage = () => {



    const {data:session, isPending} = useSession()

    if(isPending) {
       return <LoadingSpinner></LoadingSpinner>
    }

    const user = session?.user;

        const stats = [
    {
      label: "Total Tickets",
      value: "128",
      growth: "+12 this week",
      icon: Ticket,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      label: "Total Bookings",
      value: "86",
      growth: "+8 this week",
      icon: Calendar,
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
    },
    {
      label: "Total Earnings",
      value: "$4,680",
      growth: "+15% this week",
      icon: CircleDollar,
      iconBg: "bg-violet-100",
      iconColor: "text-violet-600",
    },
    {
      label: "Average Rating",
      value: "4.8",
      growth: "+0.3 this week",
      icon: StarFill,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-500",
    },
  ];

   
  return (
    <div className='px-5 '>
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-950 md:text-3xl">
            Hi Welcome Back, {user.name}!
          </h1>
          <p className="mt-2 text-sm text-slate-500">{`Here's what's happening with your ticket business today.`}</p>
        </div>

        {/* {dateRange && (
          <div className="inline-flex w-fit items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm">
            📅 {dateRange}
          </div>
        )} */}
      </div>

        <StateCard stats={stats}></StateCard>
    </div>
  )
}

export default VendorDashboardPage
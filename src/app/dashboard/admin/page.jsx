"use client"
import { useSession } from '@/lib/auth-client'
import React from 'react'

const AdminDashboardPage = () => {

  const {data:session, isPending} = useSession()
  const user = session?.user
 


  return (
    <div className='px-4 py-8 '>
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-950 md:text-3xl">
            Admin Welcome Back , {user?.name}!
          </h1>
          <p className="mt-2 text-sm text-slate-500">{`Here's what's happening with your ticket business today.`}</p>
        </div>

      </div>

        
    </div>
  )
}

export default AdminDashboardPage
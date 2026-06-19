"use client";

import React from "react";
import { Button, Card } from "@heroui/react";
import { useSession } from "@/lib/auth-client";

const VendorProfilePage = () => {
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <main className="min-h-screen px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Vendor Profile</h1>
        <p className="mt-2 text-sm text-gray-500">
          Manage your profile information and account settings.
        </p>
      </div>

      <Card className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              Profile Information
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Update your personal information and profile picture.
            </p>
          </div>

          <div className="">
          

            <Button className="rounded-xl bg-[#0B3977] px-6 text-white">
              Edit
            </Button>
          </div>
        </div>

        <form className="space-y-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[220px_1fr]">
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="flex h-44 w-44 items-center justify-center rounded-full bg-blue-100 text-5xl font-bold text-blue-600">
                  {user?.name?.charAt(0) || "V"}
                </div>

                <button
                  type="button"
                  className="absolute bottom-2 right-2 flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-lg shadow-md"
                >
                  📷
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  name="name"
                  type="text"
                  defaultValue={user?.name || ""}
                  placeholder="Enter full name"
                  className="h-12 w-full rounded-xl border border-gray-300 bg-white px-4 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  defaultValue={user?.email || ""}
                   readOnly
                  placeholder="Enter email address"
                  className="h-12 w-full rounded-xl border border-gray-300 bg-white px-4 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Role
                </label>
                <input
                  name="phone"
                  type="text"
                  defaultValue={user?.role} 
                  readOnly              
                  className="h-12 w-full rounded-xl border border-gray-300 bg-white px-4 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  name="phone"
                  type="text"
                  defaultValue="+880 1712 345678"
                  placeholder="Enter phone number"
                  className="h-12 w-full rounded-xl border border-gray-300 bg-white px-4 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Location
                </label>
                <input
                  name="location"
                  type="text"
                  defaultValue="Dhaka, Bangladesh"
                  placeholder="Enter location"
                  className="h-12 w-full rounded-xl border border-gray-300 bg-white px-4 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium ">
                  Joined Date
                </label>
                <input
                  name="joinedDate"
                  type="text"
                  defaultValue="22 Jan 2025"
                  readOnly
                  className="h-12 w-full rounded-xl border border-gray-300  px-4 text-sm  outline-none"
                />
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-blue-200 bg-blue-50 px-5 py-4 text-sm font-medium text-blue-600">
            You can update your name, email, role and phone number.
          </div>
        </form>
      </Card>
    </main>
  );
};

export default VendorProfilePage;
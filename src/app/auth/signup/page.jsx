"use client";
import Link from "next/link";
import { Button, Card } from "@heroui/react";
import React from "react";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";

const SignUpPage = () => {
  const formSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    //Form validation
    if (!user.name || !user.email || !user.password || !user.role) {
      toast.error("Please fill in all fields");
      return;
    }

    // Name Field Validation
    if (user.name.trim().length < 3) {
      toast.error("Name must be at least 3 characters");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(user.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    //password validation
    if (user.password.length < 6){
         toast.error("Password must be at least 6 characters");
      return;
    }


    const {data, error} = await authClient.signUp.email({
        name: user.name,
        email: user.email,
        password: user.password,
        role:user.role,
        callbackURL: "/auth/signin"
    })

    if(error){
        toast.error("Account is not create");
        return;
    }

    toast.success("Account created Successfully");
    

  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-20">
      <Card className="w-full max-w-md rounded-3xl border border-gray-200 bg-white p-8 shadow-xl">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Create an Account
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Join TravelTicket and start booking tickets easily
          </p>
        </div>

        <form onSubmit={formSubmit} className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter your full name"
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
              placeholder="you@example.com"
              className="h-12 w-full rounded-xl border border-gray-300 bg-white px-4 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              name="password"
              type="password"
              placeholder="Choose a password"
              className="h-12 w-full rounded-xl border border-gray-300 bg-white px-4 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-blue-500"
            />
          </div>

          <div>
            <p className="mb-3 text-sm font-medium text-gray-700">
              Select Your Role
            </p>

            <div className="grid grid-cols-3 gap-3">
              <label className="flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white p-3 text-gray-700 cursor-pointer transition hover:border-blue-500 hover:bg-blue-50">
                <input
                  type="radio"
                  name="role"
                  value="user"
                  defaultChecked
                  className="accent-blue-600"
                />
                User
              </label>

              <label className="flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white p-3 text-gray-700 cursor-pointer transition hover:border-blue-500 hover:bg-blue-50">
                <input
                  type="radio"
                  name="role"
                  value="vendor"
                  className="accent-blue-600"
                />
                Vendor
              </label>

              <label className="flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white p-3 text-gray-700 cursor-pointer transition hover:border-blue-500 hover:bg-blue-50">
                <input
                  type="radio"
                  name="role"
                  value="admin"
                  className="accent-blue-600"
                />
                Admin
              </label>
            </div>
          </div>

          <Button
            type="submit"
            className="h-12 w-full rounded-xl bg-blue-600 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Sign Up
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            href="/auth/signin"
            className="font-semibold text-blue-600 hover:underline"
          >
            Sign in instead
          </Link>
        </p>
      </Card>
    </main>
  );
};

export default SignUpPage;

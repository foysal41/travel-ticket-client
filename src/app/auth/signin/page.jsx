"use client";
import Link from "next/link";
import { Button, Card } from "@heroui/react";
import React from "react";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";

const SignInPage = () => {
  const formSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    //Form validation
    if (!user.email || !user.password ) {
      toast.error("Please fill in all fields");
      return;
    }


    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(user.email)) {
      toast.error("Please enter a valid email address");
      return;
    }


    const {data, error} = await authClient.signIn.email({
        email: user.email,
        password: user.password,
        callbackURL: "/"
       
    })

    if(error){
        toast.error("Account is not create");
        return;
    }

    toast.success("Account Login Successfully");
    

  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-20">
      <Card className="w-full max-w-md rounded-3xl border border-gray-200 bg-white p-8 shadow-xl">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Login an Account
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Join TravelTicket and start booking tickets easily
          </p>
        </div>

        <form onSubmit={formSubmit} className="mt-8 space-y-5">
          

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

         

          <Button
            type="submit"
            className="h-12 w-full rounded-xl bg-blue-600 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Sign In
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Create New Account{" "}
          <Link
            href="/auth/signup"
            className="font-semibold text-blue-600 hover:underline"
          >
            Sign in instead
          </Link>
        </p>
      </Card>
    </main>
  );
};

export default SignInPage;

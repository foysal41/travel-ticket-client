"use client";

import React, { useState } from "react";
import Link from "next/link";
import logo from "@/app/assets/logo-travel-ticket.png";
import Image from "next/image";
import { useSession, signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { getUserSession } from "../lib/core/session";

const Navbar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { data: session, isPending } = useSession();
  const user = session?.user;


 
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "All Tickets", href: "/all-tickets" },
  ];

  const dashboardLinks = {
  admin: "/dashboard/admin",
  vendor: "/dashboard/vendor",
  user: "/dashboard/user",
};

if (user) {
  navLinks.push({
    label: "Dashboard",  
    href: dashboardLinks[user.role] || "/dashboard/user",
  });
}

  const handleLogout = async() => {
    await signOut();
    router.push("/auth/signin")
    router.refresh();
  };


  
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-black">
          <Image
            src={logo}
            alt="Travel Ticket Logo "
            width={170}
            height={60}
            className=" h-10 w-auto object-cover "
          ></Image>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden items-center gap-2 rounded-full  px-4 py-2 md:flex">
          {navLinks.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-black"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Right */}
        <div className="hidden items-center gap-4 md:flex">
          {user ? (
            <>
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-2 rounded-full px-2 py-1 hover:bg-gray-100"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white">
                    {user.name.charAt(0)}
                  </div>

                  <span className="text-sm font-medium text-gray-800">
                    Hi, {user.name}
                  </span>

                  <span className="text-xs text-gray-500">▼</span>
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-3 w-56 rounded-xl border border-gray-200 bg-white p-2 shadow-lg">
                    <div className="border-b border-gray-100 px-3 py-2">
                      <p className="text-sm font-semibold text-gray-800">
                        {user.name}
                      </p>
                      <p className="text-xs text-gray-500">{user.email}</p>
                    </div>

                    <Link
                      href="/dashboard/profile"
                      onClick={() => setIsDropdownOpen(false)}
                      className="mt-2 block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      My Profile
                    </Link>

                    <button
                      onClick={() => {
                        setIsDropdownOpen(false);
                        handleLogout();
                      }}
                      className="mt-1 block w-full rounded-lg px-3 py-2 text-left text-sm text-red-500 hover:bg-red-50"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <Link href="/auth/signin" className="text-sm font-medium text-gray-800">
                Login
              </Link>

              <Link
                href="/auth/signup"
                className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white"
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t bg-white md:hidden">
          <ul className="flex flex-col gap-2 p-4">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100"
                >
                  {item.label}
                </Link>
              </li>
            ))}

            {user ? (
              <>
                <li className="rounded-xl bg-gray-50 px-4 py-3">
                  <p className="text-sm font-semibold text-gray-800">
                    HI, {user.name}
                  </p>
                  <p className="text-xs text-gray-500">{user.email}</p>
                </li>

                <li>
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      handleLogout();
                    }}
                    className="block w-full rounded-full border border-red-500 px-4 py-3 text-sm font-semibold text-red-500"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    href="/login"
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-xl px-4 py-3 text-sm font-semibold"
                  >
                    Login
                  </Link>
                </li>

                <li>
                  <Link
                    href="/register"
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-full bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white"
                  >
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

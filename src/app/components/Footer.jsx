import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/assets/logo-travel-ticket.png"

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        {/* Column 1 */}
        <div>
          <Link href="/" className="text-2xl font-bold">
            <Image src={logo} alt="Travel Ticket Logo " width={170} height={60} className=" h-10 w-auto object-cover "></Image>
          </Link>

          <p className="mt-4 max-w-xs text-sm leading-6 text-slate-300">
            Book bus, train, launch & flight tickets easily.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>

          <ul className="space-y-3 text-sm text-slate-300">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/tickets" className="hover:text-white">
                All Tickets
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white">
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Contact Info</h3>

          <ul className="space-y-3 text-sm text-slate-300">
            <li>Email: support@ticketbari.com</li>
            <li>Phone: +880 1234-567890</li>
            <li>
              Facebook:{" "}
              <a
                href="https://facebook.com"
                target="_blank"
                className="hover:text-white"
              >
                TicketBari Page
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Payment Methods</h3>

          <div className="flex flex-wrap gap-3">
            <span className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-900">
              Stripe
            </span>
            <span className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-900">
              Visa
            </span>
            <span className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-900">
              MasterCard
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 py-5 text-center text-sm text-slate-400">
        © 2025 TicketBari. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
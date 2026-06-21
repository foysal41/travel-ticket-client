"use client";

import { usePathname } from "next/navigation";
import {
  LayoutSideContentLeft,
  Calendar,
  ChartColumn,
  Gear,
  House,
  Person,
  Ticket,
  Plus,
} from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import { ClipboardListIcon } from "lucide-react";
import Link from "next/link";
import { useSession } from "@/lib/auth-client";
import LoadingSpinner from "./LoadingSpinner";

export function DashboardSidebar() {
  const {data:session, isPending } = useSession();
  const pathname = usePathname();

  const role = session?.user?.role;
  

  const navItems = [
    {
      icon: House,
      href: "/dashboard/vendor",
      label: "Dashboard",
      active: true,
    },
    { icon: Plus, href: "/dashboard/vendor/add-ticket", label: "Add Ticket" },
    {
      icon: Ticket,
      href: "/dashboard/vendor/my-tickets",
      label: "My Added Tickets",
    },
    {
      icon: ClipboardListIcon,
      href: "/dashboard/vendor/requested-bookings",
      label: "Requested Bookings",
    },
    {
      icon: ChartColumn,
      href: "/dashboard/vendor/earnings",
      label: "Earnings",
    },
    {
      icon: Person,
      href: "/dashboard/vendor/vendor-profile",
      label: "Vendor Profile",
    },
    { icon: Gear, href: "/dashboard/vendor/settings", label: "Settings" },
  ];



  const adminLinks = [
  { icon: House, label: "Dashboard", href: "/dashboard/admin" },
  { icon: Ticket, label: "Manage Tickets", href: "/dashboard/admin/manage-tickets" },
  { icon: Person, label: "Manage Users", href: "/dashboard/admin/manage-users" },
  { icon: Calendar, label: "Advertise Tickets", href: "/dashboard/admin/advertise-tickets" },
  { icon: Person, label: "Admin Profile", href: "/dashboard/admin/profile" },
];

  // ToDo: User Links will be create

   let links = [];


  if(role === "admin"){
    links = adminLinks
  }

  if(role === "vendor"){
    links = navItems
  }
 

  const navContent = (
    <nav className="flex flex-col gap-3">
      {links.map((item) => (
        <Link
          href={item.href}
          key={item.label}
          className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition-all ${
            pathname === item.href
              ? "bg-[#0B3977] text-white shadow-lg shadow-blue-200"
              : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
          }`}
        >
          <item.icon
            className={pathname === item.href ? "text-white" : "text-gray-500"}
          />
          {item.label}
        </Link>
      ))}
    </nav>
  );


  if(isPending){
    return(
      <aside className="w-64 border-r bg-white p-5">
       <LoadingSpinner></LoadingSpinner>
      </aside>
    )
  }

  return (
    <>
      <aside className="hidden w-64 shrink-0 border-r border-default p-4 lg:block">
        {navContent}
      </aside>
      <Drawer>
        <Button className="lg:hidden" variant="secondary">
          <LayoutSideContentLeft />
          Side Bar
        </Button>
        <Drawer.Backdrop>
          <Drawer.Content placement="left">
            <Drawer.Dialog>
              <Drawer.CloseTrigger />
              <Drawer.Header>
                <Drawer.Heading>Navigation</Drawer.Heading>
              </Drawer.Header>
              <Drawer.Body>{navContent}</Drawer.Body>
            </Drawer.Dialog>
          </Drawer.Content>
        </Drawer.Backdrop>
      </Drawer>
    </>
  );
}

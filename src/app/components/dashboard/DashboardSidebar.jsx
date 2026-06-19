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
import {Button, Drawer} from "@heroui/react";
import { ClipboardListIcon } from "lucide-react";

export function DashboardSidebar() {
  const navItems = [
    { icon: House, label: "Dashboard", active: true },
    { icon: Plus, label: "Add Ticket" },
    { icon: Ticket, label: "My Added Tickets" },
    { icon: ClipboardListIcon, label: "Requested Bookings" },
    { icon: ChartColumn, label: "Earnings" },
    { icon: Person, label: "Vendor Profile" },
    { icon: Gear, label: "Settings" },
  ];


  const navContent =  <nav className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <button
                    key={item.label} 
                    className= {`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition-all ${item.active ? "bg-[#0B3977] text-white shadow-lg shadow-blue-200" : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"}`}
                    type="button"
                  >
                    
                    <item.icon className={`${item.active ? "text-white " : "text-muted"}`}/>
                    {item.label}
                  </button>
                ))}
              </nav>


  return (
    <>
    <aside className="hidden w-64 shrink-0 border-r border-default p-4 lg:block" >
        {navContent}
    </aside>
    <Drawer>
      <Button  className="lg:hidden" variant="secondary">
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
            <Drawer.Body>
             {navContent}
            </Drawer.Body>
          </Drawer.Dialog>
        </Drawer.Content>
      </Drawer.Backdrop>
    </Drawer>
    </>
  );
}
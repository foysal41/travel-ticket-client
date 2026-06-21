import TicketCard from "./TicketCard";
import SectionTitle from "./SectionTitle";
import { getTickets } from "@/app/lib/api/gettickets";


const AdvertisementSection = async () => {
   const advertisedTickets = await getTickets()

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle
          title="Featured Tickets"
          subtitle="Special tickets selected by admin for quick and trusted booking."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advertisedTickets.slice(0,6).map((ticket) => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvertisementSection;
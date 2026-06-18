import TicketCard from "./TicketCard";
import SectionTitle from "./SectionTitle";

const advertisedTickets = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957",
    title: "Dhaka to Cox's Bazar",
    price: 1200,
    quantity: 6,
    transportType: "Bus",
    perks: ["AC", "Snacks", "WiFi"],
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3",
    title: "Dhaka to Chattogram",
    price: 780,
    quantity: 8,
    transportType: "Train",
    perks: ["AC Seat", "Food"],
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1600679472829-3044539ce8ed",
    title: "Dhaka to Barisal",
    price: 950,
    quantity: 10,
    transportType: "Launch",
    perks: ["Cabin", "Food"],
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05",
    title: "Dhaka to Sylhet",
    price: 3200,
    quantity: 4,
    transportType: "Plane",
    perks: ["20kg Baggage"],
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e",
    title: "Dhaka to Khulna",
    price: 1100,
    quantity: 5,
    transportType: "Bus",
    perks: ["AC", "Water", "Snacks"],
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1535535112387-56ffe8db21ff",
    title: "Rajshahi to Dhaka",
    price: 650,
    quantity: 5,
    transportType: "Train",
    perks: ["AC Seat", "Food"],
  },
];

const AdvertisementSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle
          title="Featured Tickets"
          subtitle="Special tickets selected by admin for quick and trusted booking."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advertisedTickets.map((ticket) => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvertisementSection;
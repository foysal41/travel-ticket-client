import TicketCard from "./TicketCard";
import SectionTitle from "./SectionTitle";

const latestTickets = [
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e",
    title: "Sylhet to Dhaka",
    price: 1000,
    quantity: 6,
    transportType: "Bus",
    perks: ["AC", "Snacks"],
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3",
    title: "Chattogram to Dhaka",
    price: 750,
    quantity: 9,
    transportType: "Train",
    perks: ["AC Seat", "Food"],
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1600679472829-3044539ce8ed",
    title: "Barisal to Dhaka",
    price: 900,
    quantity: 7,
    transportType: "Launch",
    perks: ["Cabin", "Food"],
  },
  {
    id: 10,
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05",
    title: "Cox's Bazar to Dhaka",
    price: 3400,
    quantity: 3,
    transportType: "Plane",
    perks: ["20kg Baggage"],
  },
  {
    id: 11,
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957",
    title: "Khulna to Dhaka",
    price: 1050,
    quantity: 8,
    transportType: "Bus",
    perks: ["AC", "Water"],
  },
  {
    id: 12,
    image: "https://images.unsplash.com/photo-1535535112387-56ffe8db21ff",
    title: "Rangpur to Dhaka",
    price: 700,
    quantity: 6,
    transportType: "Train",
    perks: ["AC Seat"],
  },
  {
    id: 13,
    image: "https://images.unsplash.com/photo-1600679472829-3044539ce8ed",
    title: "Patuakhali to Dhaka",
    price: 850,
    quantity: 5,
    transportType: "Launch",
    perks: ["Cabin"],
  },
  {
    id: 14,
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e",
    title: "Mymensingh to Dhaka",
    price: 950,
    quantity: 7,
    transportType: "Bus",
    perks: ["AC", "Snacks"],
  },
];

const LatestTicketsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle
          title="Latest Available Tickets"
          subtitle="Recently added tickets from verified vendors."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {latestTickets.map((ticket) => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestTicketsSection;
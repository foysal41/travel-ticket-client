import Link from "next/link";
import { Bus, Ticket, Gift, Users } from "lucide-react";
import Image from "next/image";

const TicketCard = ({ ticket }) => {
  const { id, image, title, price, quantity, transportType, perks } = ticket;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
      <Image
        src={image}
        alt={title}
        width={500}
        height={300}
        className="w-full h-48 object-cover"
      />

      <div className="p-5 space-y-3">
        <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
          {title}
        </h3>

        <div className="space-y-2 text-sm text-gray-600">
          <p className="flex items-center gap-2">
            <Ticket size={16} className="text-blue-600" />
            <span className="font-semibold text-blue-600">৳{price}</span>
            <span>/ ticket</span>
          </p>

          <p className="flex items-center gap-2">
            <Users size={16} className="text-green-600" />
            Available: {quantity} tickets
          </p>

          <p className="flex items-center gap-2">
            <Bus size={16} className="text-purple-600" />
            Transport: {transportType}
          </p>

          <p className="flex items-start gap-2">
            <Gift size={16} className="text-orange-500 mt-0.5" />
            {/* <span className="line-clamp-1">Perks: {perks.join(", ")}</span> */}
          </p>
        </div>

        <Link href={'/dashboard'}
          className="block text-center w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-medium transition"
        >
          See Details
        </Link>
      </div>
    </div>
  );
};

export default TicketCard;

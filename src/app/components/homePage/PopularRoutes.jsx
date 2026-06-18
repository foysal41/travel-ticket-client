import { MapPin, ArrowRight } from "lucide-react";

const routes = [
  { from: "Dhaka", to: "Chattogram" },
  { from: "Dhaka", to: "Sylhet" },
  { from: "Dhaka", to: "Cox's Bazar" },
  { from: "Rajshahi", to: "Dhaka" },
  { from: "Khulna", to: "Dhaka" },
  { from: "Barisal", to: "Dhaka" },
];

const PopularRoutes = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Popular Routes
          </h2>
          <p className="text-gray-600 mt-3">
            Explore the most searched travel routes by our users.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {routes.map((route, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center justify-between mb-5">
                <MapPin className="text-blue-600" />
                <span className="text-sm bg-blue-50 text-blue-600 px-3 py-1 rounded-full">
                  Popular
                </span>
              </div>

              <div className="flex items-center gap-3 text-lg font-semibold text-gray-900">
                <span>{route.from}</span>
                <ArrowRight size={20} className="text-blue-600" />
                <span>{route.to}</span>
              </div>

              <button className="mt-5 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium transition">
                View Tickets
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularRoutes;
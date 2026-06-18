import { ShieldCheck, Bus, CreditCard, Clock } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Admin Approved Tickets",
    description:
      "Every ticket is reviewed before showing to users for better safety and trust.",
  },
  {
    icon: Bus,
    title: "Multiple Transport Options",
    description:
      "Book bus, train, launch, and air tickets from one platform.",
  },
  {
    icon: CreditCard,
    title: "Easy Payment",
    description:
      "Pay securely using Stripe after your booking request is accepted.",
  },
  {
    icon: Clock,
    title: "Real-Time Availability",
    description:
      "Check ticket quantity, status, and departure countdown easily.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose Us?
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            We make online ticket booking simple, secure, and reliable.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="text-center bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-md transition"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 flex items-center justify-center mb-5">
                  <Icon size={32} className="text-blue-600" />
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600 text-sm leading-6">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
import React from "react";


const StateCard = ({ stats = [] }) => {
  return (
    <section className="w-full space-y-6 py-5">
  

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-center gap-5">
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-full ${item.iconBg}`}
                >
                  <Icon className={`h-8 w-8 ${item.iconColor}`} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-500">
                    {item.label}
                  </p>
                  <h2 className="mt-1 text-3xl font-bold text-slate-950">
                    {item.value}
                  </h2>
                  <p className="mt-2 text-sm font-semibold text-emerald-500">
                    {item.growth}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default StateCard;
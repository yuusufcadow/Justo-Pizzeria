import { Phone, MapPin, Store, ArrowRight, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";

type FranchiseItem = {
  id: number;
  name: string;
  area: string;
  phone: string;
  status: string;
  description: string;
};

function Franchise() {
  const franchises: FranchiseItem[] = [
    {
      id: 1,
      name: "2dhagax",
      area: "Main Franchise",
      phone: "0616474641",
      status: "Open Daily",
      description:
        "Our 2dhagax franchise serves fresh pizza, fast orders, and reliable customer service every day.",
    },
    {
      id: 2,
      name: "Jubba",
      area: "City Franchise",
      phone: "0611869090",
      status: "Open Daily",
      description:
        "Our Jubba franchise offers fresh meals, quality taste, pickup service, and quick customer support.",
    },
    {
      id: 3,
      name: "Taleex",
      area: "Local Franchise",
      phone: "0611188887",
      status: "Open Daily",
      description:
        "Our Taleex franchise is ready for dine-in, pickup, and fresh pizza orders made with care.",
    },
  ];

  return (
    <section className="w-full bg-white">
      <div className="mx-auto container px-4 py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-12 grid gap-8 border-b border-zinc-200 pb-10 lg:grid-cols-[1fr_420px] lg:items-end"
        >
          <div>
            <div className="mb-5 inline-flex h-10 items-center gap-3 border border-[#ffbd73] bg-[#fffaf4] px-5">
              <span className="h-2.5 w-2.5 bg-[#ffbd73]" />
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-800">
                Our Franchises
              </p>
            </div>

            <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl">
              Fresh Pizza Across Our Franchise Branches
            </h2>
          </div>

          <p className="text-sm leading-7 text-zinc-600">
            Reach your nearest franchise for fresh pizza, pickup, delivery, and
            customer support.
          </p>
        </motion.div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {franchises.map((franchise, index) => (
            <motion.div
              key={franchise.id}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{
                duration: 0.65,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              whileHover={{ y: -6 }}
              className="group border border-zinc-200 bg-white transition duration-300 hover:border-[#ffbd73]"
            >
              <div className="border-b border-zinc-200 bg-zinc-950 p-6 text-white">
                <div className="mb-8 flex items-start justify-between gap-5">
                  <div className="flex h-14 w-14 items-center justify-center bg-[#ffbd73] text-zinc-950">
                    <Store size={27} strokeWidth={2.2} />
                  </div>

                  <span className="border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-zinc-950">
                    {franchise.status}
                  </span>

                  <span className="border border-[#ffbd73] px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-[#ffbd73]">
                    Franchise
                  </span>
                </div>

                <h3 className="text-2xl font-semibold">{franchise.name}</h3>

                <p className="mt-3 flex items-center gap-2 text-sm text-white/70">
                  <MapPin size={16} />
                  {franchise.area}
                </p>
              </div>

              <div className="p-6">
                <p className="min-h-[96px] text-sm leading-7 text-zinc-600">
                  {franchise.description}
                </p>

                <div className="mt-6 border border-zinc-200 bg-[#fffaf4] p-4">
                  <div className="mb-3 flex items-center gap-2">
                    <BadgeCheck size={18} className="text-[#d97706]" />

                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                      Contact Number
                    </p>
                  </div>

                  <a
                    href={`tel:${franchise.phone}`}
                    className="flex items-center gap-3 text-xl font-semibold text-zinc-950 transition hover:text-[#d97706]"
                  >
                    <Phone size={20} />
                    {franchise.phone}
                  </a>
                </div>

                <a
                  href={`tel:${franchise.phone}`}
                  className="mt-6 inline-flex w-full items-center justify-center gap-3 bg-[#ffbd73] px-6 py-4 text-sm font-semibold uppercase tracking-wide text-zinc-950 transition hover:bg-[#ffa84d]"
                >
                  Call Franchise
                  <ArrowRight
                    size={17}
                    className="transition duration-300 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Franchise;
import {
  Pizza,
  Truck,
  BadgeCheck,
  Clock,
  Users,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";

function WhyChooseUs() {
  const features = [
    {
      icon: Pizza,
      title: "Fresh Pizza Daily",
      text: "We prepare fresh pizza with quality dough, rich sauce, tasty cheese, and fresh toppings every day.",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      text: "Our delivery service helps customers receive hot and fresh pizza quickly from the nearest location.",
    },
    {
      icon: BadgeCheck,
      title: "Quality Taste",
      text: "Every pizza is made with care to keep the same delicious taste and quality across all branches.",
    },
    {
      icon: Clock,
      title: "Quick Service",
      text: "We focus on fast preparation, easy ordering, and smooth service for dine-in, pickup, and delivery.",
    },
    {
      icon: Users,
      title: "Friendly Team",
      text: "Our team welcomes every customer with respect, care, and a helpful service experience.",
    },
    {
      icon: MapPin,
      title: "Multiple Locations",
      text: "You can find us across our main locations, making it easier to order from the nearest branch.",
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
                Why Choose Us
              </p>
            </div>

            <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl">
              Better Pizza, Better Service, Better Experience
            </h2>
          </div>

          <p className="text-sm font-normal leading-7 text-zinc-600">
            We focus on fresh food, fast service, clean preparation, and a
            customer experience that makes every order simple and satisfying.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.25 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                whileHover={{ y: -6 }}
                className="group border border-zinc-200 bg-white p-6 transition duration-300 hover:border-[#ffbd73]"
              >
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center bg-zinc-950 text-[#ffbd73] transition duration-300 group-hover:bg-[#ffbd73] group-hover:text-zinc-950">
                    <Icon size={27} strokeWidth={2.2} />
                  </div>

                  <span className="text-4xl font-semibold text-zinc-100 transition duration-300 group-hover:text-[#ffbd73]/40">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-zinc-950">
                  {feature.title}
                </h3>

                <p className="mt-4 text-sm font-normal leading-7 text-zinc-600">
                  {feature.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
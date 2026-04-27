import { motion } from "framer-motion";
import {
  ChefHat,
  Clock,
  BadgeCheck,
  Pizza,
  Truck,
  HeartHandshake,
} from "lucide-react";

function WhyChooseUs() {
  const features = [
    {
      icon: ChefHat,
      title: "Fresh Ingredients",
      text: "We use fresh dough, quality cheese, rich sauce, and toppings prepared daily.",
    },
    {
      icon: Pizza,
      title: "Authentic Pizza Taste",
      text: "Every pizza is baked carefully for crispy crust, melted cheese, and bold flavor.",
    },
    {
      icon: Clock,
      title: "Fast Service",
      text: "Quick preparation for dine-in, pickup, and delivery without losing quality.",
    },
    {
      icon: BadgeCheck,
      title: "Quality Standards",
      text: "Our kitchen follows clean, consistent, and professional food preparation standards.",
    },
    {
      icon: Truck,
      title: "Reliable Delivery",
      text: "Hot and fresh pizza delivered safely to your location with friendly service.",
    },
    {
      icon: HeartHandshake,
      title: "Customer First",
      text: "We care about every order and focus on giving customers a great pizza experience.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto container p-4 py-16 ">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-3 border border-[#ffbd73] bg-[#fffaf4] px-4 py-2">
            <span className="h-3 w-3 bg-[#ffbd73]" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-800">
              Why Choose Us
            </p>
          </div>

          <h2 className="text-4xl font-semibold leading-tight tracking-tight text-zinc-950 sm:text-5xl">
            Why People Love Justo Pizzeria
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base font-normal leading-7 text-zinc-600">
            We combine fresh ingredients, fast service, and authentic pizza
            flavor to give every customer a better experience.
          </p>
        </motion.div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.25 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                whileHover={{ y: -6 }}
                className="group border border-zinc-200 bg-[#fffaf4] p-6 transition duration-300 hover:border-[#ffbd73]"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center border border-[#ffbd73] bg-[#ffbd73]/20 text-[#d97706] transition duration-300 group-hover:bg-[#ffbd73] group-hover:text-zinc-950">
                  <Icon size={27} strokeWidth={2.1} />
                </div>

                <h3 className="text-xl font-semibold text-zinc-950">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm font-normal leading-6 text-zinc-600">
                  {item.text}
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
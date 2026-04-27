import { Link } from "react-router-dom";
import { ArrowRight, Percent, Pizza, Clock } from "lucide-react";
import { motion } from "framer-motion";

import offerOne from "../assets/pizzza.jpg";
import offerTwo from "../assets/pizzajiza.jpg";
import offerThree from "../assets/gerate.png";

function SpecialOffers() {
  const offers = [
    {
      icon: Percent,
      title: "Family Pizza Deal",
      price: "$24.99",
      image: offerOne,
      text: "Get two large pizzas, one side, and drinks for the whole family.",
    },
    {
      icon: Pizza,
      title: "Justo Combo",
      price: "$16.99",
      image: offerTwo,
      text: "One medium pizza with fresh toppings, fries, and a cold drink.",
    },
    {
      icon: Clock,
      title: "Lunch Special",
      price: "$9.99",
      image: offerThree,
      text: "Perfect lunch pizza deal served fresh and fast during the day.",
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
          className="mb-12 flex flex-col justify-between gap-6 border-b border-zinc-200 pb-8 lg:flex-row lg:items-end"
        >
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-3 border border-[#ffbd73] bg-[#fffaf4] px-4 py-2">
              <span className="h-3 w-3 bg-[#ffbd73]" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-800">
                Special Offers
              </p>
            </div>

            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl">
              Fresh Pizza Deals Made For You
            </h2>
          </div>

          <p className="max-w-md text-sm font-normal leading-6 text-zinc-600">
            Enjoy our best pizza deals with fresh ingredients, bold flavor, and
            great value for dine-in, pickup, or delivery.
          </p>
        </motion.div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {offers.map((offer, index) => {
            const Icon = offer.icon;

            return (
              <motion.div
                key={offer.title}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.25 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                whileHover={{ y: -6 }}
                className="group border border-zinc-200 bg-[#fffaf4] transition duration-300 hover:border-[#ffbd73]"
              >
                <div className="relative h-64 overflow-hidden border-b border-zinc-200">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center border border-[#ffbd73] bg-white/90 text-[#d97706] backdrop-blur">
                    <Icon size={24} strokeWidth={2.1} />
                  </div>

                  <div className="absolute bottom-4 right-4 bg-[#ffbd73] px-4 py-2 text-sm font-semibold text-zinc-950">
                    {offer.price}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-zinc-950">
                    {offer.title}
                  </h3>

                  <p className="mt-3 min-h-[72px] text-sm font-normal leading-6 text-zinc-600">
                    {offer.text}
                  </p>

                  <Link
                    to="/menu"
                    className="mt-6 inline-flex items-center gap-3 bg-[#ffbd73] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-zinc-950 transition hover:bg-[#ffa84d]"
                  >
                    Order Deal
                    <ArrowRight
                      size={17}
                      className="transition duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default SpecialOffers;
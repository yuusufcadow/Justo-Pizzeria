import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";

import pizzaOne from "../assets/pizzza.jpg";
import pizzaTwo from "../assets/pizzajiza.jpg";
import pizzaThree from "../assets/gerate.png";

function Menu() {
  const pizzas = [
    {
      name: "Margherita Pizza",
      price: "$8.99",
      image: pizzaOne,
      tag: "Classic",
      description:
        "Fresh tomato sauce, mozzarella cheese, basil, and crispy handmade crust.",
    },
    {
      name: "Pepperoni Pizza",
      price: "$10.99",
      image: pizzaTwo,
      tag: "Popular",
      description:
        "Mozzarella cheese, rich tomato sauce, and spicy pepperoni slices.",
    },
    {
      name: "BBQ Chicken Pizza",
      price: "$12.99",
      image: pizzaThree,
      tag: "Special",
      description:
        "Grilled chicken, BBQ sauce, onions, cheese, and fresh toppings.",
    },
    {
      name: "Veggie Pizza",
      price: "$9.99",
      image: pizzaOne,
      tag: "Fresh",
      description:
        "Bell peppers, olives, mushrooms, onions, tomatoes, and mozzarella.",
    },
    {
      name: "Meat Lovers Pizza",
      price: "$13.99",
      image: pizzaTwo,
      tag: "Hot",
      description:
        "Pepperoni, beef, sausage, chicken, extra cheese, and signature sauce.",
    },
    {
      name: "Justo Special Pizza",
      price: "$14.99",
      image: pizzaThree,
      tag: "Signature",
      description:
        "Premium toppings, house sauce, fresh cheese, and Justo special flavor.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#fffaf4]">
      <div className="relative z-10 mx-auto container p-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-12 max-w-3xl"
        >
          <div className="mb-5 inline-flex items-center gap-3 border border-[#ffbd73] bg-white px-4 py-2">
            <span className="h-3 w-3 bg-[#ffbd73]" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-800">
              Pizza Menu
            </p>
          </div>

          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
            Fresh Pizza Items & Prices
          </h1>

          <p className="mt-5 max-w-2xl text-base font-normal leading-7 text-zinc-600">
            Choose from our fresh handmade pizzas, prepared with quality cheese,
            rich sauce, crispy crust, and daily toppings.
          </p>
        </motion.div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {pizzas.map((pizza, index) => (
            <motion.div
              key={pizza.name}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 0.65,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              whileHover={{ y: -6 }}
            >
              <Link
                to="/menu"
                className="group block h-full border border-zinc-200 bg-white transition duration-300 hover:border-[#ffbd73]"
              >
                <div className="relative h-64 overflow-hidden border-b border-zinc-200">
                  <img
                    src={pizza.image}
                    alt={pizza.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute left-4 top-4 bg-[#ffbd73] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-zinc-950">
                    {pizza.tag}
                  </div>

                  <div className="absolute bottom-4 right-4 bg-zinc-950 px-4 py-2 text-sm font-semibold text-white">
                    {pizza.price}
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <h2 className="text-xl font-semibold text-zinc-950">
                      {pizza.name}
                    </h2>

                    <div className="flex items-center gap-1 text-[#d97706]">
                      <Star size={16} fill="currentColor" />
                      <span className="text-sm font-normal text-zinc-600">
                        4.9
                      </span>
                    </div>
                  </div>

                  <p className="min-h-[72px] text-sm font-normal leading-6 text-zinc-600">
                    {pizza.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mt-10 flex justify-end"
        >
          <Link
            to="/menu"
            className="group inline-flex items-center gap-3 bg-[#ffbd73] px-7 py-4 text-sm font-semibold uppercase tracking-wide text-zinc-950 transition hover:bg-[#ffa84d]"
          >
            See More
            <ArrowRight
              size={18}
              className="transition duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Menu;
import { motion } from "framer-motion";

import pizzaOne from "../assets/story.png";
import pizzaTwo from "../assets/storyone.png";

function OurStory() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#f7fbf8]">
      <div className="mx-auto grid w-full container items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        {/* Left text content */}
        <motion.div
          initial={{ opacity: 0, x: -45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl"
        >
          <div className="mb-5 inline-flex items-center gap-3 border border-[#ffbd73] bg-white px-4 py-2">
            <span className="h-3 w-3 bg-[#ffbd73]" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-800">
              Our Story
            </p>
          </div>

          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl">
            Our Happiness Starts Here
          </h2>

          <p className="mt-6 text-base font-normal leading-7 text-zinc-600">
            Justo Pizzeria began with a simple idea: fresh pizza, real flavor,
            and a place where people can enjoy good food together. Every pizza
            we make is prepared with care, from the dough to the final topping.
          </p>

          <p className="mt-4 text-base font-normal leading-7 text-zinc-600">
            We believe great pizza should feel warm, simple, and memorable. That
            is why our kitchen focuses on fresh ingredients, balanced taste, and
            consistent quality in every order.
          </p>

          <p className="mt-4 text-base font-normal leading-7 text-zinc-600">
            Whether you visit with friends, family, or order from home, Justo
            Pizzeria is here to bring you crispy crust, melted cheese, and bold
            flavor made fresh every day.
          </p>
        </motion.div>

        {/* Right images */}
        <motion.div
          initial={{ opacity: 0, x: 45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid min-h-[560px] gap-6 sm:grid-cols-2"
        >
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="h-[520px] overflow-hidden border border-zinc-200 bg-white p-3"
          >
            <img
              src={pizzaOne}
              alt="Fresh pizza preparation"
              className="h-full w-full object-cover"
            />
          </motion.div>

          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="h-[520px] overflow-hidden border border-zinc-200 bg-white p-3 sm:translate-y-10"
          >
            <img
              src={pizzaTwo}
              alt="Pizza served fresh"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default OurStory;
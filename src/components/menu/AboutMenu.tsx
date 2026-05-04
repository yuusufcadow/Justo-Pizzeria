import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

import gerate from "../../assets/gerate.png";

function AboutMenu() {
  return (
    <section className="relative min-h-[300px] w-full overflow-hidden bg-zinc-950 sm:min-h-[340px] lg:min-h-[450px]">
      <img
        src={gerate}
        alt="About us"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/65 to-black/40" />
      <div className="absolute inset-0 bg-[#004f4f]/30" />

      <div className="relative z-10 mx-auto flex min-h-[300px] w-full container items-center px-4 py-16 sm:min-h-[340px] lg:min-h-[380px]">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="mb-5 inline-flex h-8 items-center gap-3 border border-white/25 bg-white/10 px-5 backdrop-blur-sm">
            <span className="h-2.5 w-2.5 bg-[#ffbd73]" />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
              Our Delicious Pizza Menu
            </p>
          </div>

          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
           Menu
          </h1>

          <div className="mt-5 flex items-center gap-2 text-sm font-normal">
            <Link
              to="/"
              className="text-white transition hover:text-[#ffbd73]"
            >
              Home
            </Link>

            <ChevronRight size={15} className="text-white/60" />

            <span className="text-[#ffbd73]">Menu</span>
          </div>

          <p className="mt-5 max-w-sm text-sm font-normal leading-7 text-white/80 sm:text-base">
            Explore our menu of fresh, handmade pizzas with quality ingredients,
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutMenu;
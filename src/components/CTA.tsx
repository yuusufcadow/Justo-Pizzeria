import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import justgradient from "../assets/jaas.png";

function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#fffaf4]">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${justgradient})` }}
      />

      <div className="pointer-events-none absolute inset-0 bg-zinc-950/70" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto max-w-7xl border border-white/20 bg-zinc-950/50 px-6 py-14 text-center backdrop-blur sm:px-10 lg:px-16"
        >
          <div className="mb-6 inline-flex items-center gap-3 border border-[#ffbd73] bg-white/10 px-4 py-2">
            <span className="h-3 w-3 bg-[#ffbd73]" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Order Fresh Today
            </p>
          </div>

          <h2 className="mx-auto max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ready to Taste Fresh Pizza From Justo Pizzeria?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base font-normal leading-7 text-white/75">
            Choose your favorite pizza, visit your nearest branch, or contact us
            for fresh handmade pizza served hot with bold flavor.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/menu"
              className="group inline-flex items-center gap-3 bg-[#ffbd73] px-7 py-4 text-sm font-semibold uppercase tracking-wide text-zinc-950 transition hover:bg-[#ffa84d]"
            >
              View Menu
              <ArrowRight
                size={18}
                className="transition duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 border border-white/30 bg-white/10 px-7 py-4 text-sm font-semibold uppercase tracking-wide text-white backdrop-blur transition hover:border-[#ffbd73] hover:bg-[#ffbd73]/20"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CTA;
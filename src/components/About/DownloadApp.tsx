import { Apple, Play } from "lucide-react";
import { motion } from "framer-motion";

function DownloadApp() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto container px-4 py-16 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative flex min-h-[430px] items-center justify-center"
          >
            <div className="relative flex items-end justify-center">
              <motion.div
                initial={{ opacity: 0, y: 30, rotate: -8 }}
                whileInView={{ opacity: 1, y: 0, rotate: -8 }}
                viewport={{ once: false }}
                transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                className="relative z-10 -mr-4 h-[330px] w-[155px] overflow-hidden rounded-[28px] border-[8px] border-zinc-950 bg-white"
              >
                <div className="h-full bg-[#f7f7f7]">
                  <div className="h-[135px] bg-[url('/src/assets/gerate.png')] bg-cover bg-center" />
                  <div className="p-3">
                    <div className="mb-3 h-3 w-20 bg-zinc-300" />
                    <div className="mb-2 h-2 w-full bg-zinc-200" />
                    <div className="mb-4 h-2 w-2/3 bg-zinc-200" />

                    <div className="grid gap-2">
                      <div className="h-10 bg-white" />
                      <div className="h-10 bg-white" />
                      <div className="h-10 bg-white" />
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.75, delay: 0.2, ease: "easeOut" }}
                className="relative z-20 h-[385px] w-[185px] overflow-hidden rounded-[32px] border-[9px] border-zinc-950 bg-white"
              >
                <div className="h-full bg-white">
                  <div className="border-b border-zinc-200 p-4">
                    <div className="mb-4 h-3 w-20 bg-zinc-300" />
                    <h3 className="text-lg font-bold leading-tight text-zinc-950">
                      Find Your Favorite Pizza
                    </h3>
                    <div className="mt-3 h-9 bg-[#fffaf4]" />
                  </div>

                  <div className="grid gap-3 p-4">
                    <div className="flex gap-3">
                      <div className="h-16 w-16 bg-[#ffbd73]" />
                      <div className="flex-1">
                        <div className="mb-2 h-3 w-20 bg-zinc-300" />
                        <div className="mb-2 h-2 w-full bg-zinc-200" />
                        <div className="h-2 w-2/3 bg-zinc-200" />
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="h-16 w-16 bg-zinc-950" />
                      <div className="flex-1">
                        <div className="mb-2 h-3 w-20 bg-zinc-300" />
                        <div className="mb-2 h-2 w-full bg-zinc-200" />
                        <div className="h-2 w-2/3 bg-zinc-200" />
                      </div>
                    </div>

                    <div className="mt-2 h-24 bg-[#f4f4f5]" />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30, rotate: 8 }}
                whileInView={{ opacity: 1, y: 0, rotate: 8 }}
                viewport={{ once: false }}
                transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                className="relative z-10 -ml-4 h-[325px] w-[150px] overflow-hidden rounded-[28px] border-[8px] border-zinc-950 bg-white"
              >
                <div className="h-full bg-[#f7f7f7]">
                  <div className="h-[150px] bg-[#ffbd73]" />
                  <div className="p-3">
                    <div className="mb-3 h-3 w-20 bg-zinc-300" />
                    <div className="mb-2 h-2 w-full bg-zinc-200" />
                    <div className="mb-4 h-2 w-2/3 bg-zinc-200" />

                    <div className="h-10 bg-zinc-950" />
                    <div className="mt-3 h-10 bg-white" />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-zinc-400">
              Mobile App
            </p>

            <h2 className="max-w-xl text-4xl font-black leading-tight tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
              Download Our Justo App Today.
            </h2>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:items-start">
              <a
                href="#"
                className="inline-flex h-14 min-w-[170px] items-center justify-center gap-3 bg-blue-700 px-6 text-sm font-bold text-white transition hover:bg-blue-800"
              >
                <Apple size={23} fill="currentColor" />
                App Store
              </a>

              <a
                href="#"
                className="inline-flex h-14 min-w-[170px] items-center justify-center gap-3 bg-blue-700 px-6 text-sm font-bold text-white transition hover:bg-blue-800"
              >
                <Play size={23} fill="currentColor" />
                Google Play
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default DownloadApp;
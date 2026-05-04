import { Target, Eye, HeartHandshake, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import gerate from "../../assets/gerate.png";

function VisionMission() {
  const foundations = [
    {
      icon: Target,
      title: "Our Mission",
      text: "To serve fresh, flavorful pizza with quality ingredients, fast service, and great value for every customer.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      text: "To become one of the most loved pizza brands by delivering great taste, reliable service, and a welcoming experience.",
    },
  ];

  const values = [
    "Fresh ingredients in every meal",
    "Fast and friendly customer service",
    "Consistent quality across every location",
    "Affordable meals for everyone",
    "Clean, reliable, and trusted service",
  ];

  return (
    <section className="w-full bg-[#f7f8fb]">
      <div className="mx-auto container px-4 py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-12 text-center"
        >
          <div className="mx-auto mb-5 inline-flex h-10 items-center gap-3 border border-[#ffbd73] bg-white px-5">
            <span className="h-2.5 w-2.5 bg-[#ffbd73]" />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-800">
              Our Foundations
            </p>
          </div>

          <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl">
            Mission, Vision & Values
          </h2>

          <div className="mx-auto mt-4 h-1 w-20 bg-[#ff5a1f]" />
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.2fr]">
          <div className="grid gap-6">
            {foundations.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -35 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.25 }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.12,
                    ease: "easeOut",
                  }}
                  whileHover={{ y: -5 }}
                  className="group border border-zinc-200 bg-white p-6 transition duration-300 hover:border-[#ffbd73]"
                >
                  <div className="mb-8 flex h-14 w-14 items-center justify-center bg-zinc-950 text-[#ffbd73] transition duration-300 group-hover:bg-[#ffbd73] group-hover:text-zinc-950">
                    <Icon size={28} strokeWidth={2.2} />
                  </div>

                  <h3 className="text-2xl font-semibold text-zinc-950">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm font-normal leading-7 text-zinc-600">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="grid gap-6"
          >
            <div className="relative h-24 overflow-hidden border border-zinc-200 bg-zinc-950 sm:h-28 lg:h-32">
              <img
                src={gerate}
                alt="Pizza quality"
                className="h-full w-full object-cover opacity-70"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/85 via-zinc-950/45 to-transparent" />

              <div className="absolute left-5 top-1/2 -translate-y-1/2">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#ffbd73]">
                  Justo Pizza
                </p>

                <h3 className="mt-1 text-xl font-semibold text-white sm:text-2xl">
                  Quality In Every Slice
                </h3>
              </div>
            </div>

            <div className="border border-zinc-200 bg-white p-6 transition duration-300 hover:border-[#ffbd73]">
              <div className="mb-8 flex h-14 w-14 items-center justify-center bg-zinc-950 text-[#ffbd73]">
                <HeartHandshake size={28} strokeWidth={2.2} />
              </div>

              <h3 className="text-2xl font-semibold text-zinc-950">
                Core Values
              </h3>

              <div className="mt-6 grid gap-4">
                {values.map((value, index) => (
                  <motion.div
                    key={value}
                    initial={{ opacity: 0, x: 25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.4 }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.07,
                      ease: "easeOut",
                    }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-[#ff5a1f] text-white">
                      <CheckCircle2 size={14} strokeWidth={3} />
                    </span>

                    <p className="text-sm leading-6 text-zinc-700">
                      {value}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default VisionMission;
import {
  FileText,
  PhoneCall,
  MapPinCheck,
  ClipboardCheck,
  Handshake,
  Store,
} from "lucide-react";
import { motion } from "framer-motion";

type ProcessStep = {
  id: number;
  title: string;
  text: string;
  icon: React.ElementType;
};

function OurProcess() {
  const steps: ProcessStep[] = [
    {
      id: 1,
      title: "Submit Interest",
      text: "Fill out the franchise form with your personal, business, and preferred location details.",
      icon: FileText,
    },
    {
      id: 2,
      title: "Initial Review",
      text: "Our team reviews your request and checks if your background and location match our requirements.",
      icon: ClipboardCheck,
    },
    {
      id: 3,
      title: "Discovery Call",
      text: "We contact you to discuss the franchise opportunity, expectations, investment, and next steps.",
      icon: PhoneCall,
    },
    {
      id: 4,
      title: "Location Assessment",
      text: "Your proposed area or store location is reviewed for visibility, access, demand, and growth potential.",
      icon: MapPinCheck,
    },
    {
      id: 5,
      title: "Agreement",
      text: "After approval, we move forward with the formal franchise agreement and setup requirements.",
      icon: Handshake,
    },
    {
      id: 6,
      title: "Launch Store",
      text: "We support the preparation, training, branding, and launch of your new franchise location.",
      icon: Store,
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
                Our Process
              </p>
            </div>

            <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl">
              Simple Steps To Start Your Franchise Journey
            </h2>
          </div>

          <p className="text-sm leading-7 text-zinc-600">
            From submitting your interest to launching your location, our process
            is clear, organized, and built to support serious franchise partners.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.25 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                whileHover={{ y: -6 }}
                className="group relative border border-zinc-200 bg-white p-6 transition duration-300 hover:border-[#ffbd73]"
              >
                <div className="mb-8 flex items-start justify-between gap-6">
                  <div className="flex h-14 w-14 items-center justify-center bg-zinc-950 text-[#ffbd73] transition duration-300 group-hover:bg-[#ffbd73] group-hover:text-zinc-950">
                    <Icon size={27} strokeWidth={2.2} />
                  </div>

                  <span className="text-5xl font-semibold leading-none text-zinc-100 transition duration-300 group-hover:text-[#ffbd73]/40">
                    {String(step.id).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-zinc-950">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-zinc-600">
                  {step.text}
                </p>

                <div className="mt-8 h-px w-full bg-zinc-200" />

                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500 transition group-hover:text-[#d97706]">
                  Step {step.id}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default OurProcess;
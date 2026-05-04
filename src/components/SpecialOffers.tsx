import { useRef } from "react";
import {
  Phone,
  MapPin,
  Clock,
  Navigation,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

function SpecialOffers() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const locations = [
    {
      title: "2dhagax",
      number: "0616474641",
      address: "2dhagax Branch",
      area: "Main Branch",
      status: "Open Daily",
      schedule: [
        { day: "Sat - Wed", time: "7:00 AM - 12:00 AM" },
        { day: "Thu", time: "7:00 AM - 12:30 AM" },
        { day: "Fri", time: "1:00 PM - 12:00 AM" },
      ],
    },
    {
      title: "Jubba",
      number: "0611869090",
      address: "Jubba Branch",
      area: "City Center",
      status: "Open Daily",
      schedule: [
        { day: "Sat - Wed", time: "7:00 AM - 12:00 AM" },
        { day: "Thu", time: "7:00 AM - 12:30 AM" },
        { day: "Fri", time: "1:00 PM - 12:00 AM" },
      ],
    },
    {
      title: "Taleex",
      number: "0611188887",
      address: "Taleex Branch",
      area: "Taleex Area",
      status: "Open Daily",
      schedule: [
        { day: "Sat - Wed", time: "7:00 AM - 12:00 AM" },
        { day: "Thu", time: "7:00 AM - 12:30 AM" },
        { day: "Fri", time: "1:00 PM - 12:00 AM" },
      ],
    },
    {
      title: "Delivery",
      number: "0616474641",
      address: "Fast Delivery Service",
      area: "All Areas",
      status: "Delivery",
      schedule: [
        { day: "Sat - Wed", time: "8:00 AM - 11:30 PM" },
        { day: "Thu", time: "8:00 AM - 12:00 AM" },
        { day: "Fri", time: "2:00 PM - 11:30 PM" },
      ],
    },
    {
      title: "Pickup",
      number: "0611869090",
      address: "Quick Pickup Orders",
      area: "Nearest Branch",
      status: "Pickup",
      schedule: [
        { day: "Sat - Wed", time: "7:00 AM - 12:00 AM" },
        { day: "Thu", time: "7:00 AM - 12:30 AM" },
        { day: "Fri", time: "1:00 PM - 12:00 AM" },
      ],
    },
    {
      title: "Support",
      number: "0611188887",
      address: "Orders & Customer Care",
      area: "Support Desk",
      status: "Support",
      schedule: [
        { day: "Sat - Wed", time: "7:00 AM - 12:00 AM" },
        { day: "Thu", time: "7:00 AM - 12:30 AM" },
        { day: "Fri", time: "1:00 PM - 12:00 AM" },
      ],
    },
  ];

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    const card = container.querySelector<HTMLElement>("[data-location-card]");
    if (!card) return;

    const cardWidth = card.getBoundingClientRect().width;
    const gap = 28;

    container.scrollBy({
      left: direction === "left" ? -(cardWidth + gap) : cardWidth + gap,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full overflow-hidden bg-white">
      <div className="mx-auto w-full container px-4 py-14 sm:py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-8 grid gap-6 border-b border-zinc-200 pb-8 sm:mb-10 sm:gap-8 sm:pb-10 lg:grid-cols-[1fr_440px] lg:items-end"
        >
          <div>
            <div className="mb-5 inline-flex items-center gap-3 border border-[#ffbd73] bg-[#fffaf4] px-4 py-2 sm:px-5">
              <span className="h-3 w-3 bg-[#ffbd73]" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-800 sm:tracking-[0.22em]">
                Locations
              </p>
            </div>

            <h2 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl">
              Visit Your Nearest Pizza Location
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-zinc-600 lg:max-w-none">
            Find your nearest branch and call directly for fresh pizza orders,
            pickup, delivery, or customer support.
          </p>
        </motion.div>

        <div className="mb-6 flex justify-end gap-3">
          <button
            type="button"
            aria-label="Previous locations"
            onClick={() => scroll("left")}
            className="flex h-11 w-11 items-center justify-center border border-zinc-300 bg-white text-zinc-950 transition hover:border-[#ffbd73] hover:bg-[#fffaf4] sm:h-12 sm:w-12"
          >
            <ArrowLeft size={20} />
          </button>

          <button
            type="button"
            aria-label="Next locations"
            onClick={() => scroll("right")}
            className="flex h-11 w-11 items-center justify-center border border-zinc-300 bg-white text-zinc-950 transition hover:border-[#ffbd73] hover:bg-[#fffaf4] sm:h-12 sm:w-12"
          >
            <ArrowRight size={20} />
          </button>
        </div>

        <div className="w-full overflow-hidden">
          <div
            ref={scrollRef}
            className="flex w-full snap-x snap-mandatory gap-7 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {locations.map((location, index) => (
              <motion.div
                data-location-card
                key={`${location.title}-${index}`}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.25 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                className="group shrink-0 snap-start border border-zinc-200 bg-white transition duration-300 hover:border-[#ffbd73]
                basis-full
                sm:basis-[calc((100%_-_1.75rem)_/_2)]
                lg:basis-[calc((100%_-_3.5rem)_/_3)]"
              >
                <div className="border-b border-zinc-200 bg-zinc-950 p-5 text-white sm:p-6">
                  <div className="mb-7 flex items-start justify-between gap-6 sm:mb-8">
                    <div className="flex h-13 w-13 items-center justify-center border border-[#ffbd73] bg-[#ffbd73] text-zinc-950 sm:h-14 sm:w-14">
                      <MapPin size={24} strokeWidth={2.2} />
                    </div>

                    <span className="border border-white/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white/80">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-zinc-950">
                      {location.status}
                    </span>

                    <span className="border border-white/20 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-white/75">
                      {location.area}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold">{location.title}</h3>

                  <p className="mt-3 flex items-center gap-2 text-sm text-white/75">
                    <Navigation size={16} />
                    {location.address}
                  </p>
                </div>

                <div className="p-5 sm:p-6">
                  <div className="mb-5 flex items-center gap-3">
                    <Clock size={18} className="text-[#d97706]" />
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500 sm:tracking-[0.2em]">
                      Weekly Schedule
                    </p>
                  </div>

                  <div className="border border-zinc-200 bg-[#fffaf4] p-4">
                    {location.schedule.map((item) => (
                      <div
                        key={item.day}
                        className="flex items-center justify-between gap-4 border-b border-zinc-200 py-2 text-sm last:border-b-0"
                      >
                        <span className="font-bold text-zinc-950">
                          {item.day}
                        </span>
                        <span className="text-right text-zinc-600">
                          {item.time}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 border border-zinc-200 p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">
                      Contact Number
                    </p>

                    <a
                      href={`tel:${location.number}`}
                      className="mt-3 flex items-center gap-3 text-base font-bold text-zinc-950 transition hover:text-[#d97706] sm:text-lg"
                    >
                      <Phone size={20} />
                      {location.number}
                    </a>
                  </div>

                  <a
                    href={`tel:${location.number}`}
                    className="mt-6 inline-flex w-full items-center justify-center gap-3 bg-[#ffbd73] px-5 py-4 text-sm font-bold uppercase tracking-wide text-zinc-950 transition hover:bg-[#ffa84d] sm:px-6"
                  >
                    Call Location
                    <Phone size={17} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpecialOffers;
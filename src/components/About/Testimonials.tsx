import { useRef } from "react";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Keyboard } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

type TestimonialItem = {
  id: number;
  name: string;
  role: string;
  text: string;
  rating: number;
  initial: string;
};

function Testimonials() {
  const swiperRef = useRef<SwiperType | null>(null);

  const testimonials: TestimonialItem[] = [
    {
      id: 1,
      name: "Ahmed Ali",
      role: "Regular Customer",
      text: "Justo Pizza always delivers fresh and hot pizza. The taste is consistent, the service is fast, and the team is very friendly. Every order feels fresh, well prepared, and worth it.",
      rating: 5,
      initial: "A",
    },
    {
      id: 2,
      name: "Fadumo Hassan",
      role: "Family Customer",
      text: "My family enjoys ordering from Justo Pizza. The pizza is delicious, the prices are good, and delivery is always quick. It has become one of our favorite places to order from.",
      rating: 5,
      initial: "F",
    },
    {
      id: 3,
      name: "Mohamed Yusuf",
      role: "Pickup Customer",
      text: "The ordering process is simple and the pickup service is smooth. I really like the fresh ingredients, the quality of the pizza, and the professional service at every visit.",
      rating: 5,
      initial: "M",
    },
    {
      id: 4,
      name: "Ayaan Omar",
      role: "Delivery Customer",
      text: "Their delivery service is reliable and the pizza always arrives hot. I also appreciate the friendly support and consistent taste. It is one of the best pizza experiences I have had.",
      rating: 5,
      initial: "A",
    },
    {
      id: 5,
      name: "Hassan Jama",
      role: "Lunch Customer",
      text: "I like their lunch deals. The pizza is fresh, the price is good, and the service is quick during busy hours. It is simple, affordable, and always satisfying.",
      rating: 5,
      initial: "H",
    },
    {
      id: 6,
      name: "Khadra Noor",
      role: "Loyal Customer",
      text: "Justo Pizza is one of my favorite places. The team is respectful, the pizza is fresh, and the quality is always excellent whenever I order.",
      rating: 5,
      initial: "K",
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
          className="mb-10 grid gap-8 border-b border-zinc-200 pb-10 lg:grid-cols-[1fr_420px] lg:items-end"
        >
          <div>
            <div className="mb-5 inline-flex h-10 items-center gap-3 border border-[#ffbd73] bg-[#fffaf4] px-5">
              <span className="h-2.5 w-2.5 bg-[#ffbd73]" />
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-800">
                Testimonials
              </p>
            </div>

            <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl">
              What Our Customers Say
            </h2>
          </div>

          <p className="text-sm leading-7 text-zinc-600">
            Hear from our customers about the quality, freshness, service, and
            experience they enjoy with every order.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Swiper
            modules={[Pagination, Autoplay, Keyboard]}
            slidesPerView={1}
            spaceBetween={24}
            loop={true}
            speed={800}
            grabCursor={true}
            keyboard={{ enabled: true }}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            pagination={{
              el: ".testimonial-pagination",
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            className="w-full"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={item.id} className="h-auto">
                <div className="relative flex h-full min-h-[430px] flex-col overflow-hidden border border-zinc-800 bg-zinc-950 px-5 py-8 text-white sm:px-7 sm:py-9 lg:px-8 lg:py-10">
                  <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-[#ffbd73] via-[#d97706] to-[#ffbd73]" />

                  <div className="mb-8 flex items-start justify-between gap-5">
                    <div className="flex h-16 w-16 items-center justify-center border border-white/15 bg-white/10 text-xl font-semibold text-white">
                      {item.initial}
                    </div>

                    <span className="border border-white/15 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="mb-6 flex items-center gap-1">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.7 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false }}
                        transition={{
                          duration: 0.3,
                          delay: i * 0.05,
                          ease: "easeOut",
                        }}
                      >
                        <Star
                          size={16}
                          className="fill-[#ffbd73] text-[#ffbd73]"
                        />
                      </motion.span>
                    ))}
                  </div>

                  <Quote
                    size={30}
                    className="mb-5 text-[#ffbd73]"
                    strokeWidth={2}
                  />

                  <p className="flex-1 text-base font-normal leading-8 text-white sm:text-lg">
                    “{item.text}”
                  </p>

                  <div className="mt-10 border-t border-white/10 pt-6">
                    <h3 className="text-xl font-semibold text-white">
                      {item.name}
                    </h3>

                    <p className="mt-2 text-sm text-white/60">{item.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="mt-7 flex items-center justify-between gap-4">
            <div className="testimonial-pagination flex items-center justify-center gap-2" />

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => swiperRef.current?.slidePrev()}
                className="flex h-12 w-12 items-center justify-center border border-zinc-300 bg-white text-zinc-950 transition hover:border-[#ffbd73] hover:bg-[#fffaf4]"
                aria-label="Previous testimonial"
              >
                <ArrowLeft size={20} />
              </button>

              <button
                type="button"
                onClick={() => swiperRef.current?.slideNext()}
                className="flex h-12 w-12 items-center justify-center border border-zinc-300 bg-white text-zinc-950 transition hover:border-[#ffbd73] hover:bg-[#fffaf4]"
                aria-label="Next testimonial"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </motion.div>

        <style>
          {`
            .testimonial-pagination .swiper-pagination-bullet {
              width: 10px;
              height: 10px;
              margin: 0 4px !important;
              border-radius: 9999px;
              background: #a1a1aa;
              opacity: 1;
              transition: all 0.3s ease;
            }

            .testimonial-pagination .swiper-pagination-bullet-active {
              width: 28px;
              background: #ffbd73;
            }
          `}
        </style>
      </div>
    </section>
  );
}

export default Testimonials;
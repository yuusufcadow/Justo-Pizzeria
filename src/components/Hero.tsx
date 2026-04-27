import { Link } from "react-router-dom";
import {
  ArrowRight,
  Wheat,
  BadgeCheck,
  Timer,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectFade,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import gerate from "../assets/gerate.png";
import pizzas from "../assets/pizzajiza.jpg";
import pizza from "../assets/pizzza.jpg";
import backimage from "../assets/justgradient.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

function Hero() {
  const heroSlides = [
    {
      badge: "Fresh From The Oven",
      title: "Authentic Pizza Made For Real Flavor",
      text: "Enjoy handcrafted pizza with fresh dough, premium cheese, rich tomato sauce, and toppings prepared daily.",
      image: pizza,
    },
    {
      badge: "Justo Signature Taste",
      title: "Crispy Crust, Melting Cheese, Perfect Bite",
      text: "Our pizzas are baked hot and served fresh with balanced flavor, quality ingredients, and modern presentation.",
      image: pizzas,
    },
    {
      badge: "Fast Delivery",
      title: "Order Your Favorite Pizza Anytime",
      text: "Whether you dine in, pick up, or order delivery, Justo Pizzeria brings hot pizza straight to you.",
      image: gerate,
    },
  ];

  const featureSlides = [
    {
      icon: Wheat,
      title: "Fresh Dough",
      text: "Prepared daily for a soft inside, crispy edge, and better pizza taste.",
    },
    {
      icon: BadgeCheck,
      title: "Quality Cheese",
      text: "Selected cheese with smooth texture, rich flavor, and perfect melt.",
    },
    {
      icon: Timer,
      title: "Fast Service",
      text: "Quick preparation for dine-in, takeaway, and delivery orders.",
    },
    {
      icon: Sparkles,
      title: "Signature Sauce",
      text: "A balanced tomato sauce made for bold and memorable Justo flavor.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#fffaf4]">
      {/* Main background image instead of yellow background */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
        style={{ backgroundImage: `url(${backimage})` }}
      />

      <div className="pointer-events-none absolute inset-0 bg-[#fffaf4]/45" />

      {/* Image accent instead of yellow square */}
      <motion.img
        src={backimage}
        alt=""
        aria-hidden="true"
        animate={{ y: [0, -20, 0], x: [0, -12, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute right-0 top-24 h-52 w-52 object-cover opacity-30"
      />

      <motion.img
        src={backimage}
        alt=""
        aria-hidden="true"
        animate={{ y: [0, 18, 0], x: [0, 10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute bottom-10 right-20 h-40 w-40 object-cover opacity-25"
      />

     

      {/* Main hero swiper */}
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        slidesPerView={1}
        loop
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1000}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        className="hero-swiper relative z-10"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.title}>
            <div className="mx-auto grid min-h-[calc(100vh-80px)] container items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10"
              >
                <motion.div
                  initial={{ opacity: 0, x: -35 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="mb-6 inline-flex items-center gap-3 border border-[#ffbd73] bg-white/80 px-4 py-2 backdrop-blur"
                >
                  <motion.span
                    animate={{ scale: [1, 1.25, 1] }}
                    transition={{
                      duration: 1.6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="h-3 w-3 bg-[#ffbd73]"
                  />

                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-800">
                    {slide.badge}
                  </p>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl"
                >
                  {slide.title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="mt-6 max-w-xl text-base font-normal leading-7 text-zinc-600"
                >
                  {slide.text}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="mt-8 flex flex-wrap items-center gap-4"
                >
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
                    to="/locations"
                    className="border border-zinc-300 bg-white/80 px-7 py-4 text-sm font-semibold uppercase tracking-wide text-zinc-950 backdrop-blur transition hover:border-[#ffbd73] hover:bg-[#ffbd73]/20"
                  >
                    Find Branch
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95, x: 60 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="relative z-10"
              >
                {/* Image accent behind pizza image */}
                <motion.img
                  src={backimage}
                  alt=""
                  aria-hidden="true"
                  animate={{ y: [0, 14, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="pointer-events-none absolute -bottom-6 -right-6 h-28 w-28 object-cover opacity-70"
                />

                <div className="relative border border-zinc-200 bg-white/80 p-5 backdrop-blur">
                  <motion.img
                    src={slide.image}
                    alt={slide.title}
                    initial={{ scale: 1.08 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 1.3, ease: "easeOut" }}
                    className="h-[360px] w-full object-cover sm:h-[480px]"
                  />

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: 0.35 }}
                    className="absolute bottom-5 left-5 right-5 border border-white/30 bg-zinc-950/80 p-5 backdrop-blur"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ffbd73]">
                      Justo Pizzeria
                    </p>

                    <h2 className="mt-2 text-2xl font-semibold text-white">
                      Fresh Pizza. Bold Taste.
                    </h2>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Feature cards swiper */}
      <div className="relative z-10 border-y border-zinc-200 bg-white/90 backdrop-blur">
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto container p-4"
        >
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            spaceBetween={24}
            loop
            speed={850}
            autoplay={{
              delay: 2600,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 28,
              },
            }}
            className="feature-swiper"
          >
            {featureSlides.map((item, index) => {
              const Icon = item.icon;

              return (
                <SwiperSlide key={item.title} className="h-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: index * 0.08 }}
                    whileHover={{ y: -6 }}
                    className="group flex min-h-[250px] w-full flex-col border border-zinc-200 bg-[#fffaf4]/90 p-6 backdrop-blur transition duration-300 hover:border-[#ffbd73]"
                  >
                    <div className="mb-5 flex h-14 w-14 items-center justify-center border border-[#ffbd73] bg-[#ffbd73]/20 text-[#d97706] transition duration-300 group-hover:bg-[#ffbd73] group-hover:text-zinc-950">
                      <Icon size={26} strokeWidth={2.2} />
                    </div>

                    <h3 className="text-xl font-semibold text-zinc-950">
                      {item.title}
                    </h3>

                    <p className="mt-3 flex-1 text-sm font-normal leading-6 text-zinc-600">
                      {item.text}
                    </p>
                  </motion.div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
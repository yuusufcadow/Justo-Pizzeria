import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectFade,
  Keyboard,
  A11y,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import gerate from "../assets/gerate.png";
import pizzas from "../assets/pizzajiza.jpg";
import pizza from "../assets/pizzza.jpg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

type HeroSlide = {
  eyebrow: string;
  title: string;
  text: string;
  buttonText: string;
  buttonLink: string;
  image: string;
};

function Hero() {
  const swiperRef = useRef<SwiperType | null>(null);

  const heroSlides: HeroSlide[] = [
    {
      eyebrow: "Fresh From The Oven",
      title: "A Purpose-Driven Pizza Brand",
      text: "Justo Pizzeria is built around fresh ingredients, bold flavor, warm hospitality, and a better pizza experience for every customer.",
      buttonText: "Explore Menu",
      buttonLink: "/menu",
      image: pizza,
    },
    {
      eyebrow: "Signature Taste",
      title: "Fresh Pizza Made For Real Flavor",
      text: "Enjoy handcrafted pizza with fresh dough, rich sauce, premium cheese, and toppings prepared daily with care.",
      buttonText: "Order Now",
      buttonLink: "/menu",
      image: pizzas,
    },
    {
      eyebrow: "Fast Delivery",
      title: "Your Favorite Pizza, Hot And Fresh",
      text: "Whether you dine in, pick up, or order delivery, Justo brings fresh pizza and friendly service closer to you.",
      buttonText: "Find Branch",
      buttonLink: "/locations",
      image: gerate,
    },
  ];

  return (
    <section className="relative h-[calc(100svh-80px)] min-h-[560px] w-full overflow-hidden bg-zinc-950 sm:min-h-[620px]">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade, Keyboard, A11y]}
        slidesPerView={1}
        loop
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1100}
        keyboard={{ enabled: true }}
        a11y={{
          enabled: true,
          prevSlideMessage: "Previous hero slide",
          nextSlideMessage: "Next hero slide",
          paginationBulletMessage: "Go to hero slide {{index}}",
        }}
        autoplay={{
          delay: 5200,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: ".hero-pagination",
        }}
        navigation={{
          prevEl: ".hero-prev",
          nextEl: ".hero-next",
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="h-full w-full"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.title}>
            <div className="relative h-full w-full">
              <motion.img
                key={slide.image}
                src={slide.image}
                alt={slide.title}
                initial={{ scale: 1.08 }}
                animate={{ scale: 1 }}
                transition={{ duration: 6, ease: "easeOut" }}
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/95 via-zinc-950/70 to-zinc-950/15" />
              <div className="absolute inset-0 bg-[#3b1f12]/35" />
              <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-zinc-950/85 to-transparent" />

              <div className="relative z-20 mx-auto flex h-full w-full container items-center px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
                <motion.div
                  initial={{ opacity: 0, y: 45 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="max-w-3xl"
                >
                  <motion.p
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.7,
                      delay: 0.1,
                      ease: "easeOut",
                    }}
                    className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#ffbd73] sm:mb-5 sm:text-xs sm:tracking-[0.35em]"
                  >
                    {slide.eyebrow}
                  </motion.p>

                  <motion.h1
                    initial={{ opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.85,
                      delay: 0.2,
                      ease: "easeOut",
                    }}
                    className="max-w-3xl font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl"
                  >
                    {slide.title}
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.75,
                      delay: 0.35,
                      ease: "easeOut",
                    }}
                    className="mt-5 max-w-2xl text-sm font-normal leading-7 text-white/85 sm:mt-7 sm:text-lg sm:leading-8"
                  >
                    {slide.text}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.75,
                      delay: 0.48,
                      ease: "easeOut",
                    }}
                    className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10 sm:gap-4"
                  >
                    <Link
                      to={slide.buttonLink}
                      className="group inline-flex h-12 items-center justify-center gap-3 bg-white px-6 text-xs font-semibold uppercase tracking-wide text-zinc-950 transition hover:bg-[#ffbd73] sm:h-14 sm:px-8 sm:text-sm"
                    >
                      {slide.buttonText}
                      <ArrowRight
                        size={17}
                        className="transition duration-300 group-hover:translate-x-1"
                      />
                    </Link>

                    <Link
                      to="/franchise"
                      className="inline-flex h-12 items-center justify-center border border-white/25 bg-white/10 px-6 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur transition hover:border-[#ffbd73] hover:bg-[#ffbd73] hover:text-zinc-950 sm:h-14 sm:px-8 sm:text-sm"
                    >
                      Franchise
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        type="button"
        aria-label="Previous hero slide"
        onClick={() => swiperRef.current?.slidePrev()}
        className="hero-prev absolute left-3 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-white/25 bg-white/10 text-white backdrop-blur transition hover:border-[#ffbd73] hover:bg-[#ffbd73] hover:text-zinc-950 sm:left-6 sm:h-12 sm:w-12 lg:left-8"
      >
        <ChevronLeft size={21} />
      </button>

      <button
        type="button"
        aria-label="Next hero slide"
        onClick={() => swiperRef.current?.slideNext()}
        className="hero-next absolute right-3 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-white/25 bg-white/10 text-white backdrop-blur transition hover:border-[#ffbd73] hover:bg-[#ffbd73] hover:text-zinc-950 sm:right-6 sm:h-12 sm:w-12 lg:right-8"
      >
        <ChevronRight size={21} />
      </button>

      <div className="hero-pagination absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 items-center justify-center gap-2 sm:bottom-8" />

      <style>
        {`
          .hero-pagination .swiper-pagination-bullet {
            width: 9px;
            height: 9px;
            border-radius: 0;
            background: rgba(255, 255, 255, 0.45);
            opacity: 1;
            transition: all 0.3s ease;
          }

          .hero-pagination .swiper-pagination-bullet-active {
            width: 36px;
            background: #ffbd73;
          }
        `}
      </style>
    </section>
  );
}

export default Hero;
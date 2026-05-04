import { useMemo, useState } from "react";
import {
  CakeSlice,
  Sandwich,
  Salad,
  Coffee,
  CupSoda,
  Milk,
  GlassWater,
  ShoppingBag,
  Star,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Category =
  | "All"
  | "Pastries"
  | "Paninis"
  | "Salads"
  | "Hot Coffee"
  | "Tea Based Drinks"
  | "Milk Based Drink"
  | "Ice Tea"
  | "Cold Coffee Based"
  | "Juices";

type MenuItem = {
  id: number;
  title: string;
  category: Exclude<Category, "All">;
  image: string;
  price: string;
  oldPrice?: string;
  discount?: string;
  badge?: string;
  rating: number;
  description: string;
};

const categories: Category[] = [
  "All",
  "Pastries",
  "Paninis",
  "Salads",
  "Hot Coffee",
  "Tea Based Drinks",
  "Milk Based Drink",
  "Ice Tea",
  "Cold Coffee Based",
  "Juices",
];

const menuItems: MenuItem[] = [
  {
    id: 1,
    title: "Croissant with Banana",
    category: "Pastries",
    image:
      "https://images.unsplash.com/photo-1620146344904-097a0002d797?q=80&w=1200&auto=format&fit=crop",
    price: "$4.99",
    oldPrice: "$5.99",
    discount: "-15%",
    badge: "New",
    rating: 5,
    description: "Flaky croissant filled with banana and sweet cream.",
  },
  {
    id: 2,
    title: "Chocolate Croissant",
    category: "Pastries",
    image:
      "https://images.unsplash.com/photo-1623334044303-241021148842?q=80&w=1200&auto=format&fit=crop",
    price: "$5.50",
    oldPrice: "$6.25",
    discount: "-12%",
    rating: 5,
    description: "Buttery croissant filled with rich chocolate.",
  },
  {
    id: 3,
    title: "Plain Croissant",
    category: "Pastries",
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1200&auto=format&fit=crop",
    price: "$3.99",
    oldPrice: "$4.50",
    discount: "-10%",
    badge: "Fresh",
    rating: 4,
    description: "Classic buttery croissant with a light flaky texture.",
  },
  {
    id: 4,
    title: "Blueberry Pie",
    category: "Pastries",
    image:
      "https://images.unsplash.com/photo-1562007908-859b4ba9a1a2?q=80&w=1200&auto=format&fit=crop",
    price: "$6.99",
    rating: 5,
    description: "Sweet blueberry pie served with a flaky golden crust.",
  },
  {
    id: 5,
    title: "Apple Pie",
    category: "Pastries",
    image:
      "https://images.unsplash.com/photo-1535920527002-b35e96722eb9?q=80&w=1200&auto=format&fit=crop",
    price: "$6.50",
    rating: 4,
    description: "Warm apple pie made with cinnamon and fresh apples.",
  },
  {
    id: 6,
    title: "Garden Salad",
    category: "Salads",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop",
    price: "$5.99",
    rating: 4,
    description: "Fresh vegetables with light house dressing.",
  },
  {
    id: 7,
    title: "Chicken Panini",
    category: "Paninis",
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1200&auto=format&fit=crop",
    price: "$8.99",
    oldPrice: "$10.00",
    discount: "-10%",
    badge: "Hot",
    rating: 5,
    description: "Grilled chicken panini with cheese and sauce.",
  },
  {
    id: 8,
    title: "Cappuccino",
    category: "Hot Coffee",
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=1200&auto=format&fit=crop",
    price: "$3.50",
    badge: "Popular",
    rating: 5,
    description: "Smooth espresso with steamed milk and rich foam.",
  },
  {
    id: 9,
    title: "Lemon Ice Tea",
    category: "Ice Tea",
    image:
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=1200&auto=format&fit=crop",
    price: "$2.99",
    rating: 4,
    description: "Cold refreshing iced tea with lemon.",
  },
  {
    id: 10,
    title: "Fresh Juice",
    category: "Juices",
    image:
      "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?q=80&w=1200&auto=format&fit=crop",
    price: "$3.99",
    rating: 5,
    description: "Fresh fruit juice served cold.",
  },
];

function MenuCard() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") return menuItems;
    return menuItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const getCategoryIcon = (category: Category) => {
    if (category === "Pastries") return CakeSlice;
    if (category === "Paninis") return Sandwich;
    if (category === "Salads") return Salad;
    if (category === "Hot Coffee") return Coffee;
    if (category === "Tea Based Drinks") return CupSoda;
    if (category === "Milk Based Drink") return Milk;
    if (category === "Ice Tea") return GlassWater;
    if (category === "Cold Coffee Based") return Coffee;
    if (category === "Juices") return CupSoda;

    return ShoppingBag;
  };

  return (
    <section className="w-full bg-white">
      <div className="mx-auto container px-4 py-14 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-10 border-b border-zinc-200 pb-8"
        >
          <div className="mb-5 inline-flex h-10 items-center gap-3 border border-[#ffbd73] bg-[#fffaf4] px-5">
            <span className="h-2.5 w-2.5 bg-[#ffbd73]" />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-800">
              Our Menu
            </p>
          </div>

          <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl">
            Explore Our Fresh Menu
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-600">
            Browse categories and choose your favorite food or drink.
          </p>
        </motion.div>

        <div className="-mx-4 mb-12 overflow-x-auto px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex min-w-max gap-4">
            {categories.map((category) => {
              const Icon = getCategoryIcon(category);
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`inline-flex h-12 items-center gap-3 border px-6 text-sm font-medium transition ${
                    isActive
                      ? "border-zinc-950 bg-zinc-950 text-white"
                      : "border-zinc-300 bg-white text-zinc-950 hover:border-[#ffbd73] hover:bg-[#fffaf4]"
                  }`}
                >
                  <Icon
                    size={17}
                    className={isActive ? "text-[#ffbd73]" : "text-zinc-700"}
                  />
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        <div className="-mx-4 overflow-x-auto px-4 pb-3 [scrollbar-width:none] md:mx-0 md:overflow-visible md:px-0 [&::-webkit-scrollbar]:hidden">
          <div className="flex snap-x snap-mandatory gap-6 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredItems.map((item, index) => {
              const Icon = getCategoryIcon(item.category);

              return (
                <motion.button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedItem(item)}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.25 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.06,
                    ease: "easeOut",
                  }}
                  whileHover={{ y: -6 }}
                  className="group flex min-w-[82%] snap-start flex-col overflow-hidden border border-zinc-200 bg-white text-left transition duration-300 hover:border-[#ffbd73] sm:min-w-[45%] md:min-w-0"
                >
                  <div className="relative h-60 overflow-hidden border-b border-zinc-200 bg-[#fafafa]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute bottom-4 left-4 inline-flex h-9 items-center gap-2 bg-white px-4 text-xs font-semibold text-zinc-950">
                      <Icon size={14} className="text-[#d97706]" />
                      {item.category}
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <div className="mb-4 flex items-start justify-between gap-4">
                      <h3 className="text-lg font-semibold uppercase tracking-wide text-zinc-950">
                        {item.title}
                      </h3>

                      <div className="flex shrink-0 items-center gap-0.5 pt-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className={
                              i < item.rating
                                ? "fill-[#ffbd73] text-[#ffbd73]"
                                : "fill-zinc-200 text-zinc-200"
                            }
                          />
                        ))}
                      </div>
                    </div>

                    <p className="min-h-[58px] text-sm leading-7 text-zinc-600">
                      {item.description}
                    </p>

                    <div className="mt-6 flex items-end justify-between border-t border-zinc-200 pt-6">
                      <p className="text-xl font-semibold text-[#d97706]">
                        {item.price}
                      </p>

                      <span className="flex h-12 w-12 items-center justify-center bg-zinc-950 text-[#ffbd73] transition group-hover:bg-[#ffbd73] group-hover:text-zinc-950">
                        <ShoppingBag size={19} />
                      </span>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/65 px-3 py-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 35, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 35, scale: 0.97 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-5xl overflow-hidden bg-white"
            >
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center bg-white text-zinc-950 transition hover:bg-[#fffaf4]"
                aria-label="Close menu item"
              >
                <X size={22} />
              </button>

              <div className="p-6 sm:p-8">
                <div className="flex justify-center">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="h-[260px] w-full max-w-2xl object-contain sm:h-[380px] lg:h-[470px]"
                  />
                </div>

                <div className="mt-5">
                  <h3 className="text-2xl font-semibold text-zinc-950">
                    {selectedItem.title}
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-600 sm:text-base">
                    {selectedItem.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default MenuCard;
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import justo from "../assets/justo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Menu", path: "/menu" },
    { name: "Locations", path: "/locations" },
    { name: "Franchise", path: "/franchise" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex container items-center justify-between px-4 py-4 sm:px-6 lg:px-4">
        <NavLink to="/" className="flex items-center gap-3">
          <motion.img
            src={justo}
            alt="Justo Pizzeria Logo"
            className="h-11 w-11 object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.25 }}
          />

          <div className="leading-tight">
            <h1 className="text-xl font-medium tracking-tight text-zinc-950">
              Justo Pizzeria
            </h1>
            <p className="text-sm font-normal tracking-wide text-zinc-500">
              Fresh Pizza
            </p>
          </div>
        </NavLink>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative py-2 text-base font-normal tracking-wide transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#ffbd73] after:transition-transform after:duration-300 hover:text-zinc-950 hover:after:scale-x-100 ${
                  isActive
                    ? "text-zinc-950 after:scale-x-100"
                    : "text-zinc-600"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="border border-zinc-300 p-2 text-zinc-950 transition hover:border-[#ffbd73] hover:bg-[#ffbd73]/20 lg:hidden"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu overlay"
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-zinc-950/40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.aside
              className="fixed right-0 top-0 z-50 h-screen w-[82%] max-w-sm border-l border-zinc-200 bg-white lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 30,
              }}
            >
              <div className="flex items-center justify-between border-b border-zinc-200 px-5 py-4">
                <div className="flex items-center gap-3">
                  <img
                    src={justo}
                    alt="Justo Pizzeria Logo"
                    className="h-10 w-10 object-cover"
                  />

                  <div className="leading-tight">
                    <h2 className="text-lg font-medium text-zinc-950">
                      Justo Pizzeria
                    </h2>
                    <p className="text-sm font-normal text-zinc-500">
                      Fresh Pizza
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="border border-zinc-300 p-2 text-zinc-950 transition hover:border-[#ffbd73] hover:bg-[#ffbd73]/20"
                  aria-label="Close menu"
                >
                  <X size={22} />
                </button>
              </div>

              <div className="flex flex-col px-5 py-5">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 28 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.35,
                      delay: index * 0.06,
                      ease: "easeOut",
                    }}
                  >
                    <NavLink
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `block border-b border-zinc-100 py-4 text-lg font-normal tracking-wide transition ${
                          isActive
                            ? "text-zinc-950"
                            : "text-zinc-600 hover:text-zinc-950"
                        }`
                      }
                    >
                      <span className="border-l-4 border-[#ffbd73] pl-4">
                        {link.name}
                      </span>
                    </NavLink>
                  </motion.div>
                ))}
              </div>

            
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
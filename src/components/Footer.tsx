import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import {
  FaInstagram,
  FaTiktok,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";

import justo from "../assets/justblack.png";

function Footer() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Menu", path: "/menu" },
    { name: "Locations", path: "/locations" },
    { name: "Franchise", path: "/franchise" },
    { name: "Contact", path: "/contact" },
  ];

  const menuLinks = [
    { name: "Margherita Pizza", path: "/menu" },
    { name: "Pepperoni Pizza", path: "/menu" },
    { name: "BBQ Chicken Pizza", path: "/menu" },
    { name: "Justo Special", path: "/menu" },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      icon: FaInstagram,
      href: "https://instagram.com/justopizzeria",
    },
    {
      name: "TikTok",
      icon: FaTiktok,
      href: "https://www.tiktok.com/@justopizzeria",
    },
    {
      name: "Telegram",
      icon: FaTelegramPlane,
      href: "https://t.me/justopizzeria",
    },
    {
      name: "WhatsApp",
      icon: FaWhatsapp,
      href: "https://wa.me/252610000000",
    },
  ];

  return (
    <footer className="bg-zinc-950 text-white">
      <div className="mx-auto container p-4 pt-16 ">
        <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1fr]">
          <div>
            <Link to="/" className="inline-flex items-center gap-3">
              <img
                src={justo}
                alt="Justo Pizzeria Logo"
                className="h-22 w-12 object-cover"
              />

              <div>
                <h2 className="text-xl font-semibold tracking-tight text-white">
                  Justo Pizzeria
                </h2>
                <p className="text-sm font-normal text-white/60">
                  Fresh Pizza. Bold Taste.
                </p>
              </div>
            </Link>

            <p className="mt-5 max-w-sm text-sm font-normal leading-6 text-white/65">
              Justo Pizzeria serves fresh handmade pizza with quality
              ingredients, crispy crust, rich sauce, and fast friendly service.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.name}
                    className="flex h-11 w-11 items-center justify-center border border-white/15 bg-white/5 text-white transition duration-300 hover:border-[#ffbd73] hover:bg-[#ffbd73] hover:text-zinc-950"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-base font-semibold text-white">Pages</h3>

            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm font-normal text-white/65 underline-offset-4 transition duration-300 hover:text-[#ffbd73] hover:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-base font-semibold text-white">
              Popular Menu
            </h3>

            <ul className="space-y-3">
              {menuLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm font-normal text-white/65 underline-offset-4 transition duration-300 hover:text-[#ffbd73] hover:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-base font-semibold text-white">
              Contact
            </h3>

            <div className="space-y-4">
              <div className="flex gap-3 text-sm font-normal text-white/65">
                <MapPin size={18} className="mt-1 shrink-0 text-[#ffbd73]" />
                <span>KM4 Road, Mogadishu, Somalia</span>
              </div>

              <div className="flex gap-3 text-sm font-normal text-white/65">
                <Phone size={18} className="mt-1 shrink-0 text-[#ffbd73]" />
                <span>+252 61 000 0000</span>
              </div>

              <div className="flex gap-3 text-sm font-normal text-white/65">
                <Mail size={18} className="mt-1 shrink-0 text-[#ffbd73]" />
                <span>info@justopizzeria.com</span>
              </div>
            </div>

            <Link
              to="/contact"
              className="group mt-6 inline-flex items-center gap-3 bg-[#ffbd73] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-zinc-950 transition duration-300 hover:bg-white"
            >
              Contact Us
              <ArrowRight
                size={17}
                className="transition duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
          <p className="text-sm font-normal text-white/55">
            © {new Date().getFullYear()} Justo Pizzeria. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5">
            <Link
              to="/privacy"
              className="text-sm font-normal text-white/55 underline-offset-4 transition duration-300 hover:text-[#ffbd73] hover:underline"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="text-sm font-normal text-white/55 underline-offset-4 transition duration-300 hover:text-[#ffbd73] hover:underline"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
import {
  useState,
  type ChangeEvent,
  type FormEvent,
  type ElementType,
} from "react";
import {
  AlertCircle,
  CheckCircle2,
  Mail,
  MapPin,
  MessageSquare,
  Navigation,
  Phone,
  Send,
  User,
} from "lucide-react";
import { motion } from "framer-motion";

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

type SubmitStatus = {
  type: "success" | "error" | "";
  message: string;
};

function Contactsform() {
  const accessKey = import.meta.env.VITE_WEB3FORM_ACCESS_KEY as
    | string
    | undefined;

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [status, setStatus] = useState<SubmitStatus>({
    type: "",
    message: "",
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!accessKey) {
      setStatus({
        type: "error",
        message:
          "Web3Forms access key is missing. Add VITE_WEB3FORM_ACCESS_KEY to your .env file.",
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          from_name: "Justo Pizza Website",
          subject: formData.subject || "New Contact Message",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({
          type: "success",
          message: "Your message has been sent successfully.",
        });
        resetForm();
      } else {
        setStatus({
          type: "error",
          message: result.message || "Something went wrong. Please try again.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: "Unable to send your message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="absolute left-0 top-0 h-40 w-40 border-r border-b border-[#ffbd73]/50" />
      <div className="absolute right-0 top-28 h-28 w-28 bg-[#fffaf4]" />
      <div className="absolute bottom-0 left-0 h-28 w-28 bg-[#fffaf4]" />

      <div className="relative mx-auto container px-4 py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <div className="mx-auto mb-5 inline-flex h-10 items-center gap-3 border border-[#ffbd73] bg-[#fffaf4] px-5">
            <span className="h-2.5 w-2.5 bg-[#ffbd73]" />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-800">
              Contact Us
            </p>
          </div>

          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl">
            Let’s Talk About Your Order
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-600">
            Send us a message for orders, delivery, support, franchise
            questions, or branch information.
          </p>
        </motion.div>

        <div className="grid gap-7 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="border border-zinc-200 bg-zinc-950 text-white"
          >
            <div className="border-b border-white/10 p-6 lg:p-8">
              <div className="mb-8 flex h-14 w-14 items-center justify-center bg-[#ffbd73] text-zinc-950">
                <MapPin size={28} strokeWidth={2.2} />
              </div>

              <h3 className="text-2xl font-semibold">Contact Information</h3>

              <p className="mt-4 text-sm leading-7 text-white/70">
                Reach our team directly by phone, email, or visit our main
                location for fresh pizza, pickup, and customer support.
              </p>
            </div>

            <div className="grid">
              <a
                href="tel:0616474641"
                className="group flex items-center gap-4 border-b border-white/10 p-6 transition hover:bg-white/[0.04]"
              >
                <span className="flex h-12 w-12 items-center justify-center bg-white/10 text-[#ffbd73] transition group-hover:bg-[#ffbd73] group-hover:text-zinc-950">
                  <Phone size={21} />
                </span>

                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
                    Phone Number
                  </span>
                  <span className="mt-1 block text-lg font-semibold text-white">
                    0616474641
                  </span>
                </span>
              </a>

              <a
                href="mailto:info@justopizza.com"
                className="group flex items-center gap-4 border-b border-white/10 p-6 transition hover:bg-white/[0.04]"
              >
                <span className="flex h-12 w-12 items-center justify-center bg-white/10 text-[#ffbd73] transition group-hover:bg-[#ffbd73] group-hover:text-zinc-950">
                  <Mail size={21} />
                </span>

                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
                    Email Address
                  </span>
                  <span className="mt-1 block text-lg font-semibold text-white">
                    info@justopizza.com
                  </span>
                </span>
              </a>

              <a
                href="https://maps.google.com/?q=2dhagax"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 p-6 transition hover:bg-white/[0.04]"
              >
                <span className="flex h-12 w-12 items-center justify-center bg-white/10 text-[#ffbd73] transition group-hover:bg-[#ffbd73] group-hover:text-zinc-950">
                  <Navigation size={21} />
                </span>

                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
                    Main Location
                  </span>
                  <span className="mt-1 block text-lg font-semibold text-white">
                    2dhagax Main Branch
                  </span>
                </span>
              </a>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="border border-zinc-200 bg-[#fffaf4] p-6 lg:p-8"
          >
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d97706]">
                Send Message
              </p>

              <h3 className="mt-3 text-2xl font-semibold text-zinc-950 sm:text-3xl">
                We’d Love To Hear From You
              </h3>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <InputField
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                icon={User}
                placeholder="Your full name"
                required
              />

              <InputField
                label="Email Address"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                icon={Mail}
                placeholder="example@email.com"
                required
              />

              <InputField
                label="Phone Number"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                icon={Phone}
                placeholder="061..."
                required
              />

              <InputField
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                icon={MessageSquare}
                placeholder="Message subject"
                required
              />
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">
                Message
              </label>

              <div className="flex border border-zinc-300 bg-white px-4 py-4 focus-within:border-[#ffbd73]">
                <MessageSquare
                  size={18}
                  className="mr-3 mt-1 shrink-0 text-zinc-500"
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Write your message..."
                  className="w-full resize-none bg-transparent text-sm leading-7 text-zinc-950 outline-none placeholder:text-zinc-400"
                />
              </div>
            </div>

            {status.message && (
              <div
                className={`mt-6 flex items-start gap-3 border p-4 text-sm leading-6 ${
                  status.type === "success"
                    ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                    : "border-red-200 bg-red-50 text-red-700"
                }`}
              >
                {status.type === "success" ? (
                  <CheckCircle2 size={20} className="mt-0.5 shrink-0" />
                ) : (
                  <AlertCircle size={20} className="mt-0.5 shrink-0" />
                )}

                <p>{status.message}</p>
              </div>
            )}

            <div className="mt-8 border-t border-zinc-200 pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex h-14 w-full items-center justify-center gap-3 bg-[#ffbd73] px-7 text-sm font-semibold uppercase tracking-wide text-zinc-950 transition hover:bg-[#ffa84d] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={18} />
              </button>
            </div>
          </motion.form>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mt-12 overflow-hidden border border-zinc-200 bg-white"
        >
          <div className="absolute left-0 top-0 h-24 w-24 bg-[#ffbd73]" />
          <div className="absolute right-0 bottom-0 h-24 w-24 bg-[#fffaf4]" />

          <div className="relative ">
          

            <div className="relative h-[360px] bg-zinc-100 sm:h-[430px] lg:h-[500px]">
              <iframe
                title="Justo Pizza Location"
                src="https://www.google.com/maps?q=2dhagax&output=embed"
                className="h-full w-full border-0 grayscale"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

type InputFieldProps = {
  label: string;
  name: keyof ContactFormData;
  value: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  icon: ElementType;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

function InputField({
  label,
  name,
  value,
  type = "text",
  placeholder,
  required,
  icon: Icon,
  onChange,
}: InputFieldProps) {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">
        {label}
      </label>

      <div className="flex h-14 items-center border border-zinc-300 bg-white px-4 focus-within:border-[#ffbd73]">
        <Icon size={18} className="mr-3 shrink-0 text-zinc-500" />

        <input
          type={type}
          name={name}
          value={value}
          required={required}
          onChange={onChange}
          placeholder={placeholder}
          className="h-full w-full bg-transparent text-sm text-zinc-950 outline-none placeholder:text-zinc-400"
        />
      </div>
    </div>
  );
}

export default Contactsform;
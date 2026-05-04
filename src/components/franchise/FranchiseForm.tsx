import { motion } from "framer-motion";
import { useState, type ChangeEvent, type FormEvent } from "react";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  background: string;
  otherBackground: string;
  city: string;
  province: string;
  country: string;
  locationInfo: string;
  locationType: string;
  locationAccess: string;
  agreementOne: boolean;
  agreementTwo: boolean;
};

function FranchiseForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    background: "",
    otherBackground: "",
    city: "",
    province: "",
    country: "",
    locationInfo: "",
    locationType: "",
    locationAccess: "",
    agreementOne: false,
    agreementTwo: false,
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = event.target;

    if (type === "checkbox") {
      const checked = (event.target as HTMLInputElement).checked;

      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }));

      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const whatsappNumber = "252616474641";

    const message = `
New Franchise Request

PERSONAL INFORMATION
First Name: ${formData.firstName}
Last Name: ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Professional Background: ${formData.background}
Other Background: ${formData.otherBackground}

STORE INFORMATION
City: ${formData.city}
Province / State: ${formData.province}
Country: ${formData.country}
Additional Location Information: ${formData.locationInfo}

LOCATION
Location Type: ${formData.locationType}
Location Access: ${formData.locationAccess}

ACKNOWLEDGEMENT
Agreement 1: ${formData.agreementOne ? "Yes" : "No"}
Agreement 2: ${formData.agreementTwo ? "Yes" : "No"}
    `;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section className="w-full bg-[#fffaf4]">
      <div className="mx-auto container px-4 py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto mb-10 max-w-4xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.45em] text-[#d97706]">
            Ready To Begin?
          </p>

          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl">
            Let’s build the next Justo destination together.
          </h2>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto max-w-6xl border border-zinc-200 bg-white p-6 sm:p-8 lg:p-10"
        >
          <FormSection title="Personal Information" />

          <div className="grid gap-6 md:grid-cols-2">
            <InputField
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />

            <InputField
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />

            <InputField
              label="Email Address"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <InputField
              label="Phone Number"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mt-6">
            <Label text="Professional Background" required />

            <select
              name="background"
              value={formData.background}
              onChange={handleChange}
              required
              className="mt-2 h-12 w-full border border-zinc-300 bg-white px-4 text-sm text-zinc-950 outline-none transition focus:border-[#ffbd73]"
            >
              <option value="">Select background</option>
              <option value="Restaurant Owner">Restaurant Owner</option>
              <option value="Food Business">Food Business</option>
              <option value="Retail Business">Retail Business</option>
              <option value="Investor">Investor</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="mt-6">
            <InputField
              label="If Other, please specify"
              name="otherBackground"
              value={formData.otherBackground}
              onChange={handleChange}
            />
          </div>

          <FormSection title="Store Information" className="mt-10" />

          <div className="grid gap-6 md:grid-cols-2">
            <InputField
              label="City"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />

            <InputField
              label="Province / State"
              name="province"
              value={formData.province}
              onChange={handleChange}
            />
          </div>

          <div className="mt-6">
            <Label text="Country" required />

            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              className="mt-2 h-12 w-full border border-zinc-300 bg-white px-4 text-sm text-zinc-950 outline-none transition focus:border-[#ffbd73]"
            >
              <option value="">Select a country</option>
              <option value="Somalia">Somalia</option>
              <option value="Kenya">Kenya</option>
              <option value="Ethiopia">Ethiopia</option>
              <option value="Djibouti">Djibouti</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="mt-6">
            <Label text="Any additional information to specify location?" />

            <textarea
              name="locationInfo"
              value={formData.locationInfo}
              onChange={handleChange}
              rows={7}
              className="mt-2 w-full resize-none border border-zinc-300 bg-white px-4 py-3 text-sm leading-7 text-zinc-950 outline-none transition focus:border-[#ffbd73]"
            />
          </div>

          <FormSection title="Location" className="mt-10" />

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <Label text="Location Type" required />

              <div className="mt-4 grid gap-4">
                <RadioField
                  label="Drive-Thru"
                  name="locationType"
                  value="Drive-Thru"
                  checked={formData.locationType === "Drive-Thru"}
                  onChange={handleChange}
                />

                <RadioField
                  label="Traditional"
                  name="locationType"
                  value="Traditional"
                  checked={formData.locationType === "Traditional"}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <Label
                text="Do you have access to a suitable location in your target area?"
                required
              />

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <RadioField
                  label="Yes — already secured"
                  name="locationAccess"
                  value="Yes — already secured"
                  checked={formData.locationAccess === "Yes — already secured"}
                  onChange={handleChange}
                />

                <RadioField
                  label="Not yet"
                  name="locationAccess"
                  value="Not yet"
                  checked={formData.locationAccess === "Not yet"}
                  onChange={handleChange}
                />

                <RadioField
                  label="In discussion / scouting"
                  name="locationAccess"
                  value="In discussion / scouting"
                  checked={formData.locationAccess === "In discussion / scouting"}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <FormSection title="Acknowledgement & Submission" className="mt-10" />

          <div className="grid gap-4">
            <CheckField
              name="agreementOne"
              checked={formData.agreementOne}
              onChange={handleChange}
              label="I understand that franchise approval is subject to internal review, location approval, and formal agreement."
            />

            <CheckField
              name="agreementTwo"
              checked={formData.agreementTwo}
              onChange={handleChange}
              label="Submitting this form does not guarantee approval."
            />
          </div>

          <div className="mt-10 flex justify-center">
            <button
              type="submit"
              className="h-12 bg-[#ffbd73] px-8 text-sm font-semibold text-zinc-950 transition hover:bg-[#ffa84d]"
            >
              Submit Interest
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

type LabelProps = {
  text: string;
  required?: boolean;
};

function Label({ text, required }: LabelProps) {
  return (
    <label className="block text-xs font-semibold text-zinc-950">
      {text} {required && <span className="text-[#d97706]">*</span>}
    </label>
  );
}

type FormSectionProps = {
  title: string;
  className?: string;
};

function FormSection({ title, className = "" }: FormSectionProps) {
  return (
    <div className={`mb-6 flex items-center gap-5 ${className}`}>
      <p className="shrink-0 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-950">
        {title}
      </p>
      <span className="h-px flex-1 bg-zinc-200" />
    </div>
  );
}

type InputFieldProps = {
  label: string;
  name: keyof FormData;
  value: string;
  type?: string;
  required?: boolean;
  onChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
};

function InputField({
  label,
  name,
  value,
  type = "text",
  required,
  onChange,
}: InputFieldProps) {
  return (
    <div>
      <Label text={label} required={required} />

      <input
        type={type}
        name={name}
        value={value}
        required={required}
        onChange={onChange}
        className="mt-2 h-12 w-full border border-zinc-300 bg-white px-4 text-sm text-zinc-950 outline-none transition focus:border-[#ffbd73]"
      />
    </div>
  );
}

type RadioFieldProps = {
  label: string;
  name: keyof FormData;
  value: string;
  checked: boolean;
  onChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
};

function RadioField({ label, name, value, checked, onChange }: RadioFieldProps) {
  return (
    <label className="flex cursor-pointer items-center gap-3 text-sm font-semibold text-zinc-950">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        required
        className="h-4 w-4 accent-[#ffbd73]"
      />
      {label}
    </label>
  );
}

type CheckFieldProps = {
  name: keyof FormData;
  checked: boolean;
  label: string;
  onChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
};

function CheckField({ name, checked, label, onChange }: CheckFieldProps) {
  return (
    <label className="flex cursor-pointer items-start gap-3 text-sm font-semibold leading-6 text-zinc-950">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        required
        onChange={onChange}
        className="mt-1 h-4 w-4 accent-[#ffbd73]"
      />
      {label}
    </label>
  );
}

export default FranchiseForm;
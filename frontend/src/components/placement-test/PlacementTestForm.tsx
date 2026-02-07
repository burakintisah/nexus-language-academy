"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { getWhatsAppLink } from "@/lib/whatsapp";
import common from "@/data/tr/common.json";
import placementTest from "@/data/tr/placement-test.json";

export default function PlacementTestForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    age: "",
    experience: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  }

  function validate() {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = common.validation.required;
    if (!form.phone.trim()) newErrors.phone = common.validation.required;
    if (!form.email.trim()) newErrors.email = common.validation.required;
    if (!form.age.trim()) newErrors.age = common.validation.required;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    const message = placementTest.messageTemplate
      .replace("{name}", form.name)
      .replace("{phone}", form.phone)
      .replace("{email}", form.email)
      .replace("{age}", form.age)
      .replace("{experience}", form.experience || common.courses.notSpecified);

    window.open(getWhatsAppLink(message), "_blank", "noopener,noreferrer");
  }

  const inputBase =
    "w-full rounded-xl border border-gray-200 px-4 py-3 text-text-dark placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-text-dark">
          {placementTest.form.nameLabel} *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          placeholder={placementTest.form.namePlaceholder}
          className={inputBase}
        />
        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="mb-1 block text-sm font-medium text-text-dark">
          {placementTest.form.phoneLabel} *
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          placeholder={placementTest.form.phonePlaceholder}
          className={inputBase}
        />
        {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-text-dark">
          {placementTest.form.emailLabel} *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder={placementTest.form.emailPlaceholder}
          className={inputBase}
        />
        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="age" className="mb-1 block text-sm font-medium text-text-dark">
          {placementTest.form.ageLabel} *
        </label>
        <input
          id="age"
          name="age"
          type="text"
          value={form.age}
          onChange={handleChange}
          placeholder={placementTest.form.agePlaceholder}
          className={inputBase}
        />
        {errors.age && <p className="mt-1 text-sm text-red-500">{errors.age}</p>}
      </div>

      <div>
        <label htmlFor="experience" className="mb-1 block text-sm font-medium text-text-dark">
          {placementTest.form.experienceLabel}
        </label>
        <textarea
          id="experience"
          name="experience"
          rows={3}
          value={form.experience}
          onChange={handleChange}
          placeholder={placementTest.form.experiencePlaceholder}
          className={inputBase}
        />
      </div>

      <Button type="submit" variant="whatsapp" className="w-full">
        <WhatsAppIcon />
        {placementTest.submitButton}
      </Button>
    </form>
  );
}

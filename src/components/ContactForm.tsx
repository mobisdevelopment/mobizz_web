"use client";

import { submitContactForm } from "@/app/contact/actions";
import Button from "@/components/Button";
import React from "react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [success, setSuccess] = React.useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSuccess(null);
    setError(null);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    const result = await submitContactForm(name, email, subject, message);

    if (result.success) {
      setSuccess("Formularul a fost trimis cu succes!");
      form.reset();
    } else {
      setError(
        "A apărut o eroare la trimiterea formularului. Te rugăm să încerci din nou."
      );
    }

    setIsSubmitting(false);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Nume Complet
        </label>
        <input
          type="text"
          name="name"
          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all placeholder-slate-400"
          placeholder="Ex: Popescu Ion"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Email
        </label>
        <input
          type="email"
          name="email"
          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all placeholder-slate-400"
          placeholder="Ex: ion@email.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Subiect
        </label>
        <select
          name="subject"
          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
        >
          <option>Suport General</option>
          <option>Problemă Aplicație</option>
          <option>Parteneriate</option>
          <option>Altele</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Mesaj
        </label>
        <textarea
          rows={4}
          name="message"
          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all placeholder-slate-400"
          placeholder="Detaliază solicitarea ta..."
        ></textarea>
      </div>

      {success && <p className="text-green-600 text-sm">{success}</p>}
      {error && <p className="text-red-600 text-sm">{error}</p>}

      <div className="pt-2">
        <Button fullWidth type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Se trimite..." : "Trimite prin Email"}
        </Button>
      </div>
    </form>
  );
}

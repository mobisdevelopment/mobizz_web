"use client";

import Button from "@/components/Button";

export default function ContactForm({ email }: { email: string }) {
  return (
    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Nume Complet
        </label>
        <input
          type="text"
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
          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all placeholder-slate-400"
          placeholder="Ex: ion@email.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Subiect
        </label>
        <select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all">
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
          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all placeholder-slate-400"
          placeholder="Detaliază solicitarea ta..."
        ></textarea>
      </div>

      <div className="pt-2">
        <Button
          fullWidth
          onClick={() => (window.location.href = `mailto:${email}`)}
        >
          Trimite prin Email
        </Button>
        <p className="text-xs text-center text-slate-500 mt-3">
          Acest formular va deschide clientul tău de email implicit.
        </p>
      </div>
    </form>
  );
}

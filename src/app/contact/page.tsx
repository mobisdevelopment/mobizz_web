import ContactForm from "@/components/ContactForm";
import { COMPANY_INFO } from "@/constants/constants";
import { Building2, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-slate-50 min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-6">
              Contactează-ne
            </h1>
            <p className="text-lg text-slate-600 mb-12">
              Ai o întrebare despre aplicație sau vrei să devii partener? Suntem
              aici să te ajutăm.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-white border border-slate-200 p-3 rounded-lg shadow-sm text-brand-600">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Email Suport</h3>
                  <p className="text-slate-600 mb-2">
                    Pentru orice problemă tehnică sau administrativă.
                  </p>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-brand-600 font-semibold hover:underline"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white border border-slate-200 p-3 rounded-lg shadow-sm text-brand-600">
                  <Building2 size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Date Fiscale</h3>
                  <div className="text-slate-600 text-sm space-y-1">
                    <p className="font-medium text-slate-800">
                      {COMPANY_INFO.name}
                    </p>
                    <p>CUI: {COMPANY_INFO.cui}</p>
                    <p>Nr. Reg. Com: {COMPANY_INFO.regCom}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white border border-slate-200 p-3 rounded-lg shadow-sm text-brand-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Adresa Sediu</h3>
                  <p className="text-slate-600 text-sm max-w-xs">
                    {COMPANY_INFO.address}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
            <h2 className="text-2xl font-bold mb-6 text-slate-900">
              Trimite un mesaj
            </h2>
            <ContactForm email={COMPANY_INFO.email} />
          </div>
        </div>
      </div>
    </div>
  );
}

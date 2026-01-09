import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-24 bg-dark-50 border-t border-dark-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-dark-900 mb-4">
            Ce spun utilizatorii
          </h2>
          <p className="text-dark-600">Feedback real de la oameni reali.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 bg-white rounded-3xl relative border border-dark-100 hover:shadow-lg transition-shadow">
            <Quote className="text-dark-300 absolute top-6 left-6" size={40} />
            <p className="text-dark-700 italic mb-8 relative z-10 pt-4 leading-relaxed">
              &quot;De când folosesc MobizzApp nu mai pierd timp la telefon. Văd
              imediat când e liber stilistul meu și rezerv în 10 secunde. Super
              util!&quot;
            </p>
            <div className="flex items-center gap-4 border-t border-dark-200 pt-6">
              <div className="w-10 h-10 bg-brand-500 rounded-full flex items-center justify-center font-bold text-white">
                AM
              </div>
              <div>
                <p className="font-bold text-dark-900">Ana Maria</p>
                <p className="text-xs text-brand-600">Utilizator Verified</p>
              </div>
            </div>
          </div>
          <div className="p-8 bg-white rounded-3xl relative border border-dark-100 hover:shadow-lg transition-shadow">
            <Quote className="text-dark-300 absolute top-6 left-6" size={40} />
            <p className="text-dark-700 italic mb-8 relative z-10 pt-4 leading-relaxed">
              &quot;Comand prânzul la birou zilnic prin aplicație. Îmi place că
              pot urmări comanda în timp real și meniul e mereu
              actualizat.&quot;
            </p>
            <div className="flex items-center gap-4 border-t border-dark-200 pt-6">
              <div className="w-10 h-10 bg-accent-500 rounded-full flex items-center justify-center font-bold text-white">
                RI
              </div>
              <div>
                <p className="font-bold text-dark-900">Radu Ionescu</p>
                <p className="text-xs text-accent-600">Foodie & Tech Lover</p>
              </div>
            </div>
          </div>
          <div className="p-8 bg-white rounded-3xl relative border border-dark-100 hover:shadow-lg transition-shadow">
            <Quote className="text-dark-300 absolute top-6 left-6" size={40} />
            <p className="text-dark-700 italic mb-8 relative z-10 pt-4 leading-relaxed">
              &quot;Pentru salonul meu, MobizzApp a fost o revoluție. Am redus
              neprezentările cu 80% datorită SMS-urilor automate de
              reamintire.&quot;
            </p>
            <div className="flex items-center gap-4 border-t border-dark-200 pt-6">
              <div className="w-10 h-10 bg-dark-800 rounded-full flex items-center justify-center font-bold text-white">
                ES
              </div>
              <div>
                <p className="font-bold text-dark-900">Elena Stan</p>
                <p className="text-xs text-dark-500">Manager Salon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

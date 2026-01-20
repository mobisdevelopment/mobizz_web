import { Trash2 } from "lucide-react";

export default function HowToDeleteAccount() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-black overflow-hidden border-b border-dark-900">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-500/10 rounded-full blur-[120px] -z-0 opacity-40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-dark-900 border border-dark-800 px-4 py-2 rounded-full text-brand-400 text-sm font-semibold mb-6">
              <Trash2 size={16} />
              <span>Ghid Utilizare</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
              Cum să ștergi <span className="text-brand-500">contul</span>
            </h1>
            <p className="text-xl text-dark-300 leading-relaxed font-light">
              Urmează pașii de mai jos pentru a-ți șterge permanent contul din
              aplicația Mobizz.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="mb-12">
              <p className="text-dark-600 leading-relaxed text-lg">
                Pentru a șterge contul tău, urmează pașii de mai jos:
              </p>
            </div>

            {/* Steps */}
            <ol className="space-y-8">
              <li className="text-dark-900">
                <div className="mb-4">
                  <span className="text-lg font-semibold">
                    Accesează pagina de setări a contului tău:
                  </span>
                </div>
                <div className="mt-4">
                  <img
                    src="/images/delete-account-step-1.jpeg"
                    className="rounded-lg shadow-lg border border-dark-200 max-w-md mx-auto my-4"
                    alt="Setări cont"
                  />
                </div>
              </li>

              <li className="text-dark-900">
                <div className="mb-4">
                  <span className="text-lg font-semibold">
                    Derulează în jos până la secțiunea „Șterge contul"
                  </span>
                </div>
              </li>

              <li className="text-dark-900">
                <div className="mb-4">
                  <span className="text-lg font-semibold">
                    Apasă butonul „Șterge contul":
                  </span>
                </div>
                <div className="mt-4">
                  <img
                    src="/images/delete-account-step-2.jpeg"
                    className="rounded-lg shadow-lg border border-dark-200 max-w-md mx-auto my-4"
                    alt="Șterge contul"
                  />
                </div>
              </li>

              <li className="text-dark-900">
                <div className="mb-4">
                  <span className="text-lg font-semibold">
                    Confirmă acțiunea de ștergere a contului:
                  </span>
                </div>
                <div className="mt-4">
                  <img
                    src="/images/delete-account-step-3.jpeg"
                    className="rounded-lg shadow-lg border border-dark-200 max-w-md mx-auto my-4"
                    alt="Confirmare ștergere cont"
                  />
                </div>
              </li>
            </ol>

            {/* Warning Notice */}
            <div className="bg-red-50 border border-red-200 rounded-2xl p-8 mt-12">
              <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center gap-2">
                <Trash2 size={20} />
                Atenție
              </h3>
              <p className="text-red-800 mb-2">
                Ștergerea contului este permanentă și nu poate fi anulată.
              </p>
              <p className="text-red-800">
                Toate datele tale, inclusiv comenzile și istoricul, vor fi
                șterse definitiv.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

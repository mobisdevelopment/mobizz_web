export default function Statistics() {
  return (
    <section className="bg-black border-y border-dark-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-dark-800/50">
          <div>
            <div className="text-4xl font-black text-white mb-2">50k+</div>
            <div className="text-brand-500 text-xs font-bold uppercase tracking-widest">
              Utilizatori
            </div>
          </div>
          <div>
            <div className="text-4xl font-black text-white mb-2">1.2k+</div>
            <div className="text-accent-500 text-xs font-bold uppercase tracking-widest">
              Parteneri
            </div>
          </div>
          <div>
            <div className="text-4xl font-black text-white mb-2">100k+</div>
            <div className="text-brand-500 text-xs font-bold uppercase tracking-widest">
              Rezervări
            </div>
          </div>
          <div>
            <div className="text-4xl font-black text-white mb-2">4.9</div>
            <div className="text-accent-500 text-xs font-bold uppercase tracking-widest">
              Rating
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

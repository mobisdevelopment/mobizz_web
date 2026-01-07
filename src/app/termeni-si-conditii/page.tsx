import { COMPANY_INFO } from "@/constants/constants";
import { FileText, Shield } from "lucide-react";

export default function Terms() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-black overflow-hidden border-b border-dark-900">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-500/10 rounded-full blur-[120px] -z-0 opacity-40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-dark-900 border border-dark-800 px-4 py-2 rounded-full text-brand-400 text-sm font-semibold mb-6">
              <FileText size={16} />
              <span>Document Legal</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
              Termeni și <span className="text-brand-500">Condiții</span>
            </h1>
            <p className="text-xl text-dark-300 leading-relaxed font-light">
              Vă rugăm să citiți cu atenție acești termeni și condiții înainte
              de a utiliza serviciile MobizzApp.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Introducere */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-900 mb-6 flex items-center gap-3">
                <Shield className="text-brand-500" size={32} />
                Introducere
              </h2>
              <p className="text-dark-600 leading-relaxed mb-4">
                Bun venit la MobizzApp, o platformă inovatoare oferită de SC
                Mobis Development SRL, care facilitează comandarea de mâncare,
                rezervări la saloane și închirierea de servicii diverse. Acești
                Termeni și Condiții reglementează utilizarea aplicației
                MobizzApp și a serviciilor asociate. Prin descărcarea, accesarea
                sau utilizarea aplicației, confirmați că ați citit, înțeles și
                acceptat să respectați acești Termeni. Vă rugăm să revizuiți
                documentul atent, deoarece reprezintă un acord legal între
                dumneavoastră și SC Mobis Development SRL.
              </p>
            </div>

            {/* Acceptarea Termenilor */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-900 mb-6">
                Acceptarea Termenilor
              </h2>
              <p className="text-dark-600 leading-relaxed mb-4">
                Prin utilizarea MobizzApp, vă exprimați acordul necondiționat
                față de acești Termeni și Condiții. Dacă nu sunteți de acord cu
                oricare dintre termeni, vă rugăm să nu utilizați aplicația. SC
                Mobis Development SRL își rezervă dreptul de a refuza accesul la
                serviciile MobizzApp oricărui utilizator care nu respectă acești
                termeni. De asemenea, ne rezervăm dreptul de a modifica sau
                actualiza acești termeni în orice moment, iar utilizarea
                continuă a aplicației după astfel de modificări presupune
                acceptarea acestora. Vom face eforturi rezonabile să vă informăm
                despre orice modificări semnificative, dar responsabilitatea de
                a verifica periodic termenii revine în totalitate
                utilizatorilor.
              </p>
            </div>

            {/* Descrierea Serviciilor */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-900 mb-6">
                Descrierea Serviciilor
              </h2>
              <p className="text-dark-600 leading-relaxed mb-4">
                MobizzApp este o platformă multifuncțională care oferă
                următoarele servicii:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-dark-600 mb-4">
                <li>
                  <strong>Comandă de Mâncare:</strong> Utilizatorii pot alege
                  dintr-o varietate largă de restaurante și meniuri, plasând
                  comenzi pentru livrare sau ridicare. MobizzApp facilitează
                  procesul de comandă și plăți, asigurând o experiență ușoară și
                  eficientă.
                </li>
                <li>
                  <strong>Rezervări la Saloane:</strong> Prin MobizzApp,
                  utilizatorii pot rezerva servicii la diferite saloane de
                  frumusețe și wellness. Aplicația permite vizualizarea
                  disponibilității, serviciilor oferite și efectuarea
                  rezervărilor în timp real.
                </li>
                <li>
                  <strong>Închiriere de Servicii:</strong> MobizzApp conectează
                  utilizatorii cu o gamă diversă de furnizori de servicii, de la
                  menaj și curățenie, la reparații și mentenanță. Utilizatorii
                  pot căuta, compara și închiria servicii în funcție de nevoile
                  lor specifice.
                </li>
              </ul>
              <p className="text-dark-600 leading-relaxed">
                Toate tranzacțiile și interacțiunile prin MobizzApp sunt
                guvernate de acești Termeni și Condiții. Vă recomandăm să
                verificați și termenii individuali ai fiecărui furnizor de
                servicii, deoarece MobizzApp nu este responsabil pentru
                serviciile oferite de terți.
              </p>
            </div>

            {/* Înregistrarea și Utilizarea Contului */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-900 mb-6">
                Înregistrarea și Utilizarea Contului
              </h2>
              <p className="text-dark-600 leading-relaxed mb-4">
                Pentru a accesa serviciile oferite de MobizzApp, utilizatorii
                trebuie să creeze un cont. Înregistrarea presupune furnizarea de
                informații veridice și actualizate, cum ar fi nume, adresă de
                e-mail și, opțional, număr de telefon. Este responsabilitatea
                utilizatorului să mențină confidențialitatea datelor de
                autentificare și să informeze MobizzApp imediat în cazul unei
                utilizări neautorizate sau suspecte a contului său.
              </p>
              <p className="text-dark-600 leading-relaxed mb-4">
                Utilizatorii sunt responsabili pentru toate acțiunile efectuate
                prin intermediul contului lor și trebuie să respecte legile
                aplicabile în timpul utilizării serviciilor MobizzApp. Orice
                încălcare a Termenilor și Condițiilor poate duce la suspendarea
                sau terminarea contului.
              </p>
              <p className="text-dark-600 leading-relaxed">
                SC Mobis Development SRL își rezervă dreptul de a refuza
                înregistrarea sau de a închide un cont, la propria discreție, în
                cazul în care se suspectează abuz sau comportament neadecvat.
              </p>
            </div>

            {/* Restricții de Vârstă */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-900 mb-6">
                Restricții de Vârstă
              </h2>
              <p className="text-dark-600 leading-relaxed">
                MobizzApp este accesibil persoanelor cu vârsta de peste 14 ani.
                Utilizatorii sub vârsta de 18 ani trebuie să aibă consimțământul
                părinților sau al tutorilor legali pentru a utiliza aplicația.
                În momentul înregistrării, utilizatorii sunt obligați să
                confirme vârsta și să asigure că informațiile furnizate sunt
                corecte și actuale. MobizzApp își rezervă dreptul de a solicita
                dovezi suplimentare ale vârstei și de a suspenda conturile
                utilizatorilor care furnizează informații false sau inexacte
                referitoare la vârsta lor.
              </p>
            </div>

            {/* Drepturi de Proprietate Intelectuală */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-900 mb-6">
                Drepturi de Proprietate Intelectuală
              </h2>
              <p className="text-dark-600 leading-relaxed mb-4">
                Toate drepturile de proprietate intelectuală asociate cu
                MobizzApp, inclusiv, dar fără a se limita la, designul, textul,
                grafica, interfața utilizatorului, codul software și toate alte
                materiale conținute în aplicație, sunt proprietatea exclusivă a
                SC Mobis Development SRL sau a licențiatorilor săi. Utilizarea
                MobizzApp nu conferă utilizatorilor niciun drept sau licență
                asupra acestor drepturi de proprietate intelectuală.
              </p>
              <p className="text-dark-600 leading-relaxed">
                Este interzisă reproducerea, distribuția, modificarea sau
                crearea lucrărilor derivate bazate pe orice parte din MobizzApp
                fără permisiunea scrisă explicită a SC Mobis Development SRL.
                Nerespectarea acestor condiții poate duce la acțiuni legale
                și/sau suspendarea contului de utilizator.
              </p>
            </div>

            {/* Politica de Ștergere a Contului */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-900 mb-6">
                Politica de Ștergere a Contului
              </h2>
              <p className="text-dark-600 leading-relaxed mb-4">
                Utilizatorii MobizzApp pot solicita ștergerea contului lor în
                orice moment. Există două modalități de a face acest lucru:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-dark-600 mb-4">
                <li>
                  <strong>Prin Email:</strong> Utilizatorii pot trimite o
                  solicitare de ștergere a contului la adresa de email oficială
                  a MobizzApp. Solicitarea trebuie să includă numele de
                  utilizator și motivele pentru care se dorește ștergerea
                  contului. Echipa MobizzApp va procesa cererea și va confirma
                  ștergerea contului în termen de 5 zile lucrătoare.
                </li>
                <li>
                  <strong>Direct din Aplicație:</strong> Utilizatorii pot șterge
                  contul direct din aplicație, accesând secțiunea „Șterge Cont".
                  Vor fi ghidați printr-un proces de confirmare pentru a asigura
                  că ștergerea contului este o decizie intenționată.
                </li>
              </ul>
              <p className="text-dark-600 leading-relaxed">
                În ambele cazuri, ștergerea contului va duce la pierderea
                accesului la serviciile MobizzApp și la ștergerea tuturor
                datelor asociate contului.
              </p>
            </div>

            {/* Modificări ale Termenilor */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-900 mb-6">
                Modificări ale Termenilor și Condițiilor
              </h2>
              <p className="text-dark-600 leading-relaxed">
                SC Mobis Development SRL își rezervă dreptul de a modifica sau
                actualiza Termenii și Condițiile de utilizare a MobizzApp la
                orice moment. Astfel de modificări vor fi efective imediat după
                publicarea lor în aplicație sau pe site-ul web asociat. Este
                responsabilitatea utilizatorilor să revizuiască periodic
                Termenii și Condițiile pentru a fi la curent cu orice schimbări.
                Utilizarea continuă a aplicației MobizzApp după publicarea
                modificărilor constituie acceptarea de către utilizatori a
                noilor Termeni și Condiții.
              </p>
            </div>

            {/* Limitarea Răspunderii */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-900 mb-6">
                Limitarea Răspunderii
              </h2>
              <p className="text-dark-600 leading-relaxed mb-4">
                SC Mobis Development SRL nu își asumă răspunderea pentru orice
                pierdere sau daună care ar putea rezulta din utilizarea
                MobizzApp, inclusiv, dar fără a se limita la, daune indirecte
                sau accidentale. De asemenea, nu garantăm continuitatea sau
                lipsa erorilor în funcționarea aplicației. Utilizatorii folosesc
                MobizzApp pe propria lor răspundere.
              </p>
              <p className="text-dark-600 leading-relaxed mb-4">
                Nu ne asumăm responsabilitatea pentru conținutul sau serviciile
                oferite de terți prin intermediul aplicației, inclusiv
                informațiile despre produse, servicii, prețuri, calitate sau
                disponibilitate. Relațiile contractuale stabilite prin
                intermediul MobizzApp între utilizatori și furnizorii de
                servicii sunt exclusiv responsabilitatea părților implicate.
              </p>
              <p className="text-dark-600 leading-relaxed">
                Această limitare a răspunderii se aplică în măsura maximă
                permisă de lege și supraviețuiește rezilierii sau expirării
                acestor Termeni și Condiții sau a utilizării MobizzApp de către
                utilizatori.
              </p>
            </div>

            {/* Dispoziții Generale */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dark-900 mb-6">
                Dispoziții Generale
              </h2>
              <p className="text-dark-600 leading-relaxed">
                Acești Termeni și Condiții sunt guvernați și interpretați
                conform legislației din România. Orice dispută rezultată din sau
                în legătură cu acești Termeni va fi supusă jurisdicției
                exclusive a instanțelor din această jurisdicție. Dacă oricare
                dintre prevederile acestor Termeni este găsită invalidă sau
                neaplicabilă, aceasta nu va afecta validitatea și
                aplicabilitatea celorlalte prevederi. Ne rezervăm dreptul de a
                ceda sau transfera drepturile și obligațiile noastre conform
                acestor Termeni către orice terță parte, fără a fi nevoie de
                consimțământul utilizatorului.
              </p>
            </div>

            {/* Contact Info */}
            <div className="bg-dark-50 border border-dark-200 rounded-2xl p-8 mt-12">
              <h3 className="text-xl font-bold text-dark-900 mb-4">
                Informații de Contact
              </h3>
              <p className="text-dark-600 mb-2">
                <strong>Companie:</strong> {COMPANY_INFO.name}
              </p>
              <p className="text-dark-600 mb-2">
                <strong>Email:</strong> {COMPANY_INFO.email}
              </p>
              <p className="text-dark-600">
                Pentru alte întrebări, vă rugăm să vizitați{" "}
                <a
                  href="/contact"
                  className="text-brand-600 hover:text-brand-700 font-semibold underline"
                >
                  pagina de contact
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

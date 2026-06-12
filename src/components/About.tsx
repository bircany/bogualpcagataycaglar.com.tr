import { Check, GraduationCap, MessageCircle } from "lucide-react";
import { trackContactConversion } from "@/lib/googleTag";

const principles = ["Empati ve Anlayış", "Gizlilik ve Güven", "Profesyonellik", "Sürekli Gelişim", "Bireysel Yaklaşım", "Duygusal Destek"];

const About = () => (
  <section id="about" className="section-shell overflow-hidden bg-secondary/65">
    <div className="mx-auto grid max-w-7xl items-start gap-14 px-4 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
      <div className="relative rounded-[2.5rem] bg-primary-dark p-8 text-primary-foreground shadow-card sm:p-10 lg:sticky lg:top-28 animate-blur-in">
        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/30 blur-2xl" />
        <GraduationCap className="mb-10 h-12 w-12 text-primary-light animate-pulse" />
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-primary-light">Akademik Altyapı</p>
        <h3 className="mb-5 text-3xl font-bold leading-tight text-white">Ordu Üniversitesi</h3>
        <p className="leading-7 text-white/75">Rehberlik ve Psikolojik Danışmanlık lisans ve yüksek lisans eğitimi.</p>
      </div>

      <div className="animate-blur-in [animation-delay:150ms]">
        <p className="section-kicker">Hakkımda</p>
        <h2 className="section-title text-gradient-dark">Bilimsel altyapı, insana özgü bir yaklaşım.</h2>
        <div className="space-y-5 text-base leading-8 text-foreground/70 sm:text-lg">
          <p>Ordu Üniversitesi Rehberlik ve Psikolojik Danışmanlık bölümünde tamamladığım lisans eğitimimin ardından, yine aynı üniversitede yüksek lisansımı bitirerek uzmanlığımı aldım.</p>
          <p>Akademik altyapımı sahaya aktarırken; travma odaklı danışmanlık hizmetleri, aile ve çift ilişkileri ile kariyer ve eğitim danışmanlığı alanlarında profesyonel destek sunuyorum.</p>
          <p>Aynı zamanda çocuk ve ergenlerin dikkat seviyelerini belirleyerek, onlara özel dikkat geliştirme programları uyguluyorum. Bireysel yolculuğunuzda, kendinizi daha iyi anlamlandırmanız ve potansiyelinizi açığa çıkarmanız için güvenli bir alan sunmak adına buradayım.</p>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {principles.map((principle) => (
            <div key={principle} className="flex items-center gap-3 rounded-2xl border border-primary/15 bg-white/60 px-4 py-4 transition-all duration-300 hover:border-primary/45 hover:bg-white/90">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground"><Check className="h-4 w-4" /></span>
              <span className="font-semibold text-foreground/80">{principle}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <a
            href="https://wa.me/905070314041"
            target="_blank"
            rel="noreferrer"
            onClick={() => trackContactConversion("whatsapp", "about_cta")}
            className="w-full sm:w-auto"
          >
            <button className="btn-cta inline-flex w-full items-center justify-center gap-2 py-3.5 px-7 text-sm sm:w-auto">
              <MessageCircle className="h-4 w-4" /> WhatsApp ile Randevu Al
            </button>
          </a>
          <p className="text-sm font-semibold text-muted-foreground">Altınordu / Ordu • Yüz Yüze Görüşme</p>
        </div>
      </div>
    </div>
  </section>
);

export default About;

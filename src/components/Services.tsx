import { BookOpenCheck, Brain, BriefcaseBusiness, Focus, GraduationCap, HeartHandshake, ScanSearch, Sparkles, Users, Waypoints, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackContactConversion } from "@/lib/googleTag";

const services = [
  { icon: Waypoints, title: "EMDR", text: "Travmatik yaşantıların işlenmesine odaklanan yapılandırılmış danışmanlık yaklaşımı." },
  { icon: HeartHandshake, title: "Çift ve Aile Danışmanlığı", text: "İlişki dinamiklerini, iletişimi ve ortak çözüm yollarını ele alan destek süreci." },
  { icon: Sparkles, title: "Bireysel Danışmanlık", text: "Kendinizi, duygularınızı ve yaşam örüntülerinizi daha iyi anlamaya yönelik güvenli alan." },
  { icon: Users, title: "Ergen Danışmanlığı", text: "Ergenlik döneminin duygusal, sosyal ve gelişimsel ihtiyaçlarına özel yaklaşım." },
  { icon: Brain, title: "Ebeveyn Danışmanlığı", text: "Çocuğun ihtiyaçlarını anlamaya ve ebeveynlik sürecini güçlendirmeye yönelik destek." },
  { icon: GraduationCap, title: "Sınav Kaygısı", text: "Sınav öncesi ve sırasında yaşanan yoğun kaygıyı yönetmeye yönelik çalışmalar." },
  { icon: BookOpenCheck, title: "Eğitim Danışmanlığı", text: "Öğrenme sürecini, çalışma düzenini ve akademik hedefleri birlikte yapılandırma." },
  { icon: BriefcaseBusiness, title: "Kariyer Danışmanlığı", text: "İlgi, yetenek ve değerler doğrultusunda kariyer seçeneklerini anlamlandırma." },
  { icon: ScanSearch, title: "MOXO Dikkat Testi", text: "Dikkat performansının zamanlama, dürtüsellik ve hareketlilik boyutlarıyla değerlendirilmesi." },
  { icon: Focus, title: "Dikkat Geliştirme Programı (Attentioner)", text: "Çocuk ve ergenlere özel uygulanan dikkat geliştirme programı." },
];

const Services = () => (
  <section id="services" className="section-shell bg-background">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-14 max-w-3xl animate-blur-in">
        <p className="section-kicker">Çalışma Alanları</p>
        <h2 className="section-title text-gradient-dark">Her ihtiyaca özel, özenli bir danışmanlık süreci.</h2>
        <p className="section-copy">Danışmanlık süreci, kişinin yaşam öyküsü ve güncel ihtiyaçları doğrultusunda bireysel olarak şekillenir.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5 animate-blur-in [animation-delay:150ms]">
        {services.map((service, index) => (
          <article key={service.title} className={`service-card ${index === 0 || index === 9 ? "service-card-highlight" : ""} transition-transform duration-300 hover:scale-[1.02]`}>
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary-dark">
              <service.icon className="h-6 w-6" />
            </div>
            <h3 className="mb-3 text-lg font-bold text-foreground">{service.title}</h3>
            <p className="text-sm leading-6 text-foreground/60">{service.text}</p>
          </article>
        ))}
      </div>

      {/* Services bottom CTA */}
      <div className="mt-14 flex flex-col items-center justify-between gap-6 rounded-[2rem] border border-primary/10 bg-secondary/35 p-8 text-center sm:p-10 md:flex-row md:text-left animate-blur-in [animation-delay:200ms]">
        <div>
          <h4 className="font-heading text-lg font-bold text-foreground">Hangi destek alanının size uygun olduğunu bilmiyor musunuz?</h4>
          <p className="mt-1 text-sm text-foreground/60">Ön görüşme ve seans planlaması için bizimle iletişime geçebilirsiniz.</p>
        </div>
        <a
          href="https://wa.me/905070314041"
          target="_blank"
          rel="noreferrer"
          onClick={() => trackContactConversion("whatsapp", "services_cta")}
          className="w-full shrink-0 md:w-auto"
        >
          <Button className="btn-cta w-full md:w-auto py-6">
            <MessageCircle className="mr-2 h-5 w-5" /> Detaylı Bilgi & WhatsApp İletişim
          </Button>
        </a>
      </div>
    </div>
  </section>
);

export default Services;

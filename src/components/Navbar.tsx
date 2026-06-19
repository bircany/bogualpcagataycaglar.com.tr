import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackContactConversion } from "@/lib/googleTag";

const navItems = [
  { name: "Ana Sayfa", href: "#hero" },
  { name: "Çalışma Alanları", href: "#services" },
  { name: "Hakkımda", href: "#about" },
  { name: "Makaleler", href: "#articles" },
  { name: "Sık Sorulanlar", href: "#faq" },
  { name: "İletişim", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-primary/10 bg-background/90 backdrop-blur-xl">
      {/* Sliding Marquee Top Announcement Bar */}
      <a
        href="https://wa.me/905070314041"
        target="_blank"
        rel="noreferrer"
        onClick={() => trackContactConversion("whatsapp", "top_marquee")}
        className="block bg-primary/20 py-2.5 text-center text-xs font-bold text-primary-dark overflow-hidden border-b border-primary/10 hover:bg-primary/30 transition-colors cursor-pointer"
      >
        <div className="animate-marquee whitespace-nowrap inline-block">
          <span className="inline-block mx-4">🎉 Ordu Altınordu'da Yüz Yüze Danışmanlık ve Seanslar • Detaylı Bilgi ve Randevu İçin Hemen WhatsApp'tan Yazın veya Arayın: <b>0 (507) 031 40 41</b></span>
          <span className="inline-block mx-4">🎉 Ordu Altınordu'da Yüz Yüze Danışmanlık ve Seanslar • Detaylı Bilgi ve Randevu İçin Hemen WhatsApp'tan Yazın veya Arayın: <b>0 (507) 031 40 41</b></span>
        </div>
      </a>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#hero" className="group flex items-center gap-3" aria-label="Ana sayfa">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground shadow-soft transition-transform group-hover:rotate-6">
            BÇ
          </span>
          <span className="hidden sm:block">
            <span className="block font-heading text-sm font-bold leading-tight text-foreground">Bögüalp Çağatay Çağlar</span>
            <span className="block text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">Uzman Psikolojik Danışman</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="text-sm font-semibold text-foreground/75 transition-colors hover:text-primary-dark">
              {item.name}
            </a>
          ))}
        </div>

        <a href="tel:+905070314041" className="hidden lg:block" onClick={() => trackContactConversion("phone", "navbar_desktop")}>
          <Button size="sm" className="btn-cta">
            <Phone className="mr-2 h-4 w-4" />
            Randevu Al
          </Button>
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="rounded-full p-2 text-foreground lg:hidden"
          aria-label="Menüyü aç veya kapat"
          aria-expanded={isOpen}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-primary/10 bg-background px-4 pb-5 pt-3 lg:hidden">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} onClick={() => setIsOpen(false)} className="block rounded-xl px-3 py-3 font-medium text-foreground hover:bg-secondary">
              {item.name}
            </a>
          ))}
          <a href="tel:+905070314041" className="mt-3 block" onClick={() => trackContactConversion("phone", "navbar_mobile")}>
            <Button className="btn-cta w-full"><Phone className="mr-2 h-4 w-4" />Randevu Al</Button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

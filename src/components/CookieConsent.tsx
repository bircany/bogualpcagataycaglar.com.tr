import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { getGoogleConsent, setGoogleConsent } from "@/lib/googleTag";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(() => getGoogleConsent() === null);

  if (!isVisible) return null;

  const choose = (value: "granted" | "denied") => {
    setGoogleConsent(value);
    setIsVisible(false);
  };

  return (
    <aside className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-3xl rounded-3xl border border-primary/20 bg-background/95 p-5 shadow-card backdrop-blur-xl sm:p-6" aria-label="Çerez tercihleri">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="mb-2 text-base font-bold text-foreground">Çerez tercihiniz</h2>
          <p className="text-sm leading-6 text-foreground/65">
            Site performansını ve reklam dönüşümlerini ölçmek için, izninizle Google teknolojileri kullanılır. Ayrıntılar <Link to="/gizlilik" className="font-semibold text-primary-dark underline">Gizlilik Politikası</Link> sayfasında.
          </p>
        </div>
        <div className="flex shrink-0 gap-2">
          <Button variant="outline" onClick={() => choose("denied")} className="rounded-full">Reddet</Button>
          <Button onClick={() => choose("granted")} className="btn-cta">Kabul Et</Button>
        </div>
      </div>
    </aside>
  );
};

export default CookieConsent;

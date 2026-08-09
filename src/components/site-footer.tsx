import { Facebook, Instagram, MapPin, Phone, Mail, Sparkles, ArrowUpRight } from "lucide-react";
import logo from "@/assets/presto_logo.jfif";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer id="contacts" className="relative overflow-hidden border-t border-white/10 bg-gradient-to-b from-background via-surface/40 to-surface/80 pt-20">
      {/* Halo d'ambiance lumineux en arrière-plan */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-10 -z-10 h-96 w-full max-w-4xl -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]"
      />

      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Grille principale à 3 colonnes */}
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-3 lg:gap-10">
          
          {/* 1. Colonne Marque & Identité */}
          <div className="flex flex-col justify-between gap-6">
            <div>
              <a href="#top" className="group inline-flex items-center gap-3.5">
                <div className="relative">
                  <img
                    src={logo}
                    alt="Presto Berkane logo"
                    className="h-14 w-14 rounded-full object-cover ring-2 ring-primary/40 transition-all duration-300 group-hover:ring-primary group-hover:shadow-[0_0_15px_-3px_rgba(255,193,7,0.5)]"
                  />
                </div>
                <span className="font-display text-2xl leading-none tracking-wide text-foreground">
                  PRESTO <br />
                  <span className="text-primary transition-colors group-hover:brightness-110">BERKANE</span>
                </span>
              </a>

              <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Des repas préparés avec passion et authenticité. La meilleure adresse à Berkane pour savourer de véritables pizzas au feu de bois et burgers gourmets.
              </p>
            </div>

            {/* Réseaux sociaux */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="group grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-muted-foreground transition-all duration-300 hover:border-primary/60 hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/30 active:scale-95"
              >
                <Facebook className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="group grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-muted-foreground transition-all duration-300 hover:border-primary/60 hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/30 active:scale-95"
              >
                <Instagram className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              </a>
            </div>
          </div>

          {/* 2. Colonne Carte Interactive (Glassmorphism) */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-lg tracking-wide text-foreground">
                Nous localiser
              </h3>
            </div>

            {/* Conteneur Iframe Maps avec bordures animées */}
            <div className="group relative h-48 overflow-hidden rounded-2xl border border-white/10 bg-surface shadow-lg transition-colors duration-300 hover:border-primary/40">
              <iframe
                title="Nous localiser"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3143.557854749976!2d-2.3378495!3d34.9228896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7823006b346cdb%3A0x5a23e11bfd2423a6!2sPresto!5e1!3m2!1sfr!2sma!4v1785530169861!5m2!1sfr!2sma"
                className="absolute inset-0 h-full w-full border-0 opacity-85 transition-opacity duration-300 group-hover:opacity-100"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <div className="flex items-center justify-between text-xs sm:text-sm text-muted-foreground">
              <span>WMF6+5V7,Berkane 63300</span>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Bd+bourass,+Berkane"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-medium text-primary transition-colors hover:underline underline-offset-4"
              >
                <span>Ouvrir dans Maps</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* 3. Colonne Contacts */}
          <div className="flex flex-col gap-5 lg:pl-6">
            <h3 className="font-display text-lg tracking-wide text-foreground">
              Nous contacter
            </h3>

            <ul className="flex flex-col gap-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary">
                  <MapPin className="h-4 w-4" />
                </div>
                <div className="pt-1">
                  <span className="block font-medium text-foreground">Adresse</span>
                  <span>WMF6+5V7,Berkane</span>
                </div>
              </li>

              <li className="flex items-start gap-3.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary">
                  <Phone className="h-4 w-4" />
                </div>
                <div className="pt-1">
                  <span className="block font-medium text-foreground">Téléphone & Commandes</span>
                  <a
                    href="tel:+212611242103"
                    className="transition-colors hover:text-primary hover:underline underline-offset-4"
                  >
                    +212 611 24 21 03
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary">
                  <Mail className="h-4 w-4" />
                </div>
                <div className="pt-1">
                  <span className="block font-medium text-foreground">Email</span>
                  <a
                    href="mailto:contact@prestoberkane.ma"
                    className="transition-colors hover:text-primary hover:underline underline-offset-4"
                  >
                    contact@prestoberkane.ma
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Barre inférieure : Copyright & Mentions */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 text-xs text-muted-foreground sm:text-sm md:flex-row">
          <span>© {year} Presto Berkane — Tous droits réservés.</span>
          <span className="inline-flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Fait avec passion à Berkane, Maroc
          </span>
        </div>
      </div>
    </footer>
  );
}
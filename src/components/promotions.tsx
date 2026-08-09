import promo1 from "@/assets/promo-1.jpg";
import promo2 from "@/assets/promo-2.jpg";
import { Sparkles, ArrowRight, Tag } from "lucide-react";

const promos = [
  {
    img: promo1,
    badge: "-25%",
    title: "TWO FOR THE TABLE",
    subtitle: "LIMITED TIME DEAL",
    text: "Order any two large pizzas before 6pm and save a quarter of the bill. Perfect for sharing with friends and family.",
    cta: "CLAIM OFFER",
  },
  {
    img: promo2,
    badge: "-15%",
    title: "PIZZA + COMBO",
    subtitle: "LUNCH & DINNER SPECIAL",
    text: "Add crispy charcoal fries and an ice-cold drink to any signature pizza and the whole combo drops in price.",
    cta: "ORDER COMBO",
  },
];

export function Promotions() {
  return (
    <section id="shares" className="relative mx-auto max-w-7xl px-4 py-24 md:px-8">
      {/* Styles inline pour les animations Pro */}
      <style>{`
        /* Effet de flottement doux pour le badge */
        @keyframes floatBadge {
          0%, 100% {
            transform: translateY(0px) rotate(3deg);
          }
          50% {
            transform: translateY(-8px) rotate(-3deg);
          }
        }

        /* Animation du reflet de brillance au survol (Shine) */
        @keyframes shine {
          100% {
            transform: translateX(100%);
          }
        }

        .animate-float-badge {
          animation: floatBadge 5s ease-in-out infinite;
        }
      `}</style>

      {/* En-tête de section */}
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold tracking-widest text-primary uppercase backdrop-blur-md">
          <Tag className="h-3.5 w-3.5" />
          Exclusive Deals
        </div>
        <h2 className="font-display text-4xl leading-tight sm:text-5xl md:text-6xl">
          PROMOTIONS <span className="bg-gradient-to-r from-primary via-amber-300 to-primary bg-clip-text text-transparent">OF THE WEEK</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
          Handcrafted Italian taste at an unbeatable price. Grab these offers before they expire.
        </p>
      </div>

      {/* Grille des promotions */}
      <div className="mt-14 grid gap-8 lg:grid-cols-2">
        {promos.map((p) => (
          <article
            key={p.title}
            className="group relative flex flex-col justify-end overflow-hidden rounded-[2.5rem] border border-white/10 bg-surface shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_20px_50px_-15px_rgba(255,193,7,0.2)]"
          >
            {/* 1. Image de fond avec zoom fluide */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                width={900}
                height={520}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              {/* Overlay en dégradé noir pour assurer un contraste parfait */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
            </div>

            {/* 2. Reflet lumineux traversant au survol (Shine Effect) */}
            <div className="pointer-events-none absolute inset-0 z-10 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 ease-in-out group-hover:translate-x-full" />

            {/* 3. Badge en lévitation dans le coin supérieur */}
            <div className="animate-float-badge absolute right-6 top-6 z-20">
              <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-primary font-display text-2xl font-bold text-primary-foreground shadow-xl shadow-primary/40 ring-4 ring-background/50 backdrop-blur-md">
                {p.badge}
                {/* Petit éclat derrière le badge */}
                <div className="absolute -inset-1 -z-10 rounded-full bg-primary/30 blur-md" />
              </div>
            </div>

            {/* 4. Contenu textuel & CTA */}
            <div className="relative z-20 p-8 sm:p-10">
              {/* Sous-titre promo */}
              <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-primary uppercase">
                <Sparkles className="h-3 w-3" />
                {p.subtitle}
              </span>

              {/* Titre */}
              <h3 className="mt-2 font-display text-3xl tracking-wide text-foreground transition-colors duration-300 group-hover:text-primary sm:text-4xl">
                {p.title}
              </h3>

              {/* Description */}
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground/90 sm:text-base">
                {p.text}
              </p>

              {/* Ligne d'action (Bouton dynamique au survol) */}
              <div className="mt-6 flex items-center gap-3">
                <a
                  href="#menu"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-2.5 text-sm font-bold tracking-wider text-white backdrop-blur-md transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/30"
                >
                  <span>{p.cta}</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
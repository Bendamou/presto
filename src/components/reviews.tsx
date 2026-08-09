import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote, Sparkles } from "lucide-react";
import r1 from "@/assets/review-1.jpg";
import r2 from "@/assets/review-2.jpg";
import r3 from "@/assets/review-3.jpg";

const reviews = [
  {
    img: r1,
    name: "Amelia Hart",
    role: "Regular Customer",
    text: "Ordered at 7pm on a Friday and it still arrived in 35 minutes, box warm and the crust perfectly blistered. The Diavola is now a weekly ritual in our flat.",
  },
  {
    img: r2,
    name: "Daniel Okafor",
    role: "Food Enthusiast",
    text: "I've eaten pizza across Naples and this holds its own. Proper dough, honest toppings, and the delivery team is always polite even in the rain.",
  },
  {
    img: r3,
    name: "Tom Whitfield",
    role: "Local Resident",
    text: "The second-pizza discount means our student house orders here every match night. Great value and the drinks-as-a-gift thing is a lovely touch.",
  },
];

export function Reviews() {
  const [i, setI] = useState(0);
  const go = (d: number) => setI((v) => (v + d + reviews.length) % reviews.length);

  return (
    <section id="reviews" className="relative mx-auto max-w-5xl px-4 py-24 md:px-8">
      {/* En-tête de section */}
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold tracking-widest text-primary uppercase backdrop-blur-sm">
          <Sparkles className="h-3.5 w-3.5" />
          Testimonials
        </div>
        <h2 className="font-display text-4xl leading-tight sm:text-5xl md:text-6xl">
          GUEST <span className="bg-gradient-to-r from-primary via-amber-300 to-primary bg-clip-text text-transparent">REVIEWS</span>
        </h2>
        <p className="mx-auto mt-4 max-w-md text-base text-muted-foreground sm:text-lg">
          Don't just take our word for it — discover why our community loves every bite.
        </p>
      </div>

      {/* Conteneur principal du slider (Glassmorphism de luxe) */}
      <div className="relative mt-14 overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] shadow-2xl backdrop-blur-xl">
        {/* Grand guillemet décoratif en arrière-plan */}
        <Quote className="pointer-events-none absolute right-8 top-8 -z-0 h-36 w-36 text-primary/[0.07] md:right-12 md:top-12 md:h-48 md:w-48" />

        {/* Halo lumineux subtil sous l'avis */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-10 -left-10 -z-0 h-64 w-64 rounded-full bg-primary/10 blur-[80px]"
        />

        <div
          className="relative z-10 flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${i * 100}%)` }}
        >
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="flex w-full shrink-0 flex-col items-center gap-8 p-8 text-center sm:p-12 md:flex-row md:gap-12 md:p-16 md:text-left"
            >
              {/* Photo de profil avec contour lumineux */}
              <div className="relative shrink-0">
                <img
                  src={r.img}
                  alt={r.name}
                  loading="lazy"
                  width={512}
                  height={512}
                  className="h-28 w-28 rounded-full object-cover ring-4 ring-primary/40 shadow-xl transition-transform duration-500 hover:scale-105 md:h-36 md:w-36"
                />
                <div className="absolute -inset-1 -z-10 rounded-full bg-primary/20 blur-md" />
              </div>

              {/* Contenu de l'avis */}
              <div className="flex flex-col items-center md:items-start">
                {/* 5 Étoiles de notation */}
                <div className="flex gap-1 text-primary">
                  {[...Array(5)].map((_, idx) => (
                    <Star
                      key={idx}
                      className="h-5 w-5 fill-primary text-primary"
                    />
                  ))}
                </div>

                {/* Commentaire client */}
                <blockquote className="mt-4 text-base leading-relaxed text-foreground/90 sm:text-lg md:text-xl">
                  "{r.text}"
                </blockquote>

                {/* Nom & Rôle */}
                <figcaption className="mt-6">
                  <div className="font-display text-2xl tracking-wide text-primary">
                    {r.name}
                  </div>
                  <div className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                    {r.role}
                  </div>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>

      {/* Contrôles de navigation */}
      <div className="mt-10 flex items-center justify-center gap-6">
        {/* Bouton Précédent */}
        <button
          aria-label="Previous review"
          onClick={() => go(-1)}
          className="group grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/5 text-foreground transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/30 active:scale-95"
        >
          <ChevronLeft className="h-6 w-6 transition-transform duration-300 group-hover:-translate-x-0.5" />
        </button>

        {/* Indicateurs / Dots cliquables */}
        <div className="flex items-center gap-2.5">
          {reviews.map((r, idx) => (
            <button
              key={r.name}
              onClick={() => setI(idx)}
              aria-label={`Go to review by ${r.name}`}
              className={`h-2.5 rounded-full transition-all duration-500 ${
                idx === i
                  ? "w-8 bg-primary shadow-sm shadow-primary/50"
                  : "w-2.5 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        {/* Bouton Suivant */}
        <button
          aria-label="Next review"
          onClick={() => go(1)}
          className="group grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/5 text-foreground transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/30 active:scale-95"
        >
          <ChevronRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-0.5" />
        </button>
      </div>
    </section>
  );
}
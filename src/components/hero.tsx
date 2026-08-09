import { useEffect, useState } from "react";
import { Flame, Beef, Leaf, Pizza, ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.mp4";
import heroBgMobile from "@/assets/hero-bg-mobile.mp4";
import heroPoster from "@/assets/hero-poster.jpg";
import heroPizza from "@/assets/hero-pizza.png";
import { useReveal } from "@/hooks/use-reveal";

const features = [
  {
    icon: Flame,
    title: "Wood-Fired Cooking",
    description: "Authentic wood-fired cooking for a rich smoky flavor and perfect crust.",
  },
  {
    icon: Beef,
    title: "Tender & Juicy Products",
    description: "Our charcoal cooking locks in moisture, keeping every bite tender and juicy.",
  },
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    description: "Prepared daily using fresh, carefully selected ingredients.",
  },
  {
    icon: Pizza,
    title: "Perfectly Cooked",
    description: "Crispy outside, soft inside, cooked to perfection in a traditional charcoal oven.",
  },
];

export function Hero() {
  const { ref: imageRef, visible: imageVisible } = useReveal<HTMLDivElement>(0.2);
  const { ref: featuresRef, visible: featuresVisible } = useReveal<HTMLDivElement>(0.15);
  const [videoSrc, setVideoSrc] = useState<string | null>(null);

  useEffect(() => {
    // Respect data-saver and reduced-motion: stay on the poster image only.
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection
      ?.saveData;
    if (reduced || saveData) return;
    const mobile = window.matchMedia("(max-width: 767px)").matches;
    setVideoSrc(mobile ? heroBgMobile : heroBg);
  }, []);

  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-16 md:pt-44 md:pb-24">
      {/* Styles inline pour les animations CSS */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-14px);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-spin-pizza {
          animation: spin-slow 24s linear infinite;
        }
      `}</style>

      {/* Background Image de secours */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center opacity-40 scale-105 transition-transform duration-1000"
        style={{ backgroundImage: `url(${heroPoster})` }}
      />

      {/* Background Video */}
      {videoSrc && (
        <video
          key={videoSrc}
          src={videoSrc}
          poster={heroPoster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          disablePictureInPicture
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover object-center opacity-70"
        />
      )}

      {/* Overlay dégradé multi-couches pour une lecture optimale */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-background/80 via-background/50 to-background/95" />
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-60" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        {/* Main hero content: headline + pizza image */}
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div className="text-center lg:text-left">
            {/* Badge supérieur */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold tracking-widest text-primary backdrop-blur-md uppercase">
              <Sparkles className="h-3.5 w-3.5 animate-pulse" />
              Artisan Pizzeria & Charcoal Oven
            </div>

            <h1 className="font-display text-5xl leading-[0.92] text-foreground sm:text-6xl md:text-7xl lg:text-[5.25rem]">
              Authentic{" "}
              <span className="bg-gradient-to-r from-primary via-amber-300 to-primary bg-clip-text text-transparent">
                Italian Taste
              </span>{" "}
              <span className="inline-block hover:scale-110 transition-transform duration-300" aria-label="Italy">
                🇮🇹
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-lg text-lg font-normal leading-relaxed text-muted-foreground sm:text-xl lg:mx-0">
              Wood-Fired Pizza • Fresh Homemade Pasta • Gourmet Charcoal Burgers. Prepared with passion every single day.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-start">
              <a
                href="#menu"
                className="btn-yellow group relative inline-flex items-center gap-3 rounded-full px-9 py-4 text-lg font-bold tracking-wide shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/40 active:scale-95"
              >
                <span>GO TO THE MENU</span>
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Section Image Pizza Animée */}
          <div
            ref={imageRef}
            data-visible={imageVisible}
            className="reveal relative mx-auto aspect-square w-full max-w-lg cursor-pointer select-none"
          >
            {/* Conteneur externe : Flottement (float) + Zoom au survol */}
            <div className="animate-float relative z-10 h-full w-full transition-transform duration-500 ease-out hover:scale-105 hover:rotate-1">
              {/* Conteneur interne : Rotation continue fluide */}
              <div className="animate-spin-pizza flex h-full w-full items-center justify-center">
                <img
                  src={heroPizza}
                  alt="Premium wood-fired pizza"
                  className="h-full w-full p-15 object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.65)]"
                />
              </div>
            </div>

            {/* Halos de chaleur multicouches derrière la pizza */}
            <div
              aria-hidden="true"
              className="absolute inset-[12%] z-0 rounded-full bg-gradient-to-tr from-amber-500/25 to-primary/30 blur-[90px] animate-pulse transition-all duration-700"
              style={{ animationDuration: "5s" }}
            />
            <div
              aria-hidden="true"
              className="absolute inset-[25%] z-0 rounded-full bg-orange-600/15 blur-[60px]"
            />
          </div>
        </div>

        {/* Premium feature cards */}
        <div
          ref={featuresRef}
          className="mt-20 grid gap-5 sm:grid-cols-2 xl:grid-cols-4"
        >
          {features.map((feature, i) => (
            <div
              key={feature.title}
              data-visible={featuresVisible}
              className="reveal group relative flex flex-col items-center rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-6 text-center shadow-xl shadow-black/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:bg-white/[0.09] hover:shadow-2xl hover:shadow-primary/10 sm:items-start sm:text-left"
              style={{ transitionDelay: `${120 + i * 90}ms` }}
            >
              {/* Lueur subtile en bordure haute de la carte au survol */}
              <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/0 to-transparent transition-all duration-500 group-hover:via-primary/70" />

              <div className="mb-4 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-primary/40 bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:border-primary group-hover:bg-primary/20 group-hover:shadow-[0_0_25px_-5px_rgba(255,193,7,0.45)]">
                <feature.icon className="h-6 w-6" strokeWidth={1.75} />
              </div>

              <h3 className="font-display text-lg tracking-wide text-foreground group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
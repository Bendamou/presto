import video from "@/assets/pizza-oven.mp4";
import { Flame, Sparkles } from "lucide-react";

export function VideoSection() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 py-24 md:px-8">
      {/* En-tête de section */}
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold tracking-widest text-primary uppercase backdrop-blur-sm">
          <Sparkles className="h-3.5 w-3.5" />
          Behind The Scenes
        </div>
        <h2 className="font-display text-4xl leading-tight sm:text-5xl md:text-6xl">
          WATCH HOW WE <span className="bg-gradient-to-r from-primary via-amber-300 to-primary bg-clip-text text-transparent">COOK PIZZA</span>
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-base text-muted-foreground sm:text-lg">
          Step into our kitchen and see the authentic Neapolitan technique in action inside our traditional charcoal oven.
        </p>
      </div>

      {/* Conteneur vidéo cinématique */}
      <div className="relative mt-14">
        {/* Halo de lumière d'ambiance derrière l'écran (Effet feu de bois) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-10 top-1/2 -z-10 h-64 w-64 -translate-y-1/2 rounded-full bg-primary/15 blur-[90px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 top-1/2 -z-10 h-64 w-64 -translate-y-1/2 rounded-full bg-orange-600/10 blur-[90px]"
        />

        {/* Cadre vidéo Glassmorphic */}
        <div className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-2 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:border-primary/40 hover:shadow-[0_20px_50px_-10px_rgba(255,193,7,0.25)] sm:p-3">
          {/* Lueur supérieure au survol */}
          <div className="absolute inset-x-12 top-0 z-20 h-px bg-gradient-to-r from-transparent via-primary/0 to-transparent transition-all duration-500 group-hover:via-primary/70" />

          {/* Vidéo principale */}
          <div className="relative overflow-hidden rounded-[2rem] bg-black">
            <video
              src={video}
              className="aspect-video w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              autoPlay
              playsInline
              loop
              muted
            />

            {/* Dégradé subtil en bas de vidéo pour le badge */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            {/* Badge d'authenticité technique en surimpression */}
            <div className="absolute bottom-6 left-6 z-10 hidden sm:flex items-center gap-3 rounded-full border border-white/15 bg-black/50 px-5 py-2.5 backdrop-blur-md">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/20 text-primary">
                <Flame className="h-4 w-4 fill-primary" />
              </div>
              <div className="text-left leading-tight">
                <div className="font-display text-sm tracking-wider text-white">
                  450°C WOOD-FIRED OVEN
                </div>
                <div className="text-[11px] font-medium tracking-wide text-white/70">
                  Traditional 90-Second Artisan Bake
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
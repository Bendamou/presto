import pizzaLoop from "@/assets/rotating-pizza.webm";
import burgerLoop from "@/assets/burger-floating.webm";
import tacosLoop from "@/assets/tacos-signature.webm";
import { Sparkles } from "lucide-react";

const dishes = [
  { src: pizzaLoop, name: "PIZZA NAPOLITANA", note: "Melted cheese • pepperoni • basil" },
  { src: burgerLoop, name: "SIGNATURE BURGER", note: "Toasted bun • dripping cheese • grilled patty" },
  { src: tacosLoop, name: "SIGNATURE TACOS", note: "Grilled meat • cheese • salsa • sour cream" },
];

export function RotatingDishes() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 md:px-8">
      {/* En-tête de section Premium */}
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold tracking-widest text-primary uppercase backdrop-blur-sm">
          <Sparkles className="h-3.5 w-3.5" />
          Chef's Selection
        </div>
        <h2 className="font-display text-4xl leading-tight md:text-5xl lg:text-6xl">
          OUR <span className="bg-gradient-to-r from-primary via-amber-300 to-primary bg-clip-text text-transparent">SIGNATURE</span> DISHES
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
          Fresh out of the wood-fired oven — take a full 360° look around before you taste.
        </p>
      </div>

      {/* Grille des plats */}
      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {dishes.map((d) => (
          <figure
            key={d.name}
            className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent shadow-xl backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_15px_40px_-10px_rgba(255,193,7,0.25)]"
          >
            {/* Lueur supérieure animée au survol */}
            <div className="absolute inset-x-8 top-0 z-20 h-px bg-gradient-to-r from-transparent via-primary/0 to-transparent transition-all duration-500 group-hover:via-primary/70" />

            {/* Conteneur de la vidéo (bord à bord sans padding) */}
            <div className="relative aspect-square w-full overflow-hidden">
              <video
                src={d.src}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                disablePictureInPicture
                aria-label={`${d.name} rotating 360 degrees`}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Dégradé de transition pour fondre la vidéo dans la carte */}
              <div className="absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-background to-transparent" />
            </div>

            {/* Zone de texte */}
            <figcaption className="relative z-20 flex flex-col items-center px-6 pb-8 pt-2 text-center">
              <h3 className="font-display text-2xl tracking-wide text-foreground transition-colors duration-300 group-hover:text-primary">
                {d.name}
              </h3>
              <p className="mt-2 text-sm font-medium tracking-wide text-muted-foreground/80">
                {d.note}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
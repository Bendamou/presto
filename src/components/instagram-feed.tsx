import { Instagram, Heart, MessageCircle, Play, Sparkles, ExternalLink } from "lucide-react";
// Vous pouvez remplacer ces assets par vos vraies vidéos verticales (Reels / TikTok)
import reel1 from "@/assets/insta1.webm";
import reel2 from "@/assets/burger-floating.webm";
import reel3 from "@/assets/tacos-signature.webm";
import reel4 from "@/assets/insta2.mp4";
import reel5 from "@/assets/insta3.mp4";
import reel6 from "@/assets/insta4.mp4";
import reel7 from "@/assets/insta6.mp4";
import reel8 from "@/assets/insta5.mp4";

const reels = [
  {
    id: 1,
    video: reel1,
    views: "14.2K",
    likes: "1,240",
    comments: "48",
    caption: "La Diavola sort tout juste du four 🔥🍕 #prestoberkane",
  },
  {
    id: 2,
    video: reel2,
    views: "22.8K",
    likes: "2,150",
    comments: "95",
    caption: "Le secret de notre Signature Burger 🍔🧀 #foodporn",
  },
  {
    id: 3,
    video: reel3,
    views: "18.5K",
    likes: "1,890",
    comments: "62",
    caption: "Tacos gratiné maison : qui valide ? 🌮 #berkanefood",
  },
  {
    id: 4,
    video: reel4,
    views: "31.4K",
    likes: "3,420",
    comments: "140",
    caption: "450°C dans le four à bois traditionnel 🇮🇹 #artisan",
  },
  {
    id: 5,
    video: reel5,
    views: "31.4K",
    likes: "3,420",
    comments: "140",
    caption: "450°C dans le four à bois traditionnel 🇮🇹 #artisan",
  },
  {
    id: 6,
    video: reel6,
    views: "31.4K",
    likes: "3,420",
    comments: "140",
    caption: "450°C dans le four à bois traditionnel 🇮🇹 #artisan",
  },
  {
    id: 7,
    video: reel7,
    views: "31.4K",
    likes: "3,420",
    comments: "140",
    caption: "450°C dans le four à bois traditionnel 🇮🇹 #artisan",
  },
  {
    id: 8,
    video: reel8,
    views: "31.4K",
    likes: "3,420",
    comments: "140",
    caption: "450°C dans le four à bois traditionnel 🇮🇹 #artisan",
  },
];

export function InstagramFeed() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-24 md:px-8">
      {/* En-tête de section */}
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold tracking-widest text-primary uppercase backdrop-blur-sm">
          <Sparkles className="h-3.5 w-3.5" />
          Social Vibes
        </div>

        <h2 className="font-display text-4xl leading-tight sm:text-5xl md:text-6xl">
          SUIVEZ-NOUS SUR <span className="bg-gradient-to-r from-primary via-amber-300 to-primary bg-clip-text text-transparent">INSTAGRAM</span>
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
          Identifiez <span className="font-semibold text-foreground">@prestoberkane</span> sur vos Reels et stories pour apparaître sur notre page.
        </p>
      </div>

      {/* Grille de Reels (Format vertical 9:16) */}
      <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
        {reels.map((item) => (
          <a
            key={item.id}
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block aspect-[9/16] overflow-hidden rounded-3xl border border-white/10 bg-surface shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20"
          >
            {/* Vidéo verticale */}
            <video
              src={item.video}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Overlay dégradé sombre en haut et en bas */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80 transition-opacity duration-300 group-hover:opacity-90" />

            {/* Badge icône Reel / Vues en haut à droite */}
            <div className="absolute right-4 top-4 z-10 flex items-center gap-1.5 rounded-full bg-black/40 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
              <Play className="h-3 w-3 fill-white" />
              <span>{item.views}</span>
            </div>

            {/* Logo Instagram en haut à gauche */}
            <div className="absolute left-4 top-4 z-10 grid h-8 w-8 place-items-center rounded-full bg-black/40 text-white backdrop-blur-md">
              <Instagram className="h-4 w-4" />
            </div>

            {/* Contenu Instagram au bas de la carte */}
            <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col justify-end p-5 text-white">
              {/* Stats (Likes & Commentaires) */}
              <div className="flex items-center gap-4 text-sm font-bold">
                <span className="flex items-center gap-1.5">
                  <Heart className="h-4 w-4 fill-white text-white" />
                  {item.likes}
                </span>
                <span className="flex items-center gap-1.5">
                  <MessageCircle className="h-4 w-4 fill-white text-white" />
                  {item.comments}
                </span>
              </div>

              {/* Légende */}
              <p className="mt-2.5 line-clamp-2 text-xs font-medium leading-relaxed text-white/85">
                {item.caption}
              </p>

              {/* Nom d'utilisateur */}
              <div className="mt-3 flex items-center gap-1.5 text-[11px] font-bold tracking-wider text-primary">
                <span>@PRESTOBERKANE</span>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Bouton d'action pour s'abonner */}
      <div className="mt-12 flex justify-center">
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-yellow group inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-sm font-bold tracking-wider uppercase shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/40"
        >
          <Instagram className="h-4 w-4" />
          <span>REJOINDRE LA COMMUNAUTÉ</span>
          <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </section>
  );
}
import { useState, useEffect } from "react";
import { X } from "lucide-react";

interface SplashProps {
  onComplete: () => void;
}

export function Splash({ onComplete }: SplashProps) {
  const [isFading, setIsFading] = useState(false);

  const handleClose = () => {
    setIsFading(true);
    setTimeout(() => {
      onComplete();
    }, 500); // Durée du fondu (fade-out)
  };

  // Bloquer le scroll tant que la vidéo est affichée
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div
      onClick={handleClose}
      className={`fixed inset-0 z-[9999] flex items-start justify-end bg-black cursor-pointer transition-opacity duration-500 ${
        isFading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Vidéo Mobile (< md) — 1 seule fois, fermeture automatique à la fin */}
      <video
        autoPlay
        muted
        playsInline
        onEnded={handleClose}
        className="absolute inset-0 h-full w-full object-cover md:hidden"
      >
        <source src="/Splach_Mobile.webm" type="video/webm" />
        <source src="/Splach_Mobile.mp4" type="video/mp4" />
      </video>

      {/* Vidéo PC (>= md) — 1 seule fois, fermeture automatique à la fin */}
      <video
        autoPlay
        muted
        playsInline
        onEnded={handleClose}
        className="absolute inset-0 hidden h-full w-full object-cover md:block"
      >
        <source src="/Splach.webm" type="video/webm" />
        <source src="/Splach.mp4" type="video/mp4" />
      </video>

      {/* Bouton pour fermer/passer (en haut à droite) */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleClose();
        }}
        aria-label="Passer la vidéo"
        className="relative z-10 m-6 flex items-center gap-1.5 rounded-full border border-white/20 bg-black/50 px-4 py-2 text-xs font-bold tracking-widest uppercase text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 sm:m-8"
      >
        <span>Passer</span>
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
import { Phone, ShoppingBasket } from "lucide-react";
import logo from "@/assets/presto_logo.jfif";

const links = ["MENU", "SHARES", "REVIEWS", "CONTACTS"];

export function SiteHeader({
  count,
  bump,
  onBasketClick,
}: {
  count: number;
  bump: boolean;
  onBasketClick: () => void;
}) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-background/75 backdrop-blur-xl transition-all duration-300 shadow-xl shadow-black/20">
      {/* 1. Ligne lumineuse subtile tout en haut (Accent Glow) */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-75" />

      {/* 2. Transition fondue vers le Hero (Fade-out shadow) */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-x-0 -bottom-6 h-6 bg-gradient-to-b from-background/80 to-transparent" 
      />

      <div className="mx-auto flex h-20 max-w-7xl items-center gap-6 px-4 md:px-8">
        {/* Brand / Logo */}
        <a href="#top" className="group flex items-center gap-3 transition-transform duration-300 hover:scale-[1.02]">
          <div className="relative">
            <img
              src={logo}
              alt="Presto Berkane logo"
              className="h-11 w-11 rounded-full object-cover ring-2 ring-primary/40 transition-all duration-300 group-hover:ring-primary group-hover:shadow-[0_0_15px_-3px_rgba(255,193,7,0.5)]"
            />
          </div>
          <span className="font-display text-2xl leading-none tracking-wide text-foreground">
            PRESTO <span className="text-primary transition-colors group-hover:brightness-110">BERKANE</span>
          </span>
        </a>

        {/* Navigation Links */}
        <nav className="ml-8 hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="relative py-2 text-sm font-semibold tracking-widest text-muted-foreground transition-colors hover:text-primary after:absolute after:inset-x-0 after:bottom-0 after:h-[2px] after:origin-center after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {l}
            </a>
          ))}
        </nav>

        {/* Contact Phone Block */}
        <div className="ml-auto hidden items-center gap-3.5 border-l border-white/10 pl-6 md:flex">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/30">
            <Phone className="h-4 w-4" />
          </div>
          <div className="leading-tight">
            <a 
              href="tel:+212611242103" 
              className="block font-display text-lg tracking-wide text-foreground transition-colors hover:text-primary"
            >
              06 11 24 21 03
            </a>
            <button className="text-xs font-medium text-muted-foreground underline underline-offset-4 transition-colors hover:text-primary">
              order a call back
            </button>
          </div>
        </div>

        {/* Basket / Cart Button */}
        <button
          onClick={onBasketClick}
          className="group ml-auto flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.03] px-5 py-2.5 shadow-sm transition-all duration-300 hover:border-primary/60 hover:bg-primary/10 hover:shadow-[0_0_20px_-5px_rgba(255,193,7,0.3)] md:ml-6"
        >
          <ShoppingBasket 
            className={`h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110 ${
              bump ? "bounce-cart" : ""
            }`} 
          />
          <span className="font-display text-sm tracking-wider text-foreground">
            BASKET{" "}
            <span className={count > 0 ? "text-primary font-bold" : "text-muted-foreground"}>
              {count === 0 ? "(empty)" : `(${count})`}
            </span>
          </span>
        </button>
      </div>
    </header>
  );
}
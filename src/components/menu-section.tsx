import { useState } from "react";
import { ArrowLeft, ArrowRight, Sparkles, Plus } from "lucide-react";
import p1 from "@/assets/pizza-1.png";
import p2 from "@/assets/pizza-2.png";
import p3 from "@/assets/pizza-3.png";
import p4 from "@/assets/pizza-4.png";
import p5 from "@/assets/pizza-5.png";
import p6 from "@/assets/pizza-6.png";
import pastaImg from "@/assets/pasta-1.png";
import burgerImg from "@/assets/burger-1.png";
import tacosImg from "@/assets/tacos-frame.png";
import heroPizza from "@/assets/hero-pizza.png";
import pizzaLoop from "@/assets/Rotating-Pizza.webm";
import burgerLoop from "@/assets/rotating-burger.mp4";
import tacosLoop from "@/assets/rotating-tacos.mp4";

type Product = { name: string; ingredients: string; price: number; img: string };

const tabs = ["PIZZA", "PASTA", "BURGERS", "TACOS", "APPETIZER", "DRINKS", "DESSERTS"] as const;

const tabImages: Record<string, string> = {
  PIZZA: heroPizza,
  PASTA: pastaImg,
  BURGERS: burgerImg,
  TACOS: tacosImg,
  APPETIZER: p2,
  DRINKS: p4,
  DESSERTS: p6,
};

const tabVideos: Record<string, string | undefined> = {
  PIZZA: pizzaLoop,
  BURGERS: burgerLoop,
  TACOS: tacosLoop,
};

const catalog: Record<string, Product[][]> = {
  PIZZA: [
    [
      { name: "Margherita", ingredients: "Tomato, mozzarella, fresh basil, olive oil", price: 35, img: p1 },
      { name: "Quattro Formaggi", ingredients: "Mozzarella, gorgonzola, taleggio, parmesan", price: 67, img: p2 },
      { name: "Prosciutto Funghi", ingredients: "Ham, mushrooms, mozzarella, oregano", price: 55, img: p3 },
      { name: "Frutti di Mare", ingredients: "Prawns, mussels, garlic, parsley", price: 70, img: p4 },
      { name: "BBQ Chicken", ingredients: "Chicken, BBQ sauce, spring onion, cheddar", price: 67, img: p5 },
      { name: "Diavola", ingredients: "Spicy salami, chilli, mozzarella, basil", price: 55, img: p6 },
    ],
    [
      { name: "Napoli", ingredients: "Anchovies, capers, olives, tomato", price: 45, img: p1 },
      { name: "Truffle Bianca", ingredients: "Truffle cream, mozzarella, thyme", price: 70, img: p2 },
      { name: "Capricciosa", ingredients: "Ham, artichokes, mushrooms, olives", price: 60, img: p3 },
      { name: "Gamberi Piccanti", ingredients: "Prawns, chilli, lemon zest, rocket", price: 67, img: p4 },
      { name: "Smoky Ranch", ingredients: "Chicken, bacon, ranch, red onion", price: 65, img: p5 },
      { name: "Pepperoni Classic", ingredients: "Double pepperoni, mozzarella, tomato", price: 50, img: p6 },
    ],
  ],
  PASTA: [
    [
      { name: "Spaghetti Carbonara", ingredients: "Guanciale, egg yolk, pecorino, pepper", price: 55, img: pastaImg },
      { name: "Penne Arrabbiata", ingredients: "Tomato, chilli, garlic, basil", price: 45, img: pastaImg },
      { name: "Tagliatelle Bolognese", ingredients: "Slow-cooked beef ragu, parmesan", price: 60, img: pastaImg },
      { name: "Lasagna Classica", ingredients: "Beef ragu, bechamel, mozzarella", price: 65, img: pastaImg },
      { name: "Pesto Genovese", ingredients: "Basil pesto, pine nuts, green beans", price: 50, img: pastaImg },
      { name: "Gnocchi Quattro Formaggi", ingredients: "Potato gnocchi, four cheese cream", price: 55, img: pastaImg },
    ],
    [
      { name: "Seafood Linguine", ingredients: "Prawns, mussels, white wine, parsley", price: 70, img: pastaImg },
      { name: "Truffle Tagliolini", ingredients: "Truffle cream, mushrooms, thyme", price: 75, img: pastaImg },
      { name: "Ravioli Ricotta Spinach", ingredients: "Ricotta, spinach, sage butter", price: 55, img: pastaImg },
      { name: "Amatriciana", ingredients: "Pancetta, tomato, onion, pecorino", price: 50, img: pastaImg },
      { name: "Cacio e Pepe", ingredients: "Pecorino romano, black pepper", price: 48, img: pastaImg },
      { name: "Chicken Alfredo", ingredients: "Grilled chicken, cream, parmesan", price: 60, img: pastaImg },
    ],
  ],
  BURGERS: [
    [
      { name: "Classic Cheeseburger", ingredients: "Beef patty, cheddar, lettuce, tomato", price: 47, img: burgerImg },
      { name: "Double Smash", ingredients: "Two patties, double cheese, pickles", price: 67, img: burgerImg },
      { name: "Bacon BBQ", ingredients: "Bacon, BBQ sauce, crispy onion", price: 65, img: burgerImg },
      { name: "Spicy Chicken", ingredients: "Crispy chicken, chilli mayo, slaw", price: 47, img: burgerImg },
      { name: "Italiano Burger", ingredients: "Mozzarella, pesto, sun-dried tomato", price: 55, img: burgerImg },
      { name: "Veggie Burger", ingredients: "Chickpea patty, avocado, rocket", price: 45, img: burgerImg },
    ],
    [
      { name: "Truffle Mushroom", ingredients: "Beef, truffle mayo, mushrooms, swiss", price: 67, img: burgerImg },
      { name: "Blue Cheese Burger", ingredients: "Beef, gorgonzola, caramelised onion", price: 60, img: burgerImg },
      { name: "Presto Special", ingredients: "Beef, nduja, provola, basil mayo", price: 67, img: burgerImg },
      { name: "Crispy Fish Burger", ingredients: "Cod fillet, tartare sauce, lettuce", price: 50, img: burgerImg },
      { name: "Halloumi Burger", ingredients: "Grilled halloumi, pepper relish", price: 48, img: burgerImg },
      { name: "Kids Burger", ingredients: "Mini patty, cheese, fries", price: 37, img: burgerImg },
    ],
  ],
  TACOS: [
    [
      { name: "Classic Beef Tacos", ingredients: "Grilled beef, cheddar, salsa, sour cream", price: 45, img: tacosImg },
      { name: "Chicken Fajita Tacos", ingredients: "Marinated chicken, peppers, guacamole", price: 45, img: tacosImg },
      { name: "Pulled Pork Tacos", ingredients: "Slow-cooked pork, BBQ sauce, slaw", price: 50, img: tacosImg },
      { name: "Fish Tacos", ingredients: "Crispy cod, lime crema, cabbage", price: 55, img: tacosImg },
      { name: "Veggie Tacos", ingredients: "Roasted vegetables, feta, herb dressing", price: 40, img: tacosImg },
      { name: "Spicy Chorizo Tacos", ingredients: "Chorizo, jalapeño, chipotle mayo", price: 48, img: tacosImg },
    ],
    [
      { name: "Steak Tacos", ingredients: "Grilled steak, chimichurri, onions", price: 65, img: tacosImg },
      { name: "Shrimp Tacos", ingredients: "Garlic prawns, mango salsa, avocado", price: 60, img: tacosImg },
      { name: "Breakfast Tacos", ingredients: "Eggs, bacon, cheese, salsa verde", price: 38, img: tacosImg },
      { name: "Buffalo Chicken Tacos", ingredients: "Crispy chicken, buffalo sauce, ranch", price: 48, img: tacosImg },
      { name: "Mushroom Tacos", ingredients: "Sautéed mushrooms, garlic, truffle oil", price: 42, img: tacosImg },
      { name: "Nacho Tacos", ingredients: "Beef, nacho cheese, jalapeños, salsa", price: 50, img: tacosImg },
    ],
  ],
  APPETIZER: [
    [
      { name: "Garlic Bread", ingredients: "Sourdough, garlic butter, parsley", price: 20, img: p2 },
      { name: "Bruschetta", ingredients: "Tomato, basil, olive oil, ciabatta", price: 25, img: p1 },
      { name: "Mozzarella Sticks", ingredients: "Breaded mozzarella, marinara dip", price: 30, img: p3 },
      { name: "Chicken Wings", ingredients: "Six wings, smoky glaze, celery", price: 35, img: p5 },
      { name: "Olive Mix", ingredients: "Marinated olives, herbs, lemon", price: 18, img: p4 },
      { name: "Caprese Salad", ingredients: "Buffalo mozzarella, tomato, basil", price: 32, img: p6 },
    ],
    [
      { name: "Arancini", ingredients: "Risotto balls, mozzarella heart", price: 30, img: p2 },
      { name: "Focaccia", ingredients: "Rosemary, sea salt, olive oil", price: 22, img: p1 },
      { name: "Calamari", ingredients: "Crispy squid, aioli, lemon", price: 40, img: p4 },
      { name: "Nduja Croquettes", ingredients: "Spicy sausage, potato, herbs", price: 35, img: p6 },
      { name: "Rocket Parmesan", ingredients: "Rocket, parmesan shavings, balsamic", price: 28, img: p3 },
      { name: "Loaded Fries", ingredients: "Fries, cheese sauce, bacon bits", price: 30, img: p5 },
    ],
  ],
  DRINKS: [
    [
      { name: "Classic Cola", ingredients: "Chilled 0.5L bottle", price: 12, img: p1 },
      { name: "Lemonade", ingredients: "Fresh lemon, mint, sparkling water", price: 15, img: p2 },
      { name: "Orange Juice", ingredients: "Freshly squeezed, 0.3L", price: 18, img: p4 },
      { name: "Iced Latte", ingredients: "Espresso, milk, ice", price: 20, img: p3 },
      { name: "Craft Lager", ingredients: "Local Oxford brewery, 0.33L", price: 25, img: p5 },
      { name: "Still Water", ingredients: "Mineral water, 0.5L", price: 10, img: p6 },
    ],
    [
      { name: "Berry Smoothie", ingredients: "Strawberry, blueberry, yoghurt", price: 22, img: p2 },
      { name: "Espresso", ingredients: "Double shot, Italian roast", price: 14, img: p3 },
      { name: "Ginger Ale", ingredients: "Spiced ginger, lime", price: 15, img: p1 },
      { name: "House Red", ingredients: "Chianti, glass 175ml", price: 35, img: p6 },
      { name: "House White", ingredients: "Pinot Grigio, glass 175ml", price: 35, img: p4 },
      { name: "Peach Iced Tea", ingredients: "Black tea, peach, lemon", price: 16, img: p5 },
    ],
  ],
  DESSERTS: [
    [
      { name: "Tiramisu", ingredients: "Mascarpone, coffee, cocoa", price: 30, img: p2 },
      { name: "Nutella Pizza", ingredients: "Sweet dough, nutella, hazelnuts", price: 35, img: p1 },
      { name: "Panna Cotta", ingredients: "Vanilla cream, berry coulis", price: 28, img: p4 },
      { name: "Cannoli", ingredients: "Ricotta, candied orange, pistachio", price: 25, img: p3 },
      { name: "Lemon Sorbet", ingredients: "Sicilian lemon, mint leaf", price: 20, img: p6 },
      { name: "Brownie", ingredients: "Dark chocolate, sea salt, ice cream", price: 28, img: p5 },
    ],
    [
      { name: "Affogato", ingredients: "Vanilla gelato, hot espresso", price: 24, img: p3 },
      { name: "Ricotta Cake", ingredients: "Ricotta, lemon, almond crumb", price: 26, img: p2 },
      { name: "Pistachio Gelato", ingredients: "Sicilian pistachio, two scoops", price: 22, img: p1 },
      { name: "Chocolate Calzone", ingredients: "Folded dough, chocolate, banana", price: 35, img: p6 },
      { name: "Berry Pavlova", ingredients: "Meringue, cream, seasonal berries", price: 30, img: p4 },
      { name: "Honey Pastry", ingredients: "Filo, walnut, honey syrup", price: 24, img: p5 },
    ],
  ],
};

export function MenuSection({ onAdd }: { onAdd: () => void }) {
  const [tab, setTab] = useState<string>("PIZZA");
  const [page, setPage] = useState(0);
  const pages = catalog[tab];
  const items = pages[page];

  const switchTab = (t: string) => {
    setTab(t);
    setPage(0);
  };

  return (
    <section
      id="menu"
      className="relative mx-auto w-full max-w-7xl overflow-hidden overflow-x-hidden px-4 py-16 sm:py-24 md:px-8"
    >
      {/* CSS universel anti-scrollbar */}
      <style>{`
        #menu, #menu * {
          scrollbar-width: none !important;
          -ms-overflow-style: none !important;
        }
        #menu::-webkit-scrollbar,
        #menu *::-webkit-scrollbar {
          display: none !important;
          width: 0px !important;
          height: 0px !important;
          background: transparent !important;
          -webkit-appearance: none !important;
        }
      `}</style>

      {/* En-tête de section Premium */}
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold tracking-widest text-primary uppercase backdrop-blur-sm">
          <Sparkles className="h-3.5 w-3.5" />
          Carte Traditionnelle
        </div>
        <h2 className="font-display text-4xl leading-tight sm:text-5xl md:text-6xl">
          NOTRE <span className="bg-gradient-to-r from-primary via-amber-300 to-primary bg-clip-text text-transparent">MENU</span>
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base text-muted-foreground sm:text-lg">
          Explorez nos créations au feu de bois et nos spécialités maison.
        </p>
      </div>

      {/* Navigation par Onglets : Retour à la ligne vertical et centré (Zéro scroll horizontal) */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:mt-10 sm:gap-3">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => switchTab(t)}
            className={`flex shrink-0 items-center gap-2 sm:gap-3 rounded-full border px-4 py-2 sm:px-5 sm:py-2.5 font-display text-sm sm:text-base tracking-widest transition-all duration-300 ${
              tab === t
                ? "border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/30 scale-105"
                : "border-white/10 bg-surface/70 text-muted-foreground hover:border-white/30 hover:bg-surface hover:text-foreground"
            }`}
          >
            <img
              src={tabImages[t]}
              alt={t.toLowerCase()}
              loading="lazy"
              width={1024}
              height={1024}
              className="h-6 w-6 sm:h-8 sm:w-8 rounded-full object-cover ring-1 ring-white/20"
            />
            {t}
          </button>
        ))}
      </div>

      {/* Vidéo 360° du plat signature */}
      {tabVideos[tab] && (
        <div
          key={`video-${tab}`}
          className="mt-8 sm:mt-12 flex flex-col items-center animate-[fade-in_.6s_ease-out]"
        >
          <video
            src={tabVideos[tab]}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            disablePictureInPicture
            aria-label={`${tab.toLowerCase()} rotating 360 degrees`}
            className="w-full max-w-xs sm:max-w-sm object-contain"
          />
          <div className="mt-2 sm:mt-4 text-center">
            <h3 className="font-display text-xl sm:text-2xl tracking-wide text-foreground">
              {tab === "PIZZA"
                ? "PIZZA PRESTO SIGNATURE"
                : tab === "BURGERS"
                  ? "SIGNATURE BURGER"
                  : "SIGNATURE TACOS"}
            </h3>
            <p className="mt-1 text-xs sm:text-sm font-medium tracking-wide text-muted-foreground/80">
              {tab === "PIZZA"
                ? "Melted cheese • pepperoni • fresh basil"
                : tab === "BURGERS"
                  ? "Toasted bun • dripping cheese • grilled patty"
                  : "Grilled meat • cheese • salsa • sour cream"}
            </p>
          </div>
        </div>
      )}

      {/* Grille des Plats : 1 colonne verticale sur mobile (grid-cols-1), 2 sur desktop */}
      <div
        key={`${tab}-${page}`}
        className="mt-10 sm:mt-14 grid w-full grid-cols-1 animate-[fade-in_.45s_ease-out] gap-4 sm:gap-6 md:grid-cols-2"
      >
        {items.map((item) => (
          <article
            key={item.name}
            className="group relative flex w-full min-w-0 flex-col items-center text-center sm:flex-row sm:items-center sm:text-left gap-4 sm:gap-5 overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-surface/80 p-5 sm:p-6 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-2xl"
          >
            {/* Trait lumineux au survol */}
            <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/0 to-transparent transition-all duration-500 group-hover:via-primary/70" />

            {/* Image en haut et centrée sur mobile */}
            <div className="relative shrink-0">
              <img
                src={item.img}
                alt={item.name}
                loading="lazy"
                width={700}
                height={700}
                className="h-24 w-24 sm:h-20 sm:w-20 md:h-28 md:w-28 rounded-full object-cover ring-2 ring-primary/30 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3"
              />
              <div className="absolute -inset-1 -z-10 rounded-full bg-primary/20 blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>

            {/* Zone de texte verticale sur mobile */}
            <div className="w-full min-w-0 flex-1">
              <h3 className="font-display text-xl sm:text-2xl tracking-wide text-foreground transition-colors duration-200 group-hover:text-primary">
                {item.name}
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-muted-foreground/90">
                {item.ingredients}
              </p>

              {/* Prix et bouton en bas sur une ligne complète */}
              <div className="mt-4 sm:mt-5 flex w-full items-center justify-between gap-3 border-t border-white/5 pt-3.5 sm:pt-3">
                <span className="font-display text-xl sm:text-2xl font-extrabold text-primary">
                  {item.price}{" "}
                  <span className="text-xs sm:text-sm font-semibold tracking-wide text-muted-foreground">
                    DH
                  </span>
                </span>
                <button
                  onClick={onAdd}
                  className="btn-yellow inline-flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold tracking-wider uppercase shadow-md shadow-primary/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/40 active:scale-95 sm:px-5 sm:py-2.5"
                >
                  <Plus className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> AJOUTER
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-10 sm:mt-12 flex items-center justify-center gap-4 sm:gap-6">
        <button
          aria-label="Previous page"
          onClick={() => setPage((p) => Math.max(0, p - 1))}
          disabled={page === 0}
          className="group grid h-10 w-10 sm:h-12 sm:w-12 place-items-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground disabled:opacity-30 disabled:pointer-events-none"
        >
          <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:-translate-x-0.5" />
        </button>
        <span className="font-display text-base sm:text-lg tracking-wide text-foreground">
          {page + 1} <span className="text-muted-foreground">/ {pages.length}</span>
        </span>
        <button
          aria-label="Next page"
          onClick={() => setPage((p) => Math.min(pages.length - 1, p + 1))}
          disabled={page === pages.length - 1}
          className="group grid h-10 w-10 sm:h-12 sm:w-12 place-items-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground disabled:opacity-30 disabled:pointer-events-none"
        >
          <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
        </button>
      </div>
    </section>
  );
}
export interface ProductDetail {
  id: number;
  slug: string;
  name: string;
  chapter: string;
  tagline: string;
  descriptionLines: string[];
  price: string;
  numericPrice: number;
  imageSrc: string;
  bgSrc: string;
  graphicSrc: string;
  thumbnails: string[];
  storyText: string[];
  details: {
    gsm: string;
    fit: string;
    material: string;
    care: string;
  };
}

export const PRODUCTS_DATA: Record<string, ProductDetail> = {
  "the-fractured-core": {
    id: 1,
    slug: "the-fractured-core",
    name: "THE FRACTURED CORE",
    chapter: "CHAPTER I : AWAKENING",
    tagline: "FRAGMENTED, YET UNBROKEN.",
    descriptionLines: [
      "A core split by chaos.",
      "A mind forged in fire.",
      "Identity is not given,",
      "it is carved."
    ],
    price: "₹2,499.00",
    numericPrice: 2499,
    imageSrc: "/images/products/1.png",
    bgSrc: "/images/products/bg1.png",
    graphicSrc: "/images/products/1.png",
    thumbnails: [
      "/images/products/1.png",
    ],
    storyText: [
      "The Fractured Core represents the moment everything breaks — your illusions, your past, your old self.",
      "But within that fracture, the real you begins to take shape. This piece is a mark of that unseen transformation.",
      "Broken. Rebuilt. Revolutionary."
    ],
    details: {
      gsm: "240 GSM Heavyweight Fabric",
      fit: "Signature Oversized Silhouette",
      material: "100% Combed Luxury Cotton",
      care: "Machine wash cold inside out. Do not iron directly on graphics."
    }
  },
  "the-halo-of-fracture": {
    id: 2,
    slug: "the-halo-of-fracture",
    name: "THE HALO OF FRACTURE",
    chapter: "CHAPTER I : AWAKENING",
    tagline: "EVEN PURITY MUST SHATTER TO REMEMBER IT WAS ALIVE.",
    descriptionLines: [
      "Light shattered into form.",
      "A crown born from survival.",
      "Purity is not innocence,",
      "it is endurance."
    ],
    price: "₹2,499.00",
    numericPrice: 2499,
    imageSrc: "/images/products/2.png",
    bgSrc: "/images/products/bg2.png",
    graphicSrc: "/images/products/2.png",
    thumbnails: [
      "/images/products/2.png",
    ],
    storyText: [
      "Even purity must shatter to remember it was alive. The Halo of Fracture captures the delicate boundary between devastation and enlightenment.",
      "Emblazoned with sacred geometry and crimson accents, it stands as a testament to those who wear their scars like a holy crown.",
      "Pure. Shattered. Sacred."
    ],
    details: {
      gsm: "240 GSM Heavyweight Fabric",
      fit: "Signature Oversized Silhouette",
      material: "100% Combed Luxury Cotton",
      care: "Machine wash cold inside out. Do not iron directly on graphics."
    }
  },
  "every-scar-tells-a-story": {
    id: 3,
    slug: "every-scar-tells-a-story",
    name: "EVERY SCAR TELLS A STORY",
    chapter: "CHAPTER I : AWAKENING",
    tagline: "EVERY SCAR IS A SENTENCE IN THE STORY OF WHO WE BECAME.",
    descriptionLines: [
      "Memories etched in cotton.",
      "Pain rendered into art.",
      "Wear your journey",
      "without apology."
    ],
    price: "₹2,499.00",
    numericPrice: 2499,
    imageSrc: "/images/products/3.png",
    bgSrc: "/images/products/bg3.png",
    graphicSrc: "/images/products/3.png",
    thumbnails: [
      "/images/products/3.png",
    ],
    storyText: [
      "Every scar is a sentence in the story of who we became. This garment acts as a canvas for the battles fought in quiet solitude.",
      "Designed with raw minimalist graphics and stone-toned pigments that age with character and intensity.",
      "Raw. Authentic. Unstoppable."
    ],
    details: {
      gsm: "240 GSM Heavyweight Fabric",
      fit: "Signature Oversized Silhouette",
      material: "100% Combed Luxury Cotton",
      care: "Machine wash cold inside out. Do not iron directly on graphics."
    }
  },
  "the-awakened-one": {
    id: 4,
    slug: "the-awakened-one",
    name: "THE AWAKENED ONE",
    chapter: "CHAPTER I : AWAKENING",
    tagline: "A SYMBOL OF WHO YOU'RE BECOMING.",
    descriptionLines: [
      "The slumber is over.",
      "Rising from the embers.",
      "A symbol of power,",
      "unbound and true."
    ],
    price: "₹2,499.00",
    numericPrice: 2499,
    imageSrc: "/images/products/4.png",
    bgSrc: "/images/products/bg4.png",
    graphicSrc: "/images/products/4.png",
    thumbnails: [
      "/images/products/4.png",
    ],
    storyText: [
      "The Awakened One marks the final ascension of Chapter I. It represents the realization of strength after enduring relentless trial.",
      "Crafted with bold crimson iconography and deep shadow black fabric, built for those who lead the new wave.",
      "Awakened. Sovereign. Unbound."
    ],
    details: {
      gsm: "240 GSM Heavyweight Fabric",
      fit: "Signature Oversized Silhouette",
      material: "100% Combed Luxury Cotton",
      care: "Machine wash cold inside out. Do not iron directly on graphics."
    }
  }
};

export const SLUG_MAP: Record<string, string> = {
  "fracture-core": "the-fractured-core",
  "bone-white": "the-halo-of-fracture",
  "sand-dune": "every-scar-tells-a-story",
  "bloodstone": "the-awakened-one",
  "1": "the-fractured-core",
  "2": "the-halo-of-fracture",
  "3": "every-scar-tells-a-story",
  "4": "the-awakened-one"
};

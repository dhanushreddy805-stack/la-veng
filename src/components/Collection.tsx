import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  price: number;
  image_url: string;
  slug: string;
}

const DUMMY_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "THE FRACTURED CORE",
    price: 2499,
    image_url: "/images/products/1.png",
    slug: "the-fractured-core",
  },
  {
    id: 2,
    name: "THE HALO OF FRACTURE",
    price: 2499,
    image_url: "/images/products/2.png",
    slug: "the-halo-of-fracture",
  },
  {
    id: 3,
    name: "EVERY SCAR TELLS A STORY",
    price: 2499,
    image_url: "/images/products/3.png",
    slug: "every-scar-tells-a-story",
  },
  {
    id: 4,
    name: "THE AWAKENED ONE",
    price: 2499,
    image_url: "/images/products/4.png",
    slug: "the-awakened-one",
  },
];

const ProductCard = ({ product, index }: { product: Product; index: number }) => {
  const isWide = index === 0 || index === 3;
  return (
    <Link
      href={`/product/${product.slug}`}
      data-testid={`product-card-${product.slug}`}
      className={`group relative text-left overflow-hidden rounded-3xl border border-white/10 hover:border-[#8B0000]/60 shadow-xl hover:shadow-[0_15px_35px_rgba(139,0,0,0.3)] transition-all duration-500 block ${
        isWide ? "md:col-span-7" : "md:col-span-5"
      }`}
    >
      <div className="overflow-hidden aspect-[4/5] md:aspect-[3/4] relative rounded-3xl">
        <Image
          src={product.image_url}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain p-4 group-hover:scale-105 transition-all duration-[1500ms] ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-[#050505]/20 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-700" />
        <div className="absolute top-6 left-6 font-mono-accent text-white/60 text-[10px]">
          №{String(index + 1).padStart(2, "0")} / 04
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex items-end justify-between">
          <div>
            <h3 className="font-serif text-2xl md:text-3xl text-white leading-tight mb-2 uppercase">
              {product.name}
            </h3>
            <p className="font-mono-accent text-white/60">
              ₹{product.price.toLocaleString("en-IN")}.00
            </p>
          </div>
          <div className="bg-[#8B0000]/0 group-hover:bg-[#8B0000] text-white border border-white/20 group-hover:border-[#8B0000] w-12 h-12 flex items-center justify-center transition-all duration-500 rounded-full">
            <ArrowRight size={16} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
};

const Collection = () => {
  return (
    <section
      id="collection"
      data-testid="collection-section"
      className="relative bg-transparent py-24 md:py-40"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex items-end justify-between mb-16 md:mb-24 border-b border-white/10 pb-10">
          <div>
            <div className="font-mono-accent text-[#8B0000] mb-6">
              The Essential Collection
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tighter max-w-xl leading-[1.05]">
              Four pieces.
              <br />
              <span className="italic text-white/60">One awakening.</span>
            </h2>
          </div>
          <div className="hidden md:block max-w-xs text-right">
            <p className="text-white/50 text-sm leading-relaxed">
              Each garment is a fragment of a longer story —
              constructed in 240 GSM classic cotton, designed to
              outlive seasons.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
          {DUMMY_PRODUCTS.map((p, i) => (
            <ProductCard
              key={p.id}
              product={p}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collection;

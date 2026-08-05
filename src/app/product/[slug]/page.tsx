import { notFound } from "next/navigation";
import ProductDetailClient from "@/components/ProductDetailClient";
import { PRODUCTS_DATA, SLUG_MAP } from "@/data/products";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductPage({ params }: PageProps) {
  const resolvedParams = await params;
  const rawSlug = resolvedParams?.slug;
  
  if (!rawSlug) {
    notFound();
  }

  // Resolve alias slug if mapped
  const resolvedSlug = SLUG_MAP[rawSlug] || rawSlug;
  const product = PRODUCTS_DATA[resolvedSlug];

  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
}

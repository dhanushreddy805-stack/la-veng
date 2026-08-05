import type { Metadata } from "next";
import { Outfit, Cormorant_Garamond, Space_Mono } from "next/font/google";
import "../globals.css";
import CartDrawer from "@/components/CartDrawer";

const outfit = Outfit({ 
  subsets: ["latin"], 
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700"]
});

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"], 
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"]
});

const spaceMono = Space_Mono({ 
  subsets: ["latin"], 
  variable: "--font-space-mono",
  weight: ["400", "700"]
});

export const metadata: Metadata = {
  title: "LA VENGEANCE | Luxury Heavyweight Garments",
  description: "Editorial Garment Collection & Storytelling",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.variable} ${cormorant.variable} ${spaceMono.variable} font-sans bg-[#050505] text-[#FAFAFA] antialiased selection:bg-[#8B0000] selection:text-white`}>
        {children}
        <CartDrawer />
      </body>
    </html>
  );
}

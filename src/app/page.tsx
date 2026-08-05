import IntroSplash from "@/components/IntroSplash";
import Header from "@/components/Header";
import StorefrontHero from "@/components/StorefrontHero";
import Collection from "@/components/Collection";
import About from "@/components/About";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] bg-[url('/images/HeroBG.png')] bg-fixed bg-cover bg-center bg-no-repeat text-[#FAFAFA] font-sans antialiased relative">
      <IntroSplash />
      <BackgroundEffects />
      <Header />
      <StorefrontHero />
      <Collection />
      <About />
      <Newsletter />
      <Footer />
    </main>
  );
}

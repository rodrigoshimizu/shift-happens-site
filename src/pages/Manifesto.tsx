import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Manifesto = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Manifesto SHIFT | Líderes em Movimento";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Manifesto SHIFT — o movimento de líderes seniores que escolhem construir o próximo ciclo com propósito, pares e densidade."
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 md:pt-32 pb-20">
        <section className="container mx-auto px-6 max-w-5xl">
          <header className="mb-12 md:mb-16 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-4 text-balance">
              Manifesto SHIFT
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              O que move líderes em movimento.
            </p>
          </header>

          <div className="rounded-2xl overflow-hidden shadow-xl bg-section-alt">
            <video
              src="/shift-manifesto.mov"
              controls
              playsInline
              preload="metadata"
              className="w-full h-auto block"
            >
              Seu navegador não suporta vídeo HTML5.
            </video>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Manifesto;

import heroBg from "@/assets/hero-bg.webp";
import { ChevronDown } from "lucide-react";
import ApplyFormDialog from "./ApplyFormDialog";
import { useState } from "react";

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-foreground">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className={`w-full h-full object-cover transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          onLoad={() => setLoaded(true)}
        />
        <div className="absolute inset-0 bg-foreground/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground leading-tight animate-fade-in-up max-w-4xl mx-auto text-balance">
          Seu ciclo pós-carreira merece curadoria.
        </h1>
        <p className="mt-6 text-base md:text-lg text-primary-foreground/70 max-w-xl mx-auto animate-fade-in-up [animation-delay:400ms] opacity-0">
          O SHIFT conecta líderes em movimento a pares, repertório e novas oportunidades
        </p>
        <div className="mt-10 animate-fade-in-up [animation-delay:600ms] opacity-0">
          <ApplyFormDialog>
            <button className="inline-block bg-secondary text-secondary-foreground px-8 py-4 rounded-lg text-base font-bold hover:opacity-90 transition-opacity shadow-lg">
              Join SHIFT
            </button>
          </ApplyFormDialog>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-primary-foreground/50">
        <ChevronDown size={32} />
      </div>
    </section>);

};

export default HeroSection;
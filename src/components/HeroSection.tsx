import heroBg from "@/assets/hero-bg.jpg";
import { ChevronDown } from "lucide-react";
import ApplyFormDialog from "./ApplyFormDialog";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground leading-tight animate-fade-in-up max-w-4xl mx-auto text-balance">
          Líderes em Movimento
        </h1>
        <p className="mt-4 text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in-up [animation-delay:200ms] opacity-0">
          A jornada da sua pós-carreira começa aqui.
        </p>
        <p className="mt-6 text-base md:text-lg text-primary-foreground/60 max-w-xl mx-auto animate-fade-in-up [animation-delay:400ms] opacity-0">
          O SHIFT é a plataforma de relacionamento para executivos seniores que buscam reinvenção, propósito e continuidade produtiva.
        </p>
        <div className="mt-10 animate-fade-in-up [animation-delay:600ms] opacity-0">
          <ApplyFormDialog>
            <button className="inline-block bg-accent text-accent-foreground px-8 py-4 rounded-lg text-base font-bold hover:opacity-90 transition-opacity shadow-lg">
              Aplique para o SHIFT
            </button>
          </ApplyFormDialog>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-primary-foreground/50">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default HeroSection;

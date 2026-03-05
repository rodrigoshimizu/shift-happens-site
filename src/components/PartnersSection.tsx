import logoHsm from "@/assets/logo_hsm.webp";
import logoSingularity from "@/assets/logo_singularity.webp";
import logoLearning from "@/assets/logo_learning.png";
import logoAnima from "@/assets/logo_anima.png";
import logoCordonBleu from "@/assets/logo_le_cordon_bleu.png";
import logoB2BMatch from "@/assets/logo_b2bmatch.png";
const partners = [
  { name: "HSM", url: "https://www.hsm.com.br", logo: logoHsm },
  { name: "Singularity Brazil", url: "https://www.singularityubrazil.com", logo: logoSingularity },
  { name: "Learning Village", url: "https://learningvillage.com.br", logo: logoLearning },
  { name: "Ânima", url: "https://animaeducacao.com.br", logo: logoAnima },
  { name: "Le Cordon Bleu", url: "https://www.cordonbleu.edu", logo: logoCordonBleu },
  { name: "B2B Match", url: "https://b2bmatch.com.br", logo: logoB2BMatch },
];



const PartnersSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">
          Complementado por um ecossistema de parceiros
        </h2>
        <p className="text-muted-foreground mb-12 text-sm">
          Instituições que fortalecem a experiência SHIFT.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 max-w-3xl mx-auto items-center justify-items-center">
          {partners.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-70 hover:opacity-100 hover:scale-105 transition-all duration-300 flex items-center gap-2 text-foreground"
              title={p.name}
            >
              <img
                src={p.logo}
                alt={p.name}
                className="max-h-12 max-w-[150px] w-auto object-contain"
              />
              {p.name === "Learning Village" && (
                <span className="text-foreground font-bold text-sm leading-tight tracking-tight">
                  LEARNING<br />VILLAGE
                </span>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;

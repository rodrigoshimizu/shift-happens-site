import { ExternalLink } from "lucide-react";

const partners = [
  { name: "HSM", url: "https://www.hsm.com.br", logo: "/partners/hsm.png" },
  { name: "Singularity Brazil", url: "https://www.singularityubrazil.com", logo: "/partners/singularity.png" },
  { name: "Learning Village", url: "https://learningvillage.com.br", logo: "/partners/learningvillage.png" },
  { name: "Ânima", url: "https://animaeducacao.com.br", logo: "/partners/anima.png" },
  { name: "Le Cordon Bleu", url: "https://www.cordonbleu.edu", logo: "/partners/lecordonbleu.png" },
  { name: "B2B Match", url: "https://b2bmatch.com.br", logo: "/partners/b2bmatch.png" },
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

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {partners.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center gap-3 px-6 py-6 bg-secondary rounded-xl border border-border hover:border-accent/40 hover:bg-accent/5 transition-all duration-300"
            >
              <img
                src={p.logo}
                alt={`Logo ${p.name}`}
                className="w-10 h-10 object-contain rounded-md"
              />
              <span className="text-sm font-bold text-secondary-foreground flex items-center gap-1.5">
                {p.name}
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-60 transition-opacity" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;

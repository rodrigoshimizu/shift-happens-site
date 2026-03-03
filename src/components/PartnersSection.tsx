import { ExternalLink } from "lucide-react";

const partners = [
  { name: "HSM", url: "https://www.hsm.com.br" },
  { name: "Singularity Brazil", url: "https://www.singularityubrazil.com" },
  { name: "Learning Village", url: "https://learningvillage.com.br" },
  { name: "Ânima", url: "https://animaeducacao.com.br" },
  { name: "Le Cordon Bleu", url: "https://www.cordonbleu.edu" },
  { name: "B2B Match", url: "https://b2bmatch.com.br" },
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
              className="group flex items-center justify-center gap-2 px-6 py-5 bg-secondary rounded-xl text-sm font-bold text-secondary-foreground border border-border hover:border-accent/40 hover:bg-accent/5 transition-all duration-300"
            >
              {p.name}
              <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-60 transition-opacity" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;

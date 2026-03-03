const partners = [
  "HSM", "Singularity Brazil", "Learning Village", "Ânima", "Le Cordon Bleu", "B2B Match"
];

const PartnersSection = () => {
  return (
    <section className="py-20 bg-section-alt">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">
          Complementado por um ecossistema de parceiros
        </h2>
        <p className="text-muted-foreground mb-12 text-sm">
          Instituições que fortalecem a experiência SHIFT.
        </p>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12 max-w-3xl mx-auto">
          {partners.map((p) => (
            <div
              key={p}
              className="px-6 py-3 bg-secondary rounded-lg text-sm font-semibold text-secondary-foreground"
            >
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;

const ProblemSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-section-alt">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8">
          A Cegueira da Pós-Carreira
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          Executivos de alta liderança frequentemente enfrentam uma "cegueira inconsciente" em relação ao que vem depois da carreira corporativa tradicional. Muitos não sabem como navegar essa transição de forma produtiva e significativa.
        </p>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
          O pós-carreira não é aposentadoria — é uma fase de <strong className="text-foreground">reinvenção e continuidade produtiva</strong>, onde experiência se transforma em propósito.
        </p>
        <div className="mt-12 w-16 h-px bg-border mx-auto" />
      </div>
    </section>
  );
};

export default ProblemSection;

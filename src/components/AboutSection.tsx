const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-12 text-balance">
          O SHIFT
        </h2>

        <div className="space-y-6 text-base md:text-lg leading-relaxed text-muted-foreground">
          <p>
            Existe um momento na trajetória de líderes seniores que nenhum headhunter resolve, nenhum MBA prepara e nenhuma rede genérica atende.
          </p>
          <p>
            É o momento entre ciclos. Quando a experiência acumulada é enorme, mas o próximo passo ainda não tem forma. Quando o que falta não é competência — é contexto, pares e oportunidade com densidade.
          </p>
          <p className="text-foreground font-semibold">
            O SHIFT nasceu para esse momento. Um espaço curado, confidencial, onde executivos em movimento encontram quem entende, quem desafia e quem abre portas que não estão no mercado aberto.
          </p>
          <p>
            Não somos uma comunidade aberta. Não somos um evento. Não somos um marketplace de contatos.
          </p>
          <p className="text-foreground font-bold text-lg md:text-xl">
            Somos um clube com critérios. Um ecossistema com intenção. Um ponto de encontro para quem quer construir — não apenas transitar.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

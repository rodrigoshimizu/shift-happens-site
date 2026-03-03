const steps = [
{ number: "01", title: "Aplicação Online", desc: "Formulário com dados básicos, LinkedIn e perguntas de contexto. ~15 min." },
{ number: "02", title: "Checagem de Fit", desc: "Conversa de 20-30 min para validar alinhamento com valores e critérios." },
{ number: "03", title: "Referência", desc: "Validação opcional quando necessário para risco/reputação." },
{ number: "04", title: "Matching de Jornada", desc: "Alinhamento com os pilares conforme seu estágio profissional." },
{ number: "05", title: "Padrinhos", desc: "Cada novo membro recebe mentores do Founders Circle." },
{ number: "06", title: "Onboarding", desc: "Acordo de comunidade e orientação sobre como extrair valor." }];


const ProcessSection = () => {
  return (
    <section id="process" className="py-24 md:py-32 bg-section-alt bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground text-center mb-4">
          Processo de Admissão
        </h2>
        <p className="text-muted-foreground text-center text-lg mb-16 max-w-xl mx-auto">
          Transparência em cada etapa da sua jornada até o SHIFT.
        </p>

        <div className="space-y-6">
          {steps.map((step, i) =>
          <div
            key={i}
            className="flex gap-6 items-start group">
            
              <div className="text-3xl font-extrabold text-accent/30 group-hover:text-accent transition-colors shrink-0 w-12">
                {step.number}
              </div>
              <div className="border-b border-border pb-6 flex-1">
                <h3 className="text-lg font-bold text-foreground mb-1">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default ProcessSection;
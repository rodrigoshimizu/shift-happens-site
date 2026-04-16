import { ArrowRightLeft, Briefcase, Users, Shield, Target } from "lucide-react";

const profiles = [
{ icon: ArrowRightLeft, bold: "Está em transição", text: " e busca redirecionamento com clareza" },
{ icon: Briefcase, bold: "Busca mais autonomia", text: " e novos caminhos de atuação" },
{ icon: Users, bold: "Prepara-se para conselhos", text: ", advisory ou mentoria" },
{ icon: Shield, bold: "Quer transformar experiência", text: " em contribuição relevante" },
{ icon: Target, bold: "Deseja seguir gerando impacto", text: " com mais propósito" },
{ icon: Users, bold: "Busca conexões qualificadas", text: " e aprendizado contínuo" }];


const ForWhoSection = () => {
  return (
    <section id="for-who" className="py-24 md:py-32 bg-section-alt">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground text-center mb-4">
          O SHIFT é para líderes que…
        </h2>
        <p className="text-muted-foreground text-center text-lg mb-16 max-w-xl mx-auto">
          querem construir o próximo ciclo com mais intenção, conexão e impacto.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {profiles.map((item, i) =>
          <div
            key={i}
            className="flex items-start gap-4 bg-background rounded-xl p-6 border border-border hover:border-accent/30 transition-colors">
            
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-accent" />
              </div>
              <p className="text-foreground font-medium">
                {item.bold && <span className="font-bold">{item.bold}</span>}
                {item.text}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default ForWhoSection;
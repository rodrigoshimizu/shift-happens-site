import { Users, BookOpen, TrendingUp } from "lucide-react";

const pillars = [
{
  name: "SHIFT Connect",
  color: "text-shift-connect",
  borderColor: "border-shift-connect",
  bgColor: "bg-shift-connect/10",
  icon: Users,
  description:
  "Relacionamento com densidade. Conexões reais com pares, mentores e oportunidades em um ambiente de confiança e generosidade."
},
{
  name: "SHIFT Learning",
  color: "text-shift-learning",
  borderColor: "border-shift-learning",
  bgColor: "bg-shift-learning/10",
  icon: BookOpen,
  description:
  "Desenvolvimento contínuo. Acesso a conteúdo, workshops e mentoria especializada para a fase de pós-carreira."
},
{
  name: "SHIFT Market",
  color: "text-shift-market",
  borderColor: "border-shift-market",
  bgColor: "bg-shift-market/10",
  icon: TrendingUp,
  description:
  "Conexão com oportunidades. Advisory, conselhos, consultoria e novos projetos que permitem continuar impactando o mercado."
}];


const PillarsSection = () => {
  return (
    <section id="pillars" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground text-center mb-4">
          Os Três Pilares
        </h2>
        <p className="text-muted-foreground text-center text-lg mb-16 max-w-xl mx-auto">O pós-carreira não é aposentadoria — é uma fase de reinvenção e continuidade produtiva, onde experiência se transforma em propósito.Um ecossistema completo para sua jornada de pós-carreira.


        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pillars.map((pillar) => <div
            key={pillar.name}
            className={`rounded-xl border-t-4 ${pillar.borderColor} bg-card p-8 hover:shadow-lg transition-shadow`}>
            
              <div className={`w-12 h-12 rounded-lg ${pillar.bgColor} flex items-center justify-center mb-6`}>
                <pillar.icon className={`w-6 h-6 ${pillar.color}`} />
              </div>
              <h3 className={`text-xl font-bold ${pillar.color} mb-3`}>
                {pillar.name}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default PillarsSection;
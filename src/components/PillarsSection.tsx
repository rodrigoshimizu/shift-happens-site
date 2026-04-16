import { Users, BookOpen, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const pillars = [
{
  name: "SHIFT Connect",
  color: "text-shift-connect",
  borderColor: "border-shift-connect",
  bgColor: "bg-shift-connect/10",
  icon: Users,
  href: "/shift-connect",
  description:
  "Conexões reais com pares, mentores e uma comunidade curada, construída sobre confiança, troca e generosidade."
},
{
  name: "SHIFT Learning",
  color: "text-shift-learning",
  borderColor: "border-shift-learning",
  bgColor: "bg-shift-learning/10",
  icon: BookOpen,
  href: "/shift-learning",
  description:
  "Desenvolvimento contínuo. Acesso a conteúdo, workshops e mentoria especializada para a fase de pós-carreira."
},
{
  name: "SHIFT Expertise",
  color: "text-shift-expertise",
  borderColor: "border-shift-expertise",
  bgColor: "bg-shift-expertise/10",
  icon: TrendingUp,
  href: "/shift-expertise",
  description:
  "Conexão com oportunidades. Advisory, conselhos, consultoria e novos projetos que permitem continuar impactando o mercado."
}];


const PillarsSection = () => {
  return (
    <section id="pillars" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground text-center mb-4">

Nossos Pilares</h2>
        <p className="text-muted-foreground text-center text-lg mb-16 max-w-2xl mx-auto">
          A experiência não termina com o cargo, ela ganha novas formas de impacto.
          <br /><br />
          O SHIFT reúne conexões qualificadas, aprendizagem contínua e novas oportunidades para apoiar esse próximo ciclo.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pillars.map((pillar) => (
            <Link
              to={pillar.href}
              key={pillar.name}
              className={`rounded-xl border-t-4 ${pillar.borderColor} bg-card p-8 hover:shadow-lg transition-all group`}
            >
              <div className={`w-12 h-12 rounded-lg ${pillar.bgColor} flex items-center justify-center mb-6`}>
                <pillar.icon className={`w-6 h-6 ${pillar.color}`} />
              </div>
              <h3 className={`text-xl font-bold ${pillar.color} mb-3`}>
                {pillar.name}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {pillar.description}
              </p>
              <span className={`inline-flex items-center gap-1 text-sm font-semibold ${pillar.color} group-hover:gap-2 transition-all`}>
                Saiba mais <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>);

};

export default PillarsSection;
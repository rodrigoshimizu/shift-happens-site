import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TrendingUp, Briefcase, Building2, Rocket } from "lucide-react";

const ShiftExpertise = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleApplyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById('apply');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-20 md:py-28 bg-shift-expertise/5">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <div className="w-16 h-16 rounded-2xl bg-shift-expertise/10 flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-8 h-8 text-shift-expertise" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              SHIFT <span className="text-shift-expertise">Expertise</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Conexão com oportunidades. Advisory, conselhos, consultoria e novos projetos que permitem continuar impactando o mercado.
            </p>
          </div>
        </section>

        {/* O que é */}
        <section className="py-20 md:py-24">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-8">
              O que é o SHIFT Expertise?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              O SHIFT Expertise é o pilar de oportunidades do ecossistema SHIFT. Ele conecta executivos experientes a posições de advisory, assentos em conselhos, projetos de consultoria e outras formas de atuação que valorizam a senioridade.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              É a ponte entre a experiência acumulada ao longo de décadas e as empresas que precisam exatamente desse tipo de conhecimento estratégico para crescer e se transformar.
            </p>
          </div>
        </section>

        {/* Benefícios */}
        <section className="py-20 md:py-24 bg-card">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Como o Expertise amplia seu impacto
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Briefcase,
                  title: "Advisory & Consultoria",
                  description: "Oportunidades de consultoria estratégica em empresas que buscam a experiência e visão de executivos seniores."
                },
                {
                  icon: Building2,
                  title: "Conselhos & Boards",
                  description: "Acesso a posições em conselhos consultivos e administrativos de empresas em diferentes estágios de maturidade."
                },
                {
                  icon: Rocket,
                  title: "Novos projetos",
                  description: "Conexão com startups, scale-ups e projetos inovadores que precisam de liderança experiente para acelerar resultados."
                }
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-border bg-background p-8">
                  <div className="w-12 h-12 rounded-lg bg-shift-expertise/10 flex items-center justify-center mb-5">
                    <item.icon className="w-6 h-6 text-shift-expertise" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-24">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Pronto para impactar o mercado?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Transforme sua experiência em novas oportunidades de atuação e impacto.
            </p>
            <a
              href="/#apply"
              onClick={handleApplyClick}
              className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Join SHIFT
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ShiftExpertise;

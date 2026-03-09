import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, MessageCircle, Handshake, Heart } from "lucide-react";

const ShiftConnect = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-20 md:py-28 bg-shift-connect/5">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <div className="w-16 h-16 rounded-2xl bg-shift-connect/10 flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-shift-connect" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              SHIFT <span className="text-shift-connect">Connect</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Relacionamento com densidade. Conexões reais com pares, mentores e oportunidades em um ambiente de confiança e generosidade.
            </p>
          </div>
        </section>

        {/* O que é */}
        <section className="py-20 md:py-24">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-8">
              O que é o SHIFT Connect?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              O SHIFT Connect é o pilar de comunidade do ecossistema SHIFT. Ele cria um espaço seguro e curado para executivos em transição de carreira se conectarem com pessoas que compartilham dos mesmos desafios, ambições e momento de vida.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Mais do que networking tradicional, o Connect promove vínculos genuínos — baseados em vulnerabilidade, troca de experiências e apoio mútuo — que se transformam em relações duradouras e oportunidades reais.
            </p>
          </div>
        </section>

        {/* Benefícios */}
        <section className="py-20 md:py-24 bg-card">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Como o Connect transforma sua jornada
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: MessageCircle,
                  title: "Encontros curados",
                  description: "Eventos presenciais e virtuais desenhados para promover conversas profundas e conexões significativas entre pares."
                },
                {
                  icon: Handshake,
                  title: "Rede de confiança",
                  description: "Acesso a uma comunidade exclusiva de executivos seniores com experiências complementares e disposição para colaborar."
                },
                {
                  icon: Heart,
                  title: "Suporte emocional",
                  description: "Um ambiente onde é seguro compartilhar desafios, dúvidas e aspirações — sem julgamentos, com empatia real."
                }
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-border bg-background p-8">
                  <div className="w-12 h-12 rounded-lg bg-shift-connect/10 flex items-center justify-center mb-5">
                    <item.icon className="w-6 h-6 text-shift-connect" />
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
              Pronto para se conectar?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Faça parte de uma comunidade que entende sua jornada e potencializa suas próximas conquistas.
            </p>
            <a
              href="/#apply"
              className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Aplique para o SHIFT
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ShiftConnect;

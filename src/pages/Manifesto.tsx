import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import founderAdriana from "@/assets/founder-adriana.jpg";
import founderRodrigo from "@/assets/founder-rodrigo.jpg";
import founderMarcelo from "@/assets/founder-marcelo.jpg";

const founders = [
  {
    name: "Adriana Viali",
    role: "CEO & Co-founder",
    image: founderAdriana,
  },
  {
    name: "Rodrigo Shimizu",
    role: "Co-founder",
    image: founderRodrigo,
  },
  {
    name: "Marcelo Boldrini",
    role: "Co-founder",
    image: founderMarcelo,
  },
];

const Manifesto = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Quem Somos | SHIFT — Líderes em Movimento";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Conheça a história, o manifesto e os founders do SHIFT — o ecossistema premium para líderes seniores em movimento."
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 md:pt-32 pb-20">
        {/* Header */}
        <section className="container mx-auto px-6 max-w-5xl">
          <header className="mb-16 md:mb-20 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-4 text-balance">
              Quem Somos
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              A história, o manifesto e as pessoas por trás do SHIFT.
            </p>
          </header>
        </section>

        {/* Origin Story */}
        <section className="py-12 md:py-16 bg-section-alt">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-8 text-balance">
              Como surgiu o SHIFT
            </h2>
            <div className="space-y-6 text-base md:text-lg leading-relaxed text-muted-foreground">
              <p>
                O SHIFT nasceu de uma constatação simples e desconfortável: faltava um espaço à altura dos líderes seniores que estão entre ciclos. Profissionais com décadas de experiência, repertório raro e ambição renovada — mas sem um ambiente que combinasse confidencialidade, curadoria e densidade real de relacionamento.
              </p>
              <p>
                A ideia surgiu nas conversas entre Adriana, Rodrigo e Marcelo, observando como executivos de alta senioridade frequentemente se encontravam isolados justamente no momento em que mais precisavam de pares para pensar o próximo movimento. Headhunters não resolvem esse momento. Comunidades abertas diluem a conversa. Eventos genéricos não geram contexto.
              </p>
              <p className="text-foreground font-semibold">
                Decidimos construir o que faltava: um ecossistema premium, por convite, onde líderes em transição encontram quem entende, quem desafia e quem abre portas que não estão no mercado aberto.
              </p>
              <p>
                Hoje, o SHIFT é um ponto de encontro intencional. Um clube com critérios. Um movimento de líderes em movimento.
              </p>
            </div>
          </div>
        </section>

        {/* Manifesto Video */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-10 md:mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4 text-balance">
                Manifesto SHIFT
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                O que move líderes em movimento.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl bg-section-alt">
              <video
                src="/shift-manifesto.mov"
                controls
                playsInline
                preload="metadata"
                className="w-full h-auto block"
              >
                Seu navegador não suporta vídeo HTML5.
              </video>
            </div>
          </div>
        </section>

        {/* Founders */}
        <section className="py-16 md:py-24 bg-section-alt">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4 text-balance">
                Founders
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Quem está à frente do movimento.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {founders.map((f) => (
                <article key={f.name} className="text-center">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg mb-5 bg-foreground/5">
                    <img
                      src={f.image}
                      alt={`Retrato de ${f.name}, ${f.role} do SHIFT`}
                      width={768}
                      height={896}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl md:text-2xl font-extrabold text-foreground">
                    {f.name}
                  </h3>
                  <p className="mt-1 text-sm md:text-base font-semibold text-muted-foreground">
                    {f.role}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Manifesto;

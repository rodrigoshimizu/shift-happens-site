import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, GraduationCap, Lightbulb, Target } from "lucide-react";

const ShiftLearning = () => {
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
        <section className="py-20 md:py-28 bg-shift-learning/5">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <div className="w-16 h-16 rounded-2xl bg-shift-learning/10 flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-8 h-8 text-shift-learning" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              SHIFT <span className="text-shift-learning">Learning</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Desenvolvimento contínuo. Acesso a conteúdo, workshops e mentoria especializada para a fase de pós-carreira.
            </p>
          </div>
        </section>

        {/* O que é */}
        <section className="py-20 md:py-24">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
              O que é o SHIFT Learning?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-1">
              Não é sobre voltar à sala de aula.<br /><br />É sobre aprender com relevância, troca qualificada e aplicação prática — a partir dos desafios reais de quem continua em movimento.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {"\n"}
            </p>
          </div>
        </section>

        {/* Benefícios */}
        <section className="py-20 md:py-24 bg-card">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Como o SHIFT Learning amplia seu repertório
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: GraduationCap,
                  title: "Workshops aplicados",
                  description: "Sessões práticas com especialistas em temas como governança, liderança, inovação, transformação digital e novas formas de atuação."
                },
                {
                  icon: Lightbulb,
                  title: "Mentoria especializada",
                  description: "Acesso a mentores experientes que já trilharam o caminho da transição e podem guiar sua jornada com clareza."
                },
                {
                  icon: Target,
                  title: "Conteúdo curado",
                  description: "Trilhas de aprendizado personalizadas com materiais selecionados para o momento e os objetivos de cada membro."
                }
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-border bg-background p-8">
                  <div className="w-12 h-12 rounded-lg bg-shift-learning/10 flex items-center justify-center mb-5">
                    <item.icon className="w-6 h-6 text-shift-learning" />
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
              Pronto para evoluir?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Invista no seu desenvolvimento contínuo com conteúdo e mentoria de alta qualidade.
            </p>
            <a
              href="/#apply"
              onClick={handleApplyClick}
              className="inline-block bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
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

export default ShiftLearning;

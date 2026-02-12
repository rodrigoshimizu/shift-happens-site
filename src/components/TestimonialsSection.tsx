import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "O SHIFT me ajudou a navegar minha transição com propósito. Encontrei pares que entendem meu momento e oportunidades que fazem sentido para minha experiência.",
    name: "Carlos M.",
    role: "Ex-VP de Operações, Indústria",
  },
  {
    quote: "Depois de 30 anos no mundo corporativo, o SHIFT me mostrou que o pós-carreira pode ser a fase mais produtiva e significativa da minha vida profissional.",
    name: "Ana R.",
    role: "Ex-Diretora Executiva, Serviços Financeiros",
  },
  {
    quote: "A qualidade das conexões e a generosidade da comunidade são incomparáveis. Aqui, todos estão genuinamente dispostos a contribuir.",
    name: "Roberto L.",
    role: "Ex-CEO, Tecnologia",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-section-alt">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground text-center mb-4">
          Depoimentos
        </h2>
        <p className="text-muted-foreground text-center text-lg mb-16 max-w-xl mx-auto">
          O que dizem os membros sobre a experiência SHIFT.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-background rounded-xl p-8 border border-border hover:shadow-md transition-shadow"
            >
              <Quote className="w-8 h-8 text-accent/30 mb-4" />
              <p className="text-foreground leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>
              <div>
                <p className="font-bold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

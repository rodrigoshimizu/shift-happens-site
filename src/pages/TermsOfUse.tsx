import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsOfUse = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-6 pt-28 pb-20 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
          Termos de Uso
        </h1>

        <div className="prose prose-sm max-w-none text-muted-foreground space-y-6">
          <p>
            Ao acessar e utilizar o site do SHIFT, você concorda com os seguintes termos e condições. Leia atentamente antes de continuar.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">1. Aceitação dos Termos</h2>
          <p>
            Ao acessar este site, você confirma que leu, entendeu e concorda em ficar vinculado a estes Termos de Uso. Caso não concorde, por favor, não utilize o site.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">2. Uso do Site</h2>
          <p>
            O site do SHIFT destina-se a fornecer informações sobre o programa e permitir que interessados realizem suas aplicações. Você concorda em utilizar o site apenas para fins legítimos e de acordo com estes termos.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">3. Propriedade Intelectual</h2>
          <p>
            Todo o conteúdo deste site, incluindo textos, imagens, logotipos, gráficos e design, é de propriedade do SHIFT ou de seus licenciadores e está protegido por leis de propriedade intelectual. É proibida a reprodução sem autorização prévia.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">4. Aplicações ao Programa</h2>
          <p>
            As informações fornecidas no formulário de aplicação devem ser verdadeiras e precisas. O SHIFT reserva-se o direito de recusar ou cancelar aplicações que contenham informações falsas ou enganosas.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">5. Limitação de Responsabilidade</h2>
          <p>
            O SHIFT não se responsabiliza por danos diretos, indiretos, incidentais ou consequentes decorrentes do uso ou da impossibilidade de uso deste site.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">6. Modificações</h2>
          <p>
            Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entram em vigor imediatamente após sua publicação no site. O uso continuado do site após alterações constitui aceitação dos novos termos.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">7. Lei Aplicável</h2>
          <p>
            Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. Qualquer disputa será submetida ao foro da comarca de São Paulo, SP.
          </p>

          <p className="text-xs text-muted-foreground/60 mt-12">
            Última atualização: Março de 2026
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfUse;

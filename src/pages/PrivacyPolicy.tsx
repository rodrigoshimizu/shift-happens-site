import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-6 pt-28 pb-20 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
          Política de Privacidade
        </h1>

        <div className="prose prose-sm max-w-none text-muted-foreground space-y-6">
          <p>
            A sua privacidade é importante para nós. Esta Política de Privacidade descreve como o SHIFT coleta, usa e protege as informações pessoais que você nos fornece.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">1. Informações Coletadas</h2>
          <p>
            Coletamos informações que você nos fornece diretamente ao preencher o formulário de aplicação, incluindo: nome, sobrenome, e-mail, celular, CEP, LinkedIn, informações profissionais e preferências de comunicação.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">2. Uso das Informações</h2>
          <p>As informações coletadas são utilizadas para:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Avaliar sua aplicação ao programa SHIFT;</li>
            <li>Entrar em contato sobre o processo seletivo;</li>
            <li>Enviar comunicações relevantes sobre o programa, caso autorizado;</li>
            <li>Melhorar nossos serviços e experiência do usuário.</li>
          </ul>

          <h2 className="text-xl font-semibold text-foreground mt-8">3. Compartilhamento de Dados</h2>
          <p>
            Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros para fins de marketing. Podemos compartilhar dados com parceiros operacionais estritamente necessários para a execução do programa.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">4. Segurança</h2>
          <p>
            Adotamos medidas técnicas e organizacionais adequadas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">5. Seus Direitos</h2>
          <p>
            Você tem o direito de acessar, corrigir, atualizar ou solicitar a exclusão de seus dados pessoais a qualquer momento. Para exercer esses direitos, entre em contato conosco.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8">6. Alterações</h2>
          <p>
            Esta política pode ser atualizada periodicamente. Recomendamos que você a revise regularmente para se manter informado sobre como protegemos suas informações.
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

export default PrivacyPolicy;

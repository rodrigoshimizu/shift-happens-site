import { Link } from "react-router-dom";
import logoShift from "@/assets/logo-shift.jpeg";

const footerLinks = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#about" },
  { label: "Comunidade", href: "#pillars" },
  { label: "Para Quem", href: "#for-who" },
  { label: "Processo", href: "#process" },
  { label: "Depoimentos", href: "#testimonials" },
];

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <img src={logoShift} alt="SHIFT" className="h-10" />
            <p className="text-muted-foreground text-sm mt-1">
              Líderes em Movimento
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} SHIFT. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="/privacidade" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Política de Privacidade
            </a>
            <a href="/termos" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

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
    <footer className="bg-foreground border-t border-primary-foreground/10 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <img src={logoShift} alt="SHIFT" className="h-8 brightness-0 invert" />
            <p className="text-primary-foreground/50 text-sm mt-1">
              Líderes em Movimento
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} SHIFT. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-xs text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

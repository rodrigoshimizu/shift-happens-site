import { Link, useLocation, useNavigate } from "react-router-dom";
import logoShift from "@/assets/logo-shift.jpeg";

const footerLinks = [
  { label: "Início", href: "/#hero" },
  { label: "Sobre", href: "/#about" },
  { label: "Pilares", href: "/#pillars" },
  { label: "Para Quem", href: "/#for-who" },
  { label: "Processo", href: "/#process" },
  { label: "Depoimentos", href: "/#testimonials" },
];

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const hash = href.split('#')[1];

    if (location.pathname === '/' && hash) {
      e.preventDefault();
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else if (hash) {
      e.preventDefault();
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <Link to="/" className="inline-flex flex-col leading-none">
            <img src={logoShift} alt="SHIFT" className="h-8 md:h-10 w-auto block" />
            <span className="mt-1 text-[10px] md:text-xs font-semibold tracking-wide text-muted-foreground text-center w-full whitespace-nowrap" style={{ fontSize: 'clamp(0.55rem, 1.6vw, 0.7rem)' }}>
              Líderes em Movimento
            </span>
          </Link>

          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
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
            <Link to="/privacidade" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Política de Privacidade
            </Link>
            <Link to="/termos" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

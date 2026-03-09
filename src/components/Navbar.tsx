import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import logoShift from "@/assets/logo-shift.jpeg";

const navItems = [
  { label: "Quem somos", href: "/#about" },
  { label: "Pilares", href: "/#pillars" },
  { label: "Para Quem", href: "/#for-who" },
  { label: "Processo", href: "/#process" },
  { label: "Depoimentos", href: "/#testimonials" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const hash = href.split('#')[1];
    
    if (location.pathname === '/' && hash) {
      // Se já estamos na home, previne o comportamento padrão e faz scroll suave
      e.preventDefault();
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else if (hash) {
      // Se estamos em outra página, navega para a home e depois faz scroll
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background shadow-sm"
          : "bg-background"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link to="/" onClick={() => {
          if (location.pathname === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}>
          <img src={logoShift} alt="SHIFT" className="h-8 md:h-10" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-base font-bold text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/#apply"
            onClick={(e) => handleNavClick(e, "/#apply")}
            className="bg-accent text-accent-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Aplique para o SHIFT
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border px-6 pb-6 animate-fade-in">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block py-3 text-base font-bold text-muted-foreground hover:text-foreground transition-colors"
              onClick={(e) => {
                handleNavClick(e, item.href);
                setMenuOpen(false);
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="/#apply"
            className="block mt-3 bg-accent text-accent-foreground px-5 py-2.5 rounded-lg text-sm font-semibold text-center hover:opacity-90 transition-opacity"
            onClick={(e) => {
              handleNavClick(e, "/#apply");
              setMenuOpen(false);
            }}
          >
            Aplique para o SHIFT
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

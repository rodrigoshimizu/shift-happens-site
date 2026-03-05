import logoHsm from "@/assets/logo_hsm.webp";
import logoSingularity from "@/assets/logo_singularity.webp";
import logoLearning from "@/assets/logo_learning.png";
import logoAnima from "@/assets/logo_anima.png";
import logoCordonBleu from "@/assets/logo_le_cordon_bleu.png";
const partners = [
  { name: "HSM", url: "https://www.hsm.com.br", logo: logoHsm },
  { name: "Singularity Brazil", url: "https://www.singularityubrazil.com", logo: logoSingularity },
  { name: "Learning Village", url: "https://learningvillage.com.br", logo: logoLearning },
  { name: "Ânima", url: "https://animaeducacao.com.br", logo: logoAnima },
  { name: "Le Cordon Bleu", url: "https://www.cordonbleu.edu", logo: logoCordonBleu },
  { name: "B2B Match", url: "https://b2bmatch.com.br", logo: null },
];

const B2BMatchLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 184.5 30" className="max-h-12 max-w-[150px] w-auto">
    <g>
      <path fill="currentColor" d="M48.64,14.41c.66-.33,1.21-.77,1.66-1.35.62-.8.93-1.71.93-2.71,0-.89-.25-1.69-.75-2.41s-1.18-1.27-2.05-1.68c-.87-.41-1.85-.62-2.94-.62h-8.03v18.72h8.64c1.19,0,2.24-.21,3.18-.62.93-.41,1.66-1,2.19-1.77.53-.77.79-1.69.79-2.76,0-1.28-.41-2.36-1.22-3.23-.63-.68-1.44-1.2-2.41-1.57ZM39.15,7.08h6.32c1.14,0,2.08.29,2.85.88.76.59,1.14,1.36,1.14,2.33,0,.68-.18,1.28-.54,1.8s-.84.94-1.45,1.24c-.61.3-1.27.46-2,.46h-6.32v-6.71ZM49.82,21.23c-.43.54-1.02.95-1.76,1.23-.74.29-1.58.43-2.51.43h-6.4v-7.66h6.88c.83,0,1.59.18,2.26.54.67.36,1.2.85,1.6,1.46.39.61.59,1.29.59,2.05s-.22,1.41-.65,1.95Z"/>
      <path fill="currentColor" d="M66.25,14.77c.41-.51.71-1.05.9-1.64s.28-1.25.28-2c0-1.08-.29-2.06-.88-2.95-.58-.89-1.37-1.61-2.37-2.14-1-.53-2.12-.8-3.37-.8s-2.37.26-3.37.78c-1,.52-1.8,1.22-2.4,2.11-.59.89-.89,1.88-.89,2.98h1.69c0-.79.22-1.52.65-2.18.43-.67,1.02-1.2,1.77-1.61.75-.41,1.59-.61,2.54-.61s1.75.2,2.5.59c.74.39,1.33.93,1.77,1.59.44.67.66,1.41.66,2.22,0,.72-.13,1.39-.39,2.02-.26.63-.82,1.29-1.67,1.97l-9.64,7.81-.03,1.43h13.45v-1.47h-10.9l8.14-6.59c.64-.51,1.17-1.02,1.57-1.53Z"/>
      <path fill="currentColor" d="M81.52,14.41c.66-.33,1.21-.77,1.66-1.35.62-.8.93-1.71.93-2.71,0-.89-.25-1.69-.75-2.41s-1.18-1.27-2.05-1.68c-.87-.41-1.85-.62-2.94-.62h-8.03v18.72h8.64c1.19,0,2.24-.21,3.18-.62.93-.41,1.66-1,2.19-1.77.53-.77.79-1.69.79-2.76,0-1.28-.41-2.36-1.22-3.23-.63-.68-1.44-1.2-2.41-1.57ZM72.03,7.08h6.32c1.14,0,2.08.29,2.85.88.76.59,1.14,1.36,1.14,2.33,0,.68-.18,1.28-.54,1.8s-.84.94-1.45,1.24c-.61.3-1.27.46-2,.46h-6.32v-6.71ZM82.71,21.23c-.43.54-1.02.95-1.76,1.23-.74.29-1.58.43-2.51.43h-6.4v-7.66h6.88c.83,0,1.59.18,2.26.54.67.36,1.2.85,1.6,1.46.39.61.59,1.29.59,2.05s-.22,1.41-.65,1.95Z"/>
      <polygon fill="currentColor" points="102.85 22.2 94.25 5.64 92.69 5.64 92.69 24.36 94.32 24.36 94.32 9.08 102.15 24.36 103.52 24.36 111.33 9.08 111.33 24.33 112.97 24.33 112.97 5.64 111.35 5.64 102.85 22.2"/>
      <path fill="currentColor" d="M122.44,5.64l-7.43,18.72h1.78l1.86-4.71h9.66l1.87,4.71h1.78l-7.43-18.72h-2.08ZM119.21,18.24l4.25-10.75,4.28,10.75h-8.53Z"/>
      <polygon fill="currentColor" points="130.5 7.1 138.02 7.1 138.02 24.36 139.69 24.36 139.69 7.1 147.21 7.1 147.21 5.64 130.5 5.64 130.5 7.1"/>
      <path fill="currentColor" d="M153.04,7.77c1.14-.7,2.57-1.05,4.29-1.05,1.98,0,3.58.46,4.8,1.38s2.05,2.17,2.5,3.74l1.73-.38c-.54-1.89-1.58-3.4-3.1-4.52-1.52-1.13-3.5-1.69-5.94-1.69-2.09,0-3.84.41-5.26,1.24-1.42.83-2.49,1.97-3.21,3.44s-1.08,3.15-1.08,5.07.36,3.61,1.08,5.07,1.79,2.61,3.21,3.44c1.42.83,3.17,1.24,5.26,1.24,2.44,0,4.42-.56,5.94-1.69,1.52-1.13,2.55-2.63,3.1-4.52l-1.73-.38c-.45,1.56-1.28,2.8-2.5,3.73-1.22.93-2.82,1.39-4.8,1.39-1.72,0-3.16-.35-4.31-1.06-1.16-.71-2.02-1.68-2.6-2.92-.58-1.24-.86-2.68-.84-4.3,0-1.62.3-3.05.88-4.3.58-1.25,1.44-2.22,2.58-2.92Z"/>
      <polygon fill="currentColor" points="182.81 5.64 182.81 14.27 170.66 14.27 170.66 5.64 168.99 5.64 168.99 24.36 170.66 24.36 170.66 15.73 182.81 15.73 182.81 24.36 184.5 24.36 184.5 5.64 182.81 5.64"/>
      <path fill="currentColor" d="M15,27.99c-2.2,1.28-4.77,2.01-7.5,2.01s-5.3-.73-7.5-2.01c4.48-2.6,7.5-7.44,7.5-12.99,0,5.55,3.02,10.39,7.5,12.99Z"/>
      <path fill="currentColor" d="M7.5,15C7.5,9.45,4.48,4.6,0,2.01,2.2.73,4.77,0,7.5,0s5.3.73,7.5,2.01c-4.48,2.59-7.5,7.44-7.5,12.99Z"/>
      <path fill="currentColor" d="M30,27.99c-2.2,1.28-4.77,2.01-7.5,2.01s-5.3-.73-7.5-2.01c4.48-2.6,7.5-7.44,7.5-12.99,0,5.55,3.02,10.39,7.5,12.99Z"/>
      <path fill="currentColor" d="M22.5,15c0-5.55-3.02-10.4-7.5-12.99,2.2-1.28,4.77-2.01,7.5-2.01s5.3.73,7.5,2.01c-4.48,2.59-7.5,7.44-7.5,12.99Z"/>
    </g>
  </svg>
);


const PartnersSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">
          Complementado por um ecossistema de parceiros
        </h2>
        <p className="text-muted-foreground mb-12 text-sm">
          Instituições que fortalecem a experiência SHIFT.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 max-w-3xl mx-auto items-center justify-items-center">
          {partners.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-70 hover:opacity-100 hover:scale-105 transition-all duration-300 flex items-center gap-2"
              title={p.name}
            >
              {p.name === "B2B Match" ? (
                <B2BMatchLogo />
              ) : (
                <img
                  src={p.logo!}
                  alt={p.name}
                  className="max-h-12 max-w-[150px] w-auto object-contain"
                />
              )}
              {p.name === "Learning Village" && (
                <span className="text-foreground font-bold text-sm leading-tight tracking-tight">
                  LEARNING<br />VILLAGE
                </span>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;

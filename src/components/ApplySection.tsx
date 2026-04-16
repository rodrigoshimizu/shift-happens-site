import ApplyFormDialog from "./ApplyFormDialog";

const ApplySection = () => {
  return (
    <section id="apply" className="py-24 md:py-32 bg-foreground">
      <div className="container mx-auto px-6 text-center max-w-2xl">
        <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
          Pronto para a sua próxima fase?
        </h2>
        <p className="text-primary-foreground/70 text-lg mb-10 leading-relaxed">
          Inicie sua aplicação e descubra como o SHIFT pode transformar sua jornada de pós-carreira em uma fase de propósito e impacto.
        </p>
        <ApplyFormDialog>
          <button className="inline-block bg-secondary text-secondary-foreground px-10 py-4 rounded-lg text-base font-bold hover:opacity-90 transition-opacity shadow-lg">
            Join SHIFT
          </button>
        </ApplyFormDialog>
      </div>
    </section>
  );
};

export default ApplySection;

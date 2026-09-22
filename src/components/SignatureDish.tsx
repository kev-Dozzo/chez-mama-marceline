import Button from './ui/Button';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';

const SIGNATURE_DISHES = ['Koki', 'Ndole Royal', 'Okok', 'Eru'];

export default function SignatureDish() {
  return (
    <section
      id="notre-cuisine"
      className="relative scroll-mt-24 overflow-hidden bg-forest py-24 sm:py-32"
    >
      <div className="pattern-diamonds absolute inset-0" aria-hidden="true" />
      <div
        className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-gold/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-gold/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <SectionHeading
            tone="dark"
            align="left"
            eyebrow="Notre cuisine"
            title="LES SAVEURS DE CHEZ MAMA MARCELINE"
          />
          <p className="mt-7 text-base leading-relaxed text-cream/85 sm:text-lg">
            Des recettes inspirées de notre patrimoine culinaire, préparées avec des ingrédients
            soigneusement sélectionnés.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {SIGNATURE_DISHES.map((name) => (
              <span
                key={name}
                className="rounded-full border border-gold/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-pale"
              >
                {name}
              </span>
            ))}
          </div>
          <Button href="#menu" variant="gold" className="mt-10">
            Découvrir notre menu
          </Button>
        </Reveal>

        <Reveal delay={140} className="lg:col-span-7">
          <div className="relative">
            <div
              className="absolute -right-4 -top-4 h-full w-full rounded-[2.5rem] border border-gold/40"
              aria-hidden="true"
            />
            <img
              src="/images/signature.jpg"
              alt="Composition des plats signature de Chez Mama Marceline : ndole, eru, koki et plantains"
              loading="lazy"
              className="relative aspect-[4/3] w-full rounded-[2.5rem] object-cover shadow-lift"
            />
            <p className="absolute -bottom-6 left-8 rotate-[-2deg] rounded-full bg-gold px-7 py-3 font-script text-2xl text-forest-deep shadow-lift">
              Mama Marceline
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

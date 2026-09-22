import { PHONE_DISPLAY, PHONE_TEL } from '../data/site';
import Button from './ui/Button';
import Ornament from './ui/Ornament';
import Reveal from './ui/Reveal';
import { IconLeaf, IconPhone } from './ui/icons';

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-forest-deep py-24 sm:py-28">
      <div className="pattern-diamonds absolute inset-0" aria-hidden="true" />
      <IconLeaf
        className="absolute -left-10 top-8 h-48 w-48 rotate-[-20deg] text-gold opacity-10"
      />
      <IconLeaf
        className="absolute -right-10 bottom-8 h-48 w-48 rotate-[160deg] text-gold opacity-10"
      />

      <Reveal className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <p className="font-script text-3xl text-gold-warm sm:text-4xl">Un moment de convivialité</p>
        <h2 className="mt-5 font-display text-4xl font-semibold uppercase text-cream sm:text-5xl">
          Envie de vous régaler ?
        </h2>
        <Ornament className="mt-7" />
        <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-cream/85 sm:text-lg">
          Découvrez les saveurs de Chez Mama Marceline et partagez un véritable moment de
          convivialité.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="#contact" variant="gold">
            Nous contacter
          </Button>
          <Button href="#menu" variant="outline-gold">
            Voir le menu
          </Button>
        </div>

        <a
          href={PHONE_TEL}
          className="mt-10 inline-flex items-center gap-3 font-display text-2xl font-semibold text-gold-warm transition-colors hover:text-gold-pale sm:text-3xl"
        >
          <IconPhone className="h-6 w-6" />
          {PHONE_DISPLAY}
        </a>
      </Reveal>
    </section>
  );
}

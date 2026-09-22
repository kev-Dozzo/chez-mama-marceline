import { PHONE_DISPLAY, PHONE_TEL } from '../data/site';
import Button from './ui/Button';
import Ornament from './ui/Ornament';
import Reveal from './ui/Reveal';
import { IconPhone } from './ui/icons';

export default function ContactSection() {
  return (
    <section id="contact" className="pattern-leaves relative scroll-mt-24 bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal>
          <div className="relative rounded-[2.5rem] border border-gold/25 bg-white px-7 py-14 text-center shadow-lift sm:px-14">
            <span
              className="absolute inset-x-10 top-0 h-1 rounded-b bg-gradient-to-r from-transparent via-gold to-transparent"
              aria-hidden="true"
            />
            <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-gold/40 bg-leaf text-gold-warm">
              <IconPhone className="h-8 w-8" />
            </span>

            <h2 className="mt-8 font-display text-3xl font-semibold uppercase text-forest sm:text-4xl">
              Contactez-nous
            </h2>
            <Ornament className="mt-5" />
            <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-cocoa/90">
              Réservation, commande ou simple question : un seul numéro, un accueil chaleureux.
            </p>

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.3em] text-gold-deep">
              Téléphone
            </p>
            <a
              href={PHONE_TEL}
              className="mt-3 inline-block font-display text-4xl font-bold text-forest underline decoration-gold/50 decoration-2 underline-offset-8 transition-colors hover:text-leaf sm:text-5xl"
            >
              {PHONE_DISPLAY}
            </a>

            <div className="mt-10">
              <Button href={PHONE_TEL} variant="forest" icon={<IconPhone className="h-4 w-4" />}>
                Appeler maintenant
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

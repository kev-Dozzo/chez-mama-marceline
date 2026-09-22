import { NAV_LINKS, PHONE_DISPLAY, PHONE_TEL, TAGLINE } from '../data/site';
import Ornament from './ui/Ornament';
import { IconDiamond, IconPhone } from './ui/icons';

export default function Footer() {
  return (
    <footer className="relative bg-forest-deep text-cream/80">
      <div className="kente-strip h-1.5 opacity-70" aria-hidden="true" />
      <div className="pattern-diamonds">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl font-semibold uppercase leading-snug text-cream">
              Restaurant Chez Mama Marceline
            </p>
            <p className="mt-4 text-sm leading-relaxed text-cream/70">{TAGLINE}</p>
            <Ornament align="left" className="mt-6" />
          </div>

          <nav aria-label="Navigation pied de page">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-warm">
              Navigation
            </p>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-gold-warm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-warm">
              Contact
            </p>
            <a
              href={PHONE_TEL}
              className="mt-5 inline-flex items-center gap-2.5 font-display text-xl font-semibold text-gold-warm transition-colors hover:text-gold-pale"
            >
              <IconPhone className="h-5 w-5" />
              {PHONE_DISPLAY}
            </a>
            <p className="mt-4 text-sm leading-relaxed text-cream/70">
              Réservations et commandes par téléphone.
            </p>
          </div>
        </div>

        <div className="border-t border-gold/20">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 pb-28 pt-6 sm:px-8 md:flex-row md:pb-6">
            <p className="text-xs text-cream/60">
              © 2026 Restaurant Chez Mama Marceline. Tous droits réservés.
            </p>
            <IconDiamond className="h-2 w-2 text-gold/60" />
          </div>
        </div>
      </div>
    </footer>
  );
}

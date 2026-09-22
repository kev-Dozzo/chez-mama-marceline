import { useEffect, useState } from 'react';
import { NAV_LINKS, PHONE_DISPLAY, PHONE_TEL } from '../data/site';
import Ornament from './ui/Ornament';
import { IconClose, IconLeaf, IconMenu, IconPhone } from './ui/icons';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const solid = scrolled && !open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          solid
            ? 'bg-cream/95 py-3 shadow-[0_10px_30px_-18px_rgba(11,61,46,0.45)] backdrop-blur-md'
            : 'bg-gradient-to-b from-forest-deep/80 to-transparent py-5'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#accueil" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <span
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/50 ${
                solid ? 'bg-leaf text-gold-warm' : 'bg-forest-deep/40 text-gold-warm backdrop-blur'
              }`}
            >
              <IconLeaf className="h-5 w-5" />
            </span>
            <span className="leading-tight">
              <span
                className={`block text-[10px] font-semibold uppercase tracking-[0.4em] ${
                  solid ? 'text-gold-deep' : 'text-gold-warm'
                }`}
              >
                Restaurant
              </span>
              <span
                className={`block font-display text-lg font-semibold tracking-wide ${
                  solid ? 'text-forest' : 'text-cream'
                }`}
              >
                Chez Mama Marceline
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Navigation principale">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium tracking-wide transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:text-gold-deep hover:after:w-full ${
                  solid ? 'text-forest' : 'text-cream hover:text-gold-warm'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-full bg-gold px-6 py-2.5 text-sm font-semibold uppercase tracking-[0.15em] text-forest-deep transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-warm"
            >
              Réserver
            </a>
          </nav>

          <button
            type="button"
            aria-expanded={open}
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            onClick={() => setOpen((v) => !v)}
            className={`flex h-11 w-11 items-center justify-center rounded-full border transition-colors lg:hidden ${
              solid || open
                ? 'border-leaf/30 bg-leaf/10 text-forest'
                : 'border-cream/40 bg-forest-deep/30 text-cream backdrop-blur'
            }`}
          >
            {open ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Panneau mobile */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-forest-deep/95 px-6 backdrop-blur-lg transition-opacity duration-500 lg:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="pattern-diamonds absolute inset-0" aria-hidden="true" />
        <nav className="relative flex flex-col items-center" aria-label="Navigation mobile">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2.5 font-display text-3xl font-semibold text-cream transition-colors hover:text-gold-warm"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <Ornament className="relative my-6" />
        <a
          href="#contact"
          onClick={() => setOpen(false)}
          className="relative rounded-full bg-gold px-9 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-forest-deep transition hover:bg-gold-warm"
        >
          Réserver
        </a>
        <a
          href={PHONE_TEL}
          className="relative mt-6 inline-flex items-center gap-2.5 text-gold-warm transition-colors hover:text-gold-pale"
        >
          <IconPhone className="h-4 w-4" />
          <span className="text-sm font-semibold tracking-[0.2em]">{PHONE_DISPLAY}</span>
        </a>
      </div>
    </>
  );
}

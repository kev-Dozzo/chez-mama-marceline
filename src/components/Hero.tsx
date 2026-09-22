import { useEffect, useRef } from 'react';
import { PHONE_DISPLAY, PHONE_TEL } from '../data/site';
import Button from './ui/Button';
import Ornament from './ui/Ornament';
import { IconChevronDown, IconDiamond, IconPhone } from './ui/icons';

export default function Hero() {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (imgRef.current) {
          imgRef.current.style.transform = `translate3d(0, ${window.scrollY * 0.22}px, 0) scale(1.12)`;
        }
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="accueil" className="relative flex min-h-[100svh] items-center overflow-hidden bg-forest-deep">
      <div className="absolute inset-0" aria-hidden="true">
        <img
          ref={imgRef}
          src="/images/hero.jpg"
          alt=""
          className="h-full w-full scale-[1.12] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/85 via-forest-deep/45 to-forest-deep/90" />
        <div className="pattern-diamonds absolute inset-0 opacity-60" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-5xl px-5 pb-28 pt-36 text-center sm:px-8">
        <p className="font-script text-3xl text-gold-warm sm:text-4xl">Saveurs authentiques</p>
        <h1 className="mt-6">
          <span className="block text-sm font-semibold uppercase tracking-[0.5em] text-cream/85 sm:text-base">
            Bienvenue chez
          </span>
          <span className="mt-4 block font-display text-5xl font-bold uppercase tracking-wide text-cream drop-shadow-[0_6px_24px_rgba(7,42,32,0.6)] sm:text-7xl lg:text-8xl">
            Mama Marceline
          </span>
        </h1>
        <Ornament className="mt-8" />
        <p className="mx-auto mt-6 max-w-2xl text-lg text-cream/90 sm:text-xl">
          Les saveurs authentiques du Cameroun, préparées avec amour.
        </p>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-cream/70 sm:text-base">
          Une cuisine généreuse, traditionnelle et chaleureuse à partager en famille ou entre amis.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="#menu" variant="gold">
            Voir le menu
          </Button>
          <Button href="#contact" variant="outline-cream">
            Nous contacter
          </Button>
        </div>

        <a
          href={PHONE_TEL}
          className="mt-9 inline-flex items-center gap-2.5 rounded-full border border-gold/40 bg-forest-deep/40 px-6 py-3 text-gold-pale backdrop-blur transition hover:border-gold hover:bg-gold/10"
        >
          <IconPhone className="h-4 w-4" />
          <span className="text-sm font-semibold tracking-[0.2em]">{PHONE_DISPLAY}</span>
        </a>

        <p className="mt-9 flex flex-wrap items-center justify-center gap-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-cream/70">
          Tradition
          <IconDiamond className="h-2 w-2 text-gold" />
          Saveurs
          <IconDiamond className="h-2 w-2 text-gold" />
          Convivialité
        </p>
      </div>

      <a
        href="#a-propos"
        aria-label="Faire défiler vers la section suivante"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 animate-bounce text-gold-warm transition-colors hover:text-gold-pale"
      >
        <IconChevronDown className="h-7 w-7" />
      </a>
    </section>
  );
}

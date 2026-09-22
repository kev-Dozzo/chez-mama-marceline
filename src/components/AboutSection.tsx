import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import { IconArrowRight } from './ui/icons';

export default function AboutSection() {
  return (
    <section id="a-propos" className="pattern-leaves relative scroll-mt-24 overflow-hidden bg-cream py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2">
        <Reveal className="relative">
          <div
            className="absolute -left-4 -top-4 h-full w-full rounded-[2.5rem] border border-gold/40"
            aria-hidden="true"
          />
          <img
            src="/images/a-propos.jpg"
            alt="Mama Marceline dévoilant un koki fumant dans ses feuilles de bananier"
            loading="lazy"
            className="relative aspect-[4/5] w-full rounded-[2.5rem] object-cover shadow-lift"
          />
          <p className="absolute -bottom-6 right-6 rotate-[-3deg] rounded-full bg-leaf px-7 py-3 font-script text-2xl text-gold-pale shadow-lift">
            Fait avec amour
          </p>
        </Reveal>

        <Reveal delay={120}>
          <SectionHeading
            align="left"
            eyebrow="À propos"
            title="UNE CUISINE QUI RACONTE NOTRE HISTOIRE"
          />
          <p className="mt-7 text-base leading-relaxed text-cocoa sm:text-lg">
            Chez Mama Marceline, chaque plat est préparé avec passion et respect des saveurs
            traditionnelles. Nous vous proposons une cuisine africaine généreuse, authentique et
            pleine de caractère.
          </p>
          <p className="mt-4 text-base leading-relaxed text-cocoa sm:text-lg">
            Notre ambition est simple : vous faire retrouver le goût des bons moments autour d'une
            table.
          </p>
          <a
            href="#menu"
            className="group mt-9 inline-flex items-center gap-2.5 text-sm font-semibold uppercase tracking-[0.2em] text-leaf transition-colors hover:text-gold-deep"
          >
            Découvrir notre menu
            <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

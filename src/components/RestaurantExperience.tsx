import { EXPERIENCE_TILES } from '../data/site';
import Ornament from './ui/Ornament';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';

export default function RestaurantExperience() {
  return (
    <section id="experience" className="relative scroll-mt-24 bg-cream-deep/60 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="L'expérience"
            title="PLUS QU'UN REPAS, UN MOMENT À PARTAGER"
          />
        </Reveal>

        <div className="mt-16 grid gap-7 md:grid-cols-3">
          {EXPERIENCE_TILES.map((tile, index) => (
            <Reveal key={tile.title} delay={index * 110} className="h-full">
              <figure className="group relative aspect-[3/4] overflow-hidden rounded-[2rem] shadow-card">
                <img
                  src={tile.image}
                  alt={tile.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-forest-deep/90 via-forest-deep/25 to-transparent"
                  aria-hidden="true"
                />
                <figcaption className="absolute inset-x-0 bottom-0 p-7">
                  <Ornament align="left" className="mb-4" />
                  <h3 className="font-display text-3xl font-semibold text-cream">{tile.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-cream/85">{tile.text}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

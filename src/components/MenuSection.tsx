import { MENU } from '../data/menu';
import { PHONE_DISPLAY, PHONE_TEL } from '../data/site';
import MenuCategory from './MenuCategory';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';

export default function MenuSection() {
  return (
    <section id="menu" className="relative scroll-mt-24 overflow-hidden bg-cream-soft py-24 sm:py-32">
      <div className="pattern-diamonds absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Notre carte"
            title="NOTRE MENU"
            subtitle="Des recettes généreuses, préparées avec soin."
          />
        </Reveal>

        <div className="mt-16 space-y-20">
          {MENU.map((category) => (
            <MenuCategory key={category.id} category={category} />
          ))}
        </div>

        <Reveal className="mt-16">
          <p className="text-center text-sm text-cocoa/80">
            Pour commander ou réserver, appelez-nous au{' '}
            <a
              href={PHONE_TEL}
              className="font-semibold text-leaf underline decoration-gold decoration-2 underline-offset-4 transition-colors hover:text-gold-deep"
            >
              {PHONE_DISPLAY}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

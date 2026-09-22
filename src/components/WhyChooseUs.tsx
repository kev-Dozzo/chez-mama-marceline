import type { ComponentType } from 'react';
import { FEATURES, type FeatureIcon } from '../data/site';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import { IconHeart, IconHome, IconLeaf, IconPot } from './ui/icons';

const ICONS: Record<FeatureIcon, ComponentType<{ className?: string }>> = {
  leaf: IconLeaf,
  pot: IconPot,
  heart: IconHeart,
  home: IconHome,
};

export default function WhyChooseUs() {
  return (
    <section className="relative bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading eyebrow="Nos engagements" title="POURQUOI MAMA MARCELINE ?" />
        </Reveal>

        <div className="mt-16 grid gap-7 sm:grid-cols-2 xl:grid-cols-4">
          {FEATURES.map((feature, index) => {
            const Icon = ICONS[feature.icon];
            return (
              <Reveal key={feature.title} delay={index * 90} className="h-full">
                <div className="h-full rounded-3xl border border-gold/20 bg-white p-8 text-center shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
                  <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 bg-leaf text-gold-warm">
                    <Icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-semibold text-forest">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-cocoa/85">{feature.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import type { MenuItem } from '../data/menu';
import { PHONE_TEL } from '../data/site';
import { IconPhone } from './ui/icons';

type MenuCardProps = {
  item: MenuItem;
  category: string;
};

export default function MenuCard({ item, category }: MenuCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-gold/15 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full border border-gold/50 bg-forest/90 px-3.5 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-gold-pale backdrop-blur">
          {category}
        </span>
        <span
          className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-forest-deep/50 to-transparent"
          aria-hidden="true"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h4 className="font-display text-xl font-semibold text-forest">{item.name}</h4>
        <p className="mt-2.5 flex-1 text-sm leading-relaxed text-cocoa/85">{item.description}</p>
        <a
          href={PHONE_TEL}
          className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-gold-deep transition-colors hover:text-leaf"
        >
          <IconPhone className="h-3.5 w-3.5" />
          Commander
        </a>
      </div>

      <span
        className="block h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-gold via-gold-warm to-gold transition-transform duration-500 group-hover:scale-x-100"
        aria-hidden="true"
      />
    </article>
  );
}

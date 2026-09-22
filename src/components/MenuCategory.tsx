import type { MenuCategoryData } from '../data/menu';
import MenuCard from './MenuCard';
import Reveal from './ui/Reveal';
import { IconDiamond } from './ui/icons';

type MenuCategoryProps = {
  category: MenuCategoryData;
};

export default function MenuCategory({ category }: MenuCategoryProps) {
  const columns =
    category.items.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2 xl:grid-cols-4';

  return (
    <div>
      <Reveal className="flex items-center gap-6">
        <span className="relative inline-block -rotate-1 px-8 py-3.5">
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 320 72"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M10 14 C 70 5, 250 3, 312 12 C 318 26, 316 46, 309 59 C 240 69, 68 67, 12 60 C 3 46, 4 28, 10 14 Z"
              fill="#14532D"
            />
            <path
              d="M10 14 C 70 5, 250 3, 312 12"
              fill="none"
              stroke="#D4A72C"
              strokeOpacity="0.55"
              strokeWidth="1.5"
            />
          </svg>
          <span className="relative flex items-center gap-3 font-display text-xl font-semibold uppercase tracking-[0.12em] text-cream sm:text-2xl">
            <IconDiamond className="h-2.5 w-2.5 text-gold-warm" />
            {category.title}
          </span>
        </span>
        <span
          className="hidden h-px flex-1 bg-gradient-to-r from-gold/60 to-transparent sm:block"
          aria-hidden="true"
        />
      </Reveal>

      <div className={`mt-10 grid gap-7 sm:grid-cols-2 ${columns}`}>
        {category.items.map((item, index) => (
          <Reveal key={item.id} delay={index * 90} className="h-full">
            <MenuCard item={item} category={category.title} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}

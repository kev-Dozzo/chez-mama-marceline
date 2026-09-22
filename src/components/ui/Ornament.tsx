import { IconDiamond } from './icons';

type OrnamentProps = {
  tone?: 'gold' | 'cream';
  align?: 'center' | 'left';
  className?: string;
};

/** Séparateur or : ligne — losange — ligne, inspiré des ornements de la carte. */
export default function Ornament({ tone = 'gold', align = 'center', className = '' }: OrnamentProps) {
  const line =
    tone === 'gold'
      ? 'from-transparent to-gold/70'
      : 'from-transparent to-cream/60';

  return (
    <div
      aria-hidden="true"
      className={`flex items-center gap-3 ${align === 'center' ? 'justify-center' : 'justify-start'} ${className}`}
    >
      <span className={`h-px w-12 bg-gradient-to-r ${line}`} />
      <IconDiamond className="h-2.5 w-2.5 text-gold" />
      <span className={`h-px w-12 bg-gradient-to-l ${line}`} />
    </div>
  );
}

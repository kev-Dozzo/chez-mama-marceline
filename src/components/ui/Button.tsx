import type { ReactNode } from 'react';

type Variant = 'gold' | 'outline-cream' | 'outline-gold' | 'forest';

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  icon?: ReactNode;
};

const VARIANTS: Record<Variant, string> = {
  gold: 'bg-gold text-forest-deep shadow-[0_14px_30px_-12px_rgba(212,167,44,0.65)] hover:bg-gold-warm',
  'outline-cream': 'border border-cream/50 text-cream hover:border-cream hover:bg-cream/10',
  'outline-gold': 'border border-gold/60 text-gold-warm hover:bg-gold/10',
  forest: 'bg-leaf text-cream shadow-[0_14px_30px_-14px_rgba(11,61,46,0.6)] hover:bg-forest',
};

export default function Button({
  href,
  children,
  variant = 'gold',
  className = '',
  icon,
}: ButtonProps) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center justify-center gap-2.5 rounded-full px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] transition-all duration-300 hover:-translate-y-0.5 ${VARIANTS[variant]} ${className}`}
    >
      {children}
      {icon}
    </a>
  );
}

import Ornament from './Ornament';

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  tone?: 'light' | 'dark';
  align?: 'center' | 'left';
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  tone = 'light',
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  const dark = tone === 'dark';
  return (
    <div className={className}>
      {eyebrow && (
        <p
          className={`text-xs font-semibold uppercase tracking-[0.35em] ${
            dark ? 'text-gold-warm' : 'text-gold-deep'
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-balance mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-[2.75rem] ${
          dark ? 'text-cream' : 'text-forest'
        }`}
      >
        {title}
      </h2>
      <Ornament align={align} className="mt-5" />
      {subtitle && (
        <p
          className={`mt-5 max-w-2xl text-base leading-relaxed sm:text-lg ${
            dark ? 'text-cream/80' : 'text-cocoa/90'
          } ${align === 'center' ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

import { PHONE_DISPLAY, PHONE_TEL } from '../data/site';
import { IconPhone } from './ui/icons';

/** Barre d'appel fixe, discrète, visible uniquement sur mobile. */
export default function MobileCallBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-gold/30 bg-forest-deep/95 backdrop-blur md:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <a href={PHONE_TEL} className="flex items-center justify-center gap-3 px-4 py-3.5 text-cream">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold text-forest-deep">
          <IconPhone className="h-4 w-4" />
        </span>
        <span className="text-sm font-semibold uppercase tracking-[0.18em]">
          Appeler — {PHONE_DISPLAY}
        </span>
      </a>
    </div>
  );
}

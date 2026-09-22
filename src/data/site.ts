export const PHONE_DISPLAY = '680 788 215';
export const PHONE_TEL = 'tel:680788215';

export const TAGLINE = 'Saveurs authentiques • Cuisine généreuse • Fait avec amour';

export type NavLink = { label: string; href: string };

export const NAV_LINKS: NavLink[] = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Notre cuisine', href: '#notre-cuisine' },
  { label: 'Menu', href: '#menu' },
  { label: 'À propos', href: '#a-propos' },
  { label: 'Contact', href: '#contact' },
];

export type FeatureIcon = 'leaf' | 'pot' | 'heart' | 'home';

export type Feature = { icon: FeatureIcon; title: string; text: string };

export const FEATURES: Feature[] = [
  {
    icon: 'leaf',
    title: 'Saveurs authentiques',
    text: 'Une cuisine inspirée des traditions culinaires camerounaises.',
  },
  {
    icon: 'pot',
    title: 'Cuisine généreuse',
    text: 'Des portions préparées avec soin pour partager de vrais moments.',
  },
  {
    icon: 'heart',
    title: 'Fait avec amour',
    text: 'Chaque plat est préparé avec passion et attention.',
  },
  {
    icon: 'home',
    title: 'Ambiance chaleureuse',
    text: 'Un espace convivial pour vos repas en famille, entre amis ou entre collègues.',
  },
];

export type ExperienceTile = { title: string; text: string; image: string; alt: string };

export const EXPERIENCE_TILES: ExperienceTile[] = [
  {
    title: 'Tradition',
    text: 'Les gestes de toujours, transmis avec amour.',
    image: '/images/experience/tradition.jpg',
    alt: 'Préparation traditionnelle du koki dans ses feuilles de bananier',
  },
  {
    title: 'Convivialité',
    text: 'Des instants gourmands à partager, à deux ou entre amis.',
    image: '/images/experience/convivialite.jpg',
    alt: 'Deux milkshakes gourmands à partager, couronnés de crème fouettée',
  },
  {
    title: 'Générosité',
    text: 'Des assiettes fraîches, colorées et généreuses.',
    image: '/images/experience/generosite.jpg',
    alt: 'Grande assiette généreuse garnie d’avocat, de tomates et d’herbes fraîches',
  },
];

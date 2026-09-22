export type MenuItem = {
  id: string;
  name: string;
  description: string;
  image: string;
  alt: string;
};

export type MenuCategoryData = {
  id: string;
  title: string;
  items: MenuItem[];
};

/**
 * Carte du restaurant — source de vérité unique.
 * Pour mettre à jour le menu, modifier uniquement ce fichier.
 */
export const MENU: MenuCategoryData[] = [
  {
    id: 'plats-chauds',
    title: 'Plats chauds',
    items: [
      {
        id: 'koki',
        name: 'Koki',
        description:
          'Pudding de haricots cuit à la vapeur, doré et fondant, servi dans sa feuille de bananier.',
        image: '/images/plats/koki.jpg',
        alt: 'Koki camerounais doré servi dans ses feuilles de bananier',
      },
      {
        id: 'ndole-royal',
        name: 'Ndole Royal',
        description:
          'Ndole onctueux aux feuilles amères et cacahuètes, garni de crevettes et de bœuf fondant.',
        image: '/images/plats/ndole-royal.jpg',
        alt: 'Ndole royal garni de crevettes, servi avec plantains dorés',
      },
      {
        id: 'okok',
        name: 'Okok',
        description:
          'Feuilles d’okok finement émincées, mijotées dans une sauce onctueuse aux arachides.',
        image: '/images/plats/okok.jpg',
        alt: 'Okok camerounais, sauce onctueuse aux feuilles émincées',
      },
      {
        id: 'eru',
        name: 'Eru',
        description:
          'Eru mijoté aux feuilles fondantes, relevé d’huile de palme et servi avec plantain.',
        image: '/images/plats/eru.jpg',
        alt: 'Eru traditionnel servi avec plantains frits',
      },
    ],
  },
  {
    id: 'entrees',
    title: 'Entrées',
    items: [
      {
        id: 'salade-de-fruits',
        name: 'Salade de fruits',
        description:
          'Fruits frais de saison, coupés minute, pour une entrée légère, colorée et gourmande.',
        image: '/images/entrees/salade-de-fruits.jpg',
        alt: 'Salade de fruits frais colorée servie en bol',
      },
      {
        id: 'crepe-au-chocolat',
        name: 'Crêpe au chocolat',
        description: 'Crêpe moelleuse nappée de chocolat fondant et de fruits frais.',
        image: '/images/entrees/crepe-au-chocolat.jpg',
        alt: 'Crêpe au chocolat nappée de sauce chocolat et de fraises',
      },
      {
        id: 'gaufres',
        name: 'Gaufres',
        description: 'Gaufres dorées et croustillantes, délicatement sucrées.',
        image: '/images/entrees/gaufres.jpg',
        alt: 'Gaufres dorées et croustillantes servies avec fruits rouges',
      },
    ],
  },
  {
    id: 'desserts',
    title: 'Desserts',
    items: [
      {
        id: 'glace',
        name: 'Glace',
        description:
          'Glace onctueuse et gourmande, servie bien fraîche en généreuses boules.',
        image: '/images/desserts/glace.jpg',
        alt: 'Boules de glace artisanales servies en coupe de cristal',
      },
      {
        id: 'creme-brulee',
        name: 'Crème brûlée',
        description: 'Crème brûlée veloutée, croûte de caramel craquante à souhait.',
        image: '/images/desserts/creme-brulee.jpg',
        alt: 'Crème brûlée à la croûte de caramel craquante',
      },
      {
        id: 'cookie',
        name: 'Cookie',
        description:
          'Cookie généreux aux pépites de chocolat, croustillant dehors, fondant dedans.',
        image: '/images/desserts/cookie.jpg',
        alt: 'Cookies généreux aux pépites de chocolat',
      },
      {
        id: 'cupcake',
        name: 'Cupcake',
        description: 'Cupcake moelleux au cacao, couronné d’une crème légère et vanillée.',
        image: '/images/desserts/cupcake.jpg',
        alt: 'Cupcake au cacao couronné d’une crème vanillée',
      },
    ],
  },
];

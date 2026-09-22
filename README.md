# Restaurant Chez Mama Marceline — Landing page

Landing page premium (React + TypeScript + Tailwind CSS v4 + Vite) pour le restaurant
camerounais **Chez Mama Marceline**.

## Lancer le projet

```bash
npm install
npm run dev      # serveur de développement
npm run build    # build de production + typecheck
```

## Identité visuelle

- Vert profond `#0B3D2E` / vert émeraude `#14532D`
- Or `#D4A72C` / or chaud `#E5B94A`
- Crème `#FFF9ED` — fond principal
- Brun `#5C4033` — texte secondaire uniquement
- Typographies : Playfair Display (titres), Inter (texte), Great Vibes (accents décoratifs)

## Structure

```
src/
  data/
    menu.ts        ← source de vérité du menu (catégories, plats, descriptions, images)
    site.ts        ← téléphone, navigation, engagements, tuiles expérience
  components/
    Navbar.tsx  Hero.tsx  AboutSection.tsx  MenuSection.tsx
    MenuCategory.tsx  MenuCard.tsx  SignatureDish.tsx  WhyChooseUs.tsx
    RestaurantExperience.tsx  CTASection.tsx  ContactSection.tsx
    Footer.tsx  MobileCallBar.tsx
    ui/            ← Button, SectionHeading, Ornament, Reveal, icônes SVG
public/images/     ← photographies (plats, expérience, héro)
```

## Mettre à jour le menu

Modifier uniquement `src/data/menu.ts` : les catégories, noms, descriptions et
chemins d'images y sont centralisés. Aucun prix n'est affiché (non fournis).

## Photos

- `plats/koki.jpg`, `experience/convivialite.jpg`, `experience/generosite.jpg` :
  photographies fournies par le client.
- Héro, à-propos, signature, plats chauds et expérience : photographies générées
  pour la maquette (à remplacer par de vraies photos du restaurant).
- Desserts et entrées : photographies libres (Pexels / stock) en attendant les
  visuels définitifs.

## SEO

Titre, meta description, mots-clés et données structurées schema.org
(`Restaurant` + `Menu`) définis dans `index.html`. Un seul H1 (section héro).

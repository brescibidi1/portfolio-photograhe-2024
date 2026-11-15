# Portfolio photographe — Démo d’intégration

Une intégration de portfolio de photographe avec Nuxt et Vue : une interface sombre, une grande galerie d’accueil, des carrousels de photos et quatre pages en français et en anglais.

Le photographe John Doe, sa biographie, ses statistiques, les lieux et dates des images sont des contenus de démonstration. Ce site ne présente pas l’activité d’un vrai photographe et ne propose aucune réservation réelle.

## Ce qui fonctionne

- Accueil, À propos, Portfolio et Contact.
- Navigation desktop et menu mobile avec fermeture par Échap ou au clic extérieur.
- Changement de langue FR/EN dans le bandeau de démo.
- Carrousels avec boutons nommés, défilement tactile et navigation au clavier.
- Formulaire de contact simulé avec validation native : aucun email, appel API ou enregistrement local.
- Images WebP et police Manrope servies localement.
- Génération statique des huit routes, sans base de données ni fonction serveur nécessaire à l’hébergement.

La démo conserve la direction artistique du projet d’origine. Les changements portent sur les interactions, le responsive, les liens fictifs et la documentation.

## Lancer le projet

Node.js et npm sont nécessaires. Le projet utilise Nuxt 3 et des dépendances de cette génération.

```sh
npm ci
npm run dev
```

Ouvrir l’adresse indiquée par Nuxt. Pour un port précis : `npm run dev -- --port 5190`.

```sh
npm run generate
```

La version statique est produite dans `.output/public/`. Le script `npm run build` reste disponible pour les usages Nuxt avec serveur ; l’hébergement de cette démo utilise la génération statique.

## Hébergement

La configuration Vercel exécute `npm run generate` et publie `.output/public` avec le preset Other. Aucune variable secrète ou connexion à une base n’est requise. Les pages portent `noindex, follow` pour distinguer cette démo du portfolio personnel de Kenelm.

## Organisation réelle du code

- `pages/` : les quatre pages.
- `components/Ui/` : navigation, galeries, cartes, boutons et bandeau de démo.
- `layouts/default.vue` : structure commune.
- `i18n/locales/fr.json` et `en.json` : les textes de présentation.
- `composables/useDemoCopy.ts` : les textes bilingues propres à la démo et au formulaire.
- `assets/datas/portfolio.js` : les images et leurs légendes de démonstration.
- `assets/datas/steps.js` : les années et statistiques du scénario fictif.
- `assets/styles/app.css` : styles globaux existants ; `app.scss` en conserve la source.
- `assets/styles/demo.css` : police locale, accessibilité et ajustements de la démo.
- `public/photos/` : les images WebP.
- `public/fonts/` : Manrope et sa licence.

Le guide de personnalisation est dans [docs/README.md](./docs/README.md). Les anciens dossiers `content/` et `styles/` évoqués dans l’ancien guide n’existent pas et ne sont pas nécessaires.

## Crédits

- **Intégration frontend :** Kenelm Ligan.
- **Visuels :** images générées par Kenelm avec l’IA de Freepik, selon les informations données par l’auteur. Elles ne sont pas les photographies d’un client ou d’un photographe fictivement présenté.
- **Maquette d’origine :** Produce UI — *Photographer Portfolio Website UI Template, Dark Theme*. [Fichier Figma utilisé pour cette intégration](https://www.figma.com/design/mDomeEmARSbp06uMwPbA55/Photographer-Portfolio-Website-UI-Template---Dark-Theme-%7C-Produce-UI--Community-). [Présentation du design par Produce UI](https://dribbble.com/shots/23312672-Home-Page-Landing-Page-Design-of-Photographer-Portfolio-Website).
- **Typographie :** Manrope, accompagnée de sa licence SIL Open Font License dans `public/fonts/OFL.txt`.
- **Bibliothèques :** Nuxt, Vue, Nuxt i18n, UnoCSS, Swiper et les icônes Remix Icon, avec leurs licences respectives.

Cette publication présente un exercice d’intégration. Aucune licence générale autorisant la redistribution du design ou de tous les visuels comme template n’est ajoutée. Le projet est présenté comme un exercice d’intégration, pas comme une création graphique originale de Kenelm ni comme un template dont tous les éléments seraient librement redistribuables.

## Fiche Labo

Catégorie : **Expérimentations**.

Titre proposé : **Une intégration de portfolio pour photographe**.

Une interface de portfolio pour un photographe fictif, intégrée avec Nuxt et Vue à partir d’une maquette Figma. J’y ai travaillé les galeries, les carrousels et la présentation des images sur desktop et mobile. Les visuels ont été générés avec l’IA de Freepik. Le site se parcourt en français et en anglais ; le formulaire de contact reste une simulation.

### Mouvement et responsive

GSAP anime les titres et la mosaïque à l’arrivée, puis les sections au défilement. Les animations respectent la préférence de réduction des mouvements et sont nettoyées à chaque navigation. Le survol des photos garde un zoom léger.

Les carrousels adaptent le nombre de photos à leur propre largeur : une sous 600 px, deux dès 600 px, trois dès 1 000 px. Les flèches indiquent les limites du carrousel.

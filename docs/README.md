# Personnaliser cette démo

Ce guide décrit les fichiers présents dans le projet. La démo actuelle utilise un photographe fictif et des images générées avec Freepik.

## Textes et identité

Les traductions sont dans `i18n/locales/fr.json` et `en.json`. Certaines occurrences de John Doe et John sont encore directement dans les pages et le pied de page : rechercher ces noms dans `pages/` et `components/` pour les remplacer. Le logo est sélectionné dans `components/Ui/Logo.vue`.

Les textes de simulation, les libellés du formulaire et les étapes de chronologie de démonstration sont dans `composables/useDemoCopy.ts`. Les années et statistiques restent dans `assets/datas/steps.js`.

## Galeries

Ajouter les images dans `public/photos/`, puis modifier `homepagePortfolio` ou `portfolioByCategories` dans `assets/datas/portfolio.js`. Chaque entrée comprend `file_name`, `media_title`, `add_date` et `media_location`. Le nom de fichier est relatif à `public/photos/`. Les catégories correspondent aux clés de traduction indiquées par `slug`.

La mosaïque d’accueil a sa propre liste dans `components/Ui/HeroGallery.vue`. La changer n’actualise pas automatiquement les autres galeries.

## Styles

Les couleurs globales sont déclarées dans `assets/styles/app.scss` et dans le CSS correspondant `app.css`, chargé par Nuxt. Garder les deux cohérents si tu modifies cette source SCSS. Les styles propres aux composants sont dans leurs fichiers Vue. Les ajustements de démo sont dans `assets/styles/demo.css`.

## Contact et réseaux

Le formulaire de `pages/contact.vue` ne fait que valider la saisie et afficher une confirmation de simulation. Les boutons sociaux dans `components/Ui/SocialsLink.vue` ne pointent vers aucun profil réel. Les coordonnées visibles sont fictives et ne déclenchent ni appel ni email.

Pour un vrai site, prévoir séparément le traitement des messages, la gestion des erreurs et le remplacement des données fictives. Retirer le bandeau de démo ou la consigne noindex ne branche pas ces fonctionnalités.

## Vérifier avant publication

Lancer `npm run generate`, vérifier les huit routes FR/EN, les images, le menu mobile et les carrousels. Confirmer les crédits et conditions d’utilisation des contenus choisis. Aucune base de données ou compte photographe n’est créé par ce projet.

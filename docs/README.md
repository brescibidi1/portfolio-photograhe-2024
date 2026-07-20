# Guide d’utilisation – Template Portfolio Photographe (Nuxt 3)

Merci d’avoir choisi ce template !
Ce guide vous accompagne pas à pas pour installer, personnaliser et mettre en ligne votre portfolio professionnel.

---

## 1. Installation rapide

#### Prérequis

* [Node.js]() (version 18 ou plus)
* Un éditeur de code recommandé : [Visual Studio Code]()

#### Étapes

1. Téléchargez le dossier du projet et décompressez-le.
2. Ouvrez le dossier dans VS Code.
3. Dans le terminal, exécutez :

   <pre class="overflow-visible!" data-start="790" data-end="834"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>npm install
   npm run dev
   </span></span></code></div></div></pre>
4. Ouvrez ensuite [http://localhost:3000](http://localhost:3000) pour voir votre portfolio en local.

---

## 2. Organisation du projet

```
/project-root
├─ /components        # Composants réutilisables (navbar, footer, etc.)
├─ /content           # Contenu modifiable (textes, infos, etc.)
│   ├─ accueil.json
│   ├─ about.json
│   └─ contact.json
├─ /public
│   ├─ /photos        # Vos images personnelles
│   └─ logo.webp       # Logo du site
├─ /pages             # Pages principales du site
├─ /styles            # Feuilles de style globales
└─ nuxt.config.ts     # Configuration du projet
```

---

## 3. Personnalisation simple

* **Logo** : remplacez `public/logo.webp` par le vôtre.
* **Images** : mettez vos photos dans `public/photos/` et mettez à jour les galeries.
* **Textes** : ouvrez les fichiers `.json` dans `/content` et changez les textes (titre, bio, infos contact…).
* **Couleurs et police** : dans `tailwind.config.js`, modifiez la section `theme.colors` et `theme.fontFamily`.

Exemple de fichier `content/about.json` :

```
{
	"title": "À propos de moi",
	"text": "Je suis un photographe passionné, spécialisé dans la capture d’instants uniques..."
}
```

---

## 4. Personnalisation avancée (optionnel)

Si vous êtes à l’aise avec le code, vous pouvez :

* Ajouter des pages dans `/pages` (ex : `/tarifs.vue`)
* Modifier des composants dans `/components` (ex : changer la structure de la galerie).

👉 Besoin d’aide ? Nous proposons un **service de personnalisation premium** : couleurs, typographie, animations, ajout de nouvelles sections. Contactez-nous à [support@brescibidi.com]().

---

## 5. Déploiement en ligne

#### Option gratuite

* Créez un compte sur [Vercel]() ou [Netlify]().
* Importez le projet depuis votre ordinateur.
* Cliquez sur **Deploy** → votre site sera en ligne en quelques minutes.

#### Option personnalisée

Nous pouvons également gérer pour vous le déploiement sur un domaine personnalisé (`www.votre-nom.com`).

---

## 6. Support et mises à jour

* 📧 Contact support : [support@brescibidi.com](support@brescibidi.com)

* 🔄 Mises à jour : vous recevrez les nouvelles versions de ce template si elles sont publiées.

---

**Conseil final :** Ce template est pensé pour être simple et flexible. Vous pouvez le garder tel quel ou l’utiliser comme base pour créer un portfolio totalement unique.

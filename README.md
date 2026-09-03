# Oral RNCP Bloc 3 — Support de Présentation (Slidev)

Ce dépôt contient le support de présentation (slides interactives) pour l'épreuve orale du **Bloc 3** du titre RNCP **« Expert en Développement Logiciel »** (RNCP 39583 — Niveau 7 / Master 2) préparé à **Ynov Campus Strasbourg**.

- **Intitulé du bloc :** _Coordonner et piloter un projet de développement d’applications logicielles_
- **Candidat :** Nicolas WALTER
- **Moteur de présentation :** [Slidev](https://sli.dev) (Vite + Vue 3 + UnoCSS)

---

## 🎯 Objectifs de la présentation

Le support a été conçu pour structurer et rythmer la soutenance orale devant le jury :

1. **Contexte & Enjeux :** Cadrage du projet, cartographie des parties prenantes, objectifs transmédias et contraintes projet (délais, budget, ressources).
2. **Choix techniques & Architecture :** Étude comparative argumentée (ex. sur-mesure vs headless CMS / solutions spécialisées), gestion du risque et faisabilité.
3. **Réalisation, Pilotage & Qualité :** Méthodologie de coordination, métriques clés, industrialisation logicielle et recette.
4. **Annexes & Démonstration :** Slides de réserve pour répondre aux questions spécifiques du jury (captures d'interface, métriques, architecture détaillée).

---

## 🛠️ Stack technique & Principes de conception

- **Moteur :** [Slidev v52](https://sli.dev/) avec Vite et Vue 3.
- **CSS Engine :** [UnoCSS](https://unocss.dev/) avec les presets `presetWind4()`, `presetIcons()`, `presetTypography()` et le `transformerDirectives()` pour supporter la directive `@apply`.
- **Charte & Design System :**
  - Palette sobre et contrastée basée sur le noir/blanc et l'échelle officielle `neutral-*` (`neutral-50` à `neutral-950`).
  - Polices locales hébergées dans `public/fonts/` (**Hanken Grotesk** pour le titrage/texte courant, **JetBrains Mono** pour le code, les données et les compteurs).
  - **100% Offline-first :** Aucune dépendance à un CDN ou à Google Fonts (`fonts.provider: none`), garantissant un fonctionnement parfait le jour de la soutenance sans accès réseau.
- **Qualité & Tooling :**
  - TypeScript strict vérifié via `vue-tsc --noEmit`.
  - Linter ESLint configuré via `@antfu/eslint-config` (indentation par tabulations, single quotes).
  - Prettier configuré avec `prettier-plugin-slidev` pour le formatage des fichiers Markdown.

---

## 📁 Structure du dépôt

```text
.
├── slides.md               # Entrée principale de la présentation (frontmatter & slides)
├── layouts/                # Layouts Slidev réutilisables
├── components/             # Composants Vue custom intégrables dans le Markdown
├── global-bottom.vue       # Layer global persistant (footer contextuel, auteur, pagination)
├── styles/
│   └── index.css           # Feuille de style globale (polices locales, @apply, tables, listes)
├── public/                 # Assets statiques servis directement
│   ├── fonts/              # Fichiers TTF des polices locales
├── uno.config.ts           # Configuration UnoCSS (presets, fonts, shortcuts structurels)
├── slidev.d.ts             # Augmentation TypeScript pour les globales Slidev ($nav, $slidev, etc.)
└── package.json            # Dépendances et scripts de build
```

---

## 🚀 Prise en main & Commandes

### Installation

```bash
pnpm install
```

### Développement local

```bash
pnpm run dev
```

Le serveur de développement démarre sur [http://localhost:3030](http://localhost:3030) avec hot-reload instantané.

### Raccourcis clavier essentiels en présentation

| Raccourci      | Action                                                                             |
| -------------- | ---------------------------------------------------------------------------------- |
| `P`            | **Ouvrir le Mode Présentateur** (prompteur, chronomètre, vue de la slide suivante) |
| `F`            | Basculer en plein écran                                                            |
| `O`            | Vue d'ensemble de toutes les slides (Overview)                                     |
| `D`            | Activer le mode dessin / annotations sur slide                                     |
| `Espace` / `→` | Slide ou étape d'animation suivante (`v-click`)                                    |
| `←`            | Slide précédente                                                                   |

### Contrôle qualité & Linter

```bash
# Vérification TypeScript (composants Vue, layouts, scripts)
pnpm run typecheck

# Linter ESLint
pnpm run lint
pnpm run lint:fix

# Formatage Prettier des slides Markdown
pnpm run format:check
pnpm run format
```

### Build & Export

```bash
# Compiler en application statique SPA (dossier dist/)
pnpm run build

# Exporter le deck en PDF (nécessite playwright-chromium)
pnpm run export
```

# Directives pour les Agents IA (`AGENTS.md`)

Ce document définit les règles métier, les choix d'architecture et les contraintes non négociables de **ce projet spécifique**. Pour la description générale de la stack et les commandes usuelles, voir le [README.md](./README.md).

---

## 🎯 Contexte Métier & Évaluation (RNCP Bloc 3)

- **Certification :** Expert en Développement Logiciel (RNCP 39583 — Niveau 7 / Master 2 Ynov Campus Strasbourg).
- **Bloc 3 :** _« Coordonner et piloter un projet de développement d’applications logicielles »_.
- **Attentes du jury :** Le jury n'évalue pas seulement la technique pure, mais la posture de **coordinateur / lead technique** :
  - Cadrage du besoin et cartographie des parties prenantes.
  - Arbitrages techniques argumentés (coûts, délais, dette technique, risques).
  - Méthodologie de pilotage, qualité logicielle et industrialisation.
- **Rôle du dossier `consignes/` :** Ce dossier contient les attendus académiques, briefs et grilles d'évaluation. L'agent doit s'y référer pour s'assurer que les slides couvrent bien l'ensemble des compétences et critères exigés pour valider le bloc.

---

## 🏛️ Invariants d'Architecture du Projet

> La syntaxe et le fonctionnement général de Slidev sont couverts par la skill `slidev`. Seules les décisions d'architecture propres à ce deck sont listées ci-dessous :

1. **Deck sur-mesure (`theme: none`) :**
   - Aucun thème externe. Le rendu visuel repose exclusivement sur les layouts locaux (`layouts/`) et la feuille de style globale [`styles/index.css`](./styles/index.css).
   - Le bas de page persistant est encapsulé dans [`global-bottom.vue`](./global-bottom.vue) (masquage contextuel selon `$nav.currentLayout` et `$frontmatter.hideFooter`).

2. **Design System & Style :**
   - **Palette stricte :** Utiliser exclusivement le noir/blanc et l'échelle `neutral-*` de Tailwind/UnoCSS (`neutral-50` à `neutral-950`). Ne jamais réintroduire de couleurs hexadécimales arbitraires.
   - **Directive `@apply` :** Toute règle de style globale dans `styles/index.css` s'appuie sur `@apply` avec les utilitaires UnoCSS.
   - **100% Offline-first :** Aucune ressource distante (Google Fonts, CDN, images hébergées sur le web). Tout doit fonctionner sans aucune connexion internet le jour J.

3. **Rythme & Soutenance :**
   - Toujours alimenter les notes de présentation en commentaires HTML `<!-- ... -->` sous chaque slide (utilisées par le Mode Présentateur `P` pour le discours).
   - Séquencer les contenus denses avec `<v-clicks>` ou `v-click` pour préserver l'attention du jury.

---

## ✅ Procédure de Validation Obligatoire

Avant de finaliser toute intervention, exécuter et valider cette chaîne sans aucune erreur :

```bash
pnpm run typecheck    # Types TypeScript
pnpm run lint         # Linter ESLint
pnpm run format:check # Formatage Prettier
pnpm run build        # Compilation Slidev / Vite
```

---
layout: section
---

# Annexes Techniques

<!--
[Slide] "Voici nos slides de réserve technique pour la session de questions / réponses."
-->

---
layout: default
---

# Annexe 1 : Pipeline CI/CD GitHub Actions

<v-clicks>

- **Workflows automatisés sur chaque Pull Request :**
  - Étape 1 : Vérification des types TypeScript (`vue-tsc --noEmit`) sur l'ensemble du front.
  - Étape 2 : Linter ESLint (`eslint .`) et contrôle du formatage Prettier.
  - Étape 3 : Exécution de la suite de tests unitaires Vitest.
  - Étape 4 : Déploiement automatique d'un environnement de prévisualisation (URL injectée en commentaire de PR et synchronisée sur Linear).
- **Workflow de release en production :**
  - Déclenchement au tag de version (`v*.*.*`).
  - Compilation Slidev / Nuxt, injection des variables d'environnement (`API_PUBLIC_APP_URL`), build des images et déploiement via runners sécurisés.

</v-clicks>

<!--
[Slide] "Détail de notre pipeline d'intégration et de livraison continues sous GitHub Actions."

- "Sur chaque PR : typecheck strict, linter ESLint, Prettier, et tests unitaires Vitest bloquants."

- "Génération d'une URL de démo éphémère transmise directement dans le ticket Linear pour recette rapide."

- "Au tag de version : pipeline de build sécurisée injectant les configurations de production."
-->

---
layout: default
---

# Annexe 2 : Architecture Headless & Traduction Métier

<v-clicks>

- **Back-end NestJS 100% Agnostique :**
  - Moteur e-commerce modulaire (`CatalogModule`, `CartModule`, `OrderModule`, `PaymentModule`).
  - Manipulation exclusive d'entités abstraites : articles, créneaux horaires, jauges de capacité, paiements PayFIP.
  - Zéro couplage avec le domaine aquatique : moteur universel prêt pour tout autre besoin de collectivité.
- **Front-end Nuxt 4 : Couche d'Adaptation & Traduction Métier :**
  - Pattern Adaptateur : mapping direct des articles génériques en _bassins_, _cours de natation_ et _abonnements_.
  - Architecture en Nuxt Layers pour mutualiser le socle UI du Back-Office Agent tout en isolant le Front-Office Usager.

</v-clicks>

<!--
[Slide] "Détail de notre architecture découplée entre le back-end agnostique et le front-end traducteur de domaine."

- "Côté NestJS : un moteur e-commerce REST headless purement transactionnel. Il manipule des stocks, des jauges et des paniers sans aucune connaissance du domaine des piscines."

- "Côté Nuxt 4 : le front agit comme couche de traduction de domaine (Adapter pattern). C'est lui qui transforme ces entités abstraites en expérience usager aquatique concrète."

- "Nuxt Layers : mutualisation efficace du socle UI commun et des composants complexes (comme le DataTable) entre le Back-Office Agent et le Front Usager."
-->

---
layout: default
---

# Annexe 3 : Tableau de Bord & Flux Git

| Étape du cycle      | Action Développeur                 | Automatisation GitHub                     | Statut Linear |
| :------------------ | :--------------------------------- | :---------------------------------------- | :------------ |
| **Prise en charge** | Création de branche `feat/123-nom` | Détection de la branche liée              | _In Progress_ |
| **Revue de code**   | Ouverture de la Pull Request       | Lancement de la CI + Déploiement Preview  | _In Review_   |
| **Validation UX**   | Test sur l'URL de prévisualisation | Notification du statut des tests          | _In Review_   |
| **Livraison**       | Merge sur `main` / `develop`       | Fermeture de la PR + Nettoyage Preview    | _Done_        |
| **Déploiement**     | Tag de version (`v1.x.x`)          | Déploiement en préproduction / production | _Released_    |

<!--
[Slide] "Tableau de correspondance entre notre workflow Git et la mise à jour automatique sous Linear."

- "Chaque action Git (branche, PR, merge, tag) met à jour le cycle de vie du ticket sans aucune intervention manuelle."
-->

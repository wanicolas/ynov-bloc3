---
layout: two-cols
---

# Écosystème de Suivi : Linear ↔ GitHub (C3.2.1)

::left::

### Automatisation & Traçabilité Git

<v-clicks>

- **Liaison bidirectionnelle stricte**
  - Branches normées (`feat/`, `fix/`) rattachées automatiquement aux issues Linear.
  - Déplacement automatique des statuts : _In Progress_ ➔ _In Review_ ➔ _Done_ au merge.
- **Environnements de prévisualisation**
  - Génération d'une URL de démo éphémère par PR via GitHub Actions.
  - Test immédiat pour l'UX Designer et la cliente sans polluer la branche principale.

</v-clicks>

::right::

### Pilotage Opérationnel dans Linear

<v-clicks>

- **Gestion des cycles & estimation**
  - Sprints de 2 semaines avec points d'effort (Fibonacci).
  - Vues d'équipe filtrées : _Front_, _Back_, _A11y_, _Bugs_.
- **Traçabilité & Documentation**
  - Suivi des jalons (Milestones v1.0 ➔ v1.4).
  - Notes de version centralisées pour chaque livraison.

</v-clicks>

<!--
[Slide] "Pour piloter la production au quotidien, nous avons interconnecté Linear et GitHub Actions."
[Clic 1] Traçabilité Git : Nos branches feat ou fix sont couplées aux tickets Linear. Le statut se met à jour tout seul : 'In Progress' au premier push, 'In Review' à l'ouverture de la PR, et 'Done' au merge. Zéro saisie manuelle.
[Clic 2] Démo URLs éphémères : Sur chaque PR, la CI génère une URL de test isolée. L'UX Designer et la cliente peuvent tester la fonctionnalité en 30 secondes sans attendre un déploiement global.
[Clic 3] Gestion des cycles dans Linear : Cycles de 2 semaines, chiffrage en suite de Fibonacci, et des vues personnalisées par spécialité pour donner au lead une visibilité parfaite sans micro-management.
▶ Transition : "Cet écosystème nous a fourni des métriques d'avancement très précises tout au long du projet..."
-->

---
layout: default
---

# Métriques Clés & Tableaux de Bord (C3.2.1)

<div class="grid grid-cols-4 gap-4 my-6 text-center">
  <div class="p-4 border border-neutral-300 rounded-lg bg-neutral-50">
    <div class="text-4xl font-mono font-semibold text-neutral-900 mb-1">25</div>
    <div class="text-xs text-neutral-500 uppercase tracking-wider">Sprints Réalisés</div>
  </div>
  <div class="p-4 border border-neutral-300 rounded-lg bg-neutral-50">
    <div class="text-4xl font-mono font-semibold text-neutral-900 mb-1">1 366</div>
    <div class="text-xs text-neutral-500 uppercase tracking-wider">Tickets Clôturés</div>
  </div>
  <div class="p-4 border border-neutral-300 rounded-lg bg-neutral-50">
    <div class="text-4xl font-mono font-semibold text-neutral-900 mb-1">57</div>
    <div class="text-xs text-neutral-500 uppercase tracking-wider">Tickets / Sprint (Moy.)</div>
  </div>
  <div class="p-4 border border-neutral-300 rounded-lg bg-neutral-50">
    <div class="text-4xl font-mono font-semibold text-neutral-900 mb-1">50 → 80</div>
    <div class="text-xs text-neutral-500 uppercase tracking-wider">Vélocité Récente</div>
  </div>
</div>

<v-clicks>

- **Une vélocité en accélération continue :** Médiane historique à 51 tickets, montant régulièrement entre 50 et 80 sur les cycles récents grâce à la maturité des composants socles.
- **Pilotage de la performance :** Délais respectés sur l'ensemble des 5 releases majeures, zéro dérive budgétaire.

</v-clicks>

<!--
[Slide] "Voici les indicateurs de performance réels enregistrés au cours de nos 25 sprints."
[Clic 1] Volume : 1 366 tickets terminés à date, ce qui démontre l'intensité de la production et la continuité de notre run.
[Clic 2] Vélocité moyenne : 57 tickets par sprint, avec une médiane historique à 51.
[Clic 3] Accélération récente : Nos derniers sprints tournent entre 50 et 80 tickets clos. Cette hausse de plus de 30% s'explique directement par l'effet de levier de nos composants front réutilisables.
[Clic 4] Respect des engagements : 100% des releases ont été livrées dans les temps, garantissant la tenue des budgets.
▶ Transition : "Cette cadence de production s'appuie sur une industrialisation stricte de la qualité logicielle..."
-->

---
layout: two-cols
---

# Qualité Logicielle & Industrialisation (C3.2.1)

::left::

### Pipeline CI/CD (GitHub Actions)

<v-clicks>

- **Vérifications systématiques à chaque PR**
  - Validation TypeScript stricte (`vue-tsc --noEmit`).
  - Linting et formatage (ESLint + Prettier).
  - Tests unitaires automatisés via **Vitest**.
- **Sécurisation du déploiement**
  - Blocage strict du merge si un test échoue.
  - Déploiement automatisé sur la préproduction.

</v-clicks>

::right::

### Analyse Critique de la Couverture

<v-clicks>

- **Back-end : 85% de couverture**
  - Logique financière (PayFIP), jauges de créneaux et sécurité ultra-éprouvées.
- **Front-end : < 30% de couverture**
  - Tests unitaires sur les composants piliers et helpers.
  - _Arbitrage assumé :_ Déficit en tests E2E/fonctionnels par contrainte de temps, budget et montée en compétences de l'équipe front.

</v-clicks>

<!--
[Slide] "Pour sécuriser une plateforme gérant de l'argent public, la qualité logicielle est non négociable."
[Clic 1] Pipeline CI/CD : J'ai configuré notre chaîne GitHub Actions bloquante : typage TypeScript strict via vue-tsc, linter ESLint, Prettier et tests unitaires Vitest exécutés à chaque commit.
[Clic 2] Couverture Back-end (85%) : Nos 2 devs back maintiennent 85% de couverture. Une exigence absolue pour verrouiller les flux financiers PayFIP, le calcul des avoirs et les réservations concurrentes.
[Clic 3] Analyse critique Front-end (< 30%) : Côté front, nous sommes sous les 30%. Nous avons blindé les tests unitaires sur les helpers et composants critiques, mais nous avons fait l'arbitrage assumé de ne pas faire d'E2E pour tenir la date de sortie estivale.
▶ Transition : "Cette gestion des compromis m'amène au cas d'arbitrage le plus instructif du projet : notre composant de DataTable..."
-->

---
layout: default
---

# Cas d'Arbitrage : La DataTable Bi-Mode (1/2) (C3.2.2)

<v-clicks>

- **Le besoin métier : Le composant pivot du Back-Office Agent**
  - Gestion des listes d'offres, créneaux, jauges, usagers et transactions financières.
  - Nécessité d'une expérience de recherche et de tri ultra-rapide pour les agents au guichet.

- **Le dilemme technique & La divergence de vision :**

</v-clicks>

<div class="grid grid-cols-2 gap-6 mt-4">
  <div class="p-4 border border-neutral-300 rounded bg-neutral-50">
    <div class="font-semibold text-neutral-900 mb-2">Option A : Vision Côté Client (Nicolas)</div>
    <div class="text-sm text-neutral-600 leading-relaxed">
      Tri, recherche et filtrage instantanés en mémoire via <strong>TanStack Table</strong> après fetch global. Zéro spinner, navigation instantanée, expérience d'application native.
    </div>
  </div>
  <div class="p-4 border border-neutral-300 rounded bg-neutral-50">
    <div class="font-semibold text-neutral-900 mb-2">Option B : Dogme Full-Backend (Équipe)</div>
    <div class="text-sm text-neutral-600 leading-relaxed">
      Pagination, tris et filtres délégués exclusivement à l'API à chaque frappe. Schéma classique, mais latence réseau à chaque interaction et dégradation forte de l'UX.
    </div>
  </div>
</div>

<!--
[Slide] "Dans tout projet, il arrive un moment où deux visions techniques s'opposent. Voici notre cas d'arbitrage majeur."
[Clic 1] Le besoin : Concevoir la surcouche de DataTable du Back-Office pour afficher les créneaux, offres et commandes. L'outil quotidien des agents de caisse.
[Clic 2] Option A (Ma vision UX) : Utiliser TanStack Table côté client avec un préchargement initial. Résultat : tri, recherche et filtrage instantanés en mémoire, zéro temps de chargement, une fluidité d'application native.
[Clic 3] Option B (L'habitude de l'équipe) : L'équipe soutenait le modèle 'full-backend' classique : refaire un appel API à chaque lettre tapée dans la recherche ou chaque clic de pagination. Une latence permanente pour l'agent au guichet.
▶ Transition : "Face à ce blocage, comment convaincre sans entrer dans un débat d'opinion ? Par la preuve du code..."
-->

---
layout: two-cols
---

# Résolution par le POC & Architecture Bi-Mode (C3.2.2)

::left::

### 1. La Démarche : Prouver par le POC

<v-clicks>

- **Développement d'un prototype autonome**
  - Démonstration mesurée de la fluidité TanStack Table sans saturation mémoire.
- **Adhésion immédiate**
  - Retours unanimes très positifs de l'UX Designer et du Lead Tech après démonstration.

</v-clicks>

::right::

### 2. Le Compromis : Le Bi-Mode

<v-clicks>

- **Architecture hybride pragmatique**
  - _Mode Client :_ Activé pour les volumétries API modérées.
  - _Mode Serveur :_ Débrayable pour les listings massifs.
- **Bonus fonctionnel immédiat :**
  - Export CSV et PDF direct depuis les données chargées en mémoire (choix : _page courante_ vs _totalité_) sans route API dédiée !

</v-clicks>

<!--
[Slide] "Ma démarche de lead a été pragmatique : développer un POC pour dépasser les positions dogmatiques."
[Clic 1] Le POC : En une demi-journée, j'ai codé un prototype fonctionnel. Démonstration devant le Lead Tech et l'UX Designer : la fluidité a parlé d'elle-même, l'adhésion a été immédiate.
[Clic 2] Le compromis Bi-Mode : Plutôt que d'imposer le 100% front, nous avons conçu un composant 'bi-mode'. Le mode client s'active par défaut sur les listes usuelles, et le mode serveur reste disponible pour les volumes géants.
[Clic 3] L'énorme bonus export : Les données étant en mémoire front, nous avons offert aux agents un bouton d'export CSV et PDF direct (page courante vs totalité de la table), sans coder la moindre route serveur supplémentaire !
▶ Transition : "Cette réussite technique s'enracine dans une dynamique d'équipe saine et un management adapté..."
-->

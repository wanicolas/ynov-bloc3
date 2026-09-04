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
⚙️ **OUTILLAGE (C3.2.1)** :
- Choix de Linear pour sa fluidité et son intégration GitHub native.
🤖 **AUTOMATISATION** :
- Zéro perte de temps à changer manuellement les colonnes d'un board.
- Les URLs de preview générées par la CI permettent de tester une feature en 30 secondes.
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
📊 **MÉTRIQUES DE SUIVI (C3.2.1)** :
- 1366 tickets clos sur 25 sprints = preuve d'un projet dense et maîtrisé.
🚀 **ACCÉLÉRATION DE VÉLOCITÉ** :
- La vélocité a progressé de 30% : gain de productivité direct grâce aux composants piliers réutilisables.
🎯 **RESPECT DÉLAIS/COÛTS** :
- Toutes les versions sont sorties aux dates prévues avec le périmètre attendu.
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
🧪 **QUALITÉ LOGICIELLE (C3.2.1)** :
- Stack qualité configurée par mes soins (TS strict, ESLint, Vitest, CI).
⚖️ **ANALYSE CRITIQUE (TRÈS APPRÉCIÉE DU JURY)** :
- 85% back : indispensable car gestion de transactions bancaires de l'État (PayFIP).
- < 30% front : arbitrage réaliste. On a privilégié les tests unitaires ciblés pour ne pas rater la deadline de release estivale.
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
⚖️ **ARBITRAGE TECHNIQUE (C3.2.2)** :
- Point d'orgue de la démarche de lead : résoudre un conflit technique sans dogmatisme.
🥊 **L'OPPOSITION** :
- L'équipe voulait du full-back par habitude.
- Je défendais l'UX guichet : un agent ne peut pas attendre 1 seconde à chaque touche de clavier pour trouver un usager.
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
🎯 **RÉSOLUTION PAR LE COMPROMIS (C3.2.2)** :
- **POC** : La meilleure arme contre les débats d'ego, c'est le code qui tourne.
- **Bi-mode** : Composant flexible qui répond à 100% des cas sans compromettre les perfs.
📄 **BONUS CSV** :
- Énorme valeur ajoutée pour les agents municipaux : export instantané en 1 clic de ce qu'ils ont filtré à l'écran.
-->

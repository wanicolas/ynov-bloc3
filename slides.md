---
theme: none
title: Coordonner et piloter un projet de développement d’applications logicielles
author: Nicolas WALTER
layout: cover
fonts:
  provider: none
  sans: "Hanken Grotesk"
  mono: "JetBrains Mono"
lineNumbers: false
drawings:
  persist: false
transition: fade
htmlAttrs:
  dir: ltr
  lang: fr
---

# Coordonner et piloter<br>un projet de développement<br>d’applications logicielles

<p class="text-xl text-neutral-500 mb-2">Titre RNCP 39583 (Niveau 7 / Master 2) <br> Expert en Développement Logiciel</p>
<p class="text-base text-neutral-400">Projet « Shop » & « Aqua Mulhouse » — Logitud Solutions</p>

<!--
🎯 **INTRO PERSO (1 min)** :
- Nicolas WALTER, alternant chez Logitud depuis août 2025.
- Rôle : Dev Front, référent accessibilité & qualité/CI, créateur des composants piliers BO et du Front Usager.
- **Projet** : Moteur e-commerce générique « Shop » + module métier « Aqua Mulhouse » pour la Ville de Mulhouse.
- **Enjeu de l'oral** : Démontrer la posture de coordination/lead tech sur 25 sprints (pilotage, arbitrages, équipe, client).
-->

---
layout: agenda
---

# Au programme

<Agenda :items="[
  { number: '01', title: 'Cadrage & Planification' },
  { number: '02', title: 'Pilotage & Arbitrages' },
  { number: '03', title: 'Management & Compétences' },
  { number: '04', title: 'Relation Client & Démo' }
]" />

<!--
⏱️ **TIMING DU TALK** :
- ~23 minutes d'exposé méthodologique & technique.
- ~6 à 7 minutes de démonstration live en fin de parcours.
- 4 axes alignés sur les compétences du référentiel RNCP Bloc 3.
-->

---
layout: default
---

# Contexte Entreprise & Dette Technique

<v-clicks>

- **L'écosystème Logitud & Mon Guichet**
  - Éditeur majeur de progiciels pour collectivités territoriales.
  - _Mon Guichet_ : plateforme de GRU (Gestion de la Relation Usager) déployée auprès des citoyens.

- **La problématique : Un module historique obsolète**
  - La Ville de Mulhouse utilisait un ancien plugin piscines (« aqua shop ») depuis plusieurs années.
  - Dette technique critique : code rigide, inmaintenable, limitations fonctionnelles et UX datée.

- **Le déclencheur & L'opportunité stratégique**
  - Mulhouse finance la refonte complète de leur billetterie aquatique.
  - _Choix Logitud :_ Refus du développement spécifique jetable ➔ Conception d'un véritable **moteur e-commerce générique (« Shop »)** amorti sur toutes les collectivités, surmonté du plugin métier **« Aqua Mulhouse »**.

</v-clicks>

<!--
🏢 **LOGITUD & MON GUICHET** :
- Spécialiste du secteur public local. *Mon Guichet* = colonne vertébrale des démarches citoyennes.
⚠️ **LE PROBLÈME** :
- Vieux plugin Mulhouse à bout de souffle, dette accumulée, coût de maintenance intenable.
💡 **L'OPPORTUNITÉ PRODUIT** :
- Mulhouse finance la refonte ➔ Arbitrage stratégique : ne pas faire un "one-shot" spécifique, mais créer le produit e-commerce pérenne de Logitud.
-->

---
layout: two-cols
---

# Architecture & Vision Produit

::left::

### Moteur Cœur « Shop »

<v-clicks>

- **Socle e-commerce générique**
  - Gestion du catalogue, offres, tarifs, jauges et paiements d'État (PayFIP).
  - Back-end modulaire en **NestJS**.
  - Front-end moderne en **Nuxt 4 / NuxtUI**.
- **Pérennité & Réutilisabilité**
  - Cœur mutualisé pour l'ensemble des futures collectivités clientes de Logitud.

</v-clicks>

::right::

### Plugin Métier « Aqua Mulhouse »

<v-clicks>

- **Surcouche métier piscines**
  - Stratégies de vente spécifiques, gestion des bassins, créneaux et abonnements annuels.
- **Intégration Nginx transparente**
  - Intégration via reverse-proxy Nginx dans _Mon Guichet_.
  - Rénovation UI/UX radicale pour les usagers et agents, sans rupture de continuité de service.

</v-clicks>

<!--
🏗️ **ARCHITECTURE CORE / PLUGIN** :
- **Shop** = moteur headless générique (NestJS + Nuxt 4).
- **Aqua Mulhouse** = plugin de vente métier (spécificités aquatiques m2A).
🔀 **NGINX REVERSE PROXY** :
- Intégration transparente dans Mon Guichet : les agents municipaux conservent leurs repères, mais profitent d'une stack moderne et ultra-réactive.
-->

---
layout: default
---

# Organisation Méthodologique (C3.1)

<v-clicks>

- **Cadre Agile Scrum en sprints de 2 semaines**
  - _Pourquoi Scrum ?_ Rythme itératif prédictible, adapté aux dépendances fortes entre Front, Back, UX et Client.
  - _Pourquoi pas le Cycle en V ?_ Effet tunnel trop risqué ; incapacité d'adapter les règles métiers tarifaires en cours de route.
  - _Pourquoi pas Kanban pur ?_ Nécessité d'échéances fixes contractuelles pour synchroniser la Direction et la réouverture estivale des bassins.

- **Rituels structurants de l'équipe**
  - **Sprint Planning (2h) :** Découpage des US, estimation de complexité, engagement collectif.
  - **Daily Stand-up (15 min) :** Synchronisation quotidienne, levée immédiate des blocages.
  - **Sprint Review & Démo (1h) :** Présentation en direct sur l'environnement de préproduction avec la cliente.
  - **Rétrospective (1h) :** Analyse des frictions du cycle, amélioration continue du process.

</v-clicks>

<!--
🔄 **MÉTHODOLOGIE (C3.1)** :
- Scrum 2 semaines = équilibre parfait souplesse / engagement client.
⚖️ **ARBITRAGE MÉTHODO** :
- Cycle en V rejeté (trop rigide pour un produit nouveau).
- Kanban rejeté (besoin de jalons fixes pour sécuriser la mise en prod de juin).
⏱️ **RITUELS** :
- Dailies courts et efficaces (15 min chrono).
- Démo réelle sur préproduction à chaque fin de sprint.
-->

---
layout: default
---

# Gouvernance & Matrice RACI (C3.1)

| Rôle dans le projet           | Acteur(s)            | Missions principales                                              |   RACI    |
| :---------------------------- | :------------------- | :---------------------------------------------------------------- | :-------: |
| **Direction Logitud**         | Direction générale   | Arbitrage des budgets globaux et des échéances contractuelles     |   **A**   |
| **Lead Tech Front & CP**      | 1 Dev / CP           | Pilotage du backlog, arbitrages techniques finaux et coordination | **A / R** |
| **UI/UX Designer**            | 1 Designer           | Conception des parcours usagers et agents, validation ergonomique |   **R**   |
| **Référent Qualité / A11y**   | **Nicolas Walter**   | **Front Usager complet, outillage CI/CD, A11y, piliers BO**       |   **R**   |
| **Équipe Dév Front**          | 4 Développeurs       | Développement des fonctionnalités Back-Office et intégration      |   **R**   |
| **Équipe Dév Back**           | 2 Développeurs       | Architecture APIs NestJS, logique Core Shop et plugins métiers    |   **R**   |
| **Équipe DevOps**             | Équipe partagée      | Infrastructure serveurs, runners CI/CD et reverse-proxy Nginx     |   **C**   |
| **Cliente Ville de Mulhouse** | Responsable piscines | Expression des besoins, recettes utilisateurs et retours d'usage  | **C / I** |

<!--
👥 **GOUVERNANCE (C3.1)** :
- Équipe pluridisciplinaire de 8 personnes dédiées + DevOps partagé.
🎯 **MON POSITIONNEMENT** :
- Responsable de bout en bout du Front Usager « Aqua Mulhouse ».
- Lead qualité / CI pour harmoniser le travail des 5 devs front.
- Concepteur des composants clés en BO agent.
-->

---
layout: default
---

# Feuille de Route & Jalons de Réalisation (C3.1)

<div class="grid grid-cols-5 gap-3 my-6 text-sm">
  <div class="p-3 border border-neutral-300 rounded bg-neutral-50">
    <div class="font-mono text-xs text-neutral-500 mb-1">AOÛT 2025</div>
    <div class="font-semibold text-neutral-900 mb-1">Cadrage & Socle</div>
    <div class="text-xs text-neutral-600">Archi Nest/Nuxt, maquettes UX, routing Nginx, setup CI/CD.</div>
  </div>
  <div class="p-3 border border-neutral-300 rounded bg-neutral-50">
    <div class="font-mono text-xs text-neutral-500 mb-1">19 JUIN 2026</div>
    <div class="font-semibold text-neutral-900 mb-1">v1.0.0 Go-Live</div>
    <div class="text-xs text-neutral-600">Prod m2A : abonnements, PayFIP, panier 30min, BO agent.</div>
  </div>
  <div class="p-3 border border-neutral-300 rounded bg-neutral-50">
    <div class="font-mono text-xs text-neutral-500 mb-1">JUILLET 2026</div>
    <div class="font-semibold text-neutral-900 mb-1">v1.1 & v1.2</div>
    <div class="text-xs text-neutral-600">Charge des activités, feuilles de présence, ajustements prix & avoirs.</div>
  </div>
  <div class="p-3 border border-neutral-300 rounded bg-neutral-50">
    <div class="font-mono text-xs text-neutral-500 mb-1">AOÛT 2026</div>
    <div class="font-semibold text-neutral-900 mb-1">v1.3.0 Entrées</div>
    <div class="text-xs text-neutral-600">Billetterie unitaire usager, planning des jauges par bassin.</div>
  </div>
  <div class="p-3 border border-neutral-300 rounded bg-neutral-50">
    <div class="font-mono text-xs text-neutral-500 mb-1">SEPT. 2026</div>
    <div class="font-semibold text-neutral-900 mb-1">v1.4.0 Analytics</div>
    <div class="text-xs text-neutral-600">Tunnel configurable, questionnaire natation, stats comptables.</div>
  </div>
</div>

<v-clicks>

- **Découpage par lots à forte valeur ajoutée :** Priorisation de l'ouverture de la saison estivale (v1.0.0).
- **Points de vigilance maîtrisés :** Sécurisation de l'intégration PayFIP et gestion de la haute concurrence sur les créneaux.

</v-clicks>

<!--
🗺️ **ROADMAP (C3.1)** :
- Projet d'1 an de run continu (25 sprints).
🎯 **JALON CLÉ DU 19 JUIN (v1.0.0)** :
- Échéance non négociable : réouverture des inscriptions estivales.
📈 **MONTÉE EN PUISSANCE** :
- Socle abonnements d'abord, puis module charges/présence, puis billetterie unitaire, puis tunnel configurable.
-->

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

---
layout: default
---

# Styles Managériaux & Dynamique d'Équipe (C3.3.1)

<v-clicks>

- **Application du Management Situationnel (Hersey & Blanchard)**
  - _Style Participatif / Délégatif (avec l'équipe technique & UX) :_ Co-conception des solutions, autonomie sur les choix d'implémentation, responsabilisation sur les composants front.
  - _Style Directif / Persuasif (avec les contraintes externes) :_ Cadrage rigoureux des délais contractuels et respect strict des critères d'acceptation de la Direction.

- **Leviers de motivation et d'implication collective**
  - **Au Sprint Planning :** Affectation des User Stories selon les compétences mais aussi l'appétence (« qui kiffait quoi »), renforçant l'engagement naturel.
  - **En Sprint Review :** Rituel de reconnaissance mutuelle, valorisation des efforts fournis et partage ouvert des ressentis.

</v-clicks>

<!--
🤝 **STYLES MANAGÉRIAUX (C3.3.1)** :
- Citer **Hersey & Blanchard** : posture adaptée selon le niveau d'autonomie et les enjeux.
- Délégatif avec les développeurs autonomes, persuasif face aux contraintes direction.
❤️ **MOTIVATION** :
- Donner aux devs les tickets qui les passionnent booste la vélocité.
- Félicitations en review : entretenir un climat positif et bienveillant.
-->

---
layout: default
---

# Communication Interne & Gestion des Désaccords (C3.3.1)

<v-clicks>

- **Canaux & Rituels collaboratifs**
  - **Slack :** Canaux thématiques dédiés (`#projet-shop`, `#releases`, `#dev-front`) pour les échanges asynchrones ; huddles rapides pour débloquer les points techniques.
  - **Transparence totale :** Centralisation des spécifications et des décisions d'architecture.

- **Gestion saine et constructive des divergences**
  - Débats techniques ouverts basés sur des éléments factuels (POC, métriques, retours UX).
  - En cas d'impasse : arbitrage souverain et tranché par le binôme Lead Tech Front / Chef de Projet.
  - **Posture professionnelle :** Alignement immédiat de toute l'équipe dès la décision actée (« adultes payés pour avancer ensemble »).

</v-clicks>

<!--
💬 **COMMUNICATION (C3.3.1)** :
- Slack pour l'asynchrone sans interrompre le flow des développeurs.
🛡️ **DÉSACCORDS ET CONFLITS** :
- Le désaccord technique est sain s'il est argumenté.
- Quand le lead tranche, tout le monde soutient la décision : zéro ressentiment, posture 100% pro.
-->

---
layout: two-cols
---

# Évaluation & Montée en Compétences (C3.3.2)

::left::

### Matrice de Compétences de l'Équipe

| Domaine de compétence    |  Niveau Initial   |  Niveau Cible   |
| :----------------------- | :---------------: | :-------------: |
| **Front Nuxt 4 / Vue 3** |   Intermédiaire   |   **Avancé**    |
| **Architecture NestJS**  |     Confirmé      |   **Expert**    |
| **TypeScript Strict**    | Débutant / Inter. |  **Confirmé**   |
| **Tests Vitest & CI**    |     Débutant      |  **Confirmé**   |
| **Accessibilité (A11y)** |    Très faible    | **Sensibilisé** |

::right::

### Plan d'Action & Transmission

<v-clicks>

- **Binômage & Peer-Programming**
  - Entraide quotidienne sur les technologies connues pour harmoniser le niveau de code.
- **Tech-Talks & Ateliers d'Échange**
  - Présentations internes sur les nouvelles méthodologies (mise en place de Vitest, conventions CI/CD, TanStack Table).
  - Montée en compétence collective continue sans impacter la cadence du sprint.

</v-clicks>

<!--
📈 **PLAN DE COMPÉTENCES (C3.3.2)** :
- Matrice claire des écarts de compétences au démarrage.
👥 **TRANSMISSION DES SAVOIRS** :
- Pair programming sur le quotidien.
- Ateliers / présentations pour faire monter l'équipe sur Vitest, TS strict et l'industrialisation.
-->

---
layout: default
---

# Inclusion & Diagnostic Accessibilité (C3.3.1 / C3.3.2)

<v-clicks>

- **Accessibilité numérique (RGAA) : Une analyse critique lucide**
  - _Constat initial :_ Seuls 2 développeurs dans l'équipe maîtrisaient les normes d'accessibilité.
  - _Dilemme projet :_ L'effort de relecture systématique des PRs et de correction a11y menaçait directement les délais de release estivaux.
  - _Décision d'arbitrage :_ Abandon d'un audit formel complet RGAA ; sécurisation maximale du Front Usager via les composants natifs accessibles de **NuxtUI** et un soin particulier sur le tunnel de commande.

- **Prise en compte des conditions de travail et du handicap**
  - Flexibilité des horaires et politique de télétravail adaptée pour respecter les rythmes individuels.
  - Équipements ergonomiques (postes adaptés, double affichage, prise en compte de la fatigue visuelle).
  - Équilibrage de la charge cognitive lors des phases intenses précédant les mises en production.

</v-clicks>

<!--
♿ **INCLUSION & A11Y (C3.3.1 & C3.3.2)** :
- **Transparence totale** : Le jury apprécie les choix assumés. Vouloir 100% RGAA avec 2 sachants aurait fait exploser le budget et les délais.
- **NuxtUI** a servi de garde-fou grâce à son accessibilité native (ARIA, navigation clavier).
🧘 **BIEN-ÊTRE ÉQUIPE** :
- Télétravail souple, ergonomie, prévention du burn-out avant les grosses releases.
-->

---
layout: default
---

# Suivi Client & Comptes Rendus (C3.4.1)

<v-clicks>

- **Une collaboration continue avec la Ville de Mulhouse (m2A)**
  - Interlocutrice dédiée : la responsable de la gestion des piscines de l'agglomération.
  - Démarche de co-construction basée sur la confiance et la transparence.

- **Le cycle de validation client en 4 étapes :**
  - **1. Cadrage en amont :** Re-consultation en début de sprint (visio/mail) pour valider la priorité des US à développer.
  - **2. Démonstration de sprint :** Présentation live des fonctionnalités en Sprint Review sur la préproduction.
  - **3. Recette municipale :** Phase de test en conditions réelles par la cliente et ses équipes.
  - **4. Boucle de feedback :** Retours analysés et traités (si justifiés, faisables et dans les délais) ➔ re-test ➔ déploiement en production.

- **Traçabilité formalisée :** Publication systématique de **Notes de version Linear** et du **Changelog GitHub** pour chaque jalon de release.

</v-clicks>

<!--
🤝 **RELATION CLIENT (C3.4.1)** :
- Partenaire engagée (chargée des piscines m2A).
🔄 **CYCLE DE VALIDATION** :
- Cadrage début de sprint ➔ Démo review ➔ Test équipe municipale ➔ Retours traités ➔ Prod.
📝 **NOTES DE VERSION** :
- Notes Linear réelles montrant le suivi version après version (v1.0 à v1.4).
-->

---
layout: default
---

# Indicateurs de Satisfaction Client (C3.4.1)

<div class="grid grid-cols-3 gap-6 my-6 text-center">
  <div class="p-5 border border-neutral-300 rounded-lg bg-neutral-50">
    <div class="text-3xl font-mono font-semibold text-neutral-900 mb-2">100 %</div>
    <div class="text-xs text-neutral-500 uppercase tracking-wider mb-2">Acceptation US Clés</div>
    <div class="text-xs text-neutral-600">Validation sans réserve des fonctionnalités lors des démos de sprint.</div>
  </div>
  <div class="p-5 border border-neutral-300 rounded-lg bg-neutral-50">
    <div class="text-3xl font-mono font-semibold text-neutral-900 mb-2">< 48 h</div>
    <div class="text-xs text-neutral-500 uppercase tracking-wider mb-2">Réactivité Retours</div>
    <div class="text-xs text-neutral-600">Prise en compte et intégration rapide des retours de recette cliente.</div>
  </div>
  <div class="p-5 border border-neutral-300 rounded-lg bg-neutral-50">
    <div class="text-3xl font-mono font-semibold text-neutral-900 mb-2">0 Crash</div>
    <div class="text-xs text-neutral-500 uppercase tracking-wider mb-2">Stabilité en Prod</div>
    <div class="text-xs text-neutral-600">Succès des fortes charges d'inscriptions estivales sur e-services m2A.</div>
  </div>
</div>

<v-clicks>

- **Adhésion opérationnelle des agents :** Gains d'ergonomie majeurs au guichet sur la réservation « En tant que » et la consultation des jauges par rapport à l'ancien plugin.

</v-clicks>

<!--
📈 **INDICATEURS SATISFACTION (C3.4.1)** :
- Taux de conformité des US : validation continue par la cliente.
- Réactivité : boucle de feedback fermée en moins de 48h sur préprod.
- Stabilité : épreuve du feu réussie lors des réinscriptions massives de l'été 2026.
-->

---
layout: default
---

# Cadrage de la Démonstration Logicielle (C3.4.2)

<p class="text-base text-neutral-500 mb-4">Démonstration de la synchronisation de bout en bout entre le Front Usager et le Back-Office Agent.</p>

<div class="grid grid-cols-2 gap-6 my-4">
  <div class="p-5 border border-neutral-300 rounded-lg bg-neutral-50">
    <div class="font-semibold text-neutral-900 mb-3 flex items-center gap-2">
      <span class="font-mono text-sm px-2 py-0.5 bg-neutral-200 rounded">ACTE 1</span>
      <span>Front-Office Usager (Aqua Mulhouse)</span>
    </div>
    <ul class="text-sm text-neutral-700 space-y-1.5">
      <li>Consultation de la page des entrées de piscines</li>
      <li>Sélection d'un bassin et d'un créneau horaire</li>
      <li>Ajout au panier</li>
      <li>Application d'un voucher de réduction</li>
      <li>Simulation et validation du paiement PayFIP</li>
    </ul>
  </div>

  <div class="p-5 border border-neutral-300 rounded-lg bg-neutral-50">
    <div class="font-semibold text-neutral-900 mb-3 flex items-center gap-2">
      <span class="font-mono text-sm px-2 py-0.5 bg-neutral-200 rounded">ACTE 2</span>
      <span>Back-Office Agent (Shop)</span>
    </div>
    <ul class="text-sm text-neutral-700 space-y-1.5">
      <li>Consultation des créneaux via la DataTable bi-mode</li>
      <li>Démonstration de la réservation « En tant que » au guichet</li>
      <li>Vérification immédiate du détail de la commande passée à l'Acte 1</li>
      <li>Démonstration de l'export CSV instantané</li>
    </ul>
  </div>
</div>

<!--
🎬 **CADRAGE DÉMO (C3.4.2)** :
- Annoncer clairement le scénario au jury : parcours usager citoyen puis bascule agent guichet.
- Montrer que les 2 briques communiquent en temps réel via l'API NestJS.
-->

---
layout: default
---


<iframe src="https://mulhouse4.staging.numesia.fr" height="100%" width="100%" class="zoom-60"
></iframe>

<!--
💻 **ACTION LIVE DEMO (5 à 7 min)** :
1. Basculer sur le navigateur (local / préprod).
2. **Acte 1 FO** : Choix piscine ➔ créneau ➔ panier ➔ voucher ➔ validation commande.
3. **Acte 2 BO** : Ouvrir la DataTable custom (montrer la recherche rapide + export CSV).
4. Ouvrir la commande tout juste passée en FO.
5. Montrer la réservation « En tant que » pour l'agent.
-->

---
layout: default
---

# Bilan du Projet & Posture d'Ingénieur

<v-clicks>

- **Bilan opérationnel du projet**
  - Moteur e-commerce générique « Shop » capitalisé pour le catalogue de Logitud.
  - Déclinaison « Aqua Mulhouse » en production avec succès sur `e-services.mulhouse-alsace.fr`.
  - 25 sprints menés avec une vélocité croissante et une qualité logicielle industrialisée.

- **Enseignements sur la posture de Lead / Coordinateur Technique**
  - **Pragmatisme & Écoute :** Privilégier la démonstration par la preuve (POC) plutôt que l'affrontement dogmatique.
  - **Arbitrage équilibré :** Savoir concilier pureté technique, réalité budgétaire et contraintes de délais.
  - **Fédération de l'équipe :** Aligner les compétences et les passions pour maintenir l'engagement durable.

</v-clicks>

<!--
🎓 **BILAN & CONCLUSION** :
- **Succès projet** : Objectifs tenus, satisfaction cliente, produit réutilisable.
- **Posture Lead Tech** : Le lead technique n'impose pas, il éclaire, arbitre avec pragmatisme et tire l'équipe vers le haut.
-->

---
layout: end
---

# Merci de votre attention !

<p class="text-xl text-neutral-500 mb-6">Je suis à votre disposition pour échanger et répondre à vos questions.</p>

<!--
❓ **Q&A (15 min)** :
- Remercier chaleureusement le jury.
- Garder les slides d'annexes prêtes si des questions techniques pointues sont posées.
-->

---
layout: section
---

# Annexes Techniques

<!--
📚 **ANNEXES** :
- Slides de réserve pour le temps de questions avec le jury.
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
🔧 **ANNEXE CI/CD** :
- À dégainer si le jury pose des questions sur l'automatisation des tests ou les environnements de preview.
-->

---
layout: default
---

# Annexe 2 : Architecture Modulaire Core / Plugin

<v-clicks>

- **Découplage strict entre Moteur Core et Stratégie Métier :**
  - **Shop Core (NestJS) :** Modules génériques d'entités (`CatalogModule`, `CartModule`, `OrderModule`, `PaymentModule`).
  - **Aqua Mulhouse Plugin :** Implémentation de la stratégie de vente aquatique (`PoolStrategy`, `PassRegistry`, `AttendanceModule`).
- **Architecture Front-End (Nuxt 4) :**
  - Utilisation des Nuxt Layers pour partager les composants socles du Back-Office.
  - Séparation nette entre le Back-Office Agent (interfacé Mon Guichet) et le Front-Office Usager grand public.

</v-clicks>

<!--
🏛️ **ANNEXE ARCHI** :
- À dégainer si le jury demande comment le code de Mulhouse est isolé du cœur générique Shop.
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
📋 **ANNEXE FLUX DE TRAVAIL** :
- À dégainer si le jury interroge sur la gouvernance Git, le GitFlow ou l'interaction exacte Linear ↔ GitHub.
-->

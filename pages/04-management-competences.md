---
layout: default
---

# Styles Managériaux & Dynamique d'Équipe (C3.3.1)

<v-clicks>

- **Application du Management Situationnel (Hersey & Blanchard)**
  - _Style Participatif / Délégatif (avec l'équipe technique & UX) :_ Co-conception des solutions, autonomie sur les choix d'implémentation, responsabilisation sur les composants front.
  - _Style Directif / Persuasif (avec les contraintes externes) :* Cadrage rigoureux des délais contractuels et respect strict des critères d'acceptation de la Direction.

- **Leviers de motivation et d'implication collective**
  - **Au Sprint Planning :** Affectation des User Stories selon les compétences mais aussi l'appétence (« qui kiffait quoi »), renforçant l'engagement naturel.
  - **En Sprint Review :** Rituel de reconnaissance mutuelle, valorisation des efforts fournis et partage ouvert des ressentis.

</v-clicks>

<!--
[Slide] "Animer une équipe de développement exige d'adapter sa posture managériale au contexte."
[Clic 1] Management situationnel : J'utilise le modèle d'Hersey et Blanchard. Avec nos développeurs et l'UX Designer, le style est participatif et délégatif : co-conception, autonomie sur l'implémentation et responsabilisation sur les modules.
[Clic 2] Face aux impératifs de délais : Le style devient directif et persuasif pour respecter les jalons contractuels et imposer le passage des tests en CI.
[Clic 3] Motivation au Sprint Planning : Lors de l'affectation, nous prenons en compte les compétences mais aussi l'appétence personnelle : 'qui kiffe quoi'. Un développeur qui aime son sujet est deux fois plus impliqué.
[Clic 4] Reconnaissance en Sprint Review : En review, on ne fait pas que des démos : on félicite publiquement le travail accompli pour entretenir un esprit d'équipe fort.
▶ Transition : "Mais que se passe-t-il lorsque des visions techniques s'opposent au quotidien ?..."
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
[Slide] "Une équipe performante n'est pas une équipe sans désaccords, c'est une équipe qui sait les canaliser."
[Clic 1] Outils collaboratifs : Slack est notre canal central. Des canaux thématiques pour l'asynchrone sans interrompre le dev, et des huddles de 5 minutes dès qu'un blocage surgit.
[Clic 2] Débat technique factuel : Les divergences de vision sont saines dès lors qu'elles reposent sur des preuves : benchmarks, POC ou retours d'usage, et jamais sur des égos.
[Clic 3] Arbitrage final : En cas de blocage persistant, le Lead Tech Front et le Chef de Projet tranchent la décision.
[Clic 4] Posture professionnelle : Dès que l'arbitrage est rendu, l'ensemble de l'équipe s'aligne et exécute. Nous sommes des adultes payés pour faire avancer le projet ensemble.
▶ Transition : "Pour maintenir cette cadence, nous devions aussi faire monter en compétences l'ensemble de l'équipe..."
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
[Slide] "Dès le démarrage, nous avons cartographié les compétences de l'équipe pour identifier les besoins de formation."
[Clic 1] La matrice de compétences : Un bon niveau en NestJS côté back, mais une forte marge de progression sur Nuxt 4, le TypeScript strict, les tests Vitest et l'accessibilité numérique.
[Clic 2] Le peer-programming : Sur la stack connue, nous avons instauré du binômage quotidien. Développer à deux sur des User Stories complexes permet de partager les patterns sans bloquer le sprint.
[Clic 3] Les tech-talks internes : Pour les sujets nouveaux comme Vitest, l'intégration continue ou TanStack, nous organisions des présentations d'équipe pour élever le niveau de jeu collectif.
▶ Transition : "Cette politique de compétences a rencontré ses limites sur un sujet très exigeant : l'accessibilité numérique..."
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
[Slide] "Sur l'accessibilité numérique et le RGAA, je souhaite partager avec vous un diagnostic d'ingénieur 100% lucide."
[Clic 1] Le constat de départ : Seuls 2 développeurs dans l'équipe maîtrisaient réellement l'accessibilité. Le temps requis pour relire chaque PR et former l'équipe mettait en péril la date de livraison.
[Clic 2] L'arbitrage assumé : Viser un audit formel 100% conforme aurait coûté trop cher en temps et budget. Notre choix pragmatique : capitaliser sur l'accessibilité native de NuxtUI (ARIA, focus clavier) et concentrer notre énergie sur le tunnel d'achat usager. Nous ne passerions pas un audit strict, mais le service est utilisable par le plus grand nombre.
[Clic 3] Conditions de travail de l'équipe : Télétravail souple, postes ergonomiques, et veille attentive sur la charge cognitive pour éviter l'épuisement avant les grosses releases.
▶ Transition : "Abordons maintenant le suivi avec notre commanditaire : la Ville de Mulhouse..."
-->

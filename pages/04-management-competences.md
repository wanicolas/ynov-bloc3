---
layout: default
---

# Styles Managériaux & Dynamique d'Équipe (C3.3.1)

<v-clicks>

- **Management Situationnel : Participatif & Délégatif (Tech & UX)**
  - Co-conception des solutions, autonomie d'implémentation, responsabilisation sur les composants front.
- **Management Situationnel : Directif & Persuasif (Délais & Direction)**
  - Cadrage rigoureux des échéances contractuelles, respect strict des critères d'acceptation.
- **Motivation au Sprint Planning**
  - Affectation des US selon les compétences mais aussi l'appétence (« qui kiffait quoi »), renforçant l'engagement.
- **Reconnaissance en Sprint Review**
  - Rituel de valorisation mutuelle, célébration des victoires d'équipe et partage ouvert des ressentis.

</v-clicks>

<!--
"Animer une équipe de développement exige d'adapter sa posture managériale au contexte."

[click] Management situationnel : J'utilise le modèle d'Hersey et Blanchard. Avec nos développeurs et l'UX Designer, le style est participatif et délégatif : co-conception, autonomie sur l'implémentation et responsabilisation sur les modules.

[click] Face aux impératifs de délais : Le style devient directif et persuasif pour respecter les jalons contractuels et imposer le passage des tests en CI.

[click] Motivation au Sprint Planning : Lors de l'affectation, nous prenons en compte les compétences mais aussi l'appétence personnelle : 'qui kiffe quoi'. Un développeur qui aime son sujet est deux fois plus impliqué.

[click] Reconnaissance en Sprint Review : En review, on ne fait pas que des démos : on félicite publiquement le travail accompli pour entretenir un esprit d'équipe fort.

▶ Transition : "Mais que se passe-t-il lorsque des visions techniques s'opposent au quotidien ?..."
-->

---
layout: default
---

# Communication Interne & Gestion des Désaccords (C3.3.1)

<v-clicks>

- **Canaux & Rituels collaboratifs (Slack & Huddles)**
  - Canaux thématiques (`#projet-shop`, `#releases`, `#dev-front`) pour l'asynchrone ; huddles rapides pour lever les blocages.
- **Débats techniques factuels**
  - Divergences basées sur des preuves tangibles : POCs, benchmarks, retours UX (rejet des querelles d'ego).
- **Arbitrage souverain en cas d'impasse**
  - Décision finale tranchée par le binôme Lead Tech Front / Chef de Projet.
- **Posture professionnelle d'équipe**
  - Alignement immédiat de l'équipe dès l'arbitrage rendu (« adultes payés pour avancer ensemble »).

</v-clicks>

<!--
"Une équipe performante n'est pas une équipe sans désaccords, c'est une équipe qui sait les canaliser."

[click] Outils collaboratifs : Slack est notre canal central. Des canaux thématiques pour l'asynchrone sans interrompre le dev, et des huddles de 5 minutes dès qu'un blocage surgit.

[click] Débat technique factuel : Les divergences de vision sont saines dès lors qu'elles reposent sur des preuves : benchmarks, POC ou retours d'usage, et jamais sur des égos.

[click] Arbitrage final : En cas de blocage persistant, le Lead Tech Front et le Chef de Projet tranchent la décision.

[click] Posture professionnelle : Dès que l'arbitrage est rendu, l'ensemble de l'équipe s'aligne et exécute. Nous sommes des adultes payés pour faire avancer le projet ensemble.

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
  - Présentations internes sur les nouvelles méthodologies (Vitest, CI/CD, TanStack Table).
  - Montée en compétence collective continue sans impacter la cadence du sprint.

</v-clicks>

<!--
"Dès le démarrage, nous avons cartographié les compétences de l'équipe pour identifier les besoins de formation."

La matrice de compétences : Un bon niveau en NestJS côté back, mais une forte marge de progression sur Nuxt 4, le TypeScript strict, les tests Vitest et l'accessibilité numérique.

[click] Le peer-programming : Sur la stack connue, nous avons instauré du binômage quotidien. Développer à deux sur des User Stories complexes permet de partager les patterns sans bloquer le sprint.

[click] Les tech-talks internes : Pour les sujets nouveaux comme Vitest, l'intégration continue ou TanStack, nous organisions des présentations d'équipe pour élever le niveau de jeu collectif.

▶ Transition : "Cette politique de compétences a rencontré ses limites sur un sujet très exigeant : l'accessibilité numérique..."
-->

---
layout: default
---

# Inclusion & Diagnostic Accessibilité (C3.3.1 / C3.3.2)

<v-clicks>

- **Constat initial : Seuls 2 développeurs formés aux normes RGAA**
  - Risque majeur : le coût de relecture et de correction systématique menaçait directement les délais de release estivaux.
- **Arbitrage pragmatique : Sécurisation ciblée plutôt qu'audit formel**
  - Abandon d'un audit complet RGAA ; capitalisation sur les composants natifs accessibles de **NuxtUI** et blindage du tunnel d'achat.
- **Conditions de travail & ergonomie de l'équipe**
  - Flexibilité des horaires et politique de télétravail adaptée pour respecter les rythmes individuels.
  - Équipements ergonomiques (postes adaptés, double affichage) et régulation de la charge cognitive.

</v-clicks>

<!--
"Sur l'accessibilité numérique et le RGAA, je souhaite partager avec vous un diagnostic d'ingénieur 100% lucide."

[click] Le constat de départ : Seuls 2 développeurs dans l'équipe maîtrisaient réellement l'accessibilité. Le temps requis pour relire chaque PR et former l'équipe mettait en péril la date de livraison.

[click] L'arbitrage assumé : Viser un audit formel 100% conforme aurait coûté trop cher en temps et budget. Notre choix pragmatique : capitaliser sur l'accessibilité native de NuxtUI (ARIA, focus clavier) et concentrer notre énergie sur le tunnel d'achat usager. Nous ne passerions pas un audit strict, mais le service est utilisable par le plus grand nombre.

[click] Conditions de travail de l'équipe : Télétravail souple, postes ergonomiques, et veille attentive sur la charge cognitive pour éviter l'épuisement avant les grosses releases.

▶ Transition : "Abordons maintenant le suivi avec notre commanditaire : la Ville de Mulhouse..."
-->

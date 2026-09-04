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

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
[Slide] "Piloter 8 personnes sur un produit à fortes dépendances impose une rigueur méthodologique claire."
[Clic 1] Le choix de Scrum : Nous avons choisi Scrum avec des sprints de 2 semaines. C'est la cadence idéale pour synchroniser le dev front, l'API back, les maquettes et les validations clientes régulières.
[Clic 2] Pourquoi pas le V ou Kanban ? Le cycle en V a été rejeté d'emblée : trop d'inconnues sur les règles métiers de Mulhouse, l'effet tunnel aurait été fatal. Et Kanban ne convenait pas car il nous fallait des jalons temporels fermes pour sécuriser la réouverture estivale des bassins.
[Clic 3] Les 4 rituels : Sprint Planning de 2h pour calibrer l'effort, Dailies stricts de 15 min chaque matin, Sprint Review avec démo sur préprod devant la cliente, et Rétrospectives pour optimiser nos flux de travail.
▶ Transition : "Cette méthodologie s'incarne dans une gouvernance claire, formalisée dans notre matrice RACI..."
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
[Slide] "Voici la cartographie des rôles et notre matrice RACI sur ce projet."
- "La Direction générale est 'Accountable' sur le respect de l'enveloppe budgétaire et les engagements contractuels."
- "Le pilotage est assuré par un binôme soudé : notre Lead Tech Front / Chef de Projet et notre UI/UX Designer."
- "Mon positionnement personnel : En tant que développeur front et référent qualité, je suis 'Responsible' de l'intégralité du Front Usager Aqua Mulhouse, du socle CI/CD, des normes a11y, et des composants piliers du Back-Office."
- "L'équipe s'appuie sur 4 autres devs front, 2 devs back NestJS, une équipe DevOps transverse pour l'infrastructure Nginx, et notre interlocutrice à la Ville de Mulhouse pour la validation continue."
▶ Transition : "Avec cette gouvernance en place, comment avons-nous planifié notre calendrier ? Regardons la feuille de route..."
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
    <div class="font-semibold text-neutral-900 mb-1">JUILLET 2026</div>
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
[Slide] "Le projet s'est déployé sur plus d'un an, découpé en 5 jalons de release majeurs."
[Clic 1] Août 2025 : Cadrage initial, socle technique Nest/Nuxt, maquettage et mise en place de la CI.
[Clic 2] 19 Juin 2026 - v1.0.0 : Notre jalon critique absolu. Ouverture en production sur e-services.mulhouse-alsace.fr pour les inscriptions estivales : abonnements, panier temporisé et passerelle PayFIP.
[Clic 3] Juillet 2026 - v1.1 & v1.2 : Module de charge des bassins, génération de feuilles de présence pour maîtres-nageurs et gestion des avoirs.
[Clic 4] Août 2026 - v1.3.0 : Déploiement de la billetterie unitaire des entrées en piscine.
[Clic 5] Septembre 2026 - v1.4.0 : Tout récent, tunnel d'achat personnalisable côté BO et questionnaire d'auto-évaluation natation.
▶ Transition : "Pour piloter ces 25 sprints sans dériver, nous avions besoin d'un outillage de suivi ultra-connecté..."
-->

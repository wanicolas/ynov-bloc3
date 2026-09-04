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

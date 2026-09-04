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

<p class="text-xl text-neutral-500 mb-6 text-center">Place aux échanges et questions du jury</p>

<div class="mt-8 pt-6 border-t border-neutral-200 text-center text-xs text-neutral-400 space-y-1.5">
  <p>
    Présentation réalisée avec <a href="https://sli.dev" target="_blank" rel="noopener noreferrer" class="text-neutral-600 underline font-medium hover:text-black">Slidev</a> (Open Source / Vue 3, Markdown &amp; UnoCSS)
  </p>
  <p>
    Code source du support : <a href="https://github.com/wanicolas/ynov-bloc3" target="_blank" rel="noopener noreferrer" class="text-neutral-600 underline font-mono hover:text-black">github.com/wanicolas/ynov-bloc3</a>
  </p>
</div>

<!--
❓ **Q&A (15 min)** :
- Remercier chaleureusement le jury.
- Garder les slides d'annexes prêtes si des questions techniques pointues sont posées.
-->

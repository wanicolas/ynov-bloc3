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
[Slide] "La relation avec la Ville de Mulhouse s'est construite sur une boucle de validation très réactive."
[Clic 1] Une interlocutrice clé : La responsable des piscines de l'agglomération (m2A), impliquée au quotidien.
[Clic 2] Cadrage amont : En début de sprint, consultation par mail ou visio pour confirmer que nos priorités répondent à ses besoins immédiats.
[Clic 3] Démo de sprint : En fin de sprint, démonstration live sur notre environnement de préproduction.
[Clic 4] Recette municipale : La cliente teste avec son équipe d'agents en mairie et en caisse.
[Clic 5] Boucle de feedback : Si un retour est légitime, de notre fait et réalisable dans les temps impartis, nous le corrigeons, retestons et déployons en production.
[Clic 6] Traçabilité : Chaque livraison est accompagnée de son changelog GitHub et de ses notes de version officielles sur Linear.
▶ Transition : "Cette méthode de travail a produit des résultats mesurables sur la satisfaction client..."
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
[Slide] "Voici les trois indicateurs clés attestant de la satisfaction de la collectivité."
[Clic 1] 100% d'acceptation : L'ensemble des fonctionnalités majeures ont été validées sans réserve lors des revues de sprint.
[Clic 2] Réactivité sous 48h : Prise en compte et résolution immédiate des anomalies signalées pendant les recettes clientes.
[Clic 3] Zéro crash en production : La plateforme a encaissé sans aucune indisponibilité les vagues d'inscriptions scolaires et estivales sur e-services.mulhouse-alsace.fr.
[Clic 4] Adhésion des agents : Les agents municipaux ont immédiatement plébiscité le gain de temps sur la réservation et la consultation des jauges par rapport à l'ancien outil.
▶ Transition : "Passons maintenant aux choses concrètes : le cadrage de notre démonstration en direct..."
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
[Slide] "Pour cette démonstration de 5 minutes, nous allons valider la synchronisation temps réel de bout en bout."
[Clic 1] Acte 1 - Côté Citoyen (Aqua Mulhouse) : Consultation des offres de bassins, choix du créneau horaire, panier, ajout d'un voucher de réduction et validation du paiement PayFIP simulé.
[Clic 2] Acte 2 - Côté Agent (Shop Back-Office) : Consultation de la liste via notre DataTable bi-mode, réservation 'En tant que' pour un usager au guichet, et contrôle immédiat de la commande passée à l'instant en ligne.
▶ Transition : "Bascule immédiate sur notre environnement de préproduction..."
-->

---
layout: default
zoom: 0.6
---

<iframe src="https://mulhouse4.staging.numesia.fr" height="100%" width="100%" 
></iframe>

<!--
[Slide] "Nous voici en direct sur notre plateforme de préproduction mulhouse4.staging.numesia.fr."
- "Étape 1 : Je consulte les entrées en piscine, je sélectionne le bassin Pierre et Marie Curie et le créneau du samedi matin."
- "Étape 2 : J'ajoute la place au panier, j'applique mon bon de réduction, et je valide le paiement PayFIP simulé."
- "Étape 3 : Je bascule maintenant sur la vue Back-Office Agent. Regardez la réactivité de la DataTable : je filtre sur aujourd'hui, zéro temps de latence. La commande que je viens de créer est déjà là."
- "Étape 4 : Je vous montre la réservation 'En tant que' au guichet, et l'export direct au format CSV des résultats filtrés."
▶ Transition : "Après cette démonstration fonctionnelle, tirons le bilan de cette année de coordination..."
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
[Slide] "Pour conclure cette présentation, que retenir de cette expérience de coordination ?"
[Clic 1] Succès produit : Logitud dispose désormais d'un moteur e-commerce générique scalable, et Mulhouse d'un service public moderne et stable, avec 25 sprints menés sans dérive.
[Clic 2] Posture de Lead : J'ai appris que coordonner ne consiste pas à imposer sa technique, mais à écouter, à trancher par la preuve factuelle (le POC), et à trouver le compromis intelligent entre idéal technique et contrainte budgétaire.
[Clic 3] Fédération de l'équipe : En respectant les appétences des développeurs et en partageant les décisions avec transparence, on crée un collectif soudé et performant dans la durée.
▶ Transition : "Je vous remercie pour votre attention et je suis à votre disposition pour notre échange..."
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
[Slide] "Merci à tous les deux. Je suis à votre entière écoute pour vos questions."
- [Garder les slides d'annexes prêtes sur le côté pour illustrer les réponses techniques si nécessaire].
-->

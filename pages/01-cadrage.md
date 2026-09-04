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
[Slide] "Pour bien comprendre les enjeux du projet, il faut poser le décor chez Logitud Solutions."
[Clic 1] Écosystème : Logitud équipe des dizaines de mairies avec son progiciel GRU « Mon Guichet ». C'est le portail central où les citoyens effectuent l'ensemble de leurs démarches administratives.
[Clic 2] Le problème : Mulhouse utilisait un vieux module « aqua shop » depuis plusieurs années. Une vraie impasse technique : code legacy, aucune testabilité, UX dépassée, et le moindre correctif créait des régressions en chaîne.
[Clic 3] L'opportunité : Mulhouse vote un budget pour refondre sa billetterie. Au lieu de faire un simple patch sur-mesure jetable, la direction saisit l'occasion : financer le développement de notre propre moteur e-commerce générique, baptisé « Shop », et y greffer la stratégie de vente dédiée à Mulhouse.
▶ Transition : "Voyons maintenant comment cette vision produit s'est traduite sur le plan de l'architecture logicielle..."
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
[Slide] "Notre réponse technique repose sur un découplage architectural strict entre le cœur et le métier."
[Clic 1] Moteur Shop : Un cœur headless réutilisable. Back-end en NestJS pour une architecture modulaire en plugins, et front-end en Nuxt 4 avec NuxtUI. Il centralise le catalogue, le panier, les commandes et le paiement d'État PayFIP.
[Clic 2] Plugin Aqua Mulhouse : Une surcouche métier dédiée aux spécificités aquatiques de l'agglomération (réservation par créneaux, gestion fine des jauges et abonnements).
[Clic 3] Intégration Nginx : Le choix d'infrastructure clé : via un reverse proxy Nginx, les usagers et agents restent dans le portail de Mon Guichet. La bascule technologique est 100% transparente, tout en offrant un saut d'ergonomie massif.
▶ Transition : "Pour orchestrer la réalisation de ce produit, nous devions adopter un cadre méthodologique agile et rigoureux..."
-->

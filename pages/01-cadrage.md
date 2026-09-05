---
layout: default
---

# Contexte Entreprise & Dette Technique

<v-clicks>

- **L'écosystème Logitud & Mon Guichet**
  - Éditeur majeur de progiciels pour collectivités territoriales.
  - _Mon Guichet_ : plateforme de GRU (Gestion de la Relation Usager) déployée auprès des citoyens.

- **La problématique : Un module historique obsolète**
  - La Ville de Mulhouse utilisait un ancien module piscines (« aqua shop ») depuis plusieurs années.
  - Dette technique critique : code rigide, inmaintenable, limitations fonctionnelles et UX datée.

- **Le déclencheur & L'opportunité stratégique**
  - Mulhouse finance la refonte complète de leur billetterie aquatique.
  - _Choix Logitud :_ Refus du développement spécifique jetable ➔ Conception d'un véritable **moteur e-commerce 100% agnostique (« Shop »)** amorti sur toutes les collectivités, avec **« Aqua Mulhouse »** comme premier client applicatif.

</v-clicks>

<!--
[Slide] "Pour bien comprendre les enjeux du projet, il faut poser le décor chez Logitud Solutions."

[Clic 1] Écosystème : Logitud équipe des dizaines de mairies avec son progiciel GRU « Mon Guichet ». C'est le portail central où les citoyens effectuent l'ensemble de leurs démarches administratives.

[Clic 2] Le problème : Mulhouse utilisait un vieux module « aqua shop » depuis plusieurs années. Une vraie impasse technique : code legacy, aucune testabilité, UX dépassée, et le moindre correctif créait des régressions en chaîne.

[Clic 3] L'opportunité : Mulhouse vote un budget pour refondre sa billetterie. Au lieu de faire un simple patch sur-mesure jetable, la direction saisit l'occasion : financer le développement d'un moteur e-commerce 100% agnostique (« Shop »), capable de vendre tout type de service pour n'importe quelle collectivité, et tester ce produit sur le cas d'usage Mulhouse.

▶ Transition : "Voyons maintenant comment cette vision produit s'est traduite sur le plan de l'architecture logicielle..."
-->

---
layout: two-cols
---

# Architecture & Vision Produit

::left::

### Back-end NestJS : Moteur Agnostique

<v-clicks>

- **API REST e-commerce générique**
  - Manipule des concepts abstraits : produits, déclinaisons, créneaux, jauges, panier, commandes.
  - Zéro notion de piscine, bassin ou cours aquatique côté serveur.
- **Pérennité & Services régaliens**
  - Intégration native des paiements d'État (**PayFIP**).
  - Cœur réutilisable pour toute future offre de collectivité (cantines, parkings, salles).

</v-clicks>

::right::

### Front-end Nuxt 4 : Traduction Métier

<v-clicks>

- **Couche d'adaptation « Aqua Mulhouse »**
  - Rôle de _Domain Translation Layer_ : mappe les entités génériques en concepts aquatiques concrets (_bassins, cours de natation, abonnements_).
  - Stack moderne : **Nuxt 4, NuxtUI, Pinia, Tailwind**.
- **Interopérabilité Nginx transparente**
  - Reverse-proxy Nginx sous _Mon Guichet_.
  - Saut d'ergonomie usagers/agents sans rupture de service.

</v-clicks>

<!--
[Slide] "Notre réponse technique repose sur un découplage architectural net entre back-end agnostique et adaptation métier front-end."

[Clic 1] Back-end NestJS : Un moteur e-commerce headless 100% générique. Il manipule des entités abstraites (produits, variantes, jauges de capacité, panier, commandes et PayFIP). En base et dans l'API, il n'y a strictement aucun mot sur les piscines : il peut vendre du sport, de la cantine ou des spectacles.

[Clic 2] Front-end Nuxt 4 : C'est ici que vit le métier. « Aqua Mulhouse » agit comme couche de traduction de domaine. C'est le front qui contextualise les produits en bassins, créneaux de natation ou abonnements annuels pour les usagers et agents.

[Clic 3] Intégration Nginx : Le choix d'infrastructure clé : via un reverse proxy Nginx, les usagers et agents restent dans le portail de Mon Guichet. La bascule technologique est 100% transparente, tout en offrant un saut d'ergonomie massif.

▶ Transition : "Pour orchestrer la réalisation de ce produit, nous devions adopter un cadre méthodologique agile et rigoureux..."
-->

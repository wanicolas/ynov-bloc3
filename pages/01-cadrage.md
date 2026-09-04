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

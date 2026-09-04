# Contexte Projet & Mémoire Technique — Soutenance RNCP Bloc 3

Ce document synthétise l'ensemble des informations du projet présenté pour l'épreuve orale du **Bloc 3** du titre RNCP **« Expert en Développement Logiciel »** (RNCP 39583 — Niveau 7 / Master 2 Ynov Campus Strasbourg). Il sert de référence complète pour tout nouvel échange ou contexte IA.

---

## 1. Cadre de la Soutenance & Objectifs RNCP

- **Candidat :** Nicolas WALTER (en alternance chez Logitud depuis août 2025).
- **Intitulé du bloc :** *Coordonner et piloter un projet de développement d’applications logicielles*.
- **Format de l'épreuve :** 45 minutes au total (30 minutes de présentation orale incluant une démonstration logicielle + 15 minutes de questions/réponses avec le jury).
- **Compétences clés évaluées :** Voir [les consignes](./consignes/consignes.json)

---

## 2. Contexte Entreprise & Enjeux Métiers

- **Entreprise :** Logitud, éditeur de solutions logicielles spécialisé pour les collectivités territoriales.
- **Écosystème existant :** *Mon Guichet*, progiciel de GRU (Gestion de la Relation Usager) déjà utilisé par de nombreuses collectivités, dont la Ville de Mulhouse.
- **Dette technique & problème initial :** Mulhouse utilisait depuis plusieurs années un module / plugin historique dédié à leurs piscines (« aqua shop »). Ce module était ancien, très limité fonctionnellement et devenu inmaintenable au fil du temps.
- **Déclencheur client :** La Ville de Mulhouse a mandaté et financé Logitud pour refondre complètement cette partie aquatique tout en s'interfaçant avec *Mon Guichet*.
- **Vision Produit & Stratégie Logitud :** Plutôt que de coder un patch spécifique jetable, Logitud a capitalisé sur ce financement pour concevoir un véritable **moteur e-commerce générique et réutilisable (« Shop »)**, sur lequel s'ajoute une stratégie de vente / plugin métier spécifique nommé **« Aqua Mulhouse »**.
- **Intégration d'infrastructure :** L'intégration du Front-Office et du Back-Office de *Shop* au sein de *Mon Guichet* est réalisée de façon transparente pour Mulhouse via un reverse proxy **Nginx**, tout en délivrant une refonte UI/UX majeure grâce à la nouvelle stack.

---

## 3. Stack Technique & Rôle de Nicolas Walter

- **Stack :**
  - **Backend :** NestJS (TypeScript, architecture modulaire en plugins).
  - **Frontend :** Nuxt 4 (TypeScript, Pinia, NuxtUI, Tailwind).
  - **Tooling Qualité :** ESLint, TypeScript strict, Prettier, Vitest, GitHub Actions CI.
- **Rôle et responsabilités de Nicolas :**
  - Développeur Frontend au quotidien.
  - Référent Accessibilité Numérique (a11y) et Bonnes Pratiques de développement.
  - Mise en place intégrale du tooling qualité et de la chaîne CI (ESLint, TS, Prettier, Vitest).
  - Concepteur et développeur de composants piliers dans le Back-Office Agent (notamment la surcouche de DataTable).
  - Concepteur et créateur de l'intégralité du Front Usager (« Aqua Mulhouse »).
  - Posture de lead technique front / coordinateur qualité.

---

## 4. Équipe & Gouvernance du Projet

- **Équipe Front-end :** 5 développeurs (Nicolas + 4 autres développeurs, dont l'un cumule les rôles de Lead Tech Front et Chef de Projet).
- **Équipe Back-end :** 2 développeurs NestJS.
- **Design :** 1 UI/UX Designer, travaillant en étroite collaboration avec le Chef de Projet / Lead Tech pour le cadrage et le suivi.
- **DevOps / Infra :** Équipe transverse partagée au niveau de l'entreprise Logitud.
- **Direction de Logitud :** Fixe les contraintes strictes de délais, de rentabilité et de coûts.
- **Client :** Une interlocutrice dédiée, chargée de la gestion des piscines de la Ville de Mulhouse (ateliers de recueil, retours, démos intermédiaires et tests utilisateurs).

---

## 5. Méthodologie & Pilotage de Projet

- **Méthodologie :** Agile Scrum avec des sprints réguliers de 2 semaines.
- **Outil de suivi central :** **Linear**
  - Gestion des cycles de 2 semaines.
  - Estimation du niveau de difficulté / story points.
  - Statuts des tickets mis à jour automatiquement via l'intégration GitHub (branches, PRs, merges).
  - Association automatique des PRs et des URLs de preview/démo générées par GitHub Actions.
  - Vues personnalisées, filtres d'équipe, jalons (milestones) et labellisation précise.
- **Projet Linear :** `MG - Refactor Shop` (Mon Guichet - Refactor Shop).
- **Communication interne :** Slack pour les échanges quotidiens, synchrones et asynchrones, réunions d'équipe et visios.
- **Livraisons & Releases :** À chaque version déployée, publication systématique d'un **Changelog GitHub** technique et de **Notes de version** sur Linear (tenues à jour pour chaque jalon).
- **Relation & Cycle de Validation Client (Mulhouse / m2A) :**
  1. *Début de sprint :* Re-consultation de la cliente en visio/mail pour cadrer et valider les fonctionnalités prioritaires à développer.
  2. *Fin de développement / Sprint Review :* Présentation d'une démo en direct.
  3. *Phase de test utilisateur :* La cliente teste la version avec son équipe municipale sur l'environnement de préproduction.
  4. *Boucle de feedback :* Les retours sont analysés (si faisables, imputables à l'équipe (« de notre faute ») et compatibles avec les délais restants) ➔ correctif ➔ re-test ➔ déploiement en production (`e-services.mulhouse-alsace.fr`).

---

## 6. Métriques Réelles du Projet

- **Avancement :** 25e sprint en cours (projet démarré en août 2025, plus d'un an de run).
- **Volume de production :** **1 366 tickets terminés** à date.
- **Vélocité :**
  - Moyenne : **57 tickets** par sprint.
  - Médiane : **51 tickets** par sprint.
  - Évolution : forte accélération sur les sprints récents avec des volumes compris entre **50 et 80 tickets** par sprint.
- **Qualité logicielle & Couverture de tests :**
  - Backend : **85%** de couverture de tests (NestJS).
  - Frontend : **< 30%** de couverture (nombreux tests unitaires avec Vitest, mais déficit en tests fonctionnels et absence de tests E2E, arbitrés par manque de temps, de budget et de compétences initiales de l'équipe).
- **Accessibilité (a11y) :** Niveau globalement bas. Seuls 2 développeurs maîtrisaient les exigences a11y dans l'équipe ; le coût de relecture des PRs et de formation continue était trop lourd pour le calendrier, conduisant à l'abandon d'un audit formel complet RGAA. Le niveau est toutefois rehaussé par l'accessibilité native des composants NuxtUI et les composants clés conçus par les deux développeurs sachants.

---

## 7. Historique Réel des Versions & Jalons (Linear)

- **19 juin 2026 — v1.0.0 (Lancement officiel / Go-Live initial) :**
  - *Backoffice :* Création et gestion du catalogue, offres, tarifs, jauges et plannings ; gestion des avoirs ; intégration du paiement d'État [PayFIP](https://www.payfip.gouv.fr/) ; gestion des demandes d'abonnements ; réservation « En tant que » ; export CSV complet ; stockage S3.
  - *Boutique usager (FO) :* Catalogue réinscriptions, panier avec verrou de 30 minutes, calcul d'éligibilité par âge (mois/années), synchronisation *Mon Guichet*.
  - *Infrastructure :* Déploiement en production sur `e-services.mulhouse-alsace.fr` (m2A).
- **Fin juin à mi-juillet 2026 — v1.0.1 à v1.0.17 (Stabilisation & Interopérabilité) :**
  - Correctifs ciblés : réconciliation PayFIP, webhooks panier, gestion des remboursements/créneaux, synchronisation profils *Mon Guichet*.
- **30 juillet 2026 — v1.1.0A (Module Charge & Présence) :**
  - Visualisation de la charge des activités et taux de remplissage par jauge.
  - Génération automatique des feuilles de présence pour les maîtres-nageurs / agents.
- **11 août 2026 — v1.2.0 (Gestion financière avancée) :**
  - Ajustements de prix post-achat (hausses avec complément, baisses avec avoirs), génération de justificatifs PDF.
- **17 août 2026 — v1.3.0 (Vente des Entrées en Piscine) :**
  - *FO :* Ouverture de la vente des « Entrées en piscine » (billetterie unitaire / créneaux horaires).
  - *BO :* Calendrier des jauges par piscine, tableau des commandes et vérification des entrées au guichet.
- **02 septembre 2026 — v1.4.0 (Personnalisation & Analytics) :**
  - *BO :* Configuration dynamique de l'ordre des étapes du tunnel d'achat usager ; nouveau tableau de bord avec indicateurs comptables et graphique d'évolution temporelle des transactions ; uniformisation des exports CSV.
  - *FO :* Questionnaire guidé d'auto-évaluation du niveau de natation pour orienter le choix de cours.

---

## 8. Cas Concret d'Arbitrage Technique (Compétence C3.2.2)

- **Problématique :** Implémentation d'une surcouche sur le composant DataTable de NuxtUI par Nicolas.
- **Désaccord initial :**
  - *Vision Nicolas (axée UX) :* Prioriser le tri, le filtrage et la recherche côté client avec pré-chargement global des données de l'API. TanStack Table gère cela avec une fluidité absolue, sans spinner de chargement à chaque saisie ou changement de page.
  - *Vision équipe initiale (classique) :* Dogme traditionnel « full-backend » (pagination, filtres et tris gérés exclusivement par des appels API successifs).
- **Démarche d'arbitrage :**
  1. Réalisation d'un **POC** (Proof of Concept) par Nicolas pour démontrer la réactivité de l'interface et la viabilité technique.
  2. Présentation du POC à l'équipe et recueil de retours très positifs.
  3. Décision d'un **compromis pragmatique :** conception d'un composant **DataTable bi-mode** (mode client privilégié quand la volumétrie API est raisonnable, bascule automatique en mode serveur sur les très gros jeux de données).
- **Bénéfice fonctionnel immédiat :** L'export CSV est généré directement depuis les données chargées en mémoire front-end, permettant d'offrir à l'utilisateur le choix instantané entre exporter la *page courante* ou la *totalité du tableau*, sans solliciter un endpoint serveur dédié.

---

## 9. Management d'Équipe & Dynamique Humaine (Compétences C3.3.1 & C3.3.2)

- **Styles managériaux appliqués :** Management situationnel (Hersey & Blanchard) :
  - Style *participatif* et *délégatif* lors des phases de conception et de développement avec l'équipe technique et l'UX.
  - Style *directif / persuasif* pour respecter les impératifs stricts de coûts et délais fixés par la Direction.
- **Motivation & Implication :**
  - *Sprint Planning :* Affectation des tâches selon les compétences mais aussi les appétences (« qui kiffait quoi »).
  - *Sprint Review :* Rituel de valorisation et de félicitation mutuelle, partage transparent des ressentis et des points de vue.
- **Gestion des conflits :** Débats techniques ouverts encouragés. En cas de désaccord persistant, décision finale tranchée par le Lead Tech Front et le Chef de Projet. Posture d'équipe mature et professionnelle (« adultes payés pour avancer ensemble »).
- **Plan de développement des compétences :**
  - Pour les technologies maîtrisées : entraide directe et binômage / peer programming.
  - Pour les nouveaux sujets, technos et méthodologies : organisation de présentations techniques internes et ateliers de partage (TypeScript, Vitest, CI, bonnes pratiques a11y).

---

## 10. Déroulement de la Démonstration Logicielle (Compétence C3.4.2)

La démo en direct dure environ 5 à 7 minutes et s'appuie sur le code local et les environnements de préproduction :

1. **Étape 1 — Parcours Front Usager (Aqua Mulhouse) :**
   - Consultation du catalogue des entrées de piscines.
   - Sélection d'un bassin et d'un créneau horaire dédié.
   - Gestion du panier d'achat.
   - Application d'un voucher de réduction.
   - Simulation et validation du paiement usager.
2. **Étape 2 — Parcours Back-Office Agent (Shop) :**
   - Consultation de la liste des piscines et des offres d'abonnements via le DataTable sur-mesure bi-mode.
   - Démonstration de la fonctionnalité administrative de réservation « en tant que » (pour un usager au guichet).
   - Consultation immédiate du détail de la commande passée quelques instants plus tôt sur le Front Usager (démonstration de la synchronisation de bout en bout FO ➔ BO).

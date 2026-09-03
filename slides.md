---
theme: none
title: Coordonner et piloter un projet de développement d’applications logicielles
author: Nicolas WALTER
fonts:
  provider: none
  sans: "Hanken Grotesk"
  mono: "JetBrains Mono"
lineNumbers: false
drawings:
  persist: false
transition: fade

# HTML tag attributes
htmlAttrs:
  dir: ltr
  lang: fr
---

# Coordonner et piloter <br> un projet de développement <br> d’applications logicielles

Expert en Développement Logiciel (RNCP 39583)

---
layout: agenda
title: Au programme
---

# Au programme

<Agenda :items="[
  { number: '01', title: 'Contexte & Besoin' },
  { number: '02', title: 'Choix Techniques' },
  { number: '03', title: 'Réalisation & Qualité' }
]" />

---

# Contexte et cartographie des parties prenantes

- **Objectif :** Création et distribution gratuite d'un magazine transmédia (Print + Web) dédié à la création digitale
- **Commanditaire :** Direction Ynov Campus
- **Équipe projet :** 3 Créatifs M2, 2 Devs M2, 1 Dev B1
- **Utilisateurs :** Étudiants, intervenants et jury
- **Contraintes majeures :** Budget très strict (25€) et temps limité (9 séances de 7h)

---

# Étude comparative et choix technique

| Fonctionnalité / Exigence  | Laravel + Nuxt (sur-mesure)      | Ghost CMS + Thème custom |
| :------------------------- | :------------------------------- | :----------------------- |
| **Back-office & CRUD**     | À développer (~X jours)          | Natif (Immédiat)         |
| **Paywall & Abonnements**  | Complexe / API Stripe (~X jours) | Natif (Immédiat)         |
| **Temps de développement** | > 150 heures                     | < 63 heures (Axé Front)  |
| **Risque projet**          | Élevé (Dépassement délais/coûts) | Faible (Maîtrisé)        |

---

# Merci de votre<br>attention !

Avez-vous des questions ?

---

# Annexes

---

# Captures de l’interface “admin”

<div class="flex items-center justify-center h-72 text-gray-400 border border-dashed border-gray-300 rounded text-sm">
  <span>Emplacement des captures d'écran interface admin</span>
</div>

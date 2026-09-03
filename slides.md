---
theme: none
title: Coordonner et piloter un projet de développement d’applications logicielles
author: Nicolas WALTER
layout: cover
fonts:
  provider: none
  sans: "Hanken Grotesk"
  mono: "JetBrains Mono"
lineNumbers: false
drawings:
  persist: false
transition: fade
htmlAttrs:
  dir: ltr
  lang: fr
---

# Coordonner et piloter <br> un projet de développement <br> d’applications logicielles

Expert en Développement Logiciel (RNCP 39583)

---
layout: agenda
---

# Au programme

<Agenda :items="[
  { number: '01', title: 'Contexte & Besoin' },
  { number: '02', title: 'Choix Techniques' },
  { number: '03', title: 'Réalisation & Qualité' }
]" />

---
layout: section
---

# Contexte & Besoin

---
layout: default
---

# Contexte et cartographie des parties prenantes

- **Objectif :** Création et distribution gratuite d'un magazine transmédia (Print + Web) dédié à la création digitale
- **Commanditaire :** Direction Ynov Campus
- **Équipe projet :** 3 Créatifs M2, 2 Devs M2, 1 Dev B1
- **Utilisateurs :** Étudiants, intervenants et jury
- **Contraintes majeures :** Budget très strict (25€) et temps limité (9 séances de 7h)

---
layout: default
---

# Étude comparative et choix technique

| Fonctionnalité / Exigence  | Laravel + Nuxt (sur-mesure)      | Ghost CMS + Thème custom |
| :------------------------- | :------------------------------- | :----------------------- |
| **Back-office & CRUD**     | À développer (~X jours)          | Natif (Immédiat)         |
| **Paywall & Abonnements**  | Complexe / API Stripe (~X jours) | Natif (Immédiat)         |
| **Temps de développement** | > 150 heures                     | < 63 heures (Axé Front)  |
| **Risque projet**          | Élevé (Dépassement délais/coûts) | Faible (Maîtrisé)        |

---
layout: end
---

# Merci de votre<br>attention !

Avez-vous des questions ?

---
layout: section
---

# Annexes

---
layout: default
---

# Captures de l’interface “admin”

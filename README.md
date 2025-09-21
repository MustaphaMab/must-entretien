MUST Entretien — Site vitrine

Site vitrine moderne pour une société de ménage et nettoyage à Vitrolles et alentours.
Développé avec Vue 3 + Vite + Bootstrap 5, déployé sur Netlify.

✨ Fonctionnalités

Design responsive (desktop & mobile)

Pages principales : Prestations, Réalisations, À propos, Contact

Footer avec mentions légales et confidentialité

Formulaire de contact relié à Netlify Functions

⚙️ Installation
git clone https://github.com/MustaphaMab/must-entretien.git
cd must-entretien
npm install
netlify dev   # pour lancer front + functions

🚀 Déploiement

Build : npm run build → dossier dist/

Déploiement automatique via Netlify

Variables d’environnement à configurer :

RESEND_API_KEY

MAIL_FROM

MAIL_TO

🔒 Bonnes pratiques

.env ignoré par Git, .env.example fourni

En-têtes de sécurité définis dans netlify.toml

Mentions légales et confidentialité incluses

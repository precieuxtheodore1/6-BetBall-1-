🎮 6-BetBall

📌 Présentation

6-BetBall est une application de jeux compétitifs où les joueurs s’affrontent dans différents mini-jeux pour miser, gagner ou perdre selon leurs performances.
L’objectif est de transformer le divertissement en opportunité de gains réels, tout en offrant un espace sécurisé et transparent.


---

🚀 Fonctionnalités principales

✅ Système de connexion/inscription (frontend + backend Express)

✅ Portefeuille virtuel (mises et gains simulés)

✅ Mini-jeux disponibles :

⚽ Football (tir au but)

🏀 Basketball (lancer franc)

♟️ Dames (plateau 20x20)

🥋 Karaté (actions aléatoires)

🚗 Course/Racing (10 km)

🏃 Temple Run (2000 m)




---

📂 Structure du projet

6-BetBall/
│── backend/        → Serveur Node.js + Express
│   ├── server.js
│   ├── package.json
│   └── routes/
│
│── frontend/       → Pages utilisateur
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── games/      → Mini-jeux HTML
│       ├── football.html
│       ├── basketball.html
│       ├── dames.html
│       ├── karate.html
│       ├── racing.html
│       ├── templeRun.html
│       └── index.html (hub des jeux)
│
│── games/          → Scripts JS des jeux
│   ├── football.js
│   ├── basketball.js
│   ├── dames.js
│   ├── karate.js
│   ├── racing.js
│   └── templeRun.js
│
│── README.md       → Documentation


---

⚙️ Installation

🔹 Backend (API Express)

1. Aller dans le dossier backend :

cd backend


2. Installer les dépendances :

npm install


3. Lancer le serveur :

node server.js



👉 Par défaut, le backend tourne sur : http://localhost:5000


---

🔹 Frontend (Pages Web)

1. Ouvrir le fichier :

frontend/index.html


2. Accéder au menu principal.


3. Aller dans "Jeux" pour choisir un mini-jeu.




---

🎯 Règles de victoire (Temple Run & Racing)

Temple Run (2000 m)

Si les deux joueurs < 1000 m → ❌ Défaite commune

Si l’un tombe avant et l’autre va plus loin → ✅ le plus avancé gagne

Si les deux atteignent 2000 m → ⚖️ Rejouer


Course/Racing (10 km)

Même logique que Temple Run mais sur 10 000 m




---

📌 Prochaines étapes

Améliorer les jeux avec Canvas / Phaser.js

Intégrer les paiements Mobile Money & Crypto

Développer un système de tournois en ligne



---

👨‍💻 Chef du projet : Ingénieur Théodore MUNANGA NTUMBA
📧 Contact : toutfaitnombresarl@gmail.com
📱 Téléphone : +243975551224 / 0991741877


---

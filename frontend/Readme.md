
---

📂 frontend/README.md

# 🎮 6-BetBall – Frontend

Ce dossier contient le **frontend** de l’application **6-BetBall**, développé avec **React + Vite**.  
L’application permet aux utilisateurs de s’inscrire, se connecter, parcourir les jeux disponibles et interagir avec le backend.

---

## 🚀 Installation & Lancement

### 1. Cloner le projet
Si tu es dans le dossier `frontend` uniquement :
```bash
git clone https://github.com/ton-compte/6-betball.git
cd 6-betball/frontend

2. Installer les dépendances

npm install

3. Lancer en mode développement

npm run dev

👉 L’application démarre sur http://localhost:5173


---

📂 Structure du dossier

frontend/
 ├── public/              # Fichiers statiques
 ├── src/
 │   ├── pages/           # Pages principales (Login, Register, Home, Games, Profile)
 │   ├── App.jsx          # Routes principales
 │   ├── main.jsx         # Entrée de l’application
 │   └── index.css        # Styles globaux
 ├── package.json
 ├── vite.config.js
 └── README.md            # Ce fichier


---

🔗 Connexion avec le backend

Par défaut, le frontend utilise l’API backend sur :

http://localhost:5000

Si ton backend est hébergé ailleurs (par exemple sur Replit, Render ou Railway), pense à modifier les URLs dans :

src/pages/Login.jsx

src/pages/Register.jsx

src/pages/Games.jsx



---

👨‍💻 Technologies utilisées

React – UI

Vite – Build tool rapide

React Router DOM – Navigation

Axios – Requêtes HTTP



---

📌 Prochaines étapes

Intégrer les mini-jeux interactifs dans src/pages/Games.jsx

Ajouter la gestion du solde utilisateur et paris en direct

Déployer le frontend (Netlify, Vercel, Replit, etc.)



---

🧑‍💻 Auteur

Ingénieur Théodore MUNANGA NTUMBA
📧 Email : toutfaitnombresarl@gmail.com
📱 Téléphone : +243975551224 / 0991741877

---

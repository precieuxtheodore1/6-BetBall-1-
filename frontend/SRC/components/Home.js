import React from 'react';
export default function Home(){
  return (
    <div>
      <h2>Bienvenue sur 6-BetBall</h2>
      <div className="card">
        <p>Choisissez un jeu depuis "Jeux" pour lancer un mini-jeu dans un nouvel onglet.</p>
        <p>Les jeux sont dans <code>/public/games/</code> et peuvent envoyer les résultats à l'API.</p>
      </div>
    </div>
  );
    }

import React from 'react';
export default function GamesHub(){
  return (
    <div>
      <h2>Hub des jeux</h2>
      <div className="card">
        <p>Cliquez pour ouvrir un mini-jeu (s'ouvrira dans un nouvel onglet).</p>
        <ul>
          <li><a href="/games/football.html" target="_blank" rel="noreferrer">Football</a></li>
          <li><a href="/games/basketball.html" target="_blank" rel="noreferrer">Basketball</a></li>
          <li><a href="/games/dames.html" target="_blank" rel="noreferrer">Dames 20x20</a></li>
          <li><a href="/games/karate.html" target="_blank" rel="noreferrer">Karaté</a></li>
          <li><a href="/games/billard.html" target="_blank" rel="noreferrer">Billard</a></li>
          <li><a href="/games/racing.html" target="_blank" rel="noreferrer">Racing</a></li>
          <li><a href="/games/templeRun.html" target="_blank" rel="noreferrer">Temple Run</a></li>
        </ul>
      </div>
    </div>
  );
    }

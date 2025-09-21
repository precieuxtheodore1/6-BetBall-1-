import React from 'react';
export default function Navbar({ onNavigate, user, onLogout }){
  return (
    <div className="nav">
      <div style={{fontWeight:700,marginRight:10}}>6-BetBall</div>
      <button onClick={()=>onNavigate('home')}>Accueil</button>
      <button onClick={()=>onNavigate('games')}>Jeux</button>
      <button onClick={()=>onNavigate('login')}>Connexion</button>
      <button onClick={()=>onNavigate('register')}>Inscription</button>
      <div style={{marginLeft:'auto'}}>
        {user ? (<>
          <span style={{marginRight:8}}>{user.username}</span>
          <button onClick={()=>onNavigate('profile')}>Profil</button>
          <button onClick={onLogout}>Déconnexion</button>
        </>) : null}
      </div>
    </div>
  );
  }

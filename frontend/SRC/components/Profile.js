import React from 'react';
export default function Profile({ user }){
  return (
    <div>
      <h2>Profil</h2>
      <div className="card">
        <div><strong>Nom :</strong> {user?.username}</div>
        <div><strong>Email :</strong> {user?.email}</div>
        <div style={{marginTop:10}}>
          <strong>Contacts projet</strong>
          <div>Chef de projet : Ing. Théodore MUNANGA NTUMBA</div>
          <div>Email : toutfaitnombresarl@gmail.com</div>
          <div>Tél : +243975551224 / 0991741877</div>
        </div>
      </div>
    </div>
  );
}

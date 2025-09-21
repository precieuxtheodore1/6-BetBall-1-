import React, { useState } from 'react';
import { api } from '../api';
export default function Register(){
  const [username,setUsername]=useState(''), [email,setEmail]=useState(''), [password,setPassword]=useState('');
  async function submit(e){
    e.preventDefault();
    try{
      await api('/auth/register','POST', null, { username, email, password });
      alert('Inscription réussie, connectez-vous.');
    }catch(err){ alert(err.error||'Erreur'); }
  }
  return (
    <div className="card">
      <h3>Inscription</h3>
      <form onSubmit={submit}>
        <input placeholder="Nom" value={username} onChange={e=>setUsername(e.target.value)} />
        <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input placeholder="Mot de passe" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
}

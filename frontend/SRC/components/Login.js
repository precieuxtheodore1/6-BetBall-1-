import React, { useState } from 'react';
import { api } from '../api';

export default function Login({ onLogin }){
  const [email,setEmail]=useState(''), [password,setPassword]=useState('');
  async function submit(e){
    e.preventDefault();
    try{
      const data = await api('/auth/login','POST', null, { email, password });
      localStorage.setItem('token', data.token);
      onLogin(data.token, data.user);
    }catch(err){ alert(err.error||'Erreur'); }
  }
  return (
    <div className="card">
      <h3>Connexion</h3>
      <form onSubmit={submit}>
        <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input placeholder="Mot de passe" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
    }

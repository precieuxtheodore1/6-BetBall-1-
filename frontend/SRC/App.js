import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import GamesHub from './components/GamesHub';
import Profile from './components/Profile';
import { api } from './api';

export default function App(){
  const [view, setView] = useState('home');
  const [token, setToken] = useState(localStorage.getItem('token')||null);
  const [user, setUser] = useState(null);

  useEffect(()=>{
    if(token){
      api('/auth/me','GET', token).then(setUser).catch(()=>{ setToken(null); localStorage.removeItem('token'); });
    }
  },[token]);

  return (
    <div className="app">
      <Navbar onNavigate={setView} user={user} onLogout={()=>{ setToken(null); setUser(null); localStorage.removeItem('token'); }} />
      <div className="main">
        {view==='home' && <Home />}
        {view==='games' && <GamesHub />}
        {view==='login' && <Login onLogin={(t,u)=>{ setToken(t); setUser(u); }} />}
        {view==='register' && <Register />}
        {view==='profile' && <Profile user={user} />}
      </div>
    </div>
  );
    }

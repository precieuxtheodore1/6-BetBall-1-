import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Games from "./pages/Games";
import Profile from "./pages/Profile";

function App() {
  return (
    <div>
      <nav style={{ padding: "10px", background: "#222", color: "white" }}>
        <Link to="/" style={{ margin: "0 10px", color: "white" }}>Accueil</Link>
        <Link to="/games" style={{ margin: "0 10px", color: "white" }}>Jeux</Link>
        <Link to="/profile" style={{ margin: "0 10px", color: "white" }}>Profil</Link>
        <Link to="/login" style={{ margin: "0 10px", color: "white" }}>Connexion</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;

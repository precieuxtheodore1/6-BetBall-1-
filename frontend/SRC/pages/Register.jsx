import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await axios.post("http://localhost:5000/api/auth/register", {
        username, email, password
      });
      alert("✅ Inscription réussie !");
      navigate("/login");
    } catch (err) {
      alert("Erreur : " + err.response?.data?.error || err.message);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Inscription</h2>
      <input placeholder="Nom d'utilisateur" value={username} onChange={(e) => setUsername(e.target.value)} />
      <br />
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <br />
      <input placeholder="Mot de passe" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <br />
      <button onClick={handleRegister}>S'inscrire</button>
    </div>
  );
}

export default Register;

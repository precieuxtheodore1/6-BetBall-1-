import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      navigate("/");
    } catch (err) {
      alert("Erreur de connexion : " + err.response?.data?.error || err.message);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Connexion</h2>
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <br />
      <input placeholder="Mot de passe" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <br />
      <button onClick={handleLogin}>Se connecter</button>
    </div>
  );
}

export default Login;

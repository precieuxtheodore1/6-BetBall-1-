// Script global pour gérer la connexion et interaction
const API_URL = "http://localhost:5000/api";

// Exemple de fonction pour login
async function login(username, password) {
  try {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json();
    alert(data.message);
    if (data.token) {
      localStorage.setItem("token", data.token);
      window.location.href = "dashboard.html";
    }
  } catch (err) {
    console.error("Erreur de connexion:", err);
  }
}

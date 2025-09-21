import React, { useEffect, useState } from "react";
import axios from "axios";

function Games() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/games").then((res) => setGames(res.data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>🎮 Liste des Jeux</h2>
      <ul>
        {games.map((g) => (
          <li key={g.id}>{g.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Games;

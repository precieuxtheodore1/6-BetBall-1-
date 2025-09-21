export const getGames = (req, res) => {
  const games = [
    { id: 1, name: "Football" },
    { id: 2, name: "Basketball" },
    { id: 3, name: "Dames" },
    { id: 4, name: "Karaté" },
    { id: 5, name: "Billard" },
    { id: 6, name: "Racing" },
    { id: 7, name: "Temple Run" }
  ];
  res.json(games);
};

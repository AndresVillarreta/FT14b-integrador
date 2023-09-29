const { Favorite } = require("../DB_connection");

async function deleteFav(req, res) {
  const { id } = req.params;
  if (!id) res.json({ error: "No hay id" });
  try {
    const response = await Favorite.destroy({ where: { id } });
    const all = await Favorite.findAll();
    res.status(201).json(all);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = deleteFav;

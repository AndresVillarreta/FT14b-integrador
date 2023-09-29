const { Favorite } = require("../DB_connection");

async function postFav(req, res) {
  const { name, origin, status, image, species, gender } = req.body;
  if (!name || !origin || !status || !image || !species || !gender) {
    res.status(401).json({ error: "Faltan datos" });
  } else {
    try {
      const response = await Favorite.findOrCreate({
        where: {
          name,
          origin,
        },
        defaults: {
          name,
          origin,
          status,
          image,
          species,
          gender,
        },
      });
      const all = await Favorite.findAll();
      res.status(201).json(all);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = postFav;

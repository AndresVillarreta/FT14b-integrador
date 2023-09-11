const URL = "https://rickandmortyapi.com/api/character/";
const axios = require("axios");

async function getCharById(req, res) {
  const id = req.params.id;

  try {
    const { data, error = data.error } = await axios(URL + id);
    if (!error) {
      const {
        status,
        name,
        species,
        origin = origin.name,
        image,
        gender,
      } = data;
      res
        .status(201)
        .json({ id, status, name, species, origin, image, gender });
    }
  } catch (error) {
    if (error.message.includes("404")) {
      res.status(404).json({ error: "Character Not Found" });
    } else {
      res.status(500).json({ error: error.message });
    }
  }

  /*   axios(URL + id)
    .then(({ data }) => {
      if (data) {
        const {
          status,
          name,
          species,
          origin = origin.name,
          image,
          gender,
        } = data;
        res
          .status(201)
          .json({ id, status, name, species, origin, image, gender });
      } else {
        res.status(404).json({ error: "Character Not Found" });
      }
    })
    .catch((error) => {
      res.status(500).json(error.message);
    }); */
}

module.exports = getCharById;

const { User } = require("../DB_connection");

async function login(req, res) {
  const { email, password } = req.query;
  if (!email || !password) {
    res.status(400).json({ error: "Faltan datos" });
  } else {
    try {
      const response = await User.findOne({
        where: {
          email,
          password,
        },
      });
      if (!response) {
        res.status(404).json({ error: "Usuario no encontrado" });
      } else {
        res.status(201).json({ access: true });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = login;

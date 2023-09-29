const { User } = require("../DB_connection");

async function postUser(req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ error: "Faltan Datos" });
  } else {
    try {
      const user = await User.findOrCreate({
        where: {
          email,
        },
        defaults: {
          email,
          password,
        },
      });
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = postUser;

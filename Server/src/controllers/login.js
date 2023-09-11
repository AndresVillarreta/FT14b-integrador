const users = require("../utils/users");

function login(req, res) {
  const { email, password } = req.query;
  if ((email, password)) {
    const searchUser = users.find((user) => {
      return user.email === email && user.password === password;
    });
    if (searchUser) {
      res.status(200).json({ access: true });
    } else {
      res.status(403).json({ access: false });
    }
  } else {
    res.status(403).json({ access: false });
  }
}

module.exports = login;

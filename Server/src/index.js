const server = require("./app");
const PORT = 3001;
const { conn } = require("./DB_connection");

conn.sync({ alter: true }).then(() => {
  console.log("Database connected");

  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

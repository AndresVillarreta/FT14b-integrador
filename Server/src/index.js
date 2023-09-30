const server = require("./app");
const PORT = 3001;
const { conn } = require("./DB_connection");

conn.sync({ force: false }).then(() => {
  console.log("Database connected");

  server.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

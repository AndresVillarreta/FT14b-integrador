require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;
const FavoriteModel = require("./models/Favorite");
const UserModel = require("./models/User");

// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/railway`,
  { logging: false, native: false }
);

// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.

//
FavoriteModel(sequelize);
UserModel(sequelize);

//
const { models } = sequelize;

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
models.User.belongsToMany(models.Favorite, { through: "user_favorite" });
models.Favorite.belongsToMany(models.User, { through: "user_favorite" });

// const { User, Favorite } = sequelize.models;

module.exports = {
  ...models,
  conn: sequelize,
};

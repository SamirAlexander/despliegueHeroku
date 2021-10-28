/**
 * mongoFactory.js: Permite establecer la conexión con la BD MongoDB
 */
const mongoose = require("mongoose");
const config = require("../configs/config");

const mongoUrl =
  config.database.protocol +
  "://" +
  config.database.user +
  ":" +
  config.database.pass +
  "@" +
  config.database.server +
  ":" +
  config.database.port +
  "/" +
  config.database.name +
  "?" +
  config.database.other;

/* process.env.MONGO_ATLAS_URL */
mongoose
  .connect(process.env.MONGO_ATLAS_URL)
  .then((db) => console.log("mongodb connected"))
  .catch((err) => console.error(err));

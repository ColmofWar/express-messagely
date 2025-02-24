/** Common config for message.ly */

// read .env files and make environmental variables

require("dotenv").config();



if (process.env.NODE_ENV === "test") {
    DB_URI = `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost/messagely_test`;
} else {
    DB_URI = `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost/messagely`;
}

const SECRET_KEY = process.env.SECRET_KEY || "secret";

const BCRYPT_WORK_FACTOR = 12;


module.exports = {
  DB_URI,
  SECRET_KEY,
  BCRYPT_WORK_FACTOR,
};
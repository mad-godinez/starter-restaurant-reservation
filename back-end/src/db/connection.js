const environment = process.env.NODE_ENV || "development";
const config = require("../../knexfile")[environment];
const knex = require("knex")(config);
const pg = require('knex')({
  client: 'pg',
  connection: process.env.DATABASE_URL_DEVELOPMENT,
});
module.exports = knex, pg;
const knex = require("../db/connection");

/*
REQUEST:  GET /reservations
RESPONSE: This route will return a list of all reservations
METHOD:   function list()
*/
async function list() {
  return await knex("reservations").select("*");
}

module.exports = {
  list,
};
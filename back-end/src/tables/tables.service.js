const knex = require("../db/connection");

async function create(table_data) {
  return await knex("tables").insert({table_name, capacity}).returning("*");
}
async function list(table_data){
  return await knex("tables").select("*");
}
module.exports = {
  // listReservation,
  list,
  create
};
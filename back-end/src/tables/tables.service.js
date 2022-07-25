const knex = require("../db/connection");

async function update({table_name, capacity, reservation_id}) {
  const res = await knex("reservations").where({reservation_id,reservation_id}).first();
  return await res;
}
async function create({table_name, capacity}) {
  return await knex("tables").insert({table_name, capacity}).returning("*");
}
async function list(){
  return await knex("tables").select("*");
}
module.exports = {
  // listReservation,
  list,
  create, 
  update
};
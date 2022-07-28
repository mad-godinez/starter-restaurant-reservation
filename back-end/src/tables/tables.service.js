const knex = require("../db/connection");

// async function update({table_name, capacity, reservation_id}) {
//   const res = await knex("reservations").where({reservation_id,reservation_id}).first();
//   return await res;
// }
async function create(data) {
  return await knex("tables").insert(data).returning("*");
}
async function list(){
  console.log("listing tables.....");
  return await knex("tables").select("*");
}
module.exports = {
  list,
  create, 
  // update
};
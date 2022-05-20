const knex = require("../db/connection");


/*
REQUEST:  GET /reservations?=`${date}`
RESPONSE: This route will return a reservation that matches the arg. string if it exists 
METHOD:   function listReservation()
*/
async function listReservation(date) {
  return await knex("reservations")
    .select("*")
    .where("reservation_date".includes(date))
    .first();
}

/*
REQUEST:  GET /reservations
RESPONSE: This route will return a list of all reservations
METHOD:   function list()
*/
async function list() {
  return await knex("reservations").select("*");
}

async function create(res_data){
  // console.log(first_name)
  return await knex("reservations").insert({first_name, last_name, mobile_number, reservation_date, reservation_time, people}).returning("*");
  
  
  //.insert(res_data).returning('*').toString();

}

module.exports = {
  listReservation,list,create
};
let reservation_details = require('./00-reservations.json');

exports.seed = function (knex) { 
  // reservation_details = JSON.stringify(reservation_details);
  return knex
          .raw("TRUNCATE TABLE reservations RESTART IDENTITY CASCADE")
          .then(()=> knex("reservations").insert(reservation_details));
};

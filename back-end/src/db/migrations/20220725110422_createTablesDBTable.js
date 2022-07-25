/***** Data Types Example: 
  {
    "table_name": "Bar #1",
    "capacity": 1
  },
*****/

exports.up = function(knex) {
  return knex.schema.dropTableIfExists("tables").then(()=>{
    return knex.schema.createTable("tables", (table)=>{
      table.string("table_name");
      table.smallint("capacity");
      table.increments("table_id").primary();
      table.smallint("reservation_id");
      table.foreign("reservation_id")
           .references(".reservation_id")
           .inTable("reservations");
      table.timestamps(true, true);
    });
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("tables");
};

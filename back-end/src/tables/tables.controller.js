const asyncErrorBoundary = require('../errors/asyncErrorBoundary');
const table_service = require('./tables.service');

/**
 * Creates a tables table in the database.
 */
async function create(req, res){
  const {table_name, capacity} = req.body;
  return res.status(204).json({data: await table_service.create(table_name, capacity)});
}

/**
 * Updates a table in the database by assigning it to a reservation.
 */
async function update(req, res){
  const {reservation_id} = req.query;
  const {table_name, capacity} = req.body;

  return res.json({data: await table_service.update(table_name, capacity, reservation_id)});
}


/**
 * Lists all tables in the database.
 */ 
async function list(req, res) {
  // res.send(req.query)

  // if(req.query.date) return reservationExists(req, res);
  // else
    return res.json({data: await table_service.list()});
}


module.exports = {
  // reservationExists,
  update: asyncErrorBoundary(update),
  list: asyncErrorBoundary(list),
  create: asyncErrorBoundary(create)
};
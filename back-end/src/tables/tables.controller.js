const asyncErrorBoundary = require('../errors/asyncErrorBoundary');
const table_service = require('./tables.service');

/**
 * Assigns a table to a reservation in the database.
 */
async function create(req, res){
  const {table_name, capacity} = req.body;
  return res.status(204).json({data: await table_service.create(table_name, capacity)});
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
  list: asyncErrorBoundary(list),
  create: asyncErrorBoundary(create)
};
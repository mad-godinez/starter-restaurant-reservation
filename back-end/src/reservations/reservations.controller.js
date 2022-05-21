const res_service = require('./reservations.service');


/**
 * Verifies that a request query param exists in the data.
 */
 async function reservationExists(req, res) {
  const {date} = req.query; 
  return res.json({data: await res_service.listReservation(date)});
}
/**
 * Receives new reservation data to add to the database.
 */
async function create(req, res){
  const {data} = {first_name, last_name, mobile_number, reservation_date, reservation_time, people} = req.body;
  return res.status(204).json({data: await res_service.create(data)});
}

/**
 * List handler for reservation resources
 */
async function list(req, res) {
  // res.send(req.query)

  if(req.query.date) return reservationExists(req, res);
  else
    return res.json({data: await res_service.list()});
}

module.exports = {
  reservationExists,list,create
};
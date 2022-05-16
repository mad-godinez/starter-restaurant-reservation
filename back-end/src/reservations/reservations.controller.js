const res_service = require('./reservations.service');

/**
 * List handler for reservation resources
 */
async function list(req, res) {
  return res.json({data: await res_service.list()});
}

module.exports = {
  list,
};
const res_service = require('./reservations.service');

/**
 * List handler for reservation resources
 */
async function list(req, res) {
  return await res.json({data: res_service.list()});
}

module.exports = {
  list,
};
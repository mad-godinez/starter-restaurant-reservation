const router = require("express").Router();
const controller = require("./tables.controller");

  router.route("/:reservation_id/seat")
    .put(controller.update);

  router.route("/new")
    .post(controller.create);

  router.route("/")
    .get(controller.list)
  


module.exports = router;

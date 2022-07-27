const router = require("express").Router();
const controller = require("./tables.controller");
const cors = require("cors");


  // router.route("/:reservation_id/seat")
  //   .put(controller.update);

  router.route("/new")
    .post(controller.create);

  router.route("/")
    .get(cors(), controller.list)
  
  console.error("router!");


module.exports = router;

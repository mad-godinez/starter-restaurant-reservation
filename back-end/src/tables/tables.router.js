const router = require("express").Router();
const controller = require("./tables.controller");
// const cors = require("cors");

// const corsList = cors({methods: "GET"});    // updated
  
  // router.route("/:reservation_id/seat")
  //   .put(controller.update);

  router.route("/new")
    .post(controller.create);

  router.route("/")
    .get(controller.list)
    // .get(corsList, controller.list)         // updated
    // .options(corsList)                      // updated


module.exports = router;

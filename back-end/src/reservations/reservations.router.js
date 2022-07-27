/**
 * Defines the router for reservation resources.
 *
 * @type {Router}
 */
const router = require("express").Router();
const controller = require("./reservations.controller");
const tablesCtrl = require("../tables/tables.controller");

  router.route("/new")
    .post(controller.create);

  router.route("/")
    .get(controller.list)
    // .get(tablesCtrl.list, controller.list)
  


module.exports = router;

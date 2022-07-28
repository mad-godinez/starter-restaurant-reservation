const express = require("express");
const cors = require("cors");
const app = express();
const logger = require("./logger-config");

//...
app.use(logger);
//...

/***** enables CORS from frontend *****/ 
  app.options('*',cors({methods: "GET"})); // enable pre-flight 
  app.use(cors());
  app.use(express.json());

/***** ROUTES *****/
const reservationsRouter = require("./reservations/reservations.router");
const tablesRouter = require('./tables/tables.router');
  app.use(["/reservations", "/tables"], reservationsRouter, tablesRouter);
  // app.use("/reservations", reservationsRouter);
  // app.use("/tables", tablesRouter);


/***** ERROR HANDLERS *****/
const notFound = require("./errors/notFound");
const errorHandler = require("./errors/errorHandler");

  app.use(notFound);
  app.use(errorHandler);

module.exports = app;

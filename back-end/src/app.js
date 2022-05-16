const express = require("express");
const cors = require("cors");
const app = express();

/***** enables CORS from frontend *****/ 
app.options('*', cors()); // enable pre-flight 
app.use(cors());
app.use(express.json());

/***** ROUTES *****/
const reservationsRouter = require("./reservations/reservations.router");
app.use("/reservations", reservationsRouter);

/***** ERROR HANDLERS *****/
const notFound = require("./errors/notFound");
app.use(notFound);

const errorHandler = require("./errors/errorHandler");
app.use(errorHandler);

module.exports = app;

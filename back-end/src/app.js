const path = require("path");

require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const express = require("express");
const cors = require("cors");
const app = express();

const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");
const reservationsRouter = require("./reservations/reservations.router");

/***** enables CORS from frontend *****/ 
app.options('*', cors()); // enable pre-flight 
app.use(cors());
app.use(express.json());

/***** ROUTES *****/
app.use("/reservations", reservationsRouter);

/***** ERROR HANDLERS *****/
app.use(notFound);
app.use(errorHandler);

module.exports = app;

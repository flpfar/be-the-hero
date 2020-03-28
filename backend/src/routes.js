const express = require('express');
const OngController = require('./controllers/OngController');

const routes = express.Router();

//lists ongs
routes.get("/ongs", OngController.index);

//creates new ong
routes.post("/ongs", OngController.create);

module.exports = routes;
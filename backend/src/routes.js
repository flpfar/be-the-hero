const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');

const routes = express.Router();

//lists ongs
routes.get("/ongs", OngController.index);

//creates new ong
routes.post("/ongs", OngController.create);

//lists ong incidents
routes.get("/profile", ProfileController.index);

//lists incidents
routes.get("/incidents", IncidentController.index);

//creates new incident
routes.post("/incidents", IncidentController.create);

//deletes incident
routes.delete("/incidents/:id", IncidentController.delete);

module.exports = routes;
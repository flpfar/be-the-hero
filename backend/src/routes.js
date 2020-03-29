const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

//login
routes.post("/session", SessionController.create);

//lists ongs
routes.get("/ongs", OngController.index);

//creates new ong
routes.post("/ongs", celebrate({
  [Segments.BODY] : Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp: Joi.number().required().min(10).max(11),
    cidade: Joi.string().required(),
    uf: Joi.string().required().length(2)
  })
}), OngController.create);

//lists ong incidents
routes.get("/profile", celebrate({
  [Segments.HEADERS] : Joi.object({
    authorization: Joi.string().required()
  }).unknown()
}) , ProfileController.index);

//lists incidents
routes.get("/incidents", celebrate({
  [Segments.QUERY] : Joi.object().keys({
    page: Joi.number()
  })
}), IncidentController.index);

//creates new incident
routes.post("/incidents", IncidentController.create);

//deletes incident
routes.delete("/incidents/:id", celebrate({
  [Segments.PARAMS] : Joi.object().keys({
    id: Joi.number().required()
  })
}), IncidentController.delete);

module.exports = routes;
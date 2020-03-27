const express = require('express');

const routes = express.Router();

routes.post("/user", (request, response) => {
  const body = request.body;

  console.log(body);

  return response.json({
    evento: "Semana Omnistack 11",
    aluno: "Felipe"
  });
});

module.exports = routes;
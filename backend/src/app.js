const express = require('express');
const { errors } = require('celebrate');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
/* 
-- Allow access only from myapp.com
app.use(cors({
  origin: 'https://myapp.com'
}));
 */
app.use(express.json());
app.use(routes);
app.use(errors());

// app.listen(3333); //application will listen in port 3333
module.exports = app;

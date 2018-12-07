// Express App Setup
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Express route handlers

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

app.get('/', (req, res) => {
  res.send({
    success: true,
    hostname: process.env.HOSTNAME,
  });
});

app.get('/rand', (req, res) => {
  res.send({
    success: true,
    random: getRandomInt(99999),
  });
});

module.exports = app;

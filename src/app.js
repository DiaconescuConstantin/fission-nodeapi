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
    COMPOSE_API_VERSION: process.env.COMPOSE_API_VERSION,
    COMPOSE_CONVERT_WINDOWS_PATHS: process.env.COMPOSE_CONVERT_WINDOWS_PATHS,
    COMPOSE_FILE: process.env.COMPOSE_FILE,
    COMPOSE_HTTP_TIMEOUT: process.env.COMPOSE_HTTP_TIMEOUT,
    COMPOSE_TLS_VERSION: process.env.COMPOSE_TLS_VERSION,
    COMPOSE_PROJECT_NAME: process.env.COMPOSE_PROJECT_NAME,
    DOCKER_CERT_PATH: process.env.DOCKER_CERT_PATH,
    DOCKER_HOST: process.env.DOCKER_HOST,
    DOCKER_TLS_VERIFY: process.env.DOCKER_TLS_VERIFY,
  });
});

app.get('/rand', (req, res) => {
  res.send({
    success: true,
    random: getRandomInt(99999),
  });
});

module.exports = app;

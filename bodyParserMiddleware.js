const bodyParser = require('body-parser');

// Middleware for parsing JSON requests
const jsonParser = bodyParser.json();

module.exports = jsonParser;

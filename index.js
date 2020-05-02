const serverless = require('serverless-http');
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/themba', function(req, res) {
  res.send('Hello Themba');
})

module.exports.handler = serverless(app);

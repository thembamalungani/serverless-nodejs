const serverless = require('serverless-http');
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/buda', function(req, res) {
  res.send('Hello Buda');
})

module.exports.handler = serverless(app);

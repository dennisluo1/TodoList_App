const express = require('express'); // import express from our dependencies
const logger = require('morgan'); // logger
const path = require('path');
const bodyParser = require('body-parser');

const app = express(); // initialize the app

const port = process.env.PORT || 3000; // set the port, either from an environmental variable or manually
app.listen(port, () => {  // tell the app where to serve
    console.log(`Listening on port ${port}`);
});
// index route
app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));//look for static files in public
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Adding error handler
app.get('*', (req, res) => {
  res.status(404).json({
    message: 'Invalid route!',
  });
});
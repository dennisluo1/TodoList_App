const express = require('express'); // import express from our dependencies
const logger = require('morgan'); // logger
const path = require('path');
const bodyParser = require('body-parser');

const app = express(); // initialize the app

const port = process.env.PORT || 3000; // set the port, either from an environmental variable or manually
app.listen(port, () => {  // tell the app where to serve
    console.log(`Listening on port ${port}`);
});
// This is where to look for the views template
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); 

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));//look for static files in public
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// index route
app.get('/', (req, res) => {
    res.render('index', { message: 'Hello World!'});
});
// Grab the todo route
const todoRoutes = require('./routes/todo-routes');
app.use('/todo', todoRoutes);

// Adding error handler
app.get('*', (req, res) => {
  res.status(404).json({
    message: 'Invalid route!',
  });
});
const express = require('express'); // import express from our dependencies
const app = express(); // initialize the app
const port = process.env.PORT || 3000; // set the port, either from an environmental variable or manually

// tell the app where to serve
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
// index route
app.get('/', (req, res) => {
    res.send('Hello world!');
});

//set up template engine
app.set('view engine', 'ejs');
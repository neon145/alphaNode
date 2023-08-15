const express = require('express');
// Setup the express engine and declare the port number
const app = express();
const PORT = 8080;

//add the JSON middleware
app.use(express.json());

//setup a get handler
app.get('/hello', function(req, res) {
    res.status(200).send({
        message: "Hello, World!"
    });
});


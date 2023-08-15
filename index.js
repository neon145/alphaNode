const express = require('express');
// Setup the express engine and declare the port number
const app = express();
const PORT = 8080;

//add the JSON middleware
app.use(express.json());

//instanciate the express server 
app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
});

//setup a get handler
app.get('/hello', function(req, res) {
    res.status(200).send({
        message: "Hello, World!"
    });
});


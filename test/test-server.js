const fs = require('fs');
const express = require('express');
// Setup the express engine and declare the port number
const app = express();
const PORT = 8080;

// connect to the messageDB


function updateDB (data) {
	var newData = JSON.stringify(data);
	fs.writeFile('messageDB.json', newData, err => {
		// error checking
		if(err) throw err;
		
		console.log("New data added");
	});   
}
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
app.get('/new', function(req, res) {
	let {name}= req.query;
	let data = JSON.parse(fs.readFileSync('messageDB.json'));
	if(name == data[data.length - 1].address) {
	res.status(200).send(data[data.length - 1]);
		data.pop();
		updateDB(data);
	}
	else res.status(200).send({m:0});

	
	
});
//setup a post handler
app.post('/', (req, res) =>{
	let data = JSON.parse(fs.readFileSync('messageDB.json'));
	const {name} = req.body
	const {message} = req.body
	const {address} = req.body
	
	console.log("Somenew message:"+JSON.stringify(req.body))

		let messageObj = {name: name, message: message, address: address,m:1}
		data.push(messageObj)
		updateDB(data)
		res.send({message: 'Added message'})	
		
	})
	
	

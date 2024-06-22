
// Server Instantiated
const express = require('express');
const app = express();

// activate the server on 3000 port
app.listen(3000, () => {
    console.log("Server Started at port no. 3000");
})


// Route 
// Requests -> get, post, put, delete
app.get('/', (request,response) => {
    response.send("Hello Jee, Kaise ho saare");
})

// used to parse req.body in express -> PUT or POST
const bodyParser = require("body-parser");

// specifically parse the json data & add it to the request.Body Object
app.use(bodyParser.json());

app.post('/api/cars', (request, response) => {
    const {name, brand} = request.body;
    console.log(name);
    console.log(brand);
    response.send("Car Submitted Successfully.");
})


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myDatabase',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {console.log("Connection Successful")})
.catch((error) => {console.log("Received an error")});

// mongoose.connect('mongodb://localhost:27017/myDatabase', { useNewUrlParser: true });
// mongoose.connect('mongodb://localhost:27017/myDatabase');
// mongoose.connect('mongodb://localhost:27017/myDatabase', { useUnifiedTopology: true });
// mongoose.connect('mongodb://localhost:27017/myDatabase');



const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 3000;

// middleware  
app.use(express.json());        // linked app with middleware 
                                // express.json() -> parse the json from body

//Import Routes
const blog = require('./routes/blog');

// Mount the route
app.use("/api/v1",blog);

// Import database
const connectWithDb = require('./config/database');
connectWithDb();

//Server start
app.listen(PORT, () => {
    console.log(`App is Started at Port no ${PORT}`);
})

// default route
app.get("/" , (req, res) => {
    res.send('<h1>This Is Home Page Baby!</h1>');
})